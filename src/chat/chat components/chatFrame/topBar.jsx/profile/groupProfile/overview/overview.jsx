import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import Button from "../../../../../../../components/Emoji/button/button";
export default function Overview({ data }) {
	const [showGroupInputFor, setGroupShowInputFor] = useState({
		groupName: false,
		displayPhoto: false,
		description: false,
	});
	const [loading, setLoading] = useState(false);
	function EditGroupInputForName() {
		setGroupShowInputFor((values) => {
			return {
				description: false,
				displayPhoto: false,
				groupName: !showGroupInputFor.groupName,
			};
		});
	}
	function EditGroupInputForDescription() {
		setGroupShowInputFor((values) => {
			return {
				groupName: false,
				displayPhoto: false,
				description: !showGroupInputFor.description,
			};
		});
	}

	function ChangeGroupProfileImage() {
		setGroupShowInputFor((values) => {
			return {
				...values,
				groupName: false,
				description: false,
			};
		});

		document.getElementById("file2").click();
	}

	return (
		<div className="pt-3 px-3 pb-3 d-block">
			<div className="d-flex mt-2 justify-content-between">
				<img
					src={data.groupIcon}
					className="round-image"
					height="300px"
					width="300px"
					alt=""
				/>
				<input
					type="file"
					name="file"
					id="file2"
					hidden
					alt=""
				/>
				<div
					className=""
					onClick={ChangeGroupProfileImage}
				>
					<BiEditAlt />
				</div>
			</div>

			{showGroupInputFor.groupName ? (
				<div className="d-flex mb-2 mt-2 flex-column">
					<input
						type="text"
						name=""
						className="input"
						id=""
						placeholder="Change group name "
					/>
					<div className="mt-2 d-flex justify-content-between">
						<Button
							text={"Change"}
							loading={loading}
							fullWidth={false}
							// func={SubmitNewProfileData}
						/>

						<Button
							text={"Cancel"}
							fullWidth={false}
							func={EditGroupInputForName}
						/>
					</div>
				</div>
			) : (
				<div className="d-flex mt-2 justify-content-between">
					<div>{data.groupName}</div>
					<div
						className=""
						onClick={EditGroupInputForName}
					>
						<BiEditAlt />
					</div>
				</div>
			)}
			<div>
				Created
				<br />
				{data.creationDate}
			</div>
			{showGroupInputFor.description ? (
				<div className="d-flex mb-2 flex-column">
					<input
						type="text"
						name=""
						className="input"
						id=""
						placeholder="Change Group Description"
					/>
					<div className="mt-2">
						<div className="mt-2 d-flex justify-content-between">
							<Button
								text={"Change"}
								loading={loading}
								fullWidth={false}
								// func={SubmitNewProfileData}
							/>

							<Button
								text={"Cancel"}
								fullWidth={false}
								func={EditGroupInputForDescription}
							/>
						</div>
					</div>
				</div>
			) : (
				<div className="d-flex justify-content-between">
					<div>
						Description
						<br />
						<div>
							<p>
								{data.groupDescription}
								<div className="d-none">
									<p>
										We trust God for His enabling grace to show ultimate concern
										to the spiritual welfare of the brethren and students in the
										campus.
									</p>
									Days of Fellowship Sunday - 8:00am Tuesday - 5:00pm Thursday -
									5:00pm
									<p>
										P.S - Kindly note that all fellowship activities holds at
										*Chemical Engineering Building (Main school)*. And also 👇
									</p>
								</div>
							</p>
							<div>show more</div>
						</div>
					</div>
					<div onClick={EditGroupInputForDescription}>
						<BiEditAlt />
					</div>
				</div>
			)}
		</div>
	);
}
