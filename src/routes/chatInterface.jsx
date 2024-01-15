import React, { useEffect } from 'react'
import chatIcon from '../../src/assets/images/message.svg'
import call from '../../src/assets/images/call.svg'
import status from '../../src/assets/images/add-whatsapp-status (1).svg'
import profile from '../../src/assets/images/profile.svg'
import setting from '../../src/assets/images/settings.svg'
import groupAdd from '../../src/assets/images/group-add.svg'
import displayImage from '../../src/assets/images/vi hub.jpg'
import video from '../../src/assets/images/video.svg'
import search from '../../src/assets/images/search.svg'
import send from '../../src/assets/images/send.svg'
import smiley from '../../src/assets/images/smiley.svg'
import attachment from '../../src/assets/images/attachment.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/chatInterface.css'
import AdminChatPage from '../components/chatBox/adminChatBox.jsx'
import NewChat from '../chat components/newgroup.jsx'
import CreateNewGroup from '../chat components/createNewGroup.jsx'
import AddFriens from '../chat components/addFriens.jsx'
import AddFriends from '../chat components/addFriens.jsx'
import Settings from '../chat components/settings.jsx'
import SideIcons from '../chat components/sideIcons.jsx'
import DownIcon from '../chat components/downIcon.jsx'
import SideChatBox from '../chat components/sideChatBox.jsx';
import ProfilePopUp from '../chat components/profilePopUp.jsx';
export default function ChatInterface() {
    useEffect(() => {
        return () => {}
    }, [])
    return (
        <div className="hero-section">
            <div className="side-menu">
                <NewChat />

                <div className="create-new-group d-none p-2">
                    <div className="fw-bold px-3">New Group</div>
                    <div className="px-3">
                        <input
                            placeholder="Search"
                            type="text"
                            className="w-100  input mt-2"
                        />
                    </div>
                    <CreateNewGroup />
                    <AddFriends />
                </div>
                <Settings />

                <SideIcons />
                <DownIcon />
            </div>
            <div className="chat-section">
                <SideChatBox/>

                <div className="space position-relative">
                    
                    <ProfilePopUp/>
                    <div className="chat-box-top">
                        <div className="chat-box-top-img">
                            <div className="">
                                <img src={displayImage} alt="image" />
                            </div>
                            <div>Devmonk Technologies</div>
                        </div>
                        <div className="action-icons">
                            <div>
                                {' '}
                                <img
                                    src={video}
                                    height="22px"
                                    width="auto   "
                                    alt="status"
                                />
                            </div>
                            <div>
                                <img
                                    src={call}
                                    height="15px"
                                    width="auto   "
                                    alt="status"
                                />
                            </div>
                            <div>
                                <img
                                    src={search}
                                    height="15px"
                                    width="auto   "
                                    alt="status"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="content-area">
                        <div>
                            {/* others */}
                            <AdminChatPage />
                        </div>
                        <div>{/* me */}</div>
                    </div>
                    <div className="text-area">
                        <div className="icon-attachment">
                            <div>
                                <img
                                    src={smiley}
                                    height="15px"
                                    width="auto   "
                                    alt="status"
                                />
                            </div>
                            <div>
                                <img
                                    src={attachment}
                                    height="15px"
                                    width="auto   "
                                    alt="status"
                                />
                            </div>
                        </div>
                        <div className="textbox">
                            <input type="text" placeholder="Type a message" />
                        </div>
                        <div>
                            <img
                                src={send}
                                height="15px"
                                width="auto   "
                                alt="status"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
