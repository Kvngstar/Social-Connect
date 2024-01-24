import React from 'react'
import groupAdd from '../assets/images/group-add.svg'
import displayImage from '../assets/images/vi hub.jpg'

export default function ProfilePopUp({
    groupControl,
    setGroupControl,
    showGroupInputFor,
    setGroupShowInputFor,
    ToggleProfileNav,
    groupChatDisplay,
}) {
    function ShowMembers() {
        setGroupControl((values) => {
            return {
                showGroupProfile: true,
                overview: false,
                members: true,
                media: false,
                links: false,
            }
        })
    }
    function ShowOverview() {
        setGroupControl((values) => {
            return {
                showGroupProfile: true,
                overview: true,
                members: false,
                media: false,
                links: false,
            }
        })
    }
    function ShowMedia() {
        setGroupControl((values) => {
            return {
                showGroupProfile: true,
                overview: false,
                members: false,
                media: true,
                links: false,
            }
        })
    }
    function Showlinks() {
        setGroupControl((values) => {
            return {
                showGroupProfile: true,
                overview: false,
                members: false,
                media: false,
                links: true,
            }
        })
    }

    function EditGroupInputForName() {
        setGroupShowInputFor((values) => {
            return {
                ...values,
                groupName: !showGroupInputFor.groupName,
            }
        })
    }
    function EditGroupInputForDescription() {
        console.log('Descrtiption Edit Block')
        setGroupShowInputFor((values) => {
            return {
                ...values,
                description: !showGroupInputFor.description,
            }
        })
    }

    function EditGroupInputForDisplayPhoto() {
        setGroupShowInputFor((values) => {
            return {
                ...values,
                displayPhoto: !showGroupInputFor.displayPhoto,
            }
        })
    }
    return (
        <>
                {groupControl.showGroupProfile && groupChatDisplay.showGroupChat && (
                <div className="profile-popup rounded d-flex">
                    <div className="group-menu bg-secondary d-flex flex-column p-1">
                        <div
                            className="active-item nav-item-profile rounded"
                            onClick={(event) => {
                                ShowOverview()
                                ToggleProfileNav(event)
                            }}
                        >
                            Overview{' '}
                        </div>
                        <div
                            className="nav-item-profile rounded"
                            onClick={(event) => {
                                ShowMembers()
                                ToggleProfileNav(event)
                            }}
                        >
                            Members
                        </div>
                        <div
                            className="nav-item-profile rounded"
                            onClick={(event) => {
                                ShowMedia()
                                ToggleProfileNav(event)
                            }}
                        >
                            Media
                        </div>
                        <div
                            className="nav-item-profile rounded"
                            onClick={(event) => {
                                Showlinks()
                                ToggleProfileNav(event)
                            }}
                        >
                            Links
                        </div>
                    </div>
                    <div className="view-group-menu bg-light">
                        {groupControl.overview == true && (
                            <div className="pt-3 px-3 pb-3 d-block">
                                <div>
                                    <img
                                        src={groupChatDisplay.profileImage}
                                        className="round-image"
                                        height="300px"
                                        width="300px"
                                        alt=""
                                    />
                                </div>
                                {showGroupInputFor.groupName ? (
                                    <div className="d-flex mb-2 mt-2 flex-column">
                                        <input
                                            type="text"
                                            name=""
                                            className="input"
                                            id=""
                                            placeholder="Change group name "
                                        />
                                        <div className="mt-2">
                                            <button className="w-50 btn-primary btn btn-sm">
                                                change
                                            </button>
                                            <button
                                                className="w-50 btn  btn-danger btn-sm"
                                                onClick={EditGroupInputForName}
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="d-flex justify-content-between">
                                        <div>{groupChatDisplay.name}</div>
                                        <div
                                            className=""
                                            onClick={EditGroupInputForName}
                                        >
                                            edit
                                        </div>
                                    </div>
                                )}
                                <div>
                                    Created
                                    <br />
                                    {groupChatDisplay.date}
                                </div>
                                {showGroupInputFor.description ? (
                                    <div className="d-flex mb-2 flex-column">
                                        <input
                                            type="text"
                                            name=""
                                            className="input"
                                            id=""
                                            placeholder="Change Group Description"
                                        />
                                        <div className="mt-2">
                                            <button className="w-50 btn-primary btn btn-sm">
                                                change
                                            </button>
                                            <button
                                                className="w-50 btn  btn-danger btn-sm"
                                                onClick={
                                                    EditGroupInputForDescription
                                                }
                                            >
                                                Cancel
                                            </button>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="d-flex justify-content-between">
                                        <div>
                                            Description
                                            <br />
                                            <div>
                                                <p>
                                                   {groupChatDisplay.description}
                                                    <div className="d-none">
                                                        <p>
                                                            We trust God for His
                                                            enabling grace to
                                                            show ultimate
                                                            concern to the
                                                            spiritual welfare of
                                                            the brethren and
                                                            students in the
                                                            campus.
                                                        </p>
                                                        Days of Fellowship
                                                        Sunday - 8:00am Tuesday
                                                        - 5:00pm Thursday -
                                                        5:00pm
                                                        <p>
                                                            P.S - Kindly note
                                                            that all fellowship
                                                            activities holds at
                                                            *Chemical
                                                            Engineering Building
                                                            (Main school)*. And
                                                            also 👇
                                                        </p>
                                                    </div>
                                                </p>
                                                <div>show more</div>
                                            </div>
                                        </div>
                                        <div
                                            onClick={
                                                EditGroupInputForDescription
                                            }
                                        >
                                            edit
                                        </div>
                                    </div>
                                )}
                            </div>
                        )}

                        {groupControl.members && (
                            <div className=" pt-3 px-3 pb-3">
                                <div className="bg-warning p-1">
                                    <div className="fw-bold px-3 mb-2">
                                        Members (238)
                                    </div>
                                    <div className="px-3">
                                        <input
                                            type="text"
                                            className="input mb-2"
                                        />
                                    </div>
                                    <div className="d-flex  justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="group-username-control">
                                                divine Nation ssss ss
                                            </div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                    <div className="d-flex o justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div>devmonk</div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                    <div className="d-flex  justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="group-username-control">
                                                divine Nation ssss ss
                                            </div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                    <div className="d-flex o justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div>devmonk</div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                    <div className="d-flex  justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="group-username-control">
                                                divine Nation ssss ss
                                            </div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                    <div className="d-flex o justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div>devmonk</div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                    <div className="d-flex  justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div className="group-username-control">
                                                divine Nation ssss ss
                                            </div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                    <div className="d-flex o justify-content-between bg-light rounded py-2">
                                        <div className="d-flex align-item-center">
                                            <div className="me-2  ps-2 ">
                                                <img
                                                    height="22px"
                                                    src={groupAdd}
                                                    alt=""
                                                />
                                            </div>
                                            <div>devmonk</div>
                                        </div>
                                        <div className="me-1">admin</div>
                                    </div>
                                </div>
                            </div>
                        )}
                        {groupControl.links && <div>{/* links */} Links</div>}
                    </div>
                </div>
            )}
        </>
    )
}
