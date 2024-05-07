import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import getToken from "../../../../auths/jwt/authToken";
import "./chat.css";
import { CgProfile } from "react-icons/cg";
import { Login_Auth } from "../../../../auths/context/authContext";
import { useThemecontext } from "../../../../auths/context/themeContext";
const MessageArea = ({
	data,
	getDom,
	group_control,
	unReadMessage,
	scrollInToView,
}) => {
	const [showIcon, setShowIcon] = useState(false);
	const [text, setText] = useState("");
	const auth = Login_Auth();
	const theme = useThemecontext();
	// const [prevDate, setPrevDate] = useState(
	// 	new Date(data?.groupMessages[0]?.date).toISOString().slice(0, 10) ||
	// 		new Date()
	// );

	function getInput(event) {
		const { name, value } = event.target;
		setText(value);
	}
	function IsItYesterday(givenDateString) {
		// Get the current date
		const currentDate = new Date();

		// Get yesterday's date by subtracting one day (24 hours) from the current date
		const yesterdayDate = new Date(currentDate);
		yesterdayDate.setDate(currentDate.getDate() - 1);

		// Given date to check (e.g., "2024-05-07T06:54:54.391Z")

		const givenDate = new Date(givenDateString);

		// Compare if the given date is equal to yesterday's date
		if (givenDate.toDateString() === yesterdayDate.toDateString()) {
			return true;
		} else {
			return false;
		}
	}
	function IsItToday(incomingDate) {
		const currentDate = new Date().toDateString();
		const incomingDateReformed = new Date(incomingDate).toDateString();
		if (incomingDateReformed === currentDate) {
			return true;
		} else {
			return false;
		}
	}

	const viewImageFullscreen = (event) => {
		event.target.requestFullscreen();
	};

	return (
		<div className="messageUs rounded box-position">
			{unReadMessage > 0 && (
				<div
					onClick={scrollInToView}
					className="rounded d-inline position-absolute z-1 pop_up d-flex align-items-center"
				>
					<div
						className="bg-success rounded-circle text-light d-flex align-items-center justify-content-center me-1 "
						style={{ width: "20px", height: "20px" }}
					>
						{" "}
						<small>{unReadMessage}</small>{" "}
					</div>
					<div>unread messages</div>
				</div>
			)}
			<div
				className="chatBox"
				ref={getDom}
			>
				<div className="scrollable">
					{group_control.showGroupChat && data.groupMessages.length < 1 ? (
						<div className="text-center mt-4 p-3 mx-4  text-success fw-bold rounded">
							Start chatting now 💚
						</div>
					) : (
						data.groupMessages.map((v, index) => {
							return (
								<div
									className="textContainer"
									key={index}
								>
									{index &&
									new Date(v.date).toISOString().slice(0, 10) >
										new Date(data.groupMessages[index - 1].date)
											.toISOString()
											.slice(0, 10) ? (
										<div className="text-center my-2 ">
											<span className="bg-success p-2 rounded-pill">
												<small>
													{IsItToday(v.date)
														? "Today"
														: IsItYesterday(v.date)
														? "Yesterday"
														: new Date(v.date).toDateString()}
												</small>
											</span>{" "}
										</div>
									) : (
										""
									)}

									{v.type !== "joined" &&
									v.type !== "left" &&
									jwtDecode(auth.token)._id === v._userId ? (
										<div
											className={
												"customer_textbox " +
												(theme.isLight ? "textbox_light" : "textbox_dark")
											}
										>
											{v.type === "image" ? (
												<div>
													<img
														src={v.text}
														alt=""
														height="200px"
														onClick={viewImageFullscreen}
													/>
												</div>
											) : (
												<span className="d-flex align-items-center  mb-2">
													<CgProfile size={20} />

													<div className="ralewaymeduim ms-2 fontsize12">
														{" "}
														{v.text}
													</div>
												</span>
											)}
											<span className="chat_date p-1">
												{" "}
												<span
													className={
														"customer_label me-1 " +
														(theme.isLight ? "white_label" : "dark_label")
													}
												>
													{v.username}
												</span>
												{new Date(v.date).toLocaleTimeString([], {
													hour: "2-digit",
													minute: "2-digit",
												})}
											</span>
										</div>
									) : v.type !== "joined" && v.type !== "left" ? (
										<div
											className={
												"me-4 admin_textbox " +
												(theme.isLight ? "textbox_light" : "textbox_dark")
											}
										>
											{v.type === "image" ? (
												<div>
													<img
														src={v.text}
														alt=""
														height="200px"
														onClick={viewImageFullscreen}
													/>
												</div>
											) : (
												<div className="d-flex align-items-center mb-2">
													<CgProfile size={20} />
													<div className="poppinsemibold ms-2 fontsize12">
														{" "}
														{v.text}
													</div>
												</div>
											)}
											<span className="chat_date">
												{" "}
												<span
													className={
														"admin_label me-1 " +
														(theme.isLight ? "white_label" : "dark_label")
													}
												>
													{v.username}
												</span>
												{new Date(v.date).toLocaleTimeString([], {
													hour: "2-digit",
													minute: "2-digit",
												})}
											</span>
										</div>
									) : v.type === "joined" ? (
										<div className="text-center ">
											<span className="bg-success  p-2 rounded-pill ">
												<small>
													<small>{v.text}</small>
												</small>
											</span>
										</div>
									) : (
										<div className="text-center ">
											<span className="bg-info  p-2 rounded-pill ">
												<small>
													<small>{v.text}</small>
												</small>
											</span>
										</div>
									)}
								</div>
							);
						})
					)}{" "}
				</div>
			</div>
		</div>
	);
};

export default MessageArea;
