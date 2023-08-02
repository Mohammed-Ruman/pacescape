import React, { useState } from "react";
import {
  GridContainer,
  Heading,
  Heading2,
  LightText,
  LinkButton,
} from "../../Global";

//Styled Components
import { AccountsContainer, InstagramIcon, YoutubeIcon } from "./User.elements";

//Icons
import { FaCheck, FaPlus, FaYoutube } from "react-icons/fa";

//Assets
import account from "../../assets/images/link-account-vector.png";
import { useNavigate } from "react-router-dom";

//RTK-Query
import {
  useLazyGetYoutubeAuthorizeQuery,
  useLazyGetYoutubeDataQuery,
  useGetYoutubeLinkStatusQuery,
} from "../../api/endpoints/youtubeEndpoints";
import { useSelector } from "react-redux";
function Accounts() {
  const navigate = useNavigate();

  const userId = useSelector((state) => state.auth?.userData?.userId);
  console.log(userId);
  const { data: linkStatus } = useGetYoutubeLinkStatusQuery(userId);
  const [authorize, authResults] = useLazyGetYoutubeAuthorizeQuery();
  const [getYoutubeData, youtubeData] = useLazyGetYoutubeDataQuery();

  const handleYoutubeLink = async () => {
    try {
      const res = await authorize(userId);
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };
  
  return (
    <AccountsContainer>
      <img
        height="200px"
        src={account}
        alt="Add Account Image"
        loading="lazy"
      ></img>
      <div>
        <Heading>Link your first account</Heading>
        <LightText align="center">Fortunately, it's easy to link.</LightText>
      </div>

      <GridContainer columns="auto 2fr 1fr">
        <YoutubeIcon />
        <Heading2>Youtube</Heading2>
        {linkStatus ? (
          <FaCheck
            style={{
              margin: "auto",
              color: "green",
              height: "24px",
              width: "24px",
            }}
          />
        ) : (
          <LinkButton onClick={handleYoutubeLink}>
            <FaPlus /> Link
          </LinkButton>
        )}
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
