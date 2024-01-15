import React from 'react'
import video from '../assets/images/video.svg'
import call from '../assets/images/call.svg'
import displayImage from '../assets/images/vi hub.jpg'
import search from '../assets/images/search.svg'

export default function ChatBoxTop() {
  return (
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
  )
}
