import React from 'react'
import setting from '../assets/images/settings.svg'
import profile from '../assets/images/profile.svg'

export default function DownIcon({
    
    toggleSettings,
    ShowProfile,
}) {
    return (
        <div className="down-icon">
            {/* <div>
        <img
            src={archive}
            height="22px"
            width="auto"
            alt="status"
        />
    </div> */}
            <div className='p-1  nav-item'
                onClick={(element) => {
                   
                    toggleSettings()
                }}
            
            >
                <img
                    src={setting}
                    height="22px"
                    width="auto"
                    alt="status"
                />
            </div>
            <div
                className="nav-item  p-1"
                onClick={(element) => {
              
                    ShowProfile()
                }}
            
            >
                <img
                    src={profile}
                    height="22px"
                    width="auto"
                    alt="status"
                    
                />
            </div>
        </div>
    )
}
