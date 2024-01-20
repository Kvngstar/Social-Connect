import React from 'react'
import setting from "../assets/images/settings.svg"
import profile from "../assets/images/profile.svg"


export default function DownIcon({toggleSettings,ShowProfile}) {
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
    <div>
        <img
            src={setting}
            height="22px"
            width="auto"
            alt="status"
            onClick={toggleSettings}
            className='bg-light'
            />
    </div>
    <div>
        <img
            src={profile}
            height="22px"
            width="auto"
            alt="status"
            onClick={ShowProfile}
            className='bg-light'
        />
    </div>
</div>
  )
}
