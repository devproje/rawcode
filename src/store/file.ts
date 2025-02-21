import { create } from "zustand";

interface FileState {
	buf: string;
	file: string;

	setBuf: (buf: string) => void;
	setFile: (file: string) => void;
}

const useFileStore = create<FileState>()((set) => ({
	buf: "",
	file: "",
	setBuf:(buf: string) => set({ buf: buf }),
	setFile: (file: string) => set({ file: file }),
}));

export default useFileStore;
