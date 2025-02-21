import { create } from "zustand";

interface PaletteState {
	page: string;
	enable: boolean;

	setPage: (page: string) => void;
	setEnable: (enable: boolean) => void;
}

export const usePalette = create<PaletteState>()(
	(set) => ({
		page: "",
		enable: false,
		setPage: (page) => set({ page: page }),
		setEnable: (enable) => set({ enable: enable })
	})
);
