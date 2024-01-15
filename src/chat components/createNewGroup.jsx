import React from 'react'
import groupAdd from "../assets/images/group-add.svg"
import displayImage from "../assets/images/vi hub.jpg"
export default function CreateNewGroup() {
  return (
    <div> <div className="p-1 d-block">
    <div className="d-flex align-items-center mt-1 bg-light px-2 rounded py-2">
        <div>
            <img
                src={displayImage}
                className="round-image"
                alt=""
            />
        </div> 
        <div>
            <small>Add group icon (optional)</small>
        </div>
    </div>
    <div className=" rounded py-2">
        <div>Provide group name</div>
        <div>
            <input
                type="text"
                className="input"
                placeholder="*mandatory"
            />
        </div>
        <div className="d-flex bg-light rounded py-2">
                <div className="me-2  px-3 ">
                    <img height="22px" src={groupAdd} alt="" />
                </div>
                <div>New user</div>
            </div>
        <div>
            <div className="d-flex  mt-5 align-items-center mt-3">
                <div className="w-50">
                    <button className="btn  btn-primary btn-sm w-100">
                        Create
                    </button>
                </div>
                <div className="w-50">
                    <button className="btn btn-warning btn-sm w-100">
                        Cancel
                    </button>
                </div>
            </div>
        </div>
    </div>
</div></div>
  )
}
