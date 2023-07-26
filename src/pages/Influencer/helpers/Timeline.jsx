import React, { useEffect } from "react";
import {
  EllipsisIcon,
  HourLine,
  TimelineContainer,
  CampaignCardContainer,
} from "../User.elements";
import { convertToISO8601, parseCampaignTime } from "../../../utils/parseDate";
import { GridContainer } from "../../../Global";
import UserStack from "./UserStack";
import { dummyStackUsers } from "../../../data/dummyData";
import { campaignHours } from "../../../data/campaignData";

function Timeline({ campaigns }) {
  // Convert hours array to array of objects with ISO 8601 format
  const hourIntervalsISO = campaignHours.map(({ startTime, endTime }) => ({
    startTime: convertToISO8601(startTime),
    endTime: convertToISO8601(endTime),
  }));

  // Get the current hour in 24-hour format
  const currentHour = new Date().getHours();

  const newarr = [];

  var ind = hourIntervalsISO.findIndex(
    (obj) => obj.startTime.substring(0, 2) == currentHour
  );
  for (var i = 0; i <= 8; i++) {
    newarr.push(hourIntervalsISO[(ind + i) % 24]);
  }
  console.log(newarr);

  return (
    <TimelineContainer>
      {newarr.map((hr) => (
        <GridContainer columns="1fr">
          <HourLine>
            <p>{parseCampaignTime(hr.startTime)}</p>
            <hr></hr>
          </HourLine>

          {campaigns
            ?.filter((ac) => {
              return (
                ac.startTime >= convertToISO8601(hr.startTime) &&
                ac.endTime <= convertToISO8601(hr.endTime)
              );
            })
            .map((c) => (
              <CampaignCard {...c} />
            ))}
        </GridContainer>
      ))}
    </TimelineContainer>
  );
}

function CampaignCard({ title, startTime, endTime }) {
  return (
    <CampaignCardContainer>
      <GridContainer justify="flex-start" rgap="4px">
        <b>{title}</b>
        <small>
          {parseCampaignTime(startTime)}-{parseCampaignTime(endTime)}
        </small>
      </GridContainer>
      <UserStack users={dummyStackUsers}></UserStack>
      <EllipsisIcon />
    </CampaignCardContainer>
  );
}

export default Timeline;
