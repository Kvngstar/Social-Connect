import React, { useEffect, useRef, useState } from 'react'
import io from 'socket.io-client'
import { jwtDecode } from 'jwt-decode'
import { useNavigate } from 'react-router-dom'

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
import PreviewImage from '../components/preview.jsx'
import root from '../index.js'
import _, { get } from 'lodash'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/chatInterface.css'

export default function ChatInterface() {
    const [loaded, setLoaded] = useState(false)
    const [activeChat, setActiveChat] = useState('')
    const clearPopUpRef = useRef([])
    const [isPersonalChat, setIsPersonalChat] = useState(false)
    const [loadedData, setLoadedData] = useState([])
    const [showProfile, setShowProfile] = useState(false)
    const [lastMessage, setLastMessage] = useState('')
    const [reload, setReloaded] = useState(0)
    const scrollTo = useRef()
    const getDom = useRef()
    const token = GetToken('x-auth')
    const navigate = useNavigate()
    let socket
    var idd
    // ESTABLISH THE SOCKET CONNECTION
    socket = io('http://localhost:3001/chat', {
        transports: ['websocket'],
        query: { token },
    })
    const [groupChatDisplay, setGroupChatDisplay] = useState({
        showGroupChat: false,
        groupId: '',
        profileImage: '',
        name: '',
        description: '',
        date: '',
        members: [],
        link: '',
        messages: [],
        lastMessage: '',
    })
    // Handle User input both text, image, audio and video call
    const [inputData, setInputData] = useState({
        addIcon: false,
        disableInput: false,
        type: '',
        text: '',
        username: jwtDecode(token).username,
        _userId: jwtDecode(token)._id,
    })

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
    const [groupMembers, setGroupMembers] = useState({
        members: [],
        groupName: '',
        groupImage: '',
    })
    // For Creating New Group
    const [newGroupData, setGroupData] = useState({
        groupIcon: '',
        groupName: '',
        groupDescription: '',
    })

    // FUNCTIONS FOR HANDLING CREATE NEW CHAT POP-UPS
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
                next: !controls.next,
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
        messages,
        adminUsername,
        chatId
    ) {
        setGroupChatDisplay((values) => {
            return {
                ...values,
                groupId: chatId,
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

        setActiveChat(() => chatId)
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

    function ClearImgInput() {
        setInputData((values) => {
            return { ...values, type: '', text: '', disableInput: false }
        })
    }

    // Function send Message to Group
    function SendInformation() {
        socket.emit(activeChat, _.omit(inputData, ['disableInput']))

        setInputData((values) => {
            return { ...values, type: '', text: '', disableInput: false }
        })
    }
    // Function to submit new Group Profile

    function SubmitNewGroup() {
        socket.emit('NewGroup', newGroupData)
    }
    function CloseUpClone() {
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
    }
    // SEND USER MESSAGE TO SERVER
    function HandleInputs(event) {
        const { name, value } = event.target
        setInputData((values) => {
            return { ...values, type: name, text: value, groupId: activeChat }
        })
    }
    // APPEND RECIECEVED MESSAGE FROM SERVER
    function AppendRecievedMessage() {}

    function AppendedDom(v) {
        const parentDom = getDom.current
        console.log(parentDom, 'parentDom')
        const wrapper = document.createElement('div')
        wrapper.className = 'textContainer'

        const mainNewDiv = document.createElement('div')
        mainNewDiv.className = 'customer_textbox'

        if (v.type == 'image') {
            const newDiv = document.createElement('div')
            const newImg = document.createElement('img')
            newImg.style.height = '200px'
            newImg.src = v.msg
            newImg.alt = 'new image'
            newDiv.append(newImg)
            mainNewDiv.appendChild(newDiv)
        } else if (v.type == 'text') {
            const newSpan = document.createElement('span')
            newSpan.className = 'd-flex mb-2'

            const newImg = document.createElement('img')
            newImg.style.height = '20px'
            newImg.style.height = '20px'
            newImg.src = ''
            newImg.className = 'mr-2 round-image'

            const newDiv = document.createElement('div')
            newDiv.className = 'ralewaymeduim fontsize12'
            newDiv.textContent = v.msg
            newSpan.appendChild(newImg)
            newSpan.appendChild(newDiv)
            mainNewDiv.appendChild(newSpan)
        }
        wrapper.appendChild(mainNewDiv)
        parentDom.appendChild(wrapper)
    }

    useEffect(() => {
        // CHECK IF USER IS  NOT LOGGED IN
        if (!token) {
            navigate('/login')
            //  specify in the UI that the session expired and the user should login to continue
        } else if (token) {
            if (IsTokenExpired(token) === true) {
                navigate('/login')
            } else {
            }
        }
        socket.on('group-information', (data) => {
            setLoadedData(data)
            console.log(data, 'data')
        })

        socket.on('newMessage', (v) => {
            const preview = document.getElementsByClassName('last-message')

            const ElemArray = Array.from(preview)
            ElemArray.forEach((b) => {
                if (v.grpId == b.getAttribute('_id')) {
                    v.type == 'image'
                        ? (b.innerHTML = 'image')
                        : (b.innerHTML = v.msg || 'loading ...')
                }
            })
            // For demonstration, let's update the name of the first object
            const easySpread = [...groupChatDisplay.messages, v]
            setGroupChatDisplay((t) => {
                return { ...t, messages: [...easySpread] }
            })

            setTimeout(() => {
                if (getDom.current) {
                    const { scrollHeight, clientHeight } = getDom.current
                    const Num = scrollHeight - clientHeight
                    getDom.current.scrollTop = Num
                }
            }, 300)
        })
        return () => {}
    }, [groupChatDisplay])

    return (
        <div className="hero-section">
            <div className="side-menu" onClick={closeGroupPopUp}>
                {controls.newChat && <NewChat CreateNewGroup={NewGroup} />}
                {controls.next && (
                    <div className="create-new-group py-3 px-2">
                        <CreateNewGroup
                            newGroupData={newGroupData}
                            setGroupData={setGroupData}
                            SubmitNewGroup={SubmitNewGroup}
                        />
                    </div>
                )}
                <Settings
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
                    SendInformation={SendInformation}
                />
            </div>
            <div className="chat-section" ref={clearPopUpRef}>
                <SideChatBox
                    toggleNewChat={CreateNewChat}
                    loadedData={loadedData}
                    DisplayChats={DisplayChats}
                    CloseUpClone={CloseUpClone}
                    lastMessage={lastMessage}
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
                        <ChatBoxTop
                            groupChatDisplay={groupChatDisplay}
                            ShowGroupProfile={ShowGroupProfile}
                        />
                        <div
                            className="content-area position-relative"
                            onClick={() => {
                                closeGroupPopUp()
                                CloseUpClone()
                            }}
                        >
                            <div>
                                <AdminChatPage
                                    groupChatDisplay={groupChatDisplay}
                                    getDom={getDom}
                                />
                            </div>
                            {inputData.type == 'image' && (
                                <PreviewImage
                                    previewimg={inputData.text}
                                    ClearImgInput={ClearImgInput}
                                />
                            )}
                        </div>
                        <Textarea
                            HandleInputs={HandleInputs}
                            inputData={inputData}
                            setInputData={setInputData}
                            SendInformation={SendInformation}
                            activeChat={activeChat}
                        />
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
