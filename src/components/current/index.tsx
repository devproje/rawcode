import { useLanguage } from "../../store/language";
import "./current.scss";
import { ExtensionList } from "../../types/lang";
import { useTab } from "../../store/tabsize";
import { usePalette } from "../../store/palette";
import Palette from "../palette";

function TabSizeController() {
	const tab = useTab();
	const palette = usePalette();

	return (
		<div className="tab_size_controller">
			{Array(1, 2, 3, 4, 5, 6, 7, 8).map((i, key) => <a
				key={key}
				className="ts"
				onClick={ev => {
					ev.preventDefault();
					tab.setSize(i);

					palette.setEnable(false);
					palette.setPage("");
				}}>
					{i}
				</a>
			)}
		</div>
	)
}

function SelectLanguage() {
	const lang = useLanguage();
	const palette = usePalette();

	return (
		<div className="language_selector">
			{ExtensionList.map((value, key) => {
				return (
					<a
						key={key}
						className="lang"
						onClick={ev => {
							ev.preventDefault();
							lang.setLang(value);

							palette.setEnable(false);
							palette.setPage("");
						}
					}>
						{value.name} ({value.ext})
					</a>
				);
			})}
		</div>
	)
}

function CurrentFile() {
	const palette = usePalette();
	const lang = useLanguage();
	const tab = useTab();

	const Render = () => {
		switch (palette.page) {
			case "tab_size":
				return <TabSizeController />;
			case "current_language":
				return <SelectLanguage />;
		}
	}

	console.log(`${palette.enable}, ${palette.page}`);
	return (
		<div className="current">
			<span>No file</span>
			<div className="controller">
				<a className="tab_size" onClick={ev => {
					ev.preventDefault();
					palette.setPage("tab_size");
					
					if (!palette.enable)
						palette.setEnable(true);
				}}>
					Tab Size: {tab.size}
				</a>
				<a className="current_language" onClick={ev => {
					ev.preventDefault();
					palette.setPage("current_language");
					
					if (!palette.enable)
						palette.setEnable(true);
				}}>
					{lang.lang.name}
				</a>
				{palette.enable && palette.page !== "" ? <Palette>
					<Render />
				</Palette> : <></>}
			</div>
		</div>
	);
}

export default CurrentFile;
