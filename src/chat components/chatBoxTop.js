import React from 'react'
import video from '../assets/images/video.svg'
import call from '../assets/images/call.svg'
import displayImage from '../assets/images/vi hub.jpg'
import search from '../assets/images/search.svg'

export default function ChatBoxTop({ShowGroupProfile,groupChatDisplay}) {
  return (
    <div className="chat-box-top">
                        <div className="chat-box-top-img" onClick={ShowGroupProfile}>
                            <div className="">
                                <img src={groupChatDisplay.profileImage} alt="image" />
                            </div>
                            <div>{groupChatDisplay.name} </div>
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
  )
}
