import React, { useState } from "react";
import { LoginButton, LoginForm } from "./Auth.elements";
import TextInput from "../../components/ui/TextInput";
import { AnchorText, LightText } from "../../Global";
import { useNavigate } from "react-router-dom";
import PasswordField from "../../components/ui/PasswordField";
import {
  useGetUserDataQuery,
  useLazyGetUserDataQuery,
  useLoginMutation,
} from "../../api/endpoints/authEndpoints";
import { useDispatch } from "react-redux";
import { setCredentials } from "../../reduxSlices/authSlice";
import { BASE_URL } from "../../utils/constants";

const dummyResponse = {
  timestamp: "01-08-2023 06:25:21",
  status: "OK",
  data: {
    userDTO: {
      userId: "83511271-adf7-43e5-ba9d-b22f2a6fe7a2",
      firstName: "Abdulla",
      lastName: "Subayeel",
      dateOfBirth: "2023-07-12T00:00:00.000+00:00",
      email: "abdullahsubayeel2000@gmail.com",
      phoneNumber: 919740730152,
      profilePicture: null,
      password: "$2a$08$xu3r3gVDQc3uQJWiT9jBNuW1OLGHohuw9HKS7AeI0736/eurxFZ6G",
      isActive: true,
    },
    roleDto: [
      {
        id: "415e62e4-984d-4578-8812-716594473966",
        name: "brand_owner",
        active: true,
      },
    ],
    permissionDTO: [],
  },
};
function Login() {
  const dispatch = useDispatch();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [login, { isLoading: isLoginLoading }] = useLoginMutation();
  const [getUser, results] = useLazyGetUserDataQuery();

  const handleLogin = async () => {
    console.log("Login CLicked");
    try {
      const res = await login({
        email: email,
        password: password,
      });
      const user = await fetch(
        `https://api-gateway-dev.pacewisdom.in/user/private/user/basic/info?email=${email}`,
        {
          headers: { Authorization: `Bearer ${res.data.access_token}` },
        }
      );
      const userData = await user.json();

      if (res.data && user.status === 200) {
       
        dispatch(
          setCredentials({
            accessToken: res.data.access_token,
            refreshToken: res.data.refresh_token,
            userData: userData.data.userDTO,
          })
        );
        navigate("/user/dashboard");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <LoginForm>
      <TextInput
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        title="Email"
        placeholder="JohnDoe@gmail.com"
      ></TextInput>
      <PasswordField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="******"
        title="Password"
      ></PasswordField>

      <LoginButton onClick={handleLogin}>Login</LoginButton>
      <LightText talign="center">
        New to Pacescape?&nbsp;
        <AnchorText onClick={() => navigate("/register")}>Register</AnchorText>
      </LightText>
    </LoginForm>
  );
}

export default Login;
