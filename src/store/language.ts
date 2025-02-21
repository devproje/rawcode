import { Extension, Extensions } from "../types/lang";
import { create } from "zustand";

interface LanguageState {
	lang: Extension;
	setLang: (lang: Extension) => void;
}

export const useLanguage = create<LanguageState>()(
	(set) => ({
		lang: Extensions.text,
		setLang: (lang) => set({ lang: lang })
	})
);
