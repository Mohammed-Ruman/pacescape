import styled from "styled-components";
import { GridContainer } from "../../Global";
import {
  BiSolidDashboard,
  BiSolidUserAccount,
  BiMessageSquareDetail,
  BiSolidShareAlt,
  BiMessageAltDetail,
  BiImage,
} from "react-icons/bi";
import {
  MdCampaign,
  MdAnalytics,
  MdOutlineAttachFile,
  MdLogout,
} from "react-icons/md";
import {
  FaBell,
  FaEllipsisH,
  FaEllipsisV,
  FaInstagram,
  FaPhone,
  FaPlus,
  FaVideo,
  FaYoutube,
} from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
import { GrLocation } from "react-icons/gr";

export const UserLayoutContainer = styled(GridContainer)`
  grid-template-columns: 250px 1fr;
  gap: 0;
  align-items: flex-start;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
export const SideBarContainer = styled(GridContainer)`
  position: relative;
  padding: 0.7rem;
  background-color: #fff;
  height: 100vh;
  align-items: space-between;
  place-content: space-between;
  grid-template-columns: 1fr;
  border-right: 1px solid #eee;
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
    background-color: ${(props) => (props.selected ? "#3564dd" : "#eee")};
  }
  @media screen and (max-width: 768px) {
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
      background-color: #eee;
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
  @media screen and (max-width: 768px) {
    & > ul {
      display: flex;
    }
    display: flex;
  }
`;
export const ProfileDropDown = styled.div`
  border-radius: 1rem;
  padding: 1rem;
  position: absolute;
  bottom: 0;
  left: 250px;
  background-color: #fff;
  & ul {
    list-style: none;
    padding: 0;
    margin: 0;
  }
  & ul>li{
    border-bottom: 1px solid#ccc;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  border-radius: 50%;
  /* box-shadow: -7px 0px 10px 0px rgba(0, 0, 0, 0.1); */
  border: 2px solid #fff;
  background-color: grey;
  overflow: hidden;

  height: 36px;
  width: 36px;
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
  height: 24px;
  width: 24px;
  &:hover {
    cursor: pointer;
    color: grey;
  }
`;
export const ShareIcon = styled(BiSolidShareAlt)`
  color: #fff;
  height: 18px;
  width: 18px;
`;
export const LogoutIcon = styled(MdLogout)`
  color: #fff;
  height: 18px;
  width: 18px;
`;
export const AddIcon = styled(FaPlus)`
  color: #fff;
  height: 18px;
  width: 18px;
`;
export const BellIcon = styled(FaBell)`
  color: #666;
  height: 22px;
  width: 22px;
`;
export const VideoIcon = styled(FaVideo)`
  color: #666;
  height: 22px;
  width: 22px;
`;
export const PhoneIcon = styled(FaPhone)`
  color: #666;
  height: 20px;
  width: 20px;
`;
export const MessageIcon = styled(BiMessageAltDetail)`
  color: #666;
  height: 22px;
  width: 22px;
`;
export const AttachIcon = styled(MdOutlineAttachFile)`
  color: #666;
  height: 22px;
  width: 22px;
`;
export const PictureIcon = styled(BiImage)`
  color: #666;
  height: 22px;
  width: 22px;
`;
export const LocationIcon = styled(GrLocation)`
  color: #666;
  height: 22px;
  width: 22px;
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
export const EllipsisHIcon = styled(FaEllipsisH)`
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
export const DashboardContainer = styled(GridContainer)`
  grid-template-columns: 1fr;
  max-width: 1280px;
  margin: auto;
  align-items: flex-start;
  grid-template-rows: auto 1fr;
  padding: 0.7rem;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;
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

//Campaign

export const CampaignContainer = styled(GridContainer)`
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr;
  align-items: flex-start;
  padding: 0.7rem;
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

//Messages

export const MessagesContainer = styled(GridContainer)`
  grid-template-columns: 1fr;
  gap: 0;
  align-items: start;
  place-content: flex-start;
  height: 100vh;
`;
export const MessagesHeader = styled(GridContainer)`
  grid-template-columns: 1fr;
  justify-content: flex-end;
  border-bottom: 1px solid #eee;
  padding: 0.7rem;

  & > div {
    display: flex;
    align-items: center;
    gap: 1rem;
    justify-content: flex-end;
  }

  @media screen and (max-width: 768px) {
    display: none;
  }
`;

export const MessagesBody = styled(GridContainer)`
  grid-template-columns: 300px 1fr;
  grid-template-rows: 1fr;
  gap: 0;
  align-items: flex-start;
  height: calc(100vh - 62px);

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const MessageListContainer = styled(GridContainer)`
  grid-template-columns: 1fr;
  border-right: 1px solid #eee;
  height: 100%;
  align-items: flex-start;
  place-content: start;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isSelected ? "none" : "grid")};
  }
`;

export const ChatCard = styled(GridContainer)`
  grid-template-columns: auto 1fr auto;
  align-items: flex-start;
  background-color: ${(props) => (props.selected ? "#F8FAFE" : "#fff")};
  padding: 0.7rem 1rem;
  gap: 4px;
  &:hover {
    background-color: ${(props) => (props.selected ? "#F8FAFE" : "#eee")};
    cursor: pointer;
  }
`;

export const ChatBodyContainer = styled(GridContainer)`
  grid-template-columns: 1fr;
  row-gap: 0;
  height: 100%;
  align-items: flex-start;
  place-content: start;
  @media screen and (max-width: 768px) {
    display: ${(props) => (props.isSelected ? "absolute" : "none")};
    top: 0;
    width: 100%;
  }
`;

export const ChatBodyHeader = styled(GridContainer)`
  grid-template-columns: auto 1fr auto;
  padding: 0.7rem;
  border-bottom: 1px solid #eee;
  & > span {
    display: none;
  }
  @media screen and (max-width: 768px) {
    & > span {
      display: block;
    }
    grid-template-columns: ${(props) =>
      props.isSelected ? "auto auto 1fr auto" : "auto 1fr auto"};
  }
`;

export const ChatContent = styled(GridContainer)`
  align-items: flex-start;
  place-content: flex-start;
  grid-template-columns: 1fr;

  padding: 0.7rem;
  margin-bottom: 40px;
  row-gap: 1rem;
  background-color: #eee;
  height: calc(100vh - 170px);
  overflow: auto;
`;

export const MyChatBlock = styled.div`
  background-color: #f1f6fd;
  border: 1px solid #ddd;
  padding: 0.7rem;
  display: inline-block;
  border-radius: 4px;
  align-content: flex-start;
`;
export const OtherChatBlock = styled.div`
  background-color: #fff;
  display: inline-block;
  padding: 0.7rem;
  height: fit-content;
  border-radius: 4px;
  align-content: flex-start;
`;

export const ChatField = styled(GridContainer)`
  padding: 0.7rem;
  grid-template-columns: auto 1fr auto;
  justify-content: flex-start;
  background-color: #fff;
  position: absolute;
  bottom: 0;
  width: calc(100% - 300px);
  & > input {
    border: 1px solid transparent;
    outline: none;
    max-width: 200px;
    /* &:hover {
      border: 1px solid #222;
    } */
  }

  & > button {
    color: #fff;
    padding: 8px;
    font-size: 12px;

    margin: 0 1rem;
    text-transform: uppercase;
    background-color: #3564dd;
    border: none;
    border-radius: 4px;
    &:hover {
      cursor: pointer;
      background-color: #3564ddbb;
    }
  }

  @media screen and (max-width: 768px) {
    bottom: 60px;
    background-color: #fff;
    width: 100%;
  }
`;
