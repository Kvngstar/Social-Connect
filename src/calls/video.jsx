import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'
import './styles/video.css'
import displayImage from '../assets/images/vi hub.jpg'
import groupadd from '../assets/images/group.svg'
import call from '../assets/images/call.svg'
import SenderAudio from './sender/audio'
import Reciever from './sender/reciever'
export default function VideoCall({socketState}) {
    const location = useLocation()
    console.log(socketState)
    const [declined, setDeclined] = useState(false)
    return (
        <div className="video-container d-flex align-items-center justify-content-center flex-column px-2 text-light bg-dark">
            <SenderAudio socketState={socketState} />
            <Reciever socketState={socketState} />
            <div className="video-wrap rounded bg-success w-100 px-2">
                <div className="d-flex align-items-center p-2 justify-content-between">
                    <div>Social Connect</div>
                    <div>Encrypted</div>
                    <div>X</div>
                </div>
                <div className="video-center bg-dark rounded d-flex flex-column justify-content-center align-items-center">
                    <img
                        src={displayImage}
                        className="round-image"
                        style={{ width: '100px', height: '100px' }}
                        alt=""
                    />
                    <div>Amylace</div>
                    <div>
                        {declined ? (
                            <small className="text-danger">Declined</small>
                        ) : (
                            <small className="calling">Calling</small>
                        )}
                    </div>
                </div>
                <div className="py-2 d-flex align-items-center justify-content-center">
                    <div>
                        <img
                            src={groupadd}
                            height="30px"
                            className="bg-light mx-1"
                            alt=""
                        />
                    </div>
                    <div>
                        <img
                            src={call}
                            height="30px"
                            className="bg-light mx-1"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}
