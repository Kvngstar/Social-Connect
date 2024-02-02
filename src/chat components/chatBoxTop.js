import React from 'react'
import video from '../assets/images/video.svg'
import call from '../assets/images/call.svg'
import search from '../assets/images/search.svg'
import SenderAudio from '../calls/functions/audio'
export default function ChatBoxTop({
    ShowGroupProfile,
    groupChatDisplay,
    setCallInit,
    socketState,
}) {
    function Init(event) {
        const type = event.target.getAttribute('for')

        setCallInit((v) => {
            return { ...v, isCall: true, type: type }
        })

        SenderAudio(socketState, groupChatDisplay.groupId)
    }
    return (
        <div className="chat-box-top">
            <div className="chat-box-top-img" onClick={ShowGroupProfile}>
                <div className="">
                    <img src={groupChatDisplay.profileImage} alt="image" />
                </div>
                <div>{groupChatDisplay.name} </div>
            </div>
            <div className="action-icons">
                <div onClick={Init} for="video" className="p-1 bg-light">
                    {' '}
                    <img
                        src={video}
                        height="15px"
                        width="auto   "
                        alt="status"
                        for="video"
                    />
                </div>
                <div onClick={Init} for="audio" className="p-1 bg-light">
                    <img
                        src={call}
                        height="15px"
                        width="auto   "
                        alt="status"
                        for="audio"
                    />
                </div>
                <div className="p-1 bg-light">
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
