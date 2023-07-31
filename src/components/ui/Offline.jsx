import React from "react";
import { GridContainer, Heading2, LightText } from "../../Global";
import offline from "../../assets/images/offline.svg";
import { LoginButton } from "../../pages/Authentication/Auth.elements";
function Offline() {
  function reloadPage() {
    document.location.reload();
  }
  return (
    <GridContainer
      style={{
        position: "absolute",
        top: "50%",
        transform: "translate(0,-50%)",
      }}
    >
      <img
        width="300px"
        style={{ margin: "auto" }}
        src={offline}
        alt="offline image"
      ></img>
      <Heading2>You appear to be offline</Heading2>
      <LightText>
        You can't use PaceScape until you're connected to the internet
      </LightText>
      <LoginButton
        style={{ width: "min-content", margin: "auto" }}
        onClick={reloadPage}
      >
        Retry
      </LoginButton>
    </GridContainer>
  );
}

export default Offline;
