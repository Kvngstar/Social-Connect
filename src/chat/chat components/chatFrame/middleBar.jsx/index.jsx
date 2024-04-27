import { jwtDecode } from "jwt-decode";
import { useState } from "react";
import getToken from "../../../../auths/jwt/authToken";
import "./chat.css";
import { CgProfile } from "react-icons/cg";
import { Login_Auth } from "../../../../auths/context/authContext";
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

	function getInput(event) {
		const { name, value } = event.target;
		setText(value);
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
						<div className="text-center mt-4 p-3 mx-4 bg-light text-success fw-bold rounded">
							Start Chatting Now
						</div>
					) : (
						data.groupMessages.map((v, index) => {
							return (
								<div
									className="textContainer"
									key={index}
								>
									{jwtDecode(auth.token)._id === v._userId ? (
										<div className=" customer_textbox">
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
													<CgProfile />

													<div className="ralewaymeduim ms-2 fontsize12">
														{" "}
														{v.text}
													</div>
												</span>
											)}
											<span className="chat_date p-1">
												{" "}
												<span className="customer_label me-1">
													{v.username}
												</span>
												{v.date}
											</span>
										</div>
									) : (
										<div className=" me-4 admin_textbox ">
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
													<CgProfile />
													<div className="poppinsemibold ms-2 fontsize12">
														{" "}
														{v.text}
													</div>
												</div>
											)}
											<span className="chat_date">
												{" "}
												<span className="admin_label me-1">{v.username}</span>
												{v.date}
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
