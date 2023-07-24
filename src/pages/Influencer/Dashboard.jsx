import React from "react";
import { GridContainer, Heading, LinkButton } from "../../Global";
import { ShareIcon } from "./User.elements";

function Dashboard() {
  return (
    <>
      <GridContainer columns="auto auto" justify="space-between">
        <Heading>Dashboard</Heading>
        <LinkButton>
          <ShareIcon />
          Share
        </LinkButton>
      </GridContainer>
    </>
  );
}

export default Dashboard;
