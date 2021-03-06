import React, { useState } from "react";
import "./Meme.css";

const Meme = ({ meme, setMeme }) => {
	const [form, setForm] = useState({
		template_id: meme.id,
		username: "teasty",
		password: "PPS$Asr52ttCfaF",
		boxes: [],
	});
	const generateMeme = () => {
		let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
		form.boxes.map((box, index) => {
			url += `&boxes[${index}][text]=${box.text}`;
		});
		fetch(url)
			.then((res) => res.json())
			.then((data) => setMeme({ ...meme, url: data.data.url }));
	};
	return (
		<div className="meme">
			<img src={meme.url} alt="Meme" />
			<div className="input-box-container">
				{[...Array(meme.box_count)].map((_, index) => (
					<input
						key={index}
						type="text"
						className="input-box"
						placeholder={`Meme Caption ${index + 1}`}
						onChange={(e) => {
							const newBoxes = form.boxes;
							newBoxes[index] = { text: e.target.value };
							setForm({ ...form, boxes: newBoxes });
						}}
					/>
				))}
			</div>
			<div className="button-container">
				<button className="btn" onClick={generateMeme}>
					Generate Meme
				</button>
				<button className="btn" onClick={() => setMeme(null)}>
					Checkout Other Templates
				</button>
			</div>
		</div>
	);
};

export default Meme;
