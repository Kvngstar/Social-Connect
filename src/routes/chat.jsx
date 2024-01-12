import { jwtDecode } from 'jwt-decode'
import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import io from 'socket.io-client'
import GetToken from '../sessionManager/getToken'
import IsTokenExpired from '../sessionManager/isTokExpired'
import './styles/chat.css'
export default function Chat() {
    const navigate = useNavigate()
    let socket
    const token = GetToken('x-auth')
    const [theGroup, setTheGroup] = useState([])
    const [personalChat, setPersonalChat] = useState([])

    const [message, setMessage] = useState({
        text: '',
        isImg: false,
    })
    const [loaded, setLoaded] = useState(false)
    console.log(theGroup)
    let countPerson = 1
    let countChat = 1

    const chat = useRef()

    socket = io('http://localhost:3001/chat', {
        transports: ['websocket'],
        query: { token },
    })

    useEffect(() => {
        if (!token) {
            navigate('/')
            //  specify in the UI that the session expired and the user should login to continue
        } else if (token) {
            if (IsTokenExpired(token) === true) {
                navigate('/')
            }
        }

        // socket connection for full duplex communication

        // get user group from server and update UI
        socket.on('group-information', (data) => {
            setTheGroup((value) => {
                return data
            })
            setLoaded((value) => true)
        })
        socket.on('personal-chat', (data) => {
            setPersonalChat((value) => {
                return data
            })
            setLoaded((value) => true)
        })
        socket.on('newMessageCount', (data) => {
           
            
        })
  
        socket.on('active', (data) => {
           
        })

        socket.on('newMessage', (message) => {
            console.log("new message here",message)
            const elementArray = document.querySelectorAll(
                '.container .right .chat'
            )

            for (let i = 0; i < elementArray.length; i++) {
                if (elementArray[i].getAttribute('id') === message.grpId) {
                    const selectedNode = elementArray[i]
                    const newNode = document.createElement('div')

                    message.userId == jwtDecode(token)._id
                        ? (newNode.className = ' bubble me')
                        : (newNode.className = ' bubble you')
                    newNode.innerHTML = message.msg
                    setTimeout(() => {
                        selectedNode.appendChild(newNode)
                    }, 10)
                }
            }
        })
        if (theGroup.length > 0) {
            document
                .querySelector('.chat[data-chat=person1]')
                .classList.add('active-chat')
            document
                .querySelector('.person[data-chat=person1]')
                .classList.add('active')

            let friends = {
                    list: document.querySelector('ul.people'),
                    all: document.querySelectorAll('.left .person'),
                    name: '',
                },
                chat = {
                    container: document.querySelector('.container .right'),
                    current: null,
                    person: null,
                    name: document.querySelector(
                        '.container .right .top .name'
                    ),
                }

            friends.all.forEach((f) => {
                f.addEventListener('mousedown', () => {
                    f.classList.contains('active') || setAciveChat(f)
                })
            })

            function setAciveChat(f) {
                friends.list.querySelector('.active').classList.remove('active')
                f.classList.add('active')
                chat.current = chat.container.querySelector('.active-chat')
                chat.person = f.getAttribute('data-chat')
                chat.current.classList.remove('active-chat')
                chat.container
                    .querySelector('[data-chat="' + chat.person + '"]')
                    .classList.add('active-chat')
                friends.name = f.querySelector('.name').innerText
                chat.name.innerHTML = friends.name
            }
        }

        return () => {
            socket.disconnect()
        }
    }, [loaded])
    function GetMessage(event) {
        const { name, value } = event.target
        setMessage((values) => { 
            return { ...values, [name]: value }
        })
    }
    function SendMessage() {
        const groupId = document
            .querySelector('.container .right .active-chat')
            .getAttribute('id')
        socket.emit(groupId, message)
    }
    function OpenPopUp() {
        document.querySelector('#popUp').classList.toggle('d-none')
        socket.emit('groupMessageResetCounter','657c66456e543f8f938b987c')  

    }
    function groupParticipants() {}
    return (
        <div class="wrapper body">
            <div class="container">
                <div class="left">
                    <div class="top">
                        <input type="text" placeholder="Search" />
                        <a href="javascript:;" class="search"></a>
                    </div>
                    <ul class="people">
                        {theGroup &&
                            theGroup.map((data) => {
                                return (
                                    <li
                                        key={data._id}
                                        class="person "
                                        data-chat={'person' + countPerson++}
                                    >
                                        <img
                                            src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/thomas.jpg"
                                            alt=""
                                        />
                                        <span class="name">
                                            {data.groupName}
                                        </span>
                                        <span class="time">2:09 PM</span>
                                        <span class="preview">
                                            {data.groupDescription}
                                        </span>
                                    </li>
                                )
                            })}
                    </ul>
                </div>
                <div class="right">
                    <div
                        className="pop-up d-none"
                        id="popUp"
                        style={{ paddingTop: '20px' }}
                    >
                        <span
                            class="material-symbols-outlined"
                            onClick={OpenPopUp}
                        >
                            groups
                        </span>
                        <div className="groupImage">
                            <img
                                src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg"
                                alt=""
                            />
                        </div>
                        <div className="groupName">Man City Official Group</div>
                        <div className="groupParticipant-info">
                            <small>Group * 3 participant</small>
                        </div>
                        <div className="createdBy">
                            <small>
                                Created By Victory <span>01/02</span>
                            </small>
                        </div>
                        <hr />
                        <div>
                            <small>
                                <small>3 participant</small>
                            </small>
                        </div>
                        <div className="user-block">
                            <span>
                                <img
                                    height="20"
                                    width="20"
                                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg"
                                    alt=""
                                />
                            </span>{' '}
                            <div style={{ padding: '10px' }}>
                                <small>Hyperion</small>{' '}
                            </div>
                        </div>
                        <div className="user-block">
                            <span>
                                <img
                                    height="20"
                                    width="20"
                                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg"
                                    alt=""
                                />
                            </span>{' '}
                            <div style={{ padding: '10px' }}>
                                <small>Micky B</small>{' '}
                            </div>
                        </div>
                        <div className="user-block">
                            <span>
                                <img
                                    height="20"
                                    width="20"
                                    src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/382994/bo-jackson.jpg"
                                    alt=""
                                />
                            </span>{' '}
                            <div style={{ padding: '10px' }}>
                                <small>Moons</small>{' '}
                            </div>
                        </div>
                    </div>
                    <div class="top">
                        <span
                            style={{
                                display: 'flex',
                                justifyContent: 'space-between',
                            }}
                        >
                            <div>
                                <span
                                    class="material-symbols-outlined"
                                    onClick={OpenPopUp}
                                >
                                    groups
                                </span>
                            </div>{' '}
                            <div>
                                To: <span class="name">Manchester Fans</span>
                            </div>
                        </span>
                    </div>
                    {theGroup &&
                        theGroup.map((v) => {
                            return (
                                <div
                                    class="chat "
                                    id={v._id}
                                    data-chat={'person' + countChat++}
                                >
                                    <div class="conversation-start">
                                        <span>Today, 6:48 AM</span>
                                    </div>
                                    {v.groupMessages.length > 0 ? (
                                        v.groupMessages.map((u) => {
                                            return (
                                                <div>
                                                    {' '}
                                                    <div
                                                        class={
                                                            'bubble ' +
                                                            (u._userId ==
                                                            jwtDecode(token)._id
                                                                ? 'me'
                                                                : 'you')
                                                        }
                                                    >
                                                        {/* <div className="username">
                                                            <small>
                                                                 {u.username}
                                                            </small>
                                                         </div> */}
                                                        <div>{u.text}</div>
                                                        {/* <div
                                                            className="date"
                                                            date
                                                        >
                                                            {u.date}
                                                        </div> */}
                                                    </div>
                                                </div>
                                            )
                                        })
                                    ) : (
                                        <div>
                                            No messages yet, Be the first to
                                            send
                                        </div>
                                    )}
                                </div>
                            )
                        })}
                    <div class="write">
                        <a href="javascript:;" class="write-link attach"></a>
                        <input
                            type="text"
                            name="text"
                            onChange={GetMessage}
                            value={message.text}
                        />
                        <a
                            href="javascript:;"
                            class="write-link smiley"
                            onClick={SendMessage}
                        ></a>
                        <a
                            href="javascript:;"
                            onClick={SendMessage}
                            class="write-link send"
                        ></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
