import styled from "styled-components";
import { GridContainer } from "../../Global";
import {
  BiSolidDashboard,
  BiSolidUserAccount,
  BiMessageSquareDetail,
  BiSolidShareAlt,
} from "react-icons/bi";
import { MdCampaign, MdAnalytics } from "react-icons/md";
import { FaEllipsisV, FaInstagram, FaPlus, FaYoutube } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";

export const UserLayoutContainer = styled(GridContainer)`
  grid-template-columns: 300px 1fr;
  gap: 0;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const SideBarContainer = styled(GridContainer)`
  position: relative;
  padding: 2rem;
  background-color: #eee;
  height: 100vh;
  align-items: flex-start;
  place-content: flex-start;
  grid-template-columns: 1fr;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const IconText = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: #222;
  margin: 0;
`;

export const Menu = styled(GridContainer)`
  width: 100%;
  grid-template-columns: 1fr;
  justify-content: flex-start;
  margin: 2rem 0;
  & > ul {
    list-style: none;
    padding: 0;
    display: grid;
    gap: 8px;
  }
`;
export const MenuItem = styled.li`
  display: grid;
  grid-template-columns: 36px 1fr;
  width: 100%;
  gap: 1rem;
  align-items: center;
  padding: 4px;
  background-color: ${(props) => (props.selected ? "#3564dd" : "transparent")};
  color: ${(props) => (props.selected ? "#fff" : "#6c6c6c")};
  border: 2px solid transparent;
  border-radius: 8px;
  &:hover {
    cursor: pointer;
    border: 2px solid #ccc;
  }
  @media screen and (max-width: 561px) {
    grid-template-columns: 1fr;
    justify-content: center;
    place-content: center;
    gap: 0;
    text-align: center;
    font-size: 11px;
    border-radius: 0;
    color: ${(props) => (props.selected ? "#3564dd" : "#6c6c6c")};
    background-color: #eee;
    &:hover {
      border: 2px solid transparent;
    }
  }
`;

export const BottomNavbar = styled.div`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: none;
  & > ul {
    width: 100%;
    margin: 0;
    padding: 0;
    display: flex;
  }
  @media screen and (max-width: 561px) {
    & > ul {
      display: flex;
    }
    display: flex;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  border-radius: 50%;
  box-shadow: -7px 0px 10px 0px rgba(0, 0, 0, 0.1);
  border: 2px solid #fff;
  background-color: grey;
  overflow: hidden;

  height: 42px;
  width: 42px;
`;

export const DashboardIcon = styled(BiSolidDashboard)`
  margin: auto;
  color: inherit;
  height: 32px;
  width: 32px;
`;
export const AccountsIcon = styled(BiSolidUserAccount)`
  color: inherit;
  margin: auto;
  height: 32px;
  width: 32px;
`;
export const CampaignIcon = styled(MdCampaign)`
  color: inherit;
  margin: auto;
  height: 32px;
  width: 32px;
`;
export const AnalyticsIcon = styled(MdAnalytics)`
  color: inherit;
  margin: auto;
  height: 32px;
  width: 32px;
`;
export const MessagesIcon = styled(BiMessageSquareDetail)`
  color: inherit;
  margin: auto;
  height: 32px;
  width: 32px;
`;
export const SettingsIcon = styled(AiOutlineSetting)`
  color: #6c6c6c;
  height: 32px;
  width: 32px;
`;
export const ShareIcon = styled(BiSolidShareAlt)`
  color: #fff;
  height: 18px;
  width: 18px;
`;
export const AddIcon = styled(FaPlus)`
  color: #fff;
  height: 18px;
  width: 18px;
`;
export const EllipsisIcon = styled(FaEllipsisV)`
  color: #222;
  height: 18px;
  width: 18px;
  &:hover {
    cursor: pointer;
    color: grey;
  }
`;
export const YoutubeIcon = styled(FaYoutube)`
  background-color: #fcf1f1;
  color: red;
  border-radius: 50%;
  padding: 8px;
  height: 36px;
  width: 36px;
`;
export const InstagramIcon = styled(FaInstagram)`
  background-color: #e5feee;
  color: #54b056;
  border-radius: 50%;
  padding: 8px;
  height: 36px;
  width: 36px;
`;

//Accouts

export const AccountsContainer = styled(GridContainer)`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;

  & > img {
    margin: auto;
  }
`;

export const OnlineIcon = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  height: 16px;
  width: 16px;
  background-color: green;
  border: 2px solid #fff;
`;

//Dashboard
export const Table = styled.table`
  border: 1px solid #ccc;
  border-spacing: 0;
  width: 600px;
  & > thead > tr {
    background-color: #eee;
  }
  & > thead > tr > th {
    border-bottom: 1px solid #ccc;
    padding: 1rem;
    font-weight: 400;
    color: #6c6c6c;
  }
  & > thead > tr > th:first-child {
    text-align: left;
  }

  & > tbody > tr > td {
    /* border-bottom: 1px solid #ccc; */
    padding: 0.7rem;
    text-align: center;
  }
  & > tbody > tr > td:first-child {
    text-align: left;
    font-weight: 600;
  }
`;
export const ActivityContainer = styled(GridContainer)`
  padding: 8px;
  border: 1px solid #eee;
  border-radius: 4px;
`;
export const ActivityCard = styled(GridContainer)`
  grid-template-columns: auto 1fr;
  align-items: flex-start;
  padding: 12px 8px;
  background-color: #efefef;
  border-radius: 8px;
`;

export const DashboardContainer = styled(GridContainer)`
  grid-template-columns: 1fr;
  max-width: 1280px;
  margin: auto;
  align-items: flex-start;
  grid-template-rows: auto 1fr;
  padding: 0;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

//Campaign

export const CampaignContainer = styled(GridContainer)`
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  align-items: flex-start;
`;

export const CampaignBody = styled(GridContainer)`
  align-items: flex-start;
  grid-template-columns: 3fr 1fr;

  @media screen and (max-width: 1068px) {
    grid-template-columns: 3fr 2fr;
  }
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const TimelineContainer = styled(GridContainer)`
  grid-template-columns: 1fr;
  gap: 4px;
`;
export const HourLine = styled(GridContainer)`
  grid-template-columns: 70px 1fr;
  grid-template-rows: 40px 1fr;
  gap: 4px;
  & > p {
    color: #ccc;
    margin: 0;
  }

  & > hr {
    width: 100%;
    margin: 0;
    border-top: 2px dotted #ccc;
  }
`;

export const CampaignCardContainer = styled(GridContainer)`
  grid-template-columns: 3fr 1fr auto;
  padding: 0.7rem 1rem;

  background-color: #eee;
  border-radius: 8px;
  & > div > b {
    margin: 0;
    font-size: 16px;
    font-weight: 600;
    color: #222;
  }
  & > div > small {
    color: #222;
  }
`;
