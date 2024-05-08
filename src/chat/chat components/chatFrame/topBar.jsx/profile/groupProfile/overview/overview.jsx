import React, { useState } from "react";
import { BiEditAlt } from "react-icons/bi";
import Button from "../../../../../../../components/Emoji/button/button";
import toast from "react-hot-toast";
import { Login_Auth } from "../../../../../../../auths/context/authContext";
export default function Overview({ data, socket, setLoadedData }) {
	const auth = Login_Auth();
	const [showMore, setShowMore] = useState(false);
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
	const ToggleAbout = () => {
		document.getElementById("about").classList.toggle("d-none");
		setShowMore((v) => !v);
	};
	const [formData, setFormData] = useState({
		type: "",
		new: "",
	});
	function HandleChange(event) {
		const { name, value } = event.target;
		let newVariable;
		if (name === "description") {
			newVariable = "groupDescription";
		} else if (name === "name") {
			newVariable = "groupName";
		}
		setFormData((v) => {
			return { type: newVariable, new: value };
		});
	}
	function SendNewData() {
		setLoading(true);
		if (!formData.type || !formData.new) {
			return toast.error("Space cannot be blank");
		}
		socket.emit(
			"resetGroupInfo",
			data._id,
			formData,
			(error, message, type, newData) => {
				setLoading(false);
				toast.success(message);
				if (error) return toast.error(error);
				setLoadedData((v) => {
					return v.map((b) => {
						if (b._id === data._id) {
							return { ...b, [type]: newData };
						} else {
							return b;
						}
					});
				});
				setFormData((v) => {
					return { type: "", new: "" };
				});
				setGroupShowInputFor({
					groupName: false,
					displayPhoto: false,
					description: false,
				});
			}
		);
	}

	return (
		<div className="pt-3 px-3 pb-3 d-block">
			<div className="d-flex mt-2 justify-content-between">
				<img
					src={data.groupIcon}
					className="groupIcon shadow-sm"
					height="300px"
					width="500px"
					alt=""
				/>
				<input
					type="file"
					name="file"
					id="file2"
					hidden
					alt=""
				/>

				{auth.decodedToken().username === data.adminUsername && (
					<div
						className=""
						onClick={ChangeGroupProfileImage}
					>
						<BiEditAlt />
					</div>
				)}
			</div>

			{showGroupInputFor.groupName ? (
				<div className="d-flex mb-2 mt-2 flex-column">
					<input
						type="text"
						name="groupName"
						value={formData.new}
						onChange={HandleChange}
						className="input"
						id=""
						placeholder="Change group name "
					/>
					<div className="mt-2 d-flex justify-content-between">
						<Button
							func={SendNewData}
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
					<div className="fs-5">{data.groupName}</div>
					{auth.decodedToken().username === data.adminUsername && (
						<div
							className=""
							onClick={EditGroupInputForName}
						>
							<BiEditAlt />
						</div>
					)}
				</div>
			)}
			<div className="mt-2">
				<span className="fw-bold">Created on</span>
				<br />
				{new Date(data.creationDate).toLocaleDateString()}
			</div>
			{showGroupInputFor.description ? (
				<div className="d-flex mb-2  flex-column">
					<input
						type="text"
						name="description"
						value={formData.new}
						onChange={HandleChange}
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
								func={SendNewData}
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
				<div className="d-flex mt-2 justify-content-between">
					<div>
						<div className="fw-bold">Description</div>
						<div className="">
							{data.groupDescription.substring(0, 50)}
							<div
								className="d-none"
								id="about"
							>
								{data.groupDescription.substring(50)}
							</div>
							<div onClick={ToggleAbout}>
								{showMore ? "show less" : "show more"}
							</div>
						</div>
					</div>
					{auth.decodedToken().username === data.adminUsername && (
						<div onClick={EditGroupInputForDescription}>
							<BiEditAlt />
						</div>
					)}
				</div>
			)}
		</div>
	);
}
