import React from 'react'
import groupAdd from "../assets/images/group-add.svg"
import displayImage from "../assets/images/vi hub.jpg"
export default function CreateNewGroup() {
  return (
    <div> <div className="p-1">
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
        <div className="d-flex mt-2 bg-light rounded py-2">
                <div className="px-2  ">
                    <input type="checkbox" name="" id="" />                </div>
                <div>Private Group</div>
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
