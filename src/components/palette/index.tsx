import React from "react";
import "./palette.scss";

function Palette({ children }: { children: React.ReactNode }) {
	return (
		<div className="palette_container">
			{ children }
		</div>
	);
}

export default Palette;
