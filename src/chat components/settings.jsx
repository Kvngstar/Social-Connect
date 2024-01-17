import React from 'react'
import displayImage from '../assets/images/vi hub.jpg'
import groupAdd from '../assets/images/group-add.svg'

export default function Settings({
    clearPopUpRef,
    settingsControls,
    setSettingsControls,
    showProfile,
    setShowProfile,
    showInputFor,
    setShowInputFor,
}) {
    //FUNCTIONS THAT HANDLE CONDITIONAL RENDERING OF SETTINNGS
    function ShowAccount() {
        setSettingsControls((values) => {
            return {
                showSettings: true,
                general: false,
                account: true,
                chats: false,
                help: false,
            }
        })
        setShowProfile(false)
    }
    function ShowGeneral() {
        setSettingsControls((values) => {
            return {
                showSettings: true,
                general: true,
                account: false,
                chats: false,
                help: false,
            }
        })
        setShowProfile(false)
    }
    function ShowChats() {
        setSettingsControls((values) => {
            return {
                showSettings: true,
                general: false,
                account: false,
                chats: true,
                help: false,
            }
        })
        setShowProfile(false)
    }
    function ShowHelp() {
        setSettingsControls((values) => {
            return {
                showSettings: true,
                general: false,
                account: false,
                chats: false,
                help: true,
            }
        })
        setShowProfile(false)
    }
    function ShowProfilee() {
        setSettingsControls((values) => {
            return {
                showSettings: true,
                general: false,
                account: false,
                chats: false,
                help: false,
            }
        })
        setShowProfile(true)
    }

    //FUNCTIONS THAT HANDLE CONDITIONAL RENDERING OF SETTINNGS
    function EditName() {
        console.log('name')
        setShowInputFor((values) => {
            return {
                ...values,
                name: !showInputFor.name,
            }
        })
    }
    function EditAbout() {
        setShowInputFor((values) => {
            return {
                ...values,
                about: !showInputFor.about,
            }
        })
    }
    function EditPhoneNo() {
        setShowInputFor((values) => {
            return {
                ...values,
                phoneNo: !showInputFor.phoneNo,
            }
        })
    }
    return (
        <>
            {settingsControls.showSettings && (
                <div className="settings">
                    <div
                        className="bg-light settings-popup rounded d-flex"
                        ref={clearPopUpRef}
                    >
                        <div className="group-menu bg-secondary d-flex flex-column">
                            <div className="bg-success" onClick={ShowGeneral}>
                                General
                            </div>
                            <div onClick={ShowAccount}>Account</div>
                            <div onClick={ShowChats}>Notification</div>
                            <div onClick={ShowHelp}>Help</div>
                            <div onClick={ShowHelp}>Invite a Friend</div>
                            <div onClick={ShowProfilee}>Profile</div>
                        </div>
                        <div className="view-profile-menu">
                            {settingsControls.general && (
                                <div className="pt-3 px-3 pb-3">
                                    <div>General</div>
                                    <div className="mt-3 mb-2">
                                        <div className="mb-2">Language</div>
                                        <select
                                            name="language"
                                            className="form-select"
                                            id=""
                                        >
                                            <option value="">
                                                System default
                                            </option>
                                            <option value="">English</option>
                                            <option value="">French</option>
                                            <option value="">Russian</option>
                                        </select>
                                    </div>
                                    <div className="mt-3 mb-2">
                                        <div className="mb-2">Theme</div>
                                        <select
                                            name="language"
                                            className="form-select"
                                            id=""
                                        >
                                            <option value="">
                                                Default ~light~
                                            </option>
                                            <option value="">Light</option>
                                            <option value="">Dark</option>
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
                            )}

                            {settingsControls.chats && (
                                <div className="pt-3 px-3 pb-3 ">
                                    <div className="d-flex justify-content-between align-items-center pe-2 bg-light rounded py-2">
                                        <div className="">
                                            <div> Notification tones</div>

                                            <div>
                                                <small>
                                                    <small>
                                                        play sound for messages
                                                    </small>
                                                </small>
                                            </div>
                                        </div>
                                        <div>
                                            <input
                                                type="checkbox"
                                                name="checkbox"
                                                id=""
                                            />
                                        </div>
                                    </div>
                                    <div className="mb-1">Vibration</div>
                                    <select
                                        name="language"
                                        className="form-select"
                                        id=""
                                    >
                                        <option value="">Default ~on~</option>
                                        <option value="">on</option>
                                        <option value="">off</option>
                                    </select>
                                </div>
                            )}
                            {settingsControls.account && (
                                <div className="pt-3 px-3 pb-3 ">
                                    <div className="d-flex bg-light rounded py-2">
                                        <div className="px-3 ">
                                            <img
                                                height="22px"
                                                src={groupAdd}
                                                alt=""
                                            />
                                        </div>
                                        <div>Change number</div>
                                    </div>
                                    <div className="d-flex bg-light rounded py-2">
                                        <div className="px-3 ">
                                            <img
                                                height="22px"
                                                src={groupAdd}
                                                alt=""
                                            />
                                        </div>
                                        <div>Request account info</div>
                                    </div>
                                    <div className="d-flex bg-light rounded py-2">
                                        <div className="px-3 ">
                                            <img
                                                height="22px"
                                                src={groupAdd}
                                                alt=""
                                            />
                                        </div>
                                        <div>Delete account</div>
                                    </div>
                                </div>
                            )}

                            {settingsControls.help && (
                                <div className="pt-3 px-3 pb-3">
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
                                                We will like to know your
                                                thoughts about this app
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
                                            <div>
                                                2024 @ Social Connect Inc.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                            {showProfile && (
                                <div className="pt-3 px-3 pb-3">
                                    <div>
                                        <img
                                            src={displayImage}
                                            className="round-image mb-2"
                                            height="400px"
                                            width="400px"
                                            alt=""
                                        />
                                    </div>
                                    <div className="">
                                        {showInputFor.name == true ? (
                                            <div className="d-flex justify-content-between flex-column">
                                                <input
                                                    type="text"
                                                    name=""
                                                    className="input"
                                                    id=""
                                                    placeholder="Change name"
                                                />
                                                <div className="mt-2">
                                                    <button className="w-50 btn-primary btn btn-sm">
                                                        change
                                                    </button>
                                                    <button className="w-50 btn  btn-danger btn-sm" onClick={EditName}>
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="d-flex justify-content-between  mt-2">
                                                <div>{'<Devmonk>'} </div>
                                                <div
                                                    className=""
                                                    onClick={EditName}
                                                >
                                                    edit
                                                </div>
                                            </div>
                                        )}
                                    </div>

                                    <div className=" mt-2">
                                        {showInputFor.about === false ? (
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex flex-column">
                                                    <div>About</div>
                                                    <div>
                                                        Selfless and Kind
                                                    </div>{' '}
                                                </div>
                                                <div
                                                    className=""
                                                    onClick={EditAbout}
                                                >
                                                    edit
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="d-flex mb-2 flex-column">
                                                <input
                                                    type="text"
                                                    name=""
                                                    className="input"
                                                    id=""
                                                    placeholder="Change about"
                                                />
                                                <div className="mt-2">
                                                    <button className="w-50 btn-primary btn btn-sm">
                                                        change
                                                    </button>
                                                    <button className="w-50 btn  btn-danger btn-sm" onClick={EditAbout}>
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                    <div className="mt-2">
                                        {showInputFor.phoneNo === false ? (
                                            <div className="d-flex justify-content-between">
                                                <div className="d-flex flex-column ">
                                                    <div>phone number</div>
                                                    <div>09030299983</div>{' '}
                                                </div>
                                                <div
                                                    className=""
                                                    onClick={EditPhoneNo}
                                                >
                                                    edit
                                                </div>
                                            </div>
                                        ) : (
                                            <div className="d-flex mb-2 flex-column">
                                                <input
                                                    type="text"
                                                    name=""
                                                    className="input"
                                                    id=""
                                                    placeholder="Change phone no."
                                                />
                                                <div className="mt-2">
                                                    <button className="w-50 btn-primary btn btn-sm">
                                                        change
                                                    </button>
                                                    <button className="w-50 btn  btn-danger btn-sm" onClick={EditPhoneNo}>
                                                        Cancel
                                                    </button>
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            )}{' '}
        </>
    )
}
