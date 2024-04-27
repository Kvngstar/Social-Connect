import React, { useState } from "react";
import FileReading from "../../../../../../utils/filesUpload/image/image";
import groupAdd from "../../../../../../assets/images/group-add.svg";
import toast from "react-hot-toast";
import { SlPicture } from "react-icons/sl";
import Button from "../../../../../../components/Emoji/button/button";

export default function CreateNewGroup({
	socket,
	setControls,
	controls,
	setShowCreateGroup,
	setLoadedData,
}) {
	const [newGroupData, setGroupData] = useState({
		groupIcon: "",
		groupName: "",
		groupDescription: "",
	});
	const [loading, setLoading] = useState(false);
	const maxSize = 1000000;

	const SubmitNewGroup = () => {
		setLoading(true);
		socket.emit("new-group", newGroupData, (response) => {
            toast.success(response);
            setLoading(false);
            
			setControls((values) => {
                return {
                    newChat: !controls.newChat,
					next: !controls.next,
				};
			});
			setGroupData((values) => {
                return { groupIcon: "", groupName: "", groupDescription: "" };
			});
            setShowCreateGroup(false);
			setTimeout(() => {
				socket.emit("reload-UserData", (v) => {
					setLoadedData(() => v);
				});
			}, 1000);
		});
        setLoading(false)
	};

	function HandleNewGroupData(event) {
		const { name, value } = event.target;
		setGroupData((values) => {
			return { ...values, [name]: value };
		});
	}
	function UploadProfileimage(event) {
		document.querySelector("#file").click();
	}
	async function OnchangeProfileImage() {
		const file = document.querySelector("#file");
		if (file.files[0].size > maxSize)
			return toast.error("Image size should be maximum of 1mb");

		const base64 = await FileReading(file.files[0]);

		setGroupData((values) => {
			return { ...values, groupIcon: base64 };
		});
	}

	return (
		<div>
			{" "}
			<div className="p-1 text-dark">
				<div className="d-flex  align-items-center mt-1 bg-light px-2 rounded py-2">
					<div className="d-flex align-items-center">
						{newGroupData.groupIcon ? (
							<img
								src={newGroupData.groupIcon}
								className="round-image"
								alt=""
							/>
						) : (
							<SlPicture />
						)}
						<input
							onChange={OnchangeProfileImage}
							type="file"
							name="file"
							id="file"
							hidden
							accept="image/*"
						/>
					</div>
					<div>
						<small
							onClick={UploadProfileimage}
							className="ms-2"
						>
							Add group icon (optional)
						</small>
					</div>
				</div>
				<div className=" rounded py-2">
					<div>Provide group name</div>
					<div>
						<input
							type="text"
							name="groupName"
							value={newGroupData.groupName}
							onChange={HandleNewGroupData}
							className="input mandatoryInput"
							placeholder="*"
						/>
					</div>
					<div className="mt-2">
						<div>Group description</div>
						<textarea
							name="groupDescription"
							value={newGroupData.groupDescription}
							className=""
							onChange={HandleNewGroupData}
							placeholder="  Write about group"
							id=""
							cols=""
							style={{ width: "100%" }}
							rows="3"
						></textarea>
					</div>

					<div>
						<div className="d-flex  mt-3 align-items-center mt-3">
							<div className="w-100 d-flex align-items-center justify-content-center">
								<Button
									text={"Create"}
									loading={loading}
									func={SubmitNewGroup}
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
