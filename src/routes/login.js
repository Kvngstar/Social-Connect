import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/login.css";
import axios from "../restApi/axios";
import GetToken from "../sessionManager/getToken";
import RemoveToken from "../sessionManager/removeToken";
import SetToken from "../sessionManager/storeToken";
import IsTokenExpired from "../sessionManager/isTokExpired";
export default function Login() {
  const navigate = useNavigate();
  useEffect(() => {
    const token = GetToken("x-auth");

    if (token) {
      if (IsTokenExpired(token) === false) {
        navigate("/chat");
      } else {
        RemoveToken("x-auth");
        //  specify in the UI that the session expired and the user should login to continue
      }
    }
  }, []);
  // check if the x-auth is available and valid

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  function getFormData(event) {
    const { name, value } = event.target;
    setFormData((values) => {
      return { ...values, [name]: value };
    });
  }
  async function Submit(event) {
    event.preventDefault();
    try {
      console.log("formData: ", formData);
      const response = await axios.post("/login", formData);
      console.log("response", response);
      if (response.status >= 200 && response.status < 400) {
        const token = GetToken("x-auth");
        if (token) {
          RemoveToken("x-auth");
        }
        SetToken(response.headers["x-auth"], "x-auth");
        navigate("/chat");
        return;
      } else if (response.status == 400) {
        console.log(response);
      }
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <>
      <div class="login-form">
        <form>
          <h1>Login</h1>
          <div class="content">
            <div class="input-field">
              <input
                type="email"
                placeholder="Email"
                name="email"
                onChange={getFormData}
                value={formData.email}
                autocomplete="true"
              />
            </div>
            <div class="input-field">
              <input
                type="password"
                placeholder="Password"
                name="password"
                onChange={getFormData}
                value={formData.password}
                autocomplete="true"
              />
            </div>
            <a href="#" class="link">
              Forgot Your Password?
            </a>
          </div>
          <div class="action">
            <button> Register</button>
            <button onClick={Submit}>Sign in</button>
          </div>
        </form>
      </div>
    </>
  );
}
