import { create } from "zustand";

interface TabSizeState {
	size: number;
	setSize: (lang: number) => void;
}

export const useTab = create<TabSizeState>()(
	(set) => ({
		size: 8,
		setSize: (size) => set((_) => ({ size: size }))
	})
);
