import React from 'react'
import chatIcon from "../assets/images/message.svg"
import status from "../assets/images/add-whatsapp-status (1).svg"
import call from "../assets/images/call.svg"

export default function SideIcons({toggleNewChat,ToggleActiveNav}) {
  return (
    <div className="side-icon">
    <div className='nav-item p-1 '
        onClick={(element) => {
            ToggleActiveNav(element)
        }}
    >
        <img
            src={chatIcon}
            height="22px"
            width="auto   "
            alt="chat-icon"
        
        />
    </div>
    <div className='nav-item  p-1 '
     onClick={(element) => {
        ToggleActiveNav(element)
    }}>
        <img
            src={call}
            height="22px"
            width="auto"
            alt="call"
        />
    </div>
    <div className='nav-item p-1 '
     onClick={(element) => {
        ToggleActiveNav(element)
    }}>
        <img
            src={status}
            height="22px"
            width="auto   "
            alt="status"
        />
    </div>
</div>
  )
}
