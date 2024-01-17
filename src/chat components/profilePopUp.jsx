import React from 'react'
import groupAdd from '../assets/images/group-add.svg'
import displayImage from '../assets/images/vi hub.jpg'

export default function ProfilePopUp() {
    return (
        <div className="profile-popup rounded d-flex">
            <div className="group-menu bg-secondary d-flex flex-column">
                <div className="bg-success">Overview </div>
                <div>Members</div>
                <div>Media</div>
                <div>Links</div>
            </div>
            <div className="view-group-menu bg-light">
                <div className="pt-3 px-3 pb-3 d-block">
                    <div>
                        <img
                            src={displayImage}
                            className="round-image"
                            height="300px"
                            width="300px"
                            alt=""
                        />
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>CHOSEN CAMPUS LIGHT, FUTO</div>
                        <div className="">edit</div>
                    </div>
                    <div>
                        Created
                        <br />
                        7/20/2017 9:48 PM
                    </div>
                    <div className="d-flex justify-content-between">
                        <div>
                            Description
                            <br />
                            <div>
                                <p>
                                    The Lord Chosen Campus Fellowship, FUTO has
                                    been birthed to help in achieving the
                                    vision.
                                    <div className="d-none">
                                        <p>
                                            We trust God for His enabling grace
                                            to show ultimate concern to the
                                            spiritual welfare of the brethren
                                            and students in the campus.
                                        </p>
                                        Days of Fellowship Sunday - 8:00am
                                        Tuesday - 5:00pm Thursday - 5:00pm
                                        <p>
                                            P.S - Kindly note that all
                                            fellowship activities holds at
                                            *Chemical Engineering Building (Main
                                            school)*. And also 👇
                                        </p>
                                    </div>
                                </p>
                                <div>show more</div>
                            </div>
                        </div>
                        <div>edit</div>
                    </div>
                    <div className="d-flex  align-items-center ">
                        <div className="w-50">
                            <button className="btn  btn-primary btn-sm w-100">
                                cancel
                            </button>
                        </div>
                        <div className="w-50">
                            <button className="btn btn-warning btn-sm w-100">
                                next
                            </button>
                        </div>
                    </div>
                </div>

                <div className="d-none pt-3 px-3 pb-3">
                    <div className="bg-warning p-1">
                        <div className="fw-bold px-3 mb-2">Members (238)</div>
                        <div className="px-3">
                            <input type="text" className="input mb-2" />
                        </div>
                        <div className="d-flex  justify-content-between bg-light rounded py-2">
                            <div className="d-flex align-item-center">
                                <div className="me-2  ps-2 ">
                                    <img height="22px" src={groupAdd} alt="" />
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
                                    <img height="22px" src={groupAdd} alt="" />
                                </div>
                                <div>devmonk</div>
                            </div>
                            <div className="me-1">admin</div>
                        </div>
                        <div className="d-flex  justify-content-between bg-light rounded py-2">
                            <div className="d-flex align-item-center">
                                <div className="me-2  ps-2 ">
                                    <img height="22px" src={groupAdd} alt="" />
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
                                    <img height="22px" src={groupAdd} alt="" />
                                </div>
                                <div>devmonk</div>
                            </div>
                            <div className="me-1">admin</div>
                        </div>
                        <div className="d-flex  justify-content-between bg-light rounded py-2">
                            <div className="d-flex align-item-center">
                                <div className="me-2  ps-2 ">
                                    <img height="22px" src={groupAdd} alt="" />
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
                                    <img height="22px" src={groupAdd} alt="" />
                                </div>
                                <div>devmonk</div>
                            </div>
                            <div className="me-1">admin</div>
                        </div>
                        <div className="d-flex  justify-content-between bg-light rounded py-2">
                            <div className="d-flex align-item-center">
                                <div className="me-2  ps-2 ">
                                    <img height="22px" src={groupAdd} alt="" />
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
                                    <img height="22px" src={groupAdd} alt="" />
                                </div>
                                <div>devmonk</div>
                            </div>
                            <div className="me-1">admin</div>
                        </div>
                    </div>
                </div>
                <div>{/* links */}</div>
            </div>
        </div>
    )
}
