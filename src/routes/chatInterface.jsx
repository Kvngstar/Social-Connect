import React, { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
    import { jwtDecode } from 'jwt-decode'

import GetToken from '../sessionManager/getToken'
import IsTokenExpired from '../sessionManager/isTokExpired'
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
import PersonalProfilePopUp from '../chat components/personalChatProfilePopUp.jsx.jsx'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/chatInterface.css'
import { useNavigate } from 'react-router-dom'

export default function ChatInterface() {
    const [loaded, setLoaded] = useState(false)
    const clearPopUpRef = useRef([])
    const [isPersonalChat, setIsPersonalChat] = useState(false)
    const [loadedData, setLoadedData] = useState([])
    const [groupChatDisplay, setGroupChatDisplay] = useState({
        showGroupChat: false,
        profileImage: '',
        name: '',
        description: '',
        date: '',
        members: [],
        link: '',
        messages: [], 
    })
    const token = GetToken('x-auth')
    const navigate = useNavigate()
    let socket

    const [controls, setControls] = useState({
        newChat: false,
        newGroup: false,
        addFriends: false,
        newUser: false,
        next: false,
    })
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
    const [personalChatControl, setPersonalChatControl] = useState({
        showPersonalChatProfile: false,
        overview: false,
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
        if (isPersonalChat) {
            setPersonalChatControl((values) => {
                return {
                    showPersonalChatProfile: true,
                    overview: true,
                    media: false,
                    links: false,
                }
            })
        } else {
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
    }
    function ToggleActiveNav(element) {
        element.stopPropagation()
        console.log(element)
        let navItems = document.querySelectorAll('.nav-item')
        navItems.forEach((item) => {
            item.classList.remove('active-item')
        })
        if (element.target.localName != 'img') {
            element.target.classList.add('active-item')
        } else {
            element.target.parentElement.classList.add('active-item')
        }
    }
    function ToggleProfileNav(element) {
        element.stopPropagation()
        let navItems = document.querySelectorAll('.nav-item-profile')
        navItems.forEach((item) => {
            item.classList.remove('active-item')
        })
        if (element.target.localName != 'img') {
            element.target.classList.add('active-item')
        } else {
            element.target.parentElement.classList.add('active-item')
        }
    }

    function DisplayChats(
        profileImage,
        name,
        description,
        date,
        members,
        link,
        messages
    ) {
        setGroupChatDisplay((values) => {
            return {
                ...values,
                showGroupChat: true,
                profileImage: profileImage,
                name: name,
                description: description,
                date: date,
                members: members,
                link: link,
                messages: messages,
                adminUsername: adminUsername,
            }
        })
        setGroupControl((values) => {
            return {
                showGroupProfile: false,
                overview: false,
                members: false,
                media: false,
                links: false,
            }
        })
        setPersonalChatControl((values) => {
            return {
                showPersonalChatProfile: false,
                overview: false,
                media: false,
                links: false,
            }
        })

        setLoaded(true)
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
        setPersonalChatControl((values) => {
            return {
                showPersonalChatProfile: false,
                overview: false,
                members: false,
                media: false,
                links: false,
            }
        })
    }
    function ClearImgInput(){
        setInputData((values) => {
            return { ...values, type: "", text: "",disableIput: false }
        })
    }

    useEffect(() => {
        // CHECK IF USER IS  NOT LOGGED IN
        if (!token) {
            console.log('login out sha')
            navigate('/login')
            //  specify in the UI that the session expired and the user should login to continue
        } else if (token) {
            if (IsTokenExpired(token) === true) {
                navigate('/login')
                console.log('login sha')
            } else {
                console.log('login sha')
            }
        }

        // ESTABLISH THE SOCKET CONNECTION
        socket = io('http://localhost:3001/chat', {
            transports: ['websocket'],
            query: { token },
        })

        socket.on('group-information', (data) => {
            console.log(data)
            setLoadedData(data)
            // setLoaded((value) => true)
        })

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

        // Get all nav-items
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
                <SideIcons ToggleActiveNav={ToggleActiveNav} />
                <DownIcon
                    toggleSettings={toggleSettings}
                    ShowProfile={ShowProfile}
                    setShowProfile={setShowProfile}
                />
            </div>
            <div className="chat-section" ref={clearPopUpRef}>
                <SideChatBox
                    toggleNewChat={CreateNewChat}
                    loadedData={loadedData}
                    DisplayChats={DisplayChats}
                />
                {loaded ? (
                    <div className="space position-relative">
                        {isPersonalChat ? (
                            <PersonalProfilePopUp
                                ToggleProfileNav={ToggleProfileNav}
                                personalChatControl={personalChatControl}
                                setPersonalChatControl={setPersonalChatControl}
                            />
                        ) : (
                            <ProfilePopUp
                                groupControl={groupControl}
                                setGroupControl={setGroupControl}
                                showGroupInputFor={showGroupInputFor}
                                setGroupShowInputFor={setGroupShowInputFor}
                                ToggleProfileNav={ToggleProfileNav}
                                groupChatDisplay={groupChatDisplay}
                            />
                        )}
                        <ChatBoxTop groupChatDisplay={groupChatDisplay} ShowGroupProfile={ShowGroupProfile} />
                        <div className="content-area" onClick={closeGroupPopUp}>
                            <div>
                                <AdminChatPage
                                    groupChatDisplay={groupChatDisplay}
                                />
                            </div>
                        </div>
                        <Textarea />
                    </div>
                ) : (
                    <div className="d-flex align-items-center flex-column justify-content-center w-100 bg-dark text-light">
                        <div className="fw-bolder">Social Connect For Web</div>
                        <div className="bg-success text-center">
                            A Messaging Platform for the web, text anytime and
                            reply anonymously
                        </div>
                        <br />
                    </div>
                )}
            </div>
        </div>
    )
}
