export interface UPLOAD_STATUS {
  uploading?: number;
  success?: number;
  failure?: number;
}
export interface FileUploadInterface {
  id?: string;
  name?: string;
  progress?: number;
}

export interface FileProgress {
  id: number;
  progress?: number;
  file?: File;
  controller: AbortController;
  status?: UPLOAD_STATUS;
  isCancelled?: boolean;
}

export interface State {
  fileProgress: FileProgress;
}

export enum FileActionKind {
  SET_UPLOAD = "SET_UPLOAD",
  SET_UPLOAD_PROGRESS = "SET_UPLOAD_PROGRESS",
  SET_UPLOAD_SUCCESS = "SET_UPLOAD_SUCCESS",
  SET_UPLOAD_FAILURE = "SET_UPLOAD_FAILURE",
  RETRY_UPLOAD = "RETRY_UPLOAD",
}

export type FileAction = {
  type: FileActionKind;
  payload: any;
};

export type AppState = {
  fileProgress: Record<string, FileProgress>;
};
