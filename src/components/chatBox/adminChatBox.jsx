import { useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import './chat.css'
import textdata from './jsontext'
import man from '../../assets/images/profile.svg'
import man2 from '../../assets/images/profile.svg'
import getToken from "../../sessionManager/getToken"
const AdminChatPage = ({groupChatDisplay}) => {
    const [showIcon, setShowIcon] = useState(false)
    const [text, setText] = useState('')
    const token = getToken('x-auth')

    function getInput(event) {
        const { name, value } = event.target
        setText(value)
    }
    return (
        <div className="messageUs rounded box-position">
            <div className="chatBox">
                <div className="scrollable">
                    {groupChatDisplay.showGroupChat && groupChatDisplay.messages.map((v, index) => {
                        return (
                            <div className="textContainer" key={index}>
                                {jwtDecode(token)._id === v._userId ? (
                                    <div className=" customer_textbox">
                                        <span className="d-flex  mb-2">
                                            <img
                                                src={man2}
                                                className="mr-2 round-image"
                                                style={{
                                                    height: '20px', 
                                                    width: '20px',
                                                }}
                                            />

                                            <div className="ralewaymeduim fontsize12">
                                                {' '}
                                                {v.text}
                                            </div>
                                        </span>
                                        <span className="chat_date">
                                            {' '}
                                            <span className="customer_label mr-1">
                                                {v.username}
                                            </span>
                                            {v.date}
                                        </span>
                                    </div>
                                ) : (
                                    <div className=" me-4 admin_textbox ">
                                        <div className="d-flex mb-2">
                                            <img
                                                src={man}
                                                className="mr-2 round-image"
                                                style={{
                                                    height: '20px',
                                                    width: '20px',
                                                }}
                                                alt=""
                                            />
                                            <div className="poppinsemibold fontsize12">
                                                {' '}
                                                {v.text}
                                            </div>
                                        </div>
                                        <span className="chat_date">
                                            {' '}
                                            <span className="admin_label mr-1">
                                                me
                                            </span>
                                            {v.date}
                                        </span>
                                    </div>
                                )}
                            </div>
                        )
                    })}{' '}
                </div>
            </div>
        </div>
    )
}

export default AdminChatPage
