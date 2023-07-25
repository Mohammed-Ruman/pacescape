import React, { useState } from "react";
import { AnchorText, GridContainer, Heading, Heading2 } from "../../Global";
import { AccountsContainer, YoutubeIcon } from "./User.elements";
import { FaYoutube } from "react-icons/fa";
import TextInput from "../../components/ui/TextInput";
import PasswordField from "../../components/ui/PasswordField";
import { LoginButton } from "../Authentication/Auth.elements";

function YoutubeLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <AccountsContainer>
      <FaYoutube
        style={{ color: "red", height: "56px", width: "56px", margin: "auto" }}
      ></FaYoutube>
      <div>
        <Heading2 talign="center">Login to your account</Heading2>
        <Heading>Sign In</Heading>
      </div>
      <TextInput title="Email" placeholder="johndoe@gmail.com"></TextInput>
      <PasswordField placeholder="*******"></PasswordField>

      <AnchorText talign="center">Forgot Password?</AnchorText>
      <LoginButton>Sign In</LoginButton>
    </AccountsContainer>
  );
}

export default YoutubeLogin;
