import React from 'react'
import smiley from "../assets/images/smiley.svg"
import attachment from "../assets/images/attachment.svg"
import send from "../assets/images/send.svg"
export default function Textarea() {
    return (
        <div className="text-area">
            <div className="icon-attachment">
                <div>
                    <img
                        src={smiley}
                        height="15px"
                        width="auto"
                        alt="status"
                    />
                </div>
                <div>
                    <img
                        src={attachment}
                        height="15px"
                        width="auto"
                        alt="status"
                    />
                </div>
            </div>
            <div className="textbox">
                <input type="text" placeholder="Type a message" />
            </div>
            <div>
                <img src={send} height="15px" width="auto   " alt="status" />
            </div>
        </div>
    )
}
