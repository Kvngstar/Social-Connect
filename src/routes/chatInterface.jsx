import React from 'react'
import chatIcon from '../../src/assets/images/message.svg'
import call from '../../src/assets/images/call.svg'
import status from '../../src/assets/images/add-whatsapp-status (1).svg'
import profile from '../../src/assets/images/profile.svg'
import setting from '../../src/assets/images/settings.svg'
import groupAdd from '../../src/assets/images/group-add.svg'

import './styles/chatInterface.css'
export default function ChatInterface() {
    return (
        <div className="hero-section bg-primary">
            <div className="side-menu bg-success">
                <div className="side-icon">
                    <div>
                        <img
                            src={chatIcon}
                            height="22px"
                            width="auto   "
                            alt="chat-icon"
                        />
                    </div>
                    <div>
                        <img
                            src={call}
                            height="22px"
                            width="auto   "
                            alt="call"
                        />
                    </div>
                    <div>
                        <img
                            src={status}
                            height="22px"
                            width="auto   "
                            alt="status"
                        />
                    </div>
                </div>
                <div className="down-icon">
                    <div>
                        <img
                            src={setting}
                            height="22px"
                            width="auto"
                            alt="status"
                        />
                    </div>
                    <div>
                        <img
                            src={profile}
                            height="22px"
                            width="auto   "
                            alt="status"
                        />
                    </div>
                </div>
            </div>
            <div className="chat-section bg-warning">
                <div className="chats bg-danger">
                    <div className="center-bar">
                        <div>Chats</div>
                        <div>
                            <div>
                                <img
                                    src={groupAdd}
                                    height="22px"
                                    width="auto   "
                                    alt="status"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="search-box">
                        <input
                            type="text"
                            placeholder="Search for message "
                            name=""
                            id=""
                        />
                    </div>
                    <div className='container-short-box'>
                        <div className='short-box'>

                        </div>
                        <div className='short-box'>

                        </div>
                        <div className='short-box'>

                        </div>
                        <div className='short-box'>

                        </div>
                        <div className='short-box'>

                        </div>
                        <div className='short-box'>

                        </div>
                        <div className='short-box'>

                        </div>
                        <div className='short-box'>

                        </div>
                        <div className='short-box'>

                        </div>
                        <div className='short-box'>

                        </div>
                        <div className='short-box'>

                        </div>
                        <div className='short-box'>

                        </div>
                        <div className='short-box'>

                        </div>
                    </div>
                </div>

                <div className="space bg-info">
                    dada
                    <div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div>
                            <div></div>
                            <div></div>
                            <div></div>
                        </div>
                    </div>
                    <div></div>
                    <div>
                        <div>
                            <div></div>
                            <div></div>
                        </div>
                        <div></div>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>
    )
}
