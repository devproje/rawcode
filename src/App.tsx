import Editor from "./components/editor";
import Toolbar from "./components/toolbar";
// import ActionTab from "./components/action_tab";
import CurrentFile from "./components/current";
// import { invoke } from "@tauri-apps/api/core";
import "./App.scss";

function App() {
	return (
		<main className="container">
			<Toolbar />
			<div className="code_area">
				{/* <ActionTab /> */}
				<Editor />
			</div>
			<CurrentFile />
		</main>
	);
}

export default App;
