import React from "react";
import ProfilePopUp from "./groupProfile";

export default function Profile({
	data,
	socket,
	showGroupProfile,
	setLoadedData,
	activeChat,
	isPersonalChat,
	groupControl,
	setGroupControl,
	loadedData,
	setShowGroupProfile,
	
}) {
	return (
		<div>
			{
				isPersonalChat ? (
					"Personalprofile"
				) : showGroupProfile ? (
					<ProfilePopUp
						data={data}
						setLoadedData={setLoadedData}
						socket={socket}
						showGroupProfile={showGroupProfile}
						activeChat={activeChat}
						groupControl={groupControl}
						setGroupControl={setGroupControl}
						loadedData={loadedData}
						setShowGroupProfile={setShowGroupProfile}
						
					/>
				) : (
					""
				)
				// "OMO"
			}
			{/* PersonalProfile Should be  here */}
		</div>
	);
}
