import { useState } from "react";
import Editor from "./components/editor";
import CurrentFile from "./components/current";
import { useLanguage } from "./store/language";
// import { invoke } from "@tauri-apps/api/core";
import "./App.scss";

function App() {
	return (
		<main className="container">
			<Editor />
			<CurrentFile />
		</main>
	);
}

export default App;
