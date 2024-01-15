import { useState } from 'react'
import './chat.css'
import textdata from './jsontext'
import man from '../../assets/images/profile.svg'
import man2 from '../../assets/images/profile.svg'

const AdminChatPage = () => {
    const [showIcon, setShowIcon] = useState(false)
    const [text, setText] = useState('')

    function getInput(event) {
        const { name, value } = event.target
        setText(value)
    }
    return (
        <div className="messageUs rounded box-position">
            <div className="chatBox">
                <div className="scrollable">
                    {textdata.map((v, index) => {
                        return (
                            <div className="textContainer" key={index}>
                                {v.status === 'customer' ? (
                                    <div className="customer_textbox">
                                        
                                            <span className='d-flex  mb-2'>
                                            <img
                                                    src={man2}
                                                    className="mr-2 round-image"
                                                    style={{height:"20px",width:"20px"}}
                                                />

                                                <div className="ralewaymeduim fontsize12">
                                                    {' '}
                                                    {v.message}
                                                </div>
                                            </span>
                                            <span className="chat_date">
                                                {' '}
                                                <span className="customer_label mr-1">
                                                    me
                                                </span>
                                                {v.Time}
                                            
                                        </span>
                                    </div>
                                ) : (
                                    <div className="admin_textbox ">
                                        <div className="d-flex mb-2">
                                            <img
                                                src={man}
                                                className="mr-2 round-image"
                                                style={{height:"20px",width:"20px"}}
                                                alt=""
                                            />
                                            <div className="poppinsemibold fontsize12">
                                                {' '}
                                                {v.message}
                                            </div>
                                        </div>
                                        <span className="chat_date">
                                            {' '}
                                            <span className="admin_label mr-1">
                                                admin
                                            </span>
                                            {v.Time}
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
