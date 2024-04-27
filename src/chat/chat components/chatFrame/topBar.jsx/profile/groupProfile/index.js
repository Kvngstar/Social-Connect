import React from "react";
import { DecodedToken } from "../../../../../../auths/jwt/authToken";
import LinkGenerator from "./link/generateLink";
import Members from "./members/members";
import Overview from "./overview/overview";
import { RiErrorWarningLine } from "react-icons/ri";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GoFileMedia } from "react-icons/go";
import { MdOutlineInsertLink } from "react-icons/md";

export default function ProfilePopUp({
	data,
	setLoadedData,
	socket,
	activeChat,
	groupControl,
	setGroupControl,
}) {
	const ToggleProfileNav = (element) => {
		let navItems = document.querySelectorAll(".nav-item-profile");
		navItems.forEach((item) => {
			item.classList.remove("active-item");
		});
		if (
			element.target.localName !== "svg" &&
			element.target.localName !== "path" &&
			element.target.localName !== "span"
		) {
			if (!element.target.classList.contains("active-items")) {
				element.target.classList.add("active-item");
			}
		} else if (
			element.target.localName === "span" ||
			element.target.localName === "svg"
		) {
			const elem = element.target.parentElement;
			if (!elem.classList.contains("active-item")) {
				elem.classList.add("active-item");
			}
		} else if (element.target.localName === "path") {
			const elem = element.target.parentElement.parentElement.parentElement;
			if (!elem.classList.contains("active-item")) {
				elem.classList.add("active-item");
			}
		} else if (element.target.localName === "svg") {
			const elem = element.target.parentElement.parentElement;
			if (!elem.classList.contains("active-item")) {
				elem.classList.add("active-item");
			}
		}
	};

	const ShowMembers = () => {
		setGroupControl((values) => {
			return {
				overview: false,
				members: true,
				media: false,
				links: false,
			};
		});
	};
	const ShowOverview = () => {
		setGroupControl((values) => {
			return {
				overview: true,
				members: false,
				media: false,
				links: false,
			};
		});
	};
	const ShowMedia = () => {
		setGroupControl((values) => {
			return {
				overview: false,
				members: false,
				media: true,
				links: false,
			};
		});
	};
	const Showlinks = () => {
		setGroupControl((values) => {
			return {
				overview: false,
				members: false,
				media: false,
				links: true,
			};
		});
	};

	return (
		<>
			<div className="profile-popup rounded d-flex">
				<div className="group-menu white_grad1  d-flex flex-column p-1">
					<div
						className="active-item d-flex align-items-center nav-item-profile rounded"
						onClick={(event) => {
							ShowOverview();
							ToggleProfileNav(event);
						}}
					>
						<RiErrorWarningLine />
						<span className="px-1"> Overview</span>
					</div>
					<div
						className="nav-item-profile rounded d-flex align-items-center"
						onClick={(event) => {
							ShowMembers();
							ToggleProfileNav(event);
						}}
					>
						<span className="px-1">
							<HiOutlineUserGroup />
						</span>
						<span>Members</span>
					</div>
					<div
						className="nav-item-profile rounded d-flex align-items-center"
						onClick={(event) => {
							ShowMedia();
							ToggleProfileNav(event);
						}}
					>
						<span className="px-1">
							<GoFileMedia />
						</span>
						<span>Media</span>
					</div>

					{DecodedToken().username === data.adminUsername && (
						<div
							className="nav-item-profile rounded d-flex align-items-center"
							onClick={(event) => {
								Showlinks();
								ToggleProfileNav(event);
							}}
						>
							<span className="px-1">
								<MdOutlineInsertLink />
							</span>
							<span>Links</span>
						</div>
					)}
				</div>
				<div className="view-group-menu rounded white_grad2">
					{groupControl.overview && <Overview data={data} />}

					{groupControl.members && <Members data={data} />}

					{groupControl.links &&
						DecodedToken().username === data.adminUsername && (
							<LinkGenerator
								socket={socket}
								setLoadedData={setLoadedData}
								activeChat={activeChat}
								link={data.inviteLinke}
							/>
						)}
				</div>
			</div>
		</>
	);
}
