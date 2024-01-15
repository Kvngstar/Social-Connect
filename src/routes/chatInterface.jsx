import React, { useEffect, useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/chatInterface.css'
import AdminChatPage from '../components/chatBox/adminChatBox.jsx'
import NewChat from '../chat components/newgroup.jsx'
import CreateNewGroup from '../chat components/createNewGroup.jsx'
import AddFriends from '../chat components/addFriens.jsx'
import Settings from '../chat components/settings.jsx'
import SideIcons from '../chat components/sideIcons.jsx'
import DownIcon from '../chat components/downIcon.jsx'
import SideChatBox from '../chat components/sideChatBox.jsx'
import ProfilePopUp from '../chat components/profilePopUp.jsx'
import ChatBoxTop from '../chat components/chatBoxTop.js'
import Textarea from '../chat components/textarea.jsx'
export default function ChatInterface() {
    const [controls,setControls ] = useState({
        newgroup:false,
        newuser: false,
        next: false,
})
const [groupMembers, setGroupMembers] = useState({
    members:[],
    groupNames:"",
    groupImage:"",
})
    useEffect(() => {

        return () => {}
    }, [])
    return (
        <div className="hero-section">
            <div className="side-menu">
                <NewChat />
                <div className="create-new-group d-block p-2">
                    <div className="fw-bold px-3">New Group</div>
                    <div className="px-3">
                        <input
                            placeholder="Search"
                            type="text"
                            className="w-100  input mt-2"
                        />
                    </div>
                    <AddFriends />
                    <CreateNewGroup />
                </div>
                <Settings />
                <SideIcons />
                <DownIcon />
            </div>
            <div className="chat-section">
                <SideChatBox />
                <div className="space position-relative">
                    <ProfilePopUp />
                    <ChatBoxTop />
                    <div className="content-area">
                        <div>
                            {/* others */}
                            <AdminChatPage />
                        </div>
                        <div>{/* me */}</div>
                    </div>
                    <Textarea />
                </div>
            </div>
        </div>
    )
}
