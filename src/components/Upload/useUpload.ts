import { UPLOAD_STATUS } from "./constants";
import { AppState, FileAction } from "./interface";

const modifyFiles = (existingFiles: any, files: any) => {
  let fileUpload = {};
  const totalFiles = Object.entries(existingFiles).length;

  for (let i = 0; i < files.length; i++) {
    const id = totalFiles + i + 1;
    const controller = new AbortController();
    fileUpload = {
      ...fileUpload,
      [id]: {
        id,
        file: files[i],
        format: files[i].type,
        progress: 0,
        controller: controller,
        status: UPLOAD_STATUS.uploading,
        isCancelled: false,
      },
    };
  }
  return fileUpload;
};

function reducerFn(state: AppState, action: FileAction) {
  switch (action.type) {
    case "SET_UPLOAD":
      return {
        ...state,
        fileProgress: {
          ...state.fileProgress,
          ...modifyFiles(state.fileProgress, action.payload.files),
        },
      };
    case "SET_UPLOAD_PROGRESS": {
      return {
        ...state,
        fileProgress: {
          ...state.fileProgress,
          [action.payload.id]: {
            ...state.fileProgress[action.payload.id],
            progress: action.payload.progress,
          },
        },
      };
    }
    case "SET_UPLOAD_SUCCESS":
      return {
        ...state,
        fileProgress: {
          ...state.fileProgress,
          [action.payload.id]: {
            ...state.fileProgress[action.payload.id],
            status: UPLOAD_STATUS.success,
          },
        },
      };
    case "SET_UPLOAD_FAILURE":
      return {
        ...state,
        fileProgress: {
          ...state.fileProgress,
          [action.payload.id]: {
            ...state.fileProgress[action.payload.id],
            status: UPLOAD_STATUS.failure,
            progress: 0,
          },
        },
      };
    case "RETRY_UPLOAD": {
      const controller = new AbortController();
      return {
        ...state,
        fileProgress: {
          ...state.fileProgress,
          [action.payload.id]: {
            ...state.fileProgress[action.payload.id],
            status: UPLOAD_STATUS.uploading,
            progress: 0,
            controller,
            isCancelled: true,
          },
        },
      };
    }
    case "DELETE_UPLOAD": {
      const newState = { ...state.fileProgress };
      delete newState[action.payload.id];
      return {
        fileProgress: {
          ...newState,
        },
      };
    }
  }
  throw Error("Unknown action: " + action.type);
}

// const useUpload = () => {};

export { reducerFn };
