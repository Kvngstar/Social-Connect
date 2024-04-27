import React, { useEffect, useState } from "react";
import SenderAudio from "../../../../../../calls/functions/audio";
import call from "../../../../../../assets/images/call.svg";
import groupadd from "../../../../../../assets/images/group.svg";
import "./video.css";
export default function VideoCall({ socket, data, setCallInit }) {
	const [declined, setDeclined] = useState(false);
	useEffect(() => {
		console.log(socket);
		SenderAudio(socket, data.groupId);
		return () => {};
	}, []);

	function StopVideo() {
		setCallInit((v) => {
			return { ...v, isCall: false, type: "" };
		});
	}

	return (
		<div className="video-container d-flex align-items-center justify-content-center flex-column px-2 text-light bg-dark">
			<div className="video-wrap rounded bg-success w-100 px-2">
				<div className="d-flex align-items-center p-2 justify-content-between">
					<div>Social Connect</div>
					<div>Encrypted</div>
					<div onClick={StopVideo}>X</div>
				</div>
				<div className="video-center bg-dark rounded d-flex flex-column justify-content-center align-items-center">
					<img
						src={data.groupIcon}
						className="round-image"
						style={{ width: "100px", height: "100px" }}
						alt=""
					/>
					<div>{data.groupName}</div>
					<div>
						{declined ? (
							<small className="text-danger">Declined</small>
						) : (
							<small className="calling">Calling</small>
						)}
					</div>
				</div>
				<div className="py-2 d-flex align-items-center justify-content-center">
					<div>
						<img
							src={groupadd}
							height="30px"
							className="bg-light mx-1"
							alt=""
						/>
					</div>
					<div>
						<img
							src={call}
							height="30px"
							className="bg-light mx-1"
							alt=""
						/>
					</div>
				</div>
			</div>
		</div>
	);
}
