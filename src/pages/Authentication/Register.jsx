import React from "react";
import { useNavigate } from "react-router-dom";
import { GridContainer, Heading, LightText, AnchorText } from "../../Global";
import loginvector from "../../assets/images/login-vector.png";
import {
  LoginContainer,
  LoginButton,
  LoginImage,
  ImgWrapper,
  LoginForm,
} from "./Auth.elements";
import TextInput from "../../components/ui/TextInput";
import PasswordField from "../../components/ui/PasswordField";
import SelectField from "../../components/ui/SelectField";
function Register() {
  const navigate = useNavigate();
  return (
    <LoginContainer>
      <ImgWrapper>
        <LoginImage src={loginvector} alt="Login Support Image"></LoginImage>
      </ImgWrapper>
      <LoginForm rgap="8px">
        <Heading talign="center">Create an account</Heading>
        <LightText talign="center">Start Your 30 day free trial</LightText>
        <GridContainer margin="2rem 0 0 0" rgap="12px">
          <TextInput placeholder="John Doe" title="Full Name"></TextInput>
          <TextInput placeholder="johndoe@gmail.com" title="Email"></TextInput>
          <SelectField
            options={["Creator", "Brand"]}
            title="Join as"
          ></SelectField>
          <PasswordField
            placeholder="John Doe"
            title="Full Name"
          ></PasswordField>
        </GridContainer>
        <LoginButton>Sign Up</LoginButton>
        <LightText talign="center">
          Been here?{" "}
          <AnchorText onClick={() => navigate("/login")}>Login</AnchorText>
        </LightText>
      </LoginForm>
    </LoginContainer>
  );
}

export default Register;
