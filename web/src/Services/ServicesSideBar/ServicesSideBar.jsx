import React from "react";
import style from "./ServicesSideBar.module.css";
import { Link } from "react-router-dom";
import { RefinementList } from "react-instantsearch";

export default function ServicesSideBar() {
	return (
		<div className="ais-Panel">
			<div className="ais-Panel-header">Category</div>
			<div className="ais-Panel-body">
				<RefinementList attribute="category.name" />
			</div>
		</div>
	);
}
