import React, { useState } from "react";
import Outline from "./outline/outline";
import SearchBox from "./searchBox/searchBox";
import NewChat from "./topNav/createNewChat";
import CreateNewGroup from "./topNav/createNewChat/newgroup/createNewGroup";
import Top from "./topNav/icon/top";

export default function GroupOutline({
	showCreateGroup,
	setShowCreateGroup,
	NewGroup,
	toggleNewChat,
	loadedData,
	DisplayChats,
	CloseUpClone,
	userGroupData,
	socket,
    setLoadedData,
    chatRef
}) {
	const [controls, setControls] = useState({
		newChat: true,
		next: false,
	});
	const [newGroupData, setGroupData] = useState({
		groupIcon: "",
		groupName: "",
		groupDescription: "",
	});

	return (
		<div ref={chatRef} className="chats white_grad1 text-dark">
			{showCreateGroup && controls.newChat && ( 
				<NewChat
					createNewGroup={NewGroup}
					setControls={setControls}
					controls={controls}
					setShowCreateGroup={setShowCreateGroup}
				/>
			)}
			{  showCreateGroup && controls.next && (
				<div className="create-new-group py-3 px-2">
					<CreateNewGroup
						setControls={setControls}
						controls={controls}
						socket={socket}
						setShowCreateGroup={setShowCreateGroup}
                        setLoadedData={setLoadedData}
					/>
				</div>
			)}

			<Top toggleNewChat={toggleNewChat} />
			<SearchBox />

			<div onClick={CloseUpClone}>
				<Outline
					loadedData={loadedData}
					DisplayChats={DisplayChats}
					userGroupData={userGroupData}
				/>
			</div>
		</div>
	);
}
