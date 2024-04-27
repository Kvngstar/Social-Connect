import React from "react";
import Profile from "./profile";
import TopIcons from "./liveCall";
import { useState } from "react";
export default function Topbar({
	setLoadedData,
	data,
	socket,
	showGroupProfile,
	groupChatDisplay,
	activeChat,
	callInit,
	setCallInit,
	userGroupData,
	isPersonalChat,
	setShowGroupProfile,
}) {
	const [groupControl, setGroupControl] = useState({
		overview: true,
		members: false,
		media: false,
		links: false,
	});
	return (
		<div>
			<Profile
				data={data}
				setLoadedData={setLoadedData}
				socket={socket}
				showGroupProfile={showGroupProfile}
				activeChat={activeChat}
				isPersonalChat={isPersonalChat}
				groupControl={groupControl}
				setGroupControl={setGroupControl}
			/>
			<TopIcons
				data={data}
				setCallInit={setCallInit}
				socket={socket}
				callInit={callInit}
				setShowGroupProfile={setShowGroupProfile}
                setGroupControl={setGroupControl}
			/>
		</div>
	);
}

// 	<ProfilePopUp
// 		GenerateInviteLink={GenerateInviteLink}
// 		groupControl={groupControl}
// 		setGroupControl={setGroupControl}
// 		showGroupInputFor={showGroupInputFor}
// 		userGroupData={userGroupData}
// 		setGroupShowInputFor={setGroupShowInputFor}
// 		ToggleProfileNav={ToggleProfileNav}
// 		groupChatDisplay={groupChatDisplay}
// 		data={loadedData[chatIndex || 0]}
// 		setGeneratedLink={setGeneratedLink}
// 		generatedLink={generatedLink}
// 	/>

// <ChatBoxTop
// 	setCallInit={setCallInit}
// 	ShowGroupProfile={ShowGroupProfile}
// 	socketState={socket.current}
// 	userGroupData={loadedData[chatIndex]}
// />// 	<ProfilePopUp
// 		GenerateInviteLink={GenerateInviteLink}
// 		groupControl={groupControl}
// 		setGroupControl={setGroupControl}
// 		showGroupInputFor={showGroupInputFor}
// 		userGroupData={userGroupData}
// 		setGroupShowInputFor={setGroupShowInputFor}
// 		ToggleProfileNav={ToggleProfileNav}
// 		groupChatDisplay={groupChatDisplay}
// 		data={loadedData[chatIndex || 0]}
// 		setGeneratedLink={setGeneratedLink}
// 		generatedLink={generatedLink}
// 	/>

// <ChatBoxTop
// 	setCallInit={setCallInit}
// 	ShowGroupProfile={ShowGroupProfile}
// 	socketState={socket.current}
// 	userGroupData={loadedData[chatIndex]}
// />
