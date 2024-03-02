import { jwtDecode } from "jwt-decode";
import _ from "lodash";
import React, { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import io from "socket.io-client";

import VideoCall from "../calls/video.jsx";
import ChatBoxTop from "../chat components/chatBoxTop.js";
import CreateNewGroup from "../chat components/createNewGroup.jsx";
import DownIcon from "../chat components/downIcon.jsx";
import NewChat from "../chat components/newgroup.jsx";
import PersonalProfilePopUp from "../chat components/personalChatProfilePopUp.jsx.jsx";
import ProfilePopUp from "../chat components/profilePopUp.jsx";
import Settings from "../chat components/settings.jsx";
import SideChatBox from "../chat components/sideChatBox.jsx";
import SideIcons from "../chat components/sideIcons.jsx";
import Textarea from "../chat components/textarea.jsx";
import AdminChatPage from "../components/chatBox/adminChatBox.jsx";
import PreviewImage from "../components/preview.jsx";
import GetToken from "../sessionManager/getToken";
import IsTokenExpired from "../sessionManager/isTokExpired";

import "bootstrap/dist/css/bootstrap.min.css";
import "./styles/chatInterface.css";

export default function ChatInterface() {
  const [loaded, setLoaded] = useState(false);
  const [activeChat, setActiveChat] = useState("");
  const clearPopUpRef = useRef([]);
  const [isPersonalChat, setIsPersonalChat] = useState(false);
  const [loadedData, setLoadedData] = useState([]);
  const [showProfile, setShowProfile] = useState(false);
  const [newMessag, setNewMessag] = useState(false);
  const [lastMessage, setLastMessage] = useState("");
  const [reload, setReloaded] = useState(0);
  const scrollTo = useRef();
  const getDom = useRef();
  const relate = useRef(0);
  const token = GetToken("x-auth");
  const navigate = useNavigate();
  const [socketState, setSocketState] = useState(null);
  var socket;

  const [groupChatDisplay, setGroupChatDisplay] = useState({
    showGroupChat: false,
    groupId: "",
    profileImage: "",
    name: "",
    description: "",
    date: "",
    members: [],
    link: "",
    messages: [],
    lastMessage: "",
  });

  const [callInit, setCallInit] = useState({
    isCall: false,

    type: "",
  });

  // Handle User input both text, image, audio and video call
  const [inputData, setInputData] = useState({
    addIcon: false,
    disableInput: false,
    type: "",
    text: "",
    username: function () {
      console.log("token", token);
      if (token) {
        return jwtDecode(token).username;
      }
      return null;
    },
    _userId: function () {
      if (token) {
        return jwtDecode(token)._id;
      }
      return null;
    },
  });

  const [controls, setControls] = useState({
    newChat: false,
    newGroup: false,
    addFriends: false,
    newUser: false,
    next: false,
  });
  const [settingsControls, setSettingsControls] = useState({
    showSettings: false,
    general: false,
    account: false,
    chats: false,
    help: false,
  });
  const [groupControl, setGroupControl] = useState({
    showGroupProfile: false,
    overview: false,
    members: false,
    media: false,
    links: false,
  });
  const [personalChatControl, setPersonalChatControl] = useState({
    showPersonalChatProfile: false,
    overview: false,
    media: false,
    links: false,
  });
  // For Change of Data
  const [showInputFor, setShowInputFor] = useState({
    name: false,
    about: false,
    phoneNo: false,
  });
  const [showGroupInputFor, setGroupShowInputFor] = useState({
    groupName: false,
    description: false,
    displayPhoto: false,
  });
  const [groupMembers, setGroupMembers] = useState({
    members: [],
    groupName: "",
    groupImage: "",
  });
  // For Creating New Group
  const [newGroupData, setGroupData] = useState({
    groupIcon: "",
    groupName: "",
    groupDescription: "",
  });

  // FUNCTIONS FOR HANDLING CREATE NEW CHAT POP-UPS
  function CreateNewChat(event) {
    setControls((values) => {
      return { ...values, newChat: !controls.newChat };
    });
  }
  function NewGroup(event) {
    setControls((values) => {
      return {
        ...values,
        newChat: !controls.newChat,
        next: !controls.next,
      };
    });
  }

  // FUNCTIONS FOR HANDLING SETTINGS POP-UPS
  function toggleSettings() {
    setSettingsControls((values) => {
      return {
        showSettings: true,
        general: true,
        account: false,
        chats: false,
        help: false,
      };
    });
  }

  // FUNCTIONS FOR HANDLING PROFILE POP-UPS
  function ShowProfile() {
    setShowProfile(true);
    setSettingsControls((values) => {
      return {
        showSettings: true,
        general: false,
        account: false,
        chats: false,
        help: false,
      };
    });
  }
  // SHOW GROUP PROFILE
  function ShowGroupProfile() {
    if (isPersonalChat) {
      setPersonalChatControl((values) => {
        return {
          showPersonalChatProfile: true,
          overview: true,
          media: false,
          links: false,
        };
      });
    } else {
      setGroupControl((values) => {
        return {
          showGroupProfile: true,
          overview: true,
          members: false,
          media: false,
          links: false,
        };
      });
    }
  }
  function ToggleActiveNav(element) {
    element.stopPropagation();
    console.log(element);
    let navItems = document.querySelectorAll(".nav-item");
    navItems.forEach((item) => {
      item.classList.remove("active-item");
    });
    if (element.target.localName != "img") {
      element.target.classList.add("active-item");
    } else {
      element.target.parentElement.classList.add("active-item");
    }
  }
  function ToggleProfileNav(element) {
    let navItems = document.querySelectorAll(".nav-item-profile");
    navItems.forEach((item) => {
      item.classList.remove("active-item");
    });
    if (element.target.localName != "img") {
      element.target.classList.add("active-item");
    } else {
      element.target.parentElement.classList.add("active-item");
    }
  }

  function DisplayChats(
    profileImage,
    name,
    description,
    date,
    members,
    link,
    messages,
    adminUsername,
    chatId
  ) {
    const extractGroup = loadedData.filter((p) => {
      return p._id == chatId;
    });

    setGroupChatDisplay((values) => {
      return {
        ...values,
        groupId: chatId,
        showGroupChat: true,
        profileImage: profileImage,
        name: name,
        description: description,
        date: date,
        members: members,
        link: link,
        messages: extractGroup[0].groupMessages,
        adminUsername: adminUsername,
      };
    });
    
    setGroupControl((values) => {
      return {
        showGroupProfile: false,
        overview: false,
        members: false,
        media: false,
        links: false,
      };
    });
    setPersonalChatControl((values) => {
      return {
        showPersonalChatProfile: false,
        overview: false,
        media: false,
        links: false,
      };
    });

    setActiveChat(() => chatId);
    setLoaded(true);
  }

  function closeGroupPopUp() {
    setGroupControl((values) => {
      return {
        showGroupProfile: false,
        overview: false,
        members: false,
        media: false,
        links: false,
      };
    });

    setPersonalChatControl((values) => {
      return {
        showPersonalChatProfile: false,
        overview: false,
        members: false,
        media: false,
        links: false,
      };
    });
  }

  function ClearImgInput() {
    setInputData((values) => {
      return { ...values, type: "", text: "", disableInput: false };
    });
  }

  // Function send Message to Group
  function SendInformation() {
    socketState.emit(
      `grouper-message-${groupChatDisplay.groupId}`,
      _.omit(inputData, ["disableInput"])
    );

    setInputData((values) => {
      return { ...values, type: "", text: "", disableInput: false };
    });
  }
  // Function to submit new Group Profile

  function SubmitNewGroup() {
    socketState.emit("NewGroup", newGroupData);
  }
  function CloseUpClone() {
    setControls((values) => {
      return {
        newChat: false,
        newGroup: false,
        addFriends: false,
        newUser: false,
        next: false,
      };
    });

    setSettingsControls((values) => {
      return {
        showSettings: false,
        general: false,
        account: false,
        chats: false,
        help: false,
      };
    });

    setShowInputFor((values) => {
      return {
        name: false,
        about: false,
        phoneNo: false,
      };
    });
  }
  // SEND USER MESSAGE TO SERVER
  function HandleInputs(event) {
    const { name, value } = event.target;
    setInputData((values) => {
      return { ...values, type: name, text: value, groupId: activeChat };
    });
  }
  useEffect(() => {
    // ESTABLISH THE SOCKET CONNECTION
    if (token == null) {
      navigate("/login");
      //  specify in the UI that the session expired and the user should login to continue
    } else if (token) {
      if (IsTokenExpired(token) === true) {
        navigate("/login");
      } else {
      }
    }
  }, []);

  useEffect(() => {
    socket = io("http://localhost:3000/chat", {
      transports: ["websocket"],
      query: { token },
    });
    console.log("socket.io", socket);
    setSocketState(() => {
      return socket;
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!socketState) {
      return;
    }
    console.log("groupInfo", socketState);
    socketState.on("group-information", (data) => {
      setLoadedData(() => data);
      console.log(data, "data");
    });
    return () => {
      socketState.off("group-information");
    };
  }, [socketState]);

  useEffect(() => {
    if (!socketState) return;
    socketState.on("newMessage", (v) => {
      const preview = document.getElementsByClassName("last-message");

      const ElemArray = Array.from(preview);
      ElemArray.forEach((b) => {
        if (v.grpId == b.getAttribute("_id")) {
          v.type == "image"
            ? (b.innerHTML = "image")
            : (b.innerHTML = v.text || "loading ..");
        }
      });

      // For demonstration, let's update the name of the first object
      if (groupChatDisplay.groupId == v.grpId) {
        const easySpread = [...groupChatDisplay.messages, v];
        setGroupChatDisplay((t) => {
          return { ...t, messages: [...easySpread] };
        });
        // setTimeout(() => {
        //   getDom.current.children[0].lastElementChild.scrollIntoView({
        //     behavior: "smooth",
        //   });
        // }, 200);

        // const extractGroup = loadedData.filter((p) => {
        //   return p._id == v.grpId;
        // });
      }

      setLoadedData((values) => {
        return values.map((obj) => {
          if (obj._id == v.grpId) {
            return { ...obj, groupMessages: [...obj.groupMessages, v] };
          } else {
            return obj;
          }
        });
      });

      //   Reciever(socketState, groupChatDisplay.groupId);
    });
  }, [socketState]);

  return (
    <>
      {token && (
        <div className="hero-section">
          <div className="side-menu" onClick={closeGroupPopUp}>
            {controls.newChat && <NewChat CreateNewGroup={NewGroup} />}
            {controls.next && (
              <div className="create-new-group py-3 px-2">
                <CreateNewGroup
                  newGroupData={newGroupData}
                  setGroupData={setGroupData}
                  SubmitNewGroup={SubmitNewGroup}
                />
              </div>
            )}
            <Settings
              settingsControls={settingsControls}
              setSettingsControls={setSettingsControls}
              showProfile={showProfile}
              setShowProfile={setShowProfile}
              showInputFor={showInputFor}
              setShowInputFor={setShowInputFor}
            />
            <SideIcons ToggleActiveNav={ToggleActiveNav} />
            <DownIcon
              toggleSettings={toggleSettings}
              ShowProfile={ShowProfile}
              setShowProfile={setShowProfile}
              SendInformation={SendInformation}
            />
          </div>
          <div className="chat-section" ref={clearPopUpRef}>
            <SideChatBox
              toggleNewChat={CreateNewChat}
              loadedData={loadedData}
              DisplayChats={DisplayChats}
              CloseUpClone={CloseUpClone}
              lastMessage={lastMessage}
            />
            {loaded ? (
              <div className="space position-relative">
                {isPersonalChat ? (
                  <PersonalProfilePopUp
                    ToggleProfileNav={ToggleProfileNav}
                    personalChatControl={personalChatControl}
                    setPersonalChatControl={setPersonalChatControl}
                  />
                ) : (
                  <ProfilePopUp
                    groupControl={groupControl}
                    setGroupControl={setGroupControl}
                    showGroupInputFor={showGroupInputFor}
                    setGroupShowInputFor={setGroupShowInputFor}
                    ToggleProfileNav={ToggleProfileNav}
                    groupChatDisplay={groupChatDisplay}
                  />
                )}
                <ChatBoxTop
                  setCallInit={setCallInit}
                  groupChatDisplay={groupChatDisplay}
                  ShowGroupProfile={ShowGroupProfile}
                  socketState={socketState}
                />
                {callInit.isCall && (
                  <div className="float-video">
                    <VideoCall
                      socketState={socketState}
                      groupChatDisplay={groupChatDisplay}
                      setCallInit={setCallInit}
                    />
                  </div>
                )}
                <div
                  className="content-area position-relative"
                  onClick={() => {
                    closeGroupPopUp();
                    CloseUpClone();
                  }}
                >
                  <div>
                    <AdminChatPage
                      groupChatDisplay={groupChatDisplay}
                      getDom={getDom}
                    />
                  </div>
                  {inputData.type == "image" && (
                    <PreviewImage
                      previewimg={inputData.text}
                      ClearImgInput={ClearImgInput}
                    />
                  )}
                </div>
                <Textarea
                  HandleInputs={HandleInputs}
                  inputData={inputData}
                  setInputData={setInputData}
                  SendInformation={SendInformation}
                  activeChat={activeChat}
                />
              </div>
            ) : (
              <div className="d-flex align-items-center flex-column justify-content-center w-100 bg-dark text-light">
                <div className="fw-bolder">Social Connect For Web</div>
                <div className="bg-success text-center">
                  A Messaging Platform for the web, text anytime and reply
                  anonymously
                </div>
                <br />
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
}
