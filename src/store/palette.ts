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
		setPage: (page) => set((_) => ({ page: page })),
		setEnable: (enable) => set((_) => ({ enable: enable }))
	})
);
