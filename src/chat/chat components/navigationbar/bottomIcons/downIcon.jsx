import React from "react";
import setting from "../../../../assets/images/settings.svg";
import profile from "../../../../assets/images/profile.svg";
import { IoSettingsOutline } from "react-icons/io5";
import { CgProfile } from "react-icons/cg";
export default function DownIcon({ toggleSettings, ShowProfile,userGroupData }) {
	return (
		<div className="down-icon">
			<div
				className="p-1  nav-item"
				onClick={(element) => {
					toggleSettings();
				}}
			>
				<IoSettingsOutline />
			</div>
			<div
				className="nav-item  p-1"
				onClick={(element) => {
					ShowProfile();
				}}
			>
				<img
					src={userGroupData.profileImage}
					height="30px"
                    width="30px"
                    className="rounded-circle"
					style={{objectFit:"cover"}}
					alt="status"
				/>
			</div>
		</div>
	);
}
