import React, { useEffect, useRef, useState } from 'react'
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
    const [controls, setControls] = useState({
        newChat: false,
        newGroup: false,
        addFriends: false,
        newUser: false,
        next: false,
    })
    const [loaded, setLoaded] = useState(true)
    const [settingsControls, setSettingsControls] = useState({
        showSettings: false,
        general: false,
        account: false,
        chats: false,
        help: false,
    })
    const [showProfile, setShowProfile] = useState(false)
    const [groupControl, setGroupControl] = useState({
        showGroupProfile: false,
        overview: false,
        members: false,
        media: false,
        links: false,
    })
    // For Change of Data
    const [showInputFor, setShowInputFor] = useState({
        name: false,
        about: false,
        phoneNo: false,
    })
    const [showGroupInputFor, setGroupShowInputFor] = useState({
        groupName: false,
        description: false,
        displayPhoto: false,
    })

    // FUNCTIONS FOR HANDLING CREATE NEW CHAT POP-UPS
    const [groupMembers, setGroupMembers] = useState({
        members: [],
        groupName: '',
        groupImage: '',
    })
    const clearPopUpRef = useRef([])
    function CreateNewChat(event) {
        setControls((values) => {
            return { ...values, newChat: !controls.newChat }
        })
    }
    function NewGroup(event) {
        setControls((values) => {
            return {
                ...values,
                newChat: !controls.newChat,
                newGroup: !controls.newGroup,
                addFriends: !controls.addFriends,
            }
        })
    }
    function ScrollToNext() {
        setControls((values) => {
            return {
                ...values,

                addFriends: !controls.addFriends,
                next: !controls.next,
            }
        })
    }
    function ClearGroupPopUpRef() {
        setControls((values) => {
            return {
                newChat: false,
                newGroup: false,
                addFriends: false,
                newUser: false,
                next: false,
            }
        })

        setSettingsControls((values) => {
            return {
                showSettings: false,
                general: false,
                account: false,
                chats: false,
                help: false,
            }
        })
    }

    // FUNCTIONS FOR HANDLING SETTINGS POP-UPS
    function toggleSettings() {
        setSettingsControls((values) => {
            return {
                showSettings: true,
                general: true,
                account: false,
                chats: false,
                help: false,
            }
        })
    }

    // FUNCTIONS FOR HANDLING PROFILE POP-UPS
    function ShowProfile() {
        setShowProfile(true)
        setSettingsControls((values) => {
            return {
                showSettings: true,
                general: false,
                account: false,
                chats: false,
                help: false,
            }
        })
    }
    // SHOW GROUP PROFILE
    function ShowGroupProfile() {
        setGroupControl((values) => {
            return {
                showGroupProfile: true,
                overview: true,
                members: false,
                media: false,
                links: false,
            }
        })
    }
    function closeGroupPopUp() {
        setGroupControl((values) => {
            return {
                showGroupProfile: false,
                overview: false,
                members: false,
                media: false,
                links: false,
            }
        })
    }
    useEffect(() => {
        clearPopUpRef.current.addEventListener('click', () => {
            setControls((values) => {
                return {
                    newChat: false,
                    newGroup: false,
                    addFriends: false,
                    newUser: false,
                    next: false,
                }
            })

            setSettingsControls((values) => {
                return {
                    showSettings: false,
                    general: false,
                    account: false,
                    chats: false,
                    help: false,
                }
            })

            setShowInputFor((values) => {
                return {
                    name: false,
                    about: false,
                    phoneNo: false,
                }
            })
        })
        return () => {}
    }, [])
    return (
        <div className="hero-section">
            <div className="side-menu" onClick={closeGroupPopUp}>
                {controls.newChat && <NewChat CreateNewGroup={NewGroup} />}
                {controls.newGroup && (
                    <div className="create-new-group  p-2">
                        <div className="fw-bold px-3">New Group</div>
                        <div className="px-3">
                            <input
                                placeholder="Search"
                                type="text"
                                className="w-100  input mt-2"
                            />
                        </div>
                        <AddFriends
                            AddFriends={controls.addFriends}
                            Next={ScrollToNext}
                        />
                        {controls.next && <CreateNewGroup />}
                    </div>
                )}
                <Settings
                    clearPopUpRef={clearPopUpRef}
                    settingsControls={settingsControls}
                    setSettingsControls={setSettingsControls}
                    showProfile={showProfile}
                    setShowProfile={setShowProfile}
                    showInputFor={showInputFor}
                    setShowInputFor={setShowInputFor}
                />
                <SideIcons />
                <DownIcon
                    toggleSettings={toggleSettings}
                    ShowProfile={ShowProfile}
                    setShowProfile={setShowProfile}
                />
            </div>
            <div className="chat-section" ref={clearPopUpRef}>
                <SideChatBox toggleNewChat={CreateNewChat} />
                {loaded ? (
                    <div className="space position-relative">
                        <ProfilePopUp
                            groupControl={groupControl}
                            setGroupControl={setGroupControl}
                            showGroupInputFor={showGroupInputFor}
                            setGroupShowInputFor={setGroupShowInputFor}
                        />
                        <ChatBoxTop ShowGroupProfile={ShowGroupProfile} />
                        <div className="content-area" onClick={closeGroupPopUp}>
                            <div>
                                {/* others */}
                                <AdminChatPage />
                            </div>
                            <div>{/* me */}</div>
                        </div>
                        <Textarea />
                    </div>
                ) : (
                    <div className="d-flex align-items-center flex-column justify-content-center w-100 bg-dark text-light">
                    <div className='fw-bolder'>
                        
                            Social Connect For Web
                           
                        </div>
                        <div className='bg-success text-center'>A Messaging Platform for the web, text anytime  and reply anonymously</div>
                        <br />
                    </div>
                )}
            </div>
        </div>
    )
}
