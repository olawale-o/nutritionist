import { Fragment, useEffect } from "react";
import { useFileStore } from "../store";
import { fileSizeConverter } from "../utils/fileSizeConverter";
import { timeAgo } from "../utils/timeAgo";

const CloudUploads = () => {
  const files = useFileStore((state) => state.files);
  const loading = useFileStore((state) => state.loading);
  const getFiles = useFileStore((state) => state.fetchFiles);
  const deleteFile = useFileStore((state) => state.deleteFile);
  useEffect(() => {
    getFiles(10);
  }, []);
  return (
    <div className="col-span-1 max-h-[620px]">
      <div className="w-full h-full">
        <div className="flex flex-col h-full">
          <div className="p-4 bg-white border-b-[1px] border-solid border-[#EBEFF2] rounded-tr-3xl rounded-tl-3xl"></div>
          <div className="flex flex-col flex-grow bg-white">
            {loading && (
              <div className="w-full h-20 my-auto mx-auto text-center">
                Loading
              </div>
            )}
            {!loading && files.length < 1 && (
              <div className="text-center">No uploads</div>
            )}
            {files.length > 0 && (
              <div>
                {files.map((file: any, i: number) => (
                  <Fragment key={i}>
                    <div className="my-4 px-4">
                      <div className="flex">
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            viewBox="0 0 16 16"
                            fill="none"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M13.5236 2.78143L11.5314 0.753007C11.0613 0.274385 10.4002 0 9.71687 0H3.33173C2.48184 0 1.79057 0.667274 1.79057 1.48765V4.47531H1.54117C0.691277 4.47531 0 5.14258 0 5.96296V11.5185C0 12.3389 0.691277 13.0062 1.54117 13.0062H1.79057V14.5123C1.79057 15.3327 2.48184 16 3.33173 16H12.6683C13.5182 16 14.2094 15.3327 14.2094 14.5123V13.0062H14.4588C15.3087 13.0062 16 12.3389 16 11.5185V5.96296C16 5.14258 15.3087 4.47531 14.4588 4.47531H14.2094V4.44201C14.2094 3.8216 13.9658 3.23169 13.5236 2.78143ZM2.95444 1.48765C2.95444 1.28692 3.12378 1.12346 3.33173 1.12346H9.71687C10.0819 1.12346 10.4356 1.27025 10.6868 1.52597L12.679 3.5544C12.9155 3.79519 13.0456 4.11022 13.0456 4.44201V4.47531H2.95444V1.48765ZM14.8361 11.5185C14.8361 11.7192 14.6668 11.8827 14.4588 11.8827H1.54117C1.33322 11.8827 1.16387 11.7192 1.16387 11.5185V5.96296C1.16387 5.76223 1.33322 5.59876 1.54117 5.59876H14.4588C14.6668 5.59876 14.8361 5.76223 14.8361 5.96296V11.5185ZM13.0456 14.5123C13.0456 14.7131 12.8762 14.8765 12.6683 14.8765H3.33173C3.12378 14.8765 2.95444 14.7131 2.95444 14.5123V13.0062H13.0456V14.5123Z"
                              fill="black"
                            />
                          </svg>
                        </div>
                        <div className="ms-4 me-[14px] flex-grow">
                          <div className="text-sm font-medium leading-4 text-[#242634]">
                            {file.original_filename}
                          </div>
                          <div className="mt-1">
                            <div className="text-xs leading-[14px] font-normal text-[#242634]">
                              {timeAgo(file.datetime_uploaded)}
                            </div>
                          </div>
                        </div>
                        <div className="flex items-center">
                          <div className="py-1 px-2 rounded-[2px] border-[1px] border-solid border-[#CDD3D8] grid place-items-center">
                            <span className="text-[11px] leading-[12px] font-semibold">
                              {fileSizeConverter(file.size)}
                            </span>
                          </div>
                          <button
                            className="ms-[14px] bg-transparent border-none outline-none"
                            onClick={() => deleteFile(file.uuid)}
                          >
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              width="3"
                              height="14"
                              viewBox="0 0 3 14"
                              fill="none"
                            >
                              <circle cx="1.5" cy="12" r="1.5" fill="black" />
                              <circle cx="1.5" cy="7" r="1.5" fill="black" />
                              <circle cx="1.5" cy="2" r="1.5" fill="black" />
                            </svg>
                          </button>
                        </div>
                      </div>
                      <div className="mt-4 w-full h-[1px] bg-[#EBEFF2]" />
                    </div>
                  </Fragment>
                ))}
                <div className="pb-4 text-center">
                  <button
                    type="button"
                    className="px-4 py-[7px] rounded-[40px] border-solid border-[1px] border-[#CDD3D8] bg-white font-semibold text-xs leading-[14px] text-[#242634]"
                  >
                    View all uploads
                  </button>
                </div>
              </div>
            )}
          </div>
          <div className="px-4 py-[14px] bg-[#F7F9FB] rounded-br-3xl rounded-bl-3xl">
            <div className="flex item-center">
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8 14.8C11.7555 14.8 14.8 11.7555 14.8 8C14.8 4.24446 11.7555 1.2 8 1.2C4.24446 1.2 1.2 4.24446 1.2 8C1.2 11.7555 4.24446 14.8 8 14.8ZM8 16C12.4183 16 16 12.4183 16 8C16 3.58172 12.4183 0 8 0C3.58172 0 0 3.58172 0 8C0 12.4183 3.58172 16 8 16Z"
                    fill="black"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M11.5808 5.56562C11.8151 5.79994 11.8151 6.17984 11.5808 6.41415L7 10.995L4.57573 8.57071C4.34142 8.33639 4.34142 7.95649 4.57573 7.72218C4.81005 7.48786 5.18995 7.48786 5.42426 7.72218L7 9.29791L10.7323 5.56562C10.9666 5.33131 11.3465 5.33131 11.5808 5.56562Z"
                    fill="black"
                  />
                </svg>
              </div>
              <div className="ms-2">
                <div className="text-[#242634] text-xs font-normal leading-normal">
                  Last synced: 3 mins ago
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export { CloudUploads };
