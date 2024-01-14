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
import send from '../../src/assets/images/send.svg'
import smiley from '../../src/assets/images/smiley.svg'
import attachment from '../../src/assets/images/attachment.svg'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/chatInterface.css'
export default function ChatInterface() {
    return (
        <div className="hero-section bg-primary">
            <div className="side-menu">
                <div className="new-group d-none p-1">
                    <div className="fw-bold px-3">NEW CHAT</div>
                    <div className="px-3">
                        <input type="text" className="input" />
                    </div>
                    <div className="d-flex mt-2 bg-light rounded py-2">
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

                <div className="create-new-group d-none p-2">
                    <div className="fw-bold px-3">New Group</div>
                    <div className="px-3">
                        <input
                            placeholder="Search"
                            type="text"
                            className="w-100  input mt-2"
                        />
                    </div>
                    <div className="p-1 d-block">
                        <div className="d-flex align-items-center mt-1 bg-light px-2 rounded py-2">
                            <div>
                                <img
                                    src={displayImage}
                                    className="round-image"
                                    alt=""
                                />
                            </div>
                            <div>
                                <small>Add group icon (optional)</small>
                            </div>
                        </div>
                        <div className=" rounded py-2">
                            <div>Provide group name</div>
                            <div>
                                <input
                                    type="text"
                                    className="input"
                                    placeholder="*mandatory"
                                />
                            </div>
                            <div>
                                <div className="d-flex  mt-5 align-items-center mt-3">
                                    <div className="w-50">
                                        <button className="btn  btn-primary btn-sm w-100">
                                            Create
                                        </button>
                                    </div>
                                    <div className="w-50">
                                        <button className="btn btn-warning btn-sm w-100">
                                            Cancel
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-none">
                        <div className="d-flex  align-items-center mt-3">
                            <div className="w-50">
                                <button className="btn  btn-primary btn-sm w-100">
                                    cancel
                                </button>
                            </div>
                            <div className="w-50">
                                <button className="btn btn-warning btn-sm w-100">
                                    next
                                </button>
                            </div>
                        </div>
                        <div className="mt-2 mb-2">All friends</div>
                        <div className="new-group-overview">
                            <div className="d-flex justify-content-between align-items-center pe-2 bg-light rounded py-2">
                                <div className="d-flex  align-items-center">
                                    <div className="px-3">
                                        <img
                                            height="22px"
                                            src={groupAdd}
                                            alt=""
                                        />
                                    </div>
                                    <div>New user</div>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        id=""
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pe-2 bg-light rounded py-2">
                                <div className="d-flex  align-items-center">
                                    <div className="px-3">
                                        <img
                                            height="22px"
                                            src={groupAdd}
                                            alt=""
                                        />
                                    </div>
                                    <div>New user</div>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        id=""
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pe-2 bg-light rounded py-2">
                                <div className="d-flex  align-items-center">
                                    <div className="px-3">
                                        <img
                                            height="22px"
                                            src={groupAdd}
                                            alt=""
                                        />
                                    </div>
                                    <div>New user</div>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        id=""
                                    />
                                </div>
                            </div>
                            <div className="d-flex justify-content-between align-items-center pe-2 bg-light rounded py-2">
                                <div className="d-flex  align-items-center">
                                    <div className="px-3">
                                        <img
                                            height="22px"
                                            src={groupAdd}
                                            alt=""
                                        />
                                    </div>
                                    <div>@New user</div>
                                </div>
                                <div>
                                    <input
                                        type="checkbox"
                                        name="checkbox"
                                        id=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="settings">
                    <div className="bg-light settings-popup rounded d-none">
                        <div className="group-menu bg-secondary d-flex flex-column">
                            <div className="bg-success">General</div>
                            <div>Account</div>
                            <div>Chats</div>
                            <div>Help</div>
                        </div>
                        <div className="view-profile-menu">
                            <div className="pt-3 px-3 pb-3 d-none">
                                <div>General</div>
                                <div className="mt-3 mb-2">
                                    <div className="mb-2">Language</div>
                                    <select
                                        name="language"
                                        className="form-select"
                                        id=""
                                    >
                                        <option value="">System default</option>
                                        <option value="">English</option>
                                        <option value="">French</option>
                                        <option value="">Russian</option>
                                    </select>
                                </div>

                                <div className="d-flex">
                                    <div className="w-100">
                                        <button className="btn  btn-danger btn-sm w-100">
                                            Log out
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-3 px-3 pb-3 d-none">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>Messages</div>
                                    <div>
                                        <input type="radio" name="" id="" />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3 px-3 pb-3 d-none">
                                <div className="d-flex flex-column">
                                    <div>Social Connect for Web </div>
                                    <div>
                                        <small>Version 1.0.0</small>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex flex-column">
                                    <div>Contact us </div>
                                    <div>
                                        <small>
                                            We will like to know your thoughts
                                            about this app
                                        </small>
                                        <div>
                                            <a href="#">
                                                <small>Contact Us</small>
                                            </a>
                                        </div>
                                        <hr />
                                        <div>
                                            <a href="#">
                                                <small>Help center</small>
                                            </a>
                                            <br />
                                            <a href="#">
                                                <small>Licenses</small>
                                            </a>
                                            <br />
                                            <a href="#">
                                                <small>
                                                    Terms and Privacy Policy
                                                </small>
                                            </a>
                                        </div>
                                        <hr />
                                        <div>2024 @ Social Connect Inc.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3 px-3 pb-3">
                                <div>
                                    <img
                                        src={displayImage}
                                        className="round-image mb-2"
                                        height="400px"
                                        width="400px"
                                        alt=""
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>{'<Devmonk>'} </div>
                                    <div className="">edit</div>
                                </div>
                                <div className="d-flex justify-content-between  mt-2">
                                    <div className="d-flex flex-column">
                                        <div>About</div>
                                        <div>Selfless and Kind</div>{' '} 
                                    </div>
                                    <div className="">edit</div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <div className="d-flex flex-column ">
                                        <div>phone number</div>
                                        <div>09030299983</div>{' '}
                                    </div>
                                    <div className="">edit</div>
                                </div>
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
                    {/* <div>
                        <img
                            src={archive}
                            height="22px"
                            width="auto"
                            alt="status"
                        />
                    </div> */}
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

                <div className="space bg-info position-relative">
                    <div className="bg-light profile-popup rounded d-none">
                        <div className="group-menu bg-secondary d-flex flex-column">
                            <div className="bg-success">Overview </div>
                            <div>Members</div>
                            <div>Media</div>
                            <div>Links</div>
                        </div>
                        <div className="view-group-menu">
                            <div className="pt-3 px-3 pb-3 d-none">
                                <div>
                                    <img
                                        src={displayImage}
                                        className="round-image"
                                        height="300px"
                                        width="300px"
                                        alt=""
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>CHOSEN CAMPUS LIGHT, FUTO</div>
                                    <div className="">edit</div>
                                </div>
                                <div>
                                    Created
                                    <br />
                                    7/20/2017 9:48 PM
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>
                                        Description
                                        <br />
                                        <div>
                                            <p>
                                                The Lord Chosen Campus
                                                Fellowship, FUTO has been
                                                birthed to help in achieving the
                                                vision.
                                                <div className="d-none">
                                                    <p>
                                                        We trust God for His
                                                        enabling grace to show
                                                        ultimate concern to the
                                                        spiritual welfare of the
                                                        brethren and students in
                                                        the campus.
                                                    </p>
                                                    Days of Fellowship Sunday -
                                                    8:00am Tuesday - 5:00pm
                                                    Thursday - 5:00pm
                                                    <p>
                                                        P.S - Kindly note that
                                                        all fellowship
                                                        activities holds at
                                                        *Chemical Engineering
                                                        Building (Main school)*.
                                                        And also 👇
                                                    </p>
                                                </div>
                                            </p>
                                            <div>show more</div>
                                        </div>
                                    </div>
                                    <div>edit</div>
                                </div>
                                <div className="d-flex  align-items-center ">
                                    <div className="w-50">
                                        <button className="btn  btn-primary btn-sm w-100">
                                            cancel
                                        </button>
                                    </div>
                                    <div className="w-50">
                                        <button className="btn btn-warning btn-sm w-100">
                                            next
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="d-none pt-3 px-3 pb-3">
                                <div className="bg-warning p-1">
                                    <div className="fw-bold px-3 mb-2">
                                        Members (238)
                                    </div>
                                    <div className="px-3">
                                        <input
                                            type="text"
                                            className="input mb-2"
                                        />
                                    </div>
                                    <div className="d-flex  justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="group-username-control">
                                                divine Nation ssss ss
                                            </div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                    <div className="d-flex o justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div>devmonk</div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                    <div className="d-flex  justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="group-username-control">
                                                divine Nation ssss ss
                                            </div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                    <div className="d-flex o justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div>devmonk</div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                    <div className="d-flex  justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="group-username-control">
                                                divine Nation ssss ss
                                            </div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                    <div className="d-flex o justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div>devmonk</div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                    <div className="d-flex  justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="group-username-control">
                                                divine Nation ssss ss
                                            </div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                    <div className="d-flex o justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div>devmonk</div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                </div>
                            </div>
                            <div>{/* links */}</div>
                        </div>
                    </div>
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
                    <div className="content-area"></div>
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
