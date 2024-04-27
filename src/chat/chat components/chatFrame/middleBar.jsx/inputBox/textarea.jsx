import _ from "lodash";
import React from "react";
import EmojiPicker from "../../../../../components/Emoji/picker";
import FileReading from "../../../../../utils/filesUpload/image/image";
import attachment from "../../../../../assets/images/attachment.svg";
import send from "../../../../../assets/images/send.svg";
import smiley from "../../../../../assets/images/smiley.svg";
import toast from "react-hot-toast";
export default function Textarea({
	inputData,
	setInputData,
	activeChat,
	socket,
	data,
}) {
	const maxSize = 1000000;
	function HandleInputs(event) {
		const { name, value } = event.target;
		setInputData((values) => {
			return { ...values, type: name, text: value, groupId: activeChat };
		});
	}
	function SendInformation() {
		socket.emit(
			`grouper-message-${data._id}`,
			_.omit(inputData, ["disableInput"])
		);

		setInputData((values) => {
			return { ...values, type: "", text: "", disableInput: false };
		});
	}
	function UploadFile() {
		let file = document.querySelector(".file").click();
	}

	async function HandleFileUpload() {
		let file = document.querySelector("#fileUpload");

		if (file.files[0].size > maxSize)
			return toast.error("Image size should be less than 1mb");

		setInputData((values) => {
			return { ...values, disableInput: true };
		});
		const Base64 = await FileReading(file.files[0]);
		setInputData((values) => {
			return {
				...values,
				type: "image",
				text: Base64,
				groupId: activeChat,
			};
		});
	}
	function ShowIcons() {
		setInputData((v) => {
			return { ...v, addIcon: true };
		});
	}

	return (
		<div className="text-area ">
			<div className="Emoji-container">
				{inputData.addIcon && (
					<EmojiPicker
						setInputData={setInputData}
						inputData={inputData}
					/>
				)}
			</div>

			<div className="icon-attachment">
				<div onClick={ShowIcons}>
					<img
						src={smiley}
						height="15px"
						width="auto"
					/>
				</div>
				<div>
					<img
						src={attachment}
						height="15px"
						width="auto"
						alt="status"
						onClick={UploadFile}
					/>
					<input
						type="file"
						id="fileUpload"
						onChange={HandleFileUpload}
						className="file"
						name="picture"
						hidden
					/>
				</div>
			</div>
			{inputData.disableInput == false && (
				<div className="textbox">
					<input
						type="text"
						value={inputData.text}
						onChange={HandleInputs}
						name="text"
						className="input"
						placeholder="Type a message"
					/>
				</div>
			)}
			<div className=" styleSendButton px-2 py-2 ">
				<img
					src={send}
					height="15px"
			 		width="auto"
					alt="status"
					onClick={SendInformation}
				/>
			</div>
		</div>
	);
}
