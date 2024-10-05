import { create } from "zustand";
import { getFiles, deleteFile } from "../services";

export type State = {
  files: any[];
  loading: boolean;
};

export type Action = {
  addFiles: (files: State["files"]) => void;
  fetchFiles: (limit: number) => Promise<any>;
  deleteFile: (fileId: string) => void;
};

export const useFileStore = create<State & Action>()((set) => ({
  files: [],
  loading: true,
  addFiles: (files: any) => set(() => ({ files })),
  fetchFiles: async (limit: number) => {
    try {
      set(() => ({ loading: true }));
      const response = await getFiles(limit);
      set(() => ({ files: response.data.results, loading: false }));
      return { files: response.data.results };
    } catch (e) {
      set(() => ({ loading: false }));
    }
  },
  deleteFile: async (fileId: string) => {
    try {
      const response = await deleteFile(fileId);
      set((state) => {
        const newState = [...state.files];
        const filteredFiles = newState.filter((file) => file.uuid !== fileId);
        console.log(filteredFiles);
        return { files: filteredFiles, loading: false };
      });
      // return { response };
    } catch (e) {
      set(() => ({ loading: false }));
    }
  },
}));
