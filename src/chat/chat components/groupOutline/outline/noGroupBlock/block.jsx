import React from "react";

export default function NoGroupOutline() {
	return (
		<div className=" short-box pe-2  rounded py-2">
			<div className="d-flex px-3 justify-content-between  align-items-center ">
				<div className="d-flex handle-overflow">
					<div className="me-1">
						<img
							src=""
							className="round-image"
							alt=""
						/>
					</div>
					<div className="me-3 ">
						<div>Join Public Groups</div>

						<div>
							<small>or Create one</small>
						</div>
					</div>
				</div>
				<div className="d-flex ps-3 justify-content-between">
					<div className="d-flex flex-column">
						<div>now</div>
						<div className="align-self-end">
							<span className="bg-success rounded px-1 text-light">#</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
