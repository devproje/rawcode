import { useState } from "react";

import "./editor.scss";
import { basicSetup } from "@uiw/react-codemirror";
import { loadLanguage } from "@uiw/codemirror-extensions-langs";
import CodeMirror, { oneDark } from "@uiw/react-codemirror";
import { useTab } from "../../store/tabsize";
import { useLanguage } from "../../store/language";
import useFileStore from "../../store/file";

function Editor() {
	const file = useFileStore();
	const lang = useLanguage();
	const tab = useTab();

	return (
		<div className="code_container">
			<CodeMirror
				value={file.buf}
				height="100%"
				extensions={[
					loadLanguage(lang.lang.ext ?? "textile") ?? basicSetup()
				]}
				autoFocus={true}
				basicSetup={{
					tabSize: tab.size,
					foldGutter: true,
					lineNumbers: true,
					indentOnInput: true,
					autocompletion: true,
					highlightActiveLine: true,
					allowMultipleSelections: true,
					highlightActiveLineGutter: true,
				}}
				indentWithTab={true}
				theme={oneDark}
				className="editor"
				placeholder={"// Enter code here..."}
				onChange={(value) => file.setBuf(value)}
			/>
		</div>
	);
}

export default Editor;
