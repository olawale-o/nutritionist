"use client";
import { useCallback, useEffect, useReducer, useRef } from "react";
import axios, { CanceledError } from "axios";
import { AppState, FileActionKind, FileProgress } from "./interface";
import { Upload } from "./components/Upload";
import { reducerFn } from "./useUpload";
import { generateSignature } from "./utils/signature";
import { CloudUploads } from "./CloudUploads";

// define expiry (e.g. 120 seconds)
const expire = (Math.round(Date.now() / 1000) + 120).toString();
const signature = generateSignature(expire);

const FileUpload = () => {
  const [state, dispatch] = useReducer(reducerFn, { fileProgress: {} });

  const attachedFiles: [string, FileProgress][] = Object.entries(
    state.fileProgress,
  );
  const totalFileUpload = attachedFiles.length;
  const cancelUploads = attachedFiles.filter(
    ([k, file]) => file.isCancelled === false,
  ).length;
  const selectedFile = useRef<HTMLInputElement>(null);

  const handleAttachFile = () => {
    if (selectedFile?.current) {
      let files = selectedFile?.current.files;
      dispatch({ type: FileActionKind.SET_UPLOAD, payload: { files } });
    }
  };

  const uploadToServer = useCallback(
    (files: Array<any>) => {
      try {
        files.forEach(async (file) => {
          try {
            const formData = new FormData();
            formData.append("signature", signature);
            formData.append("expire", expire);
            formData.append("UPLOADCARE_STORE", "auto");
            formData.append(
              "UPLOADCARE_PUB_KEY",
              `${process.env.NEXT_PUBLIC_UPLOADCARE_PUB_KEY}`,
            );
            formData.append("file", file.file);

            await axios({
              baseURL: process.env.NEXT_PUBLIC_UPLOADCARE_URL,
              url: "/base/",
              method: "post",
              data: formData,
              signal: file.controller?.signal,
              onUploadProgress: (progress) => {
                const { loaded, total = 1 } = progress;
                const percentageProgress = Math.floor((loaded / total) * 100);

                dispatch({
                  type: FileActionKind.SET_UPLOAD_PROGRESS,
                  payload: {
                    id: file.id,
                    progress: percentageProgress,
                  },
                });
              },
            }).then((response) => {
              console.log(response);
              dispatch({
                type: FileActionKind.SET_UPLOAD_SUCCESS,
                payload: { id: file.id, fileId: response.data.file },
              });
            });
          } catch (e) {
            console.log(e);
            // throw new Error(e);
            // if (e instanceof AxiosError) {
            //   console.log(e);
            //   if (e.message === "Network Error") {
            //     console.log("Net work erro");
            //   }
            // }
            if (e instanceof CanceledError) {
              if (e?.config?.signal instanceof AbortSignal) {
                console.log({ here: e?.config?.signal?.reason });
                file.controller.abort();
              }
            }
            dispatch({
              type: FileActionKind.SET_UPLOAD_FAILURE,
              payload: { id: file.id },
            });
          }
        });
      } catch (e) {
        console.log("Other error");
        console.error(e);
      }
    },
    [dispatch],
  );

  const retryUpload = (id: number) => {
    dispatch({ type: FileActionKind.RETRY_UPLOAD, payload: { id } });
    const appState: AppState = state;

    const fileToReupload = [appState.fileProgress[`${id}`]];
    uploadToServer(fileToReupload);
  };

  const deleteUpload = async (id: number, fileId: string) => {
    dispatch({ type: FileActionKind.DELETE_UPLOAD, payload: { id } });

    try {
      const formData = new FormData();
      formData.append(
        "Authorization",
        `Uploadcare.Simple${process.env.NEXT_PUBLIC_UPLOADCARE_PUB_KEY}:${process.env.NEXT_PUBLIC_UPLOADCARE_SECRET_KEY}`,
      );
      await axios({
        baseURL: "https://api.uploadcare.com",
        url: "/files/{uuid}/storage/",
        method: "delete",
      }).then((response) => {
        console.log(response);
        dispatch({ type: FileActionKind.DELETE_UPLOAD, payload: { id } });
      });
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    // if (totalFileUpload > 0) {
    const fileToUpload = attachedFiles.filter(
      ([k, file]) => file.progress === 0,
    );
    uploadToServer(fileToUpload.map(([k, file]) => file));
  }, [totalFileUpload, uploadToServer]);

  const openFileUpload = () => {
    selectedFile?.current?.click();
  };
  return (
    <div className="col-span-1 h-full max-h-[620px] w-full rounded-[4px] shadow-[0px_6px_8px_0px_rgba(0,0,0,0.05)] bg-white ">
      <div className="flex flex-col w-full">
        <div>
          <div className="mt-[30px]">
            <h1 className="text-[#0F0F0F] text-center text-[22px] font-bold font-urbanist">
              Upload
            </h1>
          </div>
          <div
            className={`mt-[30px] max-w-[445px] mx-auto ${totalFileUpload > 0 ? "h-[202px]" : "h-[427px]"} bg-[#F8F8FF] rounded-[4px] border-dashed border-[1px] border-[rgba(56,78,183,0.30)]`}
          >
            <div className="flex flex-col items-center justify-center h-full">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="69"
                  height="60"
                  viewBox="0 0 69 60"
                  fill="none"
                >
                  <path
                    d="M36.0283 14.7459L36.1205 14.7734L36.1245 14.7688C36.5622 14.8481 36.9963 14.5861 37.1249 14.152C38.2966 10.2153 41.9877 7.46512 46.1001 7.46512C46.587 7.46512 46.9818 7.07024 46.9818 6.58338C46.9818 6.0965 46.5869 5.70164 46.1001 5.70164C41.0459 5.70164 36.7987 9.06673 35.435 13.6494C35.2958 14.1162 35.5618 14.6068 36.0283 14.7459Z"
                    fill="#483EA8"
                    stroke="#F9FFF9"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M56.3438 42.4384H51.9534C51.5494 42.4384 51.2217 42.1107 51.2217 41.7067C51.2217 41.3027 51.5494 40.9749 51.9534 40.9749H56.3438C62.3956 40.9749 67.3197 36.0509 67.3197 29.999C67.3197 23.9471 62.3956 19.023 56.3438 19.023H56.2382C56.026 19.023 55.8242 18.9311 55.6852 18.7706C55.5462 18.6101 55.4834 18.3974 55.5138 18.1873C55.5791 17.7315 55.612 17.2737 55.612 16.8279C55.612 11.5829 51.3444 7.31531 46.0995 7.31531C44.059 7.31531 42.1131 7.95296 40.4719 9.15978C40.1112 9.42478 39.599 9.30718 39.3905 8.91047C34.7425 0.0596993 22.6023 -1.12887 16.3082 6.57053C13.6568 9.81417 12.615 14.0336 13.4498 18.146C13.5418 18.6002 13.1942 19.0236 12.7327 19.0236H12.4395C6.3876 19.0236 1.46353 23.9477 1.46353 29.9996C1.46353 36.0514 6.3876 40.9755 12.4395 40.9755H16.8298C17.2338 40.9755 17.5615 41.3032 17.5615 41.7072C17.5615 42.1113 17.2338 42.439 16.8298 42.439H12.4395C5.5805 42.439 0 36.8585 0 29.9995C0 23.3329 5.27155 17.8742 11.8651 17.5731C11.2457 13.3066 12.4301 9.00295 15.1751 5.64437C21.9138 -2.5996 34.828 -1.67556 40.2871 7.51707C42.0287 6.42522 44.0215 5.85244 46.0992 5.85244C52.4538 5.85244 57.4892 11.261 57.0486 17.58C63.5813 17.9463 68.7829 23.3763 68.7829 29.999C68.7829 36.8585 63.2024 42.4384 56.3434 42.4384L56.3438 42.4384Z"
                    fill="#483EA8"
                  />
                  <path
                    d="M15.85 41.2935C15.85 51.4634 24.1237 59.737 34.2935 59.737C44.4634 59.737 52.737 51.4633 52.737 41.2935C52.737 31.1235 44.4634 22.85 34.2935 22.85C24.1235 22.85 15.85 31.1237 15.85 41.2935ZM17.6138 41.2935C17.6138 32.0966 25.0964 24.6138 34.2935 24.6138C43.4904 24.6138 50.9732 32.0964 50.9732 41.2935C50.9732 50.4904 43.4904 57.9732 34.2935 57.9732C25.0966 57.9732 17.6138 50.4905 17.6138 41.2935Z"
                    fill="#483EA8"
                    stroke="#F9FFF9"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M33.9422 48.6577C33.9422 49.0364 34.2493 49.3435 34.6279 49.3435C35.0065 49.3435 35.3136 49.0368 35.3136 48.6577V34.7292C35.3136 34.3505 35.0066 34.0435 34.6279 34.0435C34.2493 34.0435 33.9422 34.3505 33.9422 34.7292V48.6577Z"
                    fill="#483EA8"
                    stroke="#483EA8"
                    strokeWidth="0.3"
                  />
                  <path
                    d="M34.6279 35.7003L30.8272 39.5009L34.6279 35.7003ZM34.6279 35.7003L38.4286 39.501C38.5624 39.6348 38.7384 39.7018 38.9135 39.7019L34.6279 35.7003ZM29.8573 39.501C30.1251 39.7688 30.5595 39.769 30.8271 39.501L38.9135 39.7019C39.0883 39.7018 39.2645 39.6353 39.3984 39.501C39.6663 39.2331 39.6662 38.7991 39.3984 38.5313L35.1127 34.2456C34.8449 33.9778 34.4105 33.9776 34.143 34.2456C34.1429 34.2456 34.1429 34.2457 34.1429 34.2457L29.8573 38.5313C29.5894 38.7991 29.5894 39.2331 29.8573 39.501Z"
                    fill="#483EA8"
                    stroke="#483EA8"
                    strokeWidth="0.3"
                  />
                </svg>
              </div>
              <div className="mt-4">
                <div className="text-base leading-6 font-bold text-[#0F0F0F]">
                  Drag & drop files or{" "}
                  <input
                    type="file"
                    name="image"
                    onChange={handleAttachFile}
                    ref={selectedFile}
                    hidden
                    multiple
                  />
                  <button
                    type="button"
                    className="select-none"
                    onClick={openFileUpload}
                  >
                    <span className="text-[#483EA8]">Browse</span>
                  </button>
                </div>
              </div>
              <div className="mt-[10px]">
                <div className="text-xs text-[#676767] leading-[18px] font-normal">
                  Supported formates: JPEG, PNG, GIF, MP4, PDF, PSD, AI, Word,
                  PPT
                </div>
              </div>
            </div>
          </div>
          {totalFileUpload > 0 && (
            <div className="mt-4 max-w-[445px] mx-auto">
              <div>
                <h2>Uploading - {totalFileUpload} files</h2>
                <div className="relative mt-[10px] flex flex-col gap-[10px] max-h-36 overflow-y-scroll">
                  {attachedFiles?.map(([k, upload], i) => (
                    <Upload
                      key={upload.id}
                      upload={upload}
                      retryUpload={() => retryUpload(upload.id)}
                      deleteUpload={() =>
                        deleteUpload(upload.id, upload.fileId)
                      }
                    />
                  ))}
                </div>
              </div>
            </div>
          )}
          <div className="my-[30px]">
            <div className="max-w-[445px] mx-auto">
              <button
                type="button"
                className="w-full px-[9px] py-[14px] bg-[#483EA8] rounded-[4px] opacity-50 text-[#ffffff] font-bold text-[14px]"
              >
                UPLOAD FILES
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const UploadPage = () => {
  return (
    <div className="my-20 max-w-[1024px] mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <FileUpload />
        <CloudUploads />
      </div>
    </div>
  );
};

export { UploadPage };
