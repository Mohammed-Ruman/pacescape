import React from "react";
import {
  GridContainer,
  Heading,
  Heading2,
  LightText,
  ScrollContainer,
} from "../../../Global";
import Avatar from "./Avatar";
import {
  ActivityCard,
  ActivityContainer,
  EllipsisIcon,
} from "../User.elements";

function Activities({ data }) {
  return (
    <ActivityContainer>
      <GridContainer columns="auto auto" justify="space-between">
        <Heading2 talign="flex-start">Activities</Heading2>
        <EllipsisIcon />
      </GridContainer>
      <ScrollContainer>
        {data.map(({ image, name, desc }) => (
          <ActivityCard>
            <Avatar image={image} />
            <GridContainer rgap="2px">
              <b>{name}</b>

              <LightText style={{ lineHeight: "11px" }}>
                <small>
                  {desc.length > 25 ? desc.substr(0, 25) + "..." : desc}
                </small>
              </LightText>
            </GridContainer>
          </ActivityCard>
        ))}
      </ScrollContainer>
    </ActivityContainer>
  );
}

export default Activities;
