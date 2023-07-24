import React from "react";
import { Outlet } from "react-router-dom";
import { ImgWrapper, LoginContainer, LoginImage } from "./Auth.elements";
import loginvector from "../../assets/images/login-vector.png";
function AuthLayout() {
  return (
    <LoginContainer>
      <ImgWrapper>
        <LoginImage src={loginvector} alt="Login Support Image"></LoginImage>
      </ImgWrapper>
      <Outlet />
    </LoginContainer>
  );
}

export default AuthLayout;
