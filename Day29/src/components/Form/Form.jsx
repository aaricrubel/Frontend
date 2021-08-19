import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePlace, updatePlaceData } from "../../actions";

const Form = () => {
	const place = useSelector((state) => state.place);
	const dispatch = useDispatch();
	const theme = useSelector((state) => state.theme);

	return (
		<div className="container">
			<div className="row">
				<div className="col-12 form">
					<input
						type="text"
						value={place}
						onChange={(e) => {
							dispatch(updatePlace(e.target.value));
						}}
					/>
					<button
						className={theme ? "btn btn-primary" : "btn btn-dark"}
						style={{ margin: "0px 10px" }}
						onClick={() => {
							dispatch(updatePlaceData(place));
						}}
					>
						Submit
					</button>
				</div>
			</div>
		</div>
	);
};

export default Form;
