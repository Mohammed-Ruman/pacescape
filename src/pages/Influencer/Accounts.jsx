import React from "react";
import { GridContainer, Heading, Heading2, LightText, LinkButton } from "../../Global";

//Styled Components
import {
  AccountsContainer,
  InstagramIcon,

  YoutubeIcon,
} from "./User.elements";

//Icons
import { FaPlus, FaYoutube } from "react-icons/fa";

//Assets
import account from "../../assets/images/link-account-vector.png";
import { useNavigate } from "react-router-dom";
function Accounts() {
  const navigate = useNavigate();
  return (
    <AccountsContainer>
      <img height="200px" src={account} alt="Add Account Image" loading="lazy"></img>
      <div>
        <Heading>Link your first account</Heading>
        <LightText align="center">Fortunately, it's easy to link.</LightText>
      </div>

      <GridContainer columns="auto 1fr min-content">
        <YoutubeIcon />
        <Heading2>Youtube</Heading2>
        <LinkButton onClick={() => navigate("/user/accounts/youtube")}>
          <FaPlus /> Link
        </LinkButton>
      </GridContainer>
      <GridContainer columns="auto 1fr min-content">
        <InstagramIcon />
        <Heading2>Instagram</Heading2>
        <LinkButton onClick={() => navigate("/user/accounts/instagram")}>
          <FaPlus /> Link
        </LinkButton>
      </GridContainer>
    </AccountsContainer>
  );
}

export default Accounts;
