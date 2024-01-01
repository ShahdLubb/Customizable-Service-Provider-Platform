import React, { useState } from "react";
import Form from "react-bootstrap/Form";


const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
	<a
		href=""
		ref={ref}
		onClick={(e) => {
			e.preventDefault();
			onClick(e);
		}}
		style={{ textDecoration: "none" }}
	>
		{children}


	</a>
));

const CustomMenu = React.forwardRef(
	({ children, style, className, "aria-labelledby": labeledBy }, ref) => {
		const [value, setValue] = useState("");

		return (
			<div
				ref={ref}
				style={{ width: "100%" }}
				className={className}
				aria-labelledby={labeledBy}
			>
				<Form.Control
					autoFocus
					className="mx-auto my-2 w-auto"
					placeholder="Type to filter..."
					onChange={(e) => setValue(e.target.value)}
					value={value}
				/>
				<ul className="mx-auto w-auto">
					{React.Children.toArray(children).filter(
						(child) =>
							!value || child.props.children.toLowerCase().startsWith(value)
					)}
				</ul>
			</div>
		);
	}
);


export { CustomToggle, CustomMenu };
