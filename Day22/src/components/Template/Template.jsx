import React from "react";
import "./Template.css";

const Template = ({ templates, setMeme }) => {
	return (
		<div className="template-grid-box">
			{templates.map((template) => (
				<div key={template.id} className="template">
					<div
						className="image"
						style={{ backgroundImage: `url(${template.url})` }}
						onClick={() => setMeme(template)}
					></div>
				</div>
			))}
		</div>
	);
};

export default Template;
