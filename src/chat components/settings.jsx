import React from 'react'
import displayImage from "../assets/images/vi hub.jpg"

export default function Settings() {
  return (
    <div className="settings">
                    <div className="bg-light settings-popup rounded d-flex">
                        <div className="group-menu bg-secondary d-flex flex-column">
                            <div className="bg-success">General</div>
                            <div>Account</div>
                            <div>Chats</div>
                            <div>Help</div>
                        </div>
                        <div className="view-profile-menu">
                            <div className="pt-3 px-3 pb-3">
                                <div>General</div>
                                <div className="mt-3 mb-2">
                                    <div className="mb-2">Language</div>
                                    <select
                                        name="language"
                                        className="form-select"
                                        id=""
                                    >
                                        <option value="">System default</option>
                                        <option value="">English</option>
                                        <option value="">French</option>
                                        <option value="">Russian</option>
                                    </select>
                                </div>

                                <div className="d-flex">
                                    <div className="w-100">
                                        <button className="btn  btn-danger btn-sm w-100">
                                            Log out
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="pt-3 px-3 pb-3 d-none">
                                <div className="d-flex align-items-center justify-content-between">
                                    <div>Messages</div>
                                    <div>
                                        <input type="radio" name="" id="" />
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3 px-3 pb-3 d-none">
                                <div className="d-flex flex-column">
                                    <div>Social Connect for Web </div>
                                    <div>
                                        <small>Version 1.0.0</small>
                                    </div>
                                </div>
                                <hr />
                                <div className="d-flex flex-column">
                                    <div>Contact us </div>
                                    <div>
                                        <small>
                                            We will like to know your thoughts
                                            about this app
                                        </small>
                                        <div>
                                            <a href="#">
                                                <small>Contact Us</small>
                                            </a>
                                        </div>
                                        <hr />
                                        <div>
                                            <a href="#">
                                                <small>Help center</small>
                                            </a>
                                            <br />
                                            <a href="#">
                                                <small>Licenses</small>
                                            </a>
                                            <br />
                                            <a href="#">
                                                <small>
                                                    Terms and Privacy Policy
                                                </small>
                                            </a>
                                        </div>
                                        <hr />
                                        <div>2024 @ Social Connect Inc.</div>
                                    </div>
                                </div>
                            </div>
                            <div className="pt-3 px-3 pb-3 d-none">
                                <div>
                                    <img
                                        src={displayImage}
                                        className="round-image mb-2"
                                        height="400px"
                                        width="400px"
                                        alt=""
                                    />
                                </div>
                                <div className="d-flex justify-content-between">
                                    <div>{'<Devmonk>'} </div>
                                    <div className="">edit</div>
                                </div>
                                <div className="d-flex justify-content-between  mt-2">
                                    <div className="d-flex flex-column">
                                        <div>About</div>
                                        <div>Selfless and Kind</div>{' '}
                                    </div>
                                    <div className="">edit</div>
                                </div>
                                <div className="d-flex justify-content-between mt-2">
                                    <div className="d-flex flex-column ">
                                        <div>phone number</div>
                                        <div>09030299983</div>{' '}
                                    </div>
                                    <div className="">edit</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  )
}
