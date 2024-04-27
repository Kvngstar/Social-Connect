import React from "react";
import GroupOutlineCont from "./groupBlock/block";
import NoGroupOutline from "./noGroupBlock/block";

export default function Outline({ loadedData, DisplayChats, userGroupData }) {
	return (
		<div className="container-short-box">
			{loadedData.length > 0 ? (
				loadedData.map((v) => {
					return (
						<GroupOutlineCont
                        v={v}
							DisplayChats={DisplayChats}
							loadedData={loadedData}
							userGroupData={userGroupData}
						/>
					);
				})
			) : (
				<NoGroupOutline />
			)}
		</div>
	);
}
