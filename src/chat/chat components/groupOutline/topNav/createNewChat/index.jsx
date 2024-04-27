import React from "react";
import groupAdd from "../../../../../assets/images/group-add.svg";
import { GrGroup } from "react-icons/gr";
import { LuUser2 } from "react-icons/lu";

export default function NewChat({ setControls, setShowCreateGroup, controls }) {
	function NewGroup() {
		setControls((values) => {
			return {
				...values,

				newChat: !controls.newChat,
				next: !controls.next,
			};
		});
	}

	return (
		<div className="new-group text-dark d-block p-1">
			<div className="fw-bold px-3">NEW CHAT</div>
			{/* <div className="px-3">
                <input type="text" className="input" />
            </div> */}
			<div
				className="d-flex mt-2 hoverProp  rounded py-2"
				onClick={NewGroup}
			>
				<div className="me-2  px-3 ">
					<GrGroup />
				</div>
				<div>New group</div>
			</div>
			<div className="d-flex hoverProp rounded py-2">
				<div className="me-2  px-3 ">
					<LuUser2 />
				</div>
				<div>New user</div>
			</div>
		</div>
	);
}
