import React, { useState } from "react";
import { AvatarContainer, OnlineIcon } from "../User.elements";
import { GridContainer } from "../../../Global";
function Avatar({ image, online }) {
  return (
    <GridContainer style={{position:"relative",width:"42px"}}>
      <AvatarContainer>{image && <img src={image}></img>}</AvatarContainer>
      {online && <OnlineIcon />}
    </GridContainer>
  );
}

export default Avatar;
