import React from "react";
import call from "../../../../../assets/images/call.svg";
import search from "../../../../../assets/images/search.svg";
import video from "../../../../../assets/images/video.svg";
import SenderAudio from "../../../../../calls/functions/audio";
import VideoCall from "./video/video";
import { IoVideocamOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import { VscCallOutgoing } from "react-icons/vsc";
import { PiPhoneCallBold } from "react-icons/pi";
import { LiaSearchSolid } from "react-icons/lia";
export default function TopIcons({
	data,
	setCallInit,
	socket,
	callInit,
	setShowGroupProfile,
	setGroupControl,
}) {
	const Init = (event) => {
		const type = event.target.getAttribute("for");

		setCallInit((v) => {
			return { ...v, isCall: true, type: type };
		});

		SenderAudio(socket, data.groupId);
	};
	const ImageClick = () => {
		setGroupControl({
			overview: true,
			members: false,
			media: false,
			links: false,
		});
		setShowGroupProfile(true);
	};
	return (
		<div className="chat-box-top">
			<div
				className="chat-box-top-img"
				onClick={ImageClick}
			>
				<div className="">
					<img
						src={data.groupIcon}
						alt="image"
					/>
				</div>
				<div>{data.groupName} </div>
			</div>
			<div className="action-icons">
				<div
					onClick={Init}
					for="video"
					className="p-2 bg-white"
				>
					{" "}
					<IoVideocamOutline />
				</div>
				<div
					onClick={Init}
					for="audio"
					className="p-2 bg-light"
				> 
					<VscCallOutgoing />
				</div>
				<div className="p-2 ">
					<LiaSearchSolid/>
				</div>
			</div>
			{callInit.isCall && (
				<div className="float-video">
					<VideoCall
						socket={socket}
						data={data}
						setCallInit={setCallInit}
					/>
				</div> 
			)}
		</div>
	);
}
