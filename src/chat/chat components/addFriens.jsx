import React from "react";
import groupAdd from "../assets/images/group-add.svg";

export default function AddFriends({ AddFriends, Next }) {
	return (
		<>
			{AddFriends && (
				<div>
					<div className="d-flex  align-items-center mt-3">
						<div className="w-50">
							<button className="btn  btn-primary btn-sm w-100">cancel</button>
						</div>
						<div className="w-50">
							<button
								className="btn btn-warning btn-sm w-100"
								onClick={Next}
							>
								next
							</button>
						</div>
					</div>
					<div className="mt-2 mb-2">All friends</div>
					<div className="new-group-overview">
						<div className="d-flex justify-content-between align-items-center pe-2 rounded py-2">
							<div className="d-flex  align-items-center">
								<div className="px-3">
									<img
										height="22px"
										src={groupAdd}
										alt=""
									/>
								</div>
								<div>New user</div>
							</div>
							<div>
								<input
									type="checkbox"
									name="checkbox"
									id=""
								/>
							</div>
						</div>
						<div className="d-flex justify-content-between align-items-center pe-2 rounded py-2">
							<div className="d-flex  align-items-center">
								<div className="px-3">
									<img
										height="22px"
										src={groupAdd}
										alt=""
									/>
								</div>
								<div>New user</div>
							</div>
							<div>
								<input
									type="checkbox"
									name="checkbox"
									id=""
								/>
							</div>
						</div>
						<div className="d-flex justify-content-between align-items-center pe-2  rounded py-2">
							<div className="d-flex  align-items-center">
								<div className="px-3">
									<img
										height="22px"
										src={groupAdd}
										alt=""
									/>
								</div>
								<div>New user</div>
							</div>
							<div>
								<input
									type="checkbox"
									name="checkbox"
									id=""
								/>
							</div>
						</div>
						<div className="d-flex justify-content-between align-items-center pe-2 rounded py-2">
							<div className="d-flex  align-items-center">
								<div className="px-3">
									<img
										height="22px"
										src={groupAdd}
										alt=""
									/>
								</div>
								<div>@New user</div>
							</div>
							<div>
								<input
									type="checkbox"
									name="checkbox"
									id=""
								/>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
