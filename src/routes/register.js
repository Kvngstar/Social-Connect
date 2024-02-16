import React, { useEffect, useState } from "react";
import "./styles/register.css";
import axios from "../restApi/axios";
import _ from "lodash";
import GetToken from "../sessionManager/getToken";
import IsTokenExpired from "../sessionManager/isTokExpired";
import SetToken from "../sessionManager/storeToken";
import RemoveToken from "../sessionManager/removeToken";
import { useNavigate } from "react-router-dom";
export default function Register() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = GetToken("x-auth");

    if (token) {
      if (IsTokenExpired(token) === false) {
        navigate("/api/v1//chat");
      }
    }
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    username: "",
    email: "",
    phoneNum: "",
    password: "",
    confirmpswd: "",
  });
  function getFormData(event) {
    const { name, value } = event.target;

    setFormData((values) => {
      return { ...values, [name]: value };
    });
  }
  async function submit(event) {
    event.preventDefault();
    try {
      const response = await axios.post(
        "/register",
        _.pick(formData, ["name", "username", "email", "phoneNum", "password"])
      );
      if (response.status >= 200 && response.status < 400) {
        const token = GetToken("x-auth");
        if (token) {
          RemoveToken("x-auth");
        }
        SetToken(response.headers["x-auth"], "x-auth");
        navigate("/chat");
      } else if (response.status === 400) {
        console.log(response);
      }
    } catch (error) {
      console.log(error.response.data);
    }
  }
  return (
    <div class="container2">
      <div class="title">Registration</div>
      <div class="content">
        <form action="#">
          <div class="user-details">
            <div class="input-box">
              <span class="details">Full Name</span>
              <input
                type="text"
                placeholder="Enter your name"
                name="name"
                onChange={getFormData}
                value={formData.name}
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Username</span>
              <input
                type="text"
                placeholder="Enter your username"
                name="username"
                onChange={getFormData}
                value={formData.username}
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Email</span>
              <input
                type="text"
                placeholder="Enter your email"
                name="email"
                onChange={getFormData}
                value={formData.email}
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Phone Number</span>
              <input
                type="text"
                placeholder="Enter your number"
                name="phoneNum"
                onChange={getFormData}
                value={formData.phoneNum}
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Password</span>
              <input
                type="text"
                placeholder="Enter your password"
                name="password"
                onChange={getFormData}
                value={formData.password}
                required
              />
            </div>
            <div class="input-box">
              <span class="details">Confirm Password</span>
              <input
                type="text"
                placeholder="Confirm your password"
                name="confirmpswd"
                onChange={getFormData}
                value={formData.confirmpswd}
                required
              />
            </div>
          </div>

          <div class="button">
            <input type="submit" onClick={submit} value="Register" />
          </div>
        </form>
      </div>
    </div>
  );
}
