import React from 'react'
import chatIcon from '../../src/assets/images/message.svg'
import call from '../../src/assets/images/call.svg'
import status from '../../src/assets/images/add-whatsapp-status (1).svg'
import profile from '../../src/assets/images/profile.svg'
import setting from '../../src/assets/images/settings.svg'
import groupAdd from '../../src/assets/images/group-add.svg'
import displayImage from '../../src/assets/images/vi hub.jpg'
import video from '../../src/assets/images/video.svg'
import search from '../../src/assets/images/search.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/chatInterface.css'
export default function ChatInterface() {
    return (
        <div className="hero-section bg-primary">
            <div className="side-menu bg-success">
                <div className="new-group p-1">
                    <div className="fw-bold px-3">NEW CHAT</div>
                    <div className="px-3">
                        <input
                            type="text"
                            className="w-100 border-0 rounded mt-2"
                        />
                    </div>
                    <div className="d-flex mt-1 bg-light rounded py-2">
                        <div className="me-2  px-3 ">
                            <img height="22px" src={groupAdd} alt="" />
                        </div>
                        <div>New group</div>
                    </div>
                    <div className="d-flex bg-light rounded py-2">
                        <div className="me-2  px-3 ">
                            <img height="22px" src={groupAdd} alt="" />
                        </div>
                        <div>New user</div>
                    </div>
                </div>
                <div className="create-new-group p-2">
                    <div className="fw-bold px-3">New Group</div>
                    <div className="px-3">
                        <input
                            placeholder="Search"
                            type="text"
                            className="w-100  border-0 rounded mt-2"
                        />
                    </div>
                    <div className="mt-2 mb-2">All friends</div>
                    <div className="new-group-overview">
                        <div className="d-flex justify-content-between align-items-center pe-2 bg-light rounded py-2">
                            <div className="d-flex  align-items-center">
                                <div className="px-3">
                                    <img height="22px" src={groupAdd} alt="" />
                                </div>
                                <div>@New user</div>
                            </div>
                            <div>
                                <input type="checkbox" name="checkbox" id="" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center pe-2 bg-light rounded py-2">
                            <div className="d-flex  align-items-center">
                                <div className="px-3">
                                    <img height="22px" src={groupAdd} alt="" />
                                </div>
                                <div>@New user</div>
                            </div>
                            <div>
                                <input type="checkbox" name="checkbox" id="" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center pe-2 bg-light rounded py-2">
                            <div className="d-flex  align-items-center">
                                <div className="px-3">
                                    <img height="22px" src={groupAdd} alt="" />
                                </div>
                                <div>@New user</div>
                            </div>
                            <div>
                                <input type="checkbox" name="checkbox" id="" />
                            </div>
                        </div>
                        <div className="d-flex justify-content-between align-items-center pe-2 bg-light rounded py-2">
                            <div className="d-flex  align-items-center">
                                <div className="px-3">
                                    <img height="22px" src={groupAdd} alt="" />
                                </div>
                                <div>@New user</div>
                            </div>
                            <div>
                                <input type="checkbox" name="checkbox" id="" />
                            </div>
                        </div>
                    </div>
                </div>
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
                    <div className="container-short-box">
                        <div className="short-box"></div>
                        <div className="short-box"></div>
                        <div className="short-box"></div>
                        <div className="short-box"></div>
                        <div className="short-box"></div>
                        <div className="short-box"></div>
                        <div className="short-box"></div>
                        <div className="short-box"></div>
                        <div className="short-box"></div>
                        <div className="short-box"></div>
                        <div className="short-box"></div>
                        <div className="short-box"></div>
                        <div className="short-box"></div>
                    </div>
                </div>

                <div className="space bg-info">
                    <div className="chat-box-top">
                        <div className="chat-box-top-img">
                            <div className="">
                                <img src={displayImage} alt="image" />
                            </div>
                            <div>Judith Layla Futo</div>
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
                    <div className="content-area"></div>
                    <div className="text-area">
                        <div className="icon-attachment">
                            <div>
                                <img
                                    src={chatIcon}
                                    height="15px"
                                    width="auto   "
                                    alt="status"
                                />
                            </div>
                            <div>
                                <img
                                    src={chatIcon}
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
                                src={chatIcon}
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
