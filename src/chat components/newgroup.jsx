import React from 'react'
import groupAdd from "../assets/images/group-add.svg"

export default function NewChat() {
    return (
        <div className="new-group d-none p-1">
            <div className="fw-bold px-3">NEW CHAT</div>
            <div className="px-3">
                <input type="text" className="input" />
            </div>
            <div className="d-flex mt-2 bg-light  rounded py-2">
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
    )
}
