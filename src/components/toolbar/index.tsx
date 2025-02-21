import React, { useState } from "react";

function Toolbar() {
	const [isOpen, setOpen] = useState(false);

	return (
		<div className="toolbar">
			<Menu isOpen={isOpen} setOpen={setOpen} name={"File"}>
				<></>
			</Menu>
		</div>
	);
}

function Menu({ name, isOpen, setOpen, children }: { name: string; isOpen: boolean; setOpen: (open: boolean) => void; children: React.ReactNode }) {
	return (
		<>
			<a className="menu_btn" onClick={ev => {
				ev.preventDefault();
				setOpen(!isOpen);
			}}>{name}</a>

			{isOpen ? <div className="menu_items">
				{children}
			</div> : <></>}
		</>
	)
}

export default Toolbar;
