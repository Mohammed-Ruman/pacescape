import React, { useState } from "react";
import { LoginButton, LoginForm } from "./Auth.elements";
import TextInput from "../../components/ui/TextInput";
import { AnchorText, LightText } from "../../Global";
import { useNavigate } from "react-router-dom";
import PasswordField from "../../components/ui/PasswordField";

function Login() {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log("Login CLicked");
    navigate("/user/dashboard");
  };
  return (
    <LoginForm>
      <TextInput
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        title="Username"
        placeholder="John Doe"
      ></TextInput>
      <PasswordField
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="******"
        title="Full Name"
      ></PasswordField>
      <LoginButton onClick={handleLogin}>Login</LoginButton>
      <LightText>
        New to Pacescape?{" "}
        <AnchorText onClick={() => navigate("/auth/register")}>
          Register
        </AnchorText>
      </LightText>
    </LoginForm>
  );
}

export default Login;
