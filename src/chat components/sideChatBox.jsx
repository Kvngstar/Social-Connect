import React, { useState } from 'react'
import { jwtDecode } from 'jwt-decode'
import GetToken from '../sessionManager/getToken'
import groupAdd from '../assets/images/group-add.svg'
import displayImage from '../assets/images/vi hub.jpg'

export default function SideChatBox({
    toggleNewChat,
    loadedData,
    DisplayChats,
    CloseUpClone,
    lastMessage
}) {
    const token = GetToken('x-auth')
    let decodedData = jwtDecode(token)
    let num = -1
    const [groupData, setGroupData] = useState(jwtDecode(token).groups)
    return (
        <div className="chats bg-dark text-light">
            <div className="center-bar">
                <div>Chats</div>
                <div>
                    <div>
                        <img
                            src={groupAdd}
                            height="22px"
                            width="auto   "
                            alt="status"
                            onClick={toggleNewChat}
                            className="bg-light"
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
            <div onClick={CloseUpClone}>
                <div className="container-short-box">
                    {loadedData.length > 0 ? (
                        loadedData.map((v) => {
                            num++
                            return (
                                <div key={v._id}
                                    className="short-box pe-2  rounded py-2"
                                    onClick={() => {
                                        DisplayChats(
                                            v.groupIcon,
                                            v.groupName,
                                            v.groupDescription,
                                            v.creationDate,
                                            v.members,
                                            '1234',
                                            v.groupMessages,
                                            v.adminUsername,
                                            v._id
                                        )
                                    }}
                                >
                                    <div className="d-flex px-3 justify-content-between  align-items-center ">
                                        <div className="d-flex handle-overflow">
                                            <div className="me-1">
                                                <img
                                                    src={displayImage}
                                                    className="round-image"
                                                    alt=""
                                                />
                                            </div>
                                            <div className="me-3 "> 
                                                <div>{v.groupName}</div>

                                                <div className='last-message'_id={v._id}>
                                                    { v.groupMessages.length < 1
                                                        ? ''
                                                        : v.groupMessages[
                                                              v.groupMessages 
                                                                  .length - 1
                                                          ].type == 'image'
                                                        ? 'image file'
                                                        : v.groupMessages[
                                                              v.groupMessages
                                                                  .length - 1
                                                          ].text}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="d-flex ps-3 justify-content-between">
                                            <div className="d-flex flex-column">
                                                <div>
                                                    <small>
                                                        <small>
                                                            {v.groupMessages
                                                                .length > 0
                                                                ? v
                                                                      .groupMessages[
                                                                      v
                                                                          .groupMessages
                                                                          .length -
                                                                          1
                                                                  ].date
                                                                : ''}
                                                        </small>
                                                    </small>
                                                </div>
                                                <div className="align-self-end">
                                                    <span className="bg-success rounded px-1 text-light">
                                                        {/* {
                                                        jwtDecode(token).groups[
                                                            num
                                                        ].numberOfNewMessages
                                                    } */}
                                                        0
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    ) : (
                        <div className=" short-box pe-2  rounded py-2">
                            <div className="d-flex px-3 justify-content-between  align-items-center ">
                                <div className="d-flex handle-overflow">
                                    <div className="me-1">
                                        <img
                                            src=""
                                            className="round-image"
                                            alt=""
                                        />
                                    </div>
                                    <div className="me-3 ">
                                        <div>Join Public Groups</div>

                                        <div>
                                            <small>or Create one</small>
                                        </div>
                                    </div>
                                </div>
                                <div className="d-flex ps-3 justify-content-between">
                                    <div className="d-flex flex-column">
                                        <div>now</div>
                                        <div className="align-self-end">
                                            <span className="bg-success rounded px-1 text-light">
                                                1
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
