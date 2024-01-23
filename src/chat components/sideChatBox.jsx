import React, {useState} from 'react'
import { jwtDecode } from 'jwt-decode'
import GetToken from '../sessionManager/getToken'
import groupAdd from '../assets/images/group-add.svg'
import displayImage from '../assets/images/vi hub.jpg'

export default function SideChatBox({ toggleNewChat, loadedData,DisplayChats }) {
    const token = GetToken('x-auth')
    let decodedData = jwtDecode(token)
    let num = -1;
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
            <div className="container-short-box">
                {loadedData.length > 0 &&
                    loadedData.map((v) => {
                        // profileImage,
                        // name,
                        // description,
                        // date,
                        // members,
                        // link,
                        // messages
                  num++;

                        return (
                            <div className=" short-box pe-2  rounded py-2" onClick={()=>{
                                DisplayChats(v.profile,v.groupName,v.groupDescription,v.creationDate,v.groupParticipants,"123",v.groupMessages)
                            }}>
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
                                            <div>
                                                {v.groupName}
                                            </div> 

                                            <div>{v.groupMessages[v.groupMessages.length-1].text}</div>
                                        </div>
                                    </div>
                                    <div className="d-flex ps-3 justify-content-between">
                                        <div className="d-flex flex-column">
                                            <div>Yesterday</div>
                                            <div className="align-self-end">
                                                <span className="bg-success rounded px-1 text-light">
                                                   {jwtDecode(token).groups[num].numberOfNewMessages}
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
            </div>
        </div>
    )
}
