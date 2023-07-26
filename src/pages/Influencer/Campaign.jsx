import React from "react";
import {
  GridContainer,
  Heading,
  Heading2,
  LinkButton,
  ScrollContainer,
} from "../../Global";
import { AddIcon, CampaignContainer, CampaignBody } from "./User.elements";

//data
import { dummyActivities, dummyCampaigns } from "../../data/dummyData";

//Components
import Activities from "./helpers/Activities";
import Timeline from "./helpers/Timeline";
function Campaign() {
  return (
    <CampaignContainer>
      <GridContainer columns="auto auto" justify="space-between">
        <Heading>Campaign</Heading>
        <LinkButton>
          <AddIcon />
          Create Campaign
        </LinkButton>
      </GridContainer>
      <CampaignBody>
        <GridContainer justify="flex-start" columns="1fr">
          <Timeline campaigns={dummyCampaigns} />
        </GridContainer>
        <GridContainer justify="flex-end">
          <Activities data={dummyActivities} />
        </GridContainer>
      </CampaignBody>
    </CampaignContainer>
  );
}

export default Campaign;
