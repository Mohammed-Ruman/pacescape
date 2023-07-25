import React from "react";
import { GridContainer, LightText } from "../../../Global";
import Avatar from "./Avatar";
import { ActivityContainer } from "../User.elements";

function ActivityRow({ image, name, desc }) {
  return (
    <ActivityContainer>
      <Avatar image={image} />
      <GridContainer rgap="2px">
        
          <b>{name}</b>
        
        <LightText style={{lineHeight:"11px"}}>
          <small>{desc.length > 25 ? desc.substr(0, 25) + "..." : desc}</small>
        </LightText>
      </GridContainer>
    </ActivityContainer>
  );
}

export default ActivityRow;
