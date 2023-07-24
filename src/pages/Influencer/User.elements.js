import styled from "styled-components";
import { GridContainer } from "../../Global";
import {
  BiSolidDashboard,
  BiSolidUserAccount,
  BiMessageSquareDetail,
} from "react-icons/bi";
import { MdCampaign, MdAnalytics } from "react-icons/md";
import { FaInstagram, FaYoutube } from "react-icons/fa";
import { AiOutlineSetting } from "react-icons/ai";
export const SideBarContainer = styled(GridContainer)`
  position: relative;
  padding: 2rem;
  background-color: white;
  height: 100vh;
  align-items: flex-start;
  place-content: flex-start;
  grid-template-columns: 1fr;
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
`;

export const AvatarContainer = styled.div`
  position: relative;
  border-radius: 50%;
  box-shadow: -7px 0px 10px 0px rgba(0,0,0,0.1);
  border: 2px solid #fff;
  background-color: grey;
  overflow: hidden;

  height: 42px;
  width: 42px;
`;

export const DashboardIcon = styled(BiSolidDashboard)`
  color: inherit;
  height: 32px;
  width: 32px;
`;
export const AccountsIcon = styled(BiSolidUserAccount)`
  color: inherit;
  height: 32px;
  width: 32px;
`;
export const CampaignIcon = styled(MdCampaign)`
  color: inherit;
  height: 32px;
  width: 32px;
`;
export const AnalyticsIcon = styled(MdAnalytics)`
  color: inherit;
  height: 32px;
  width: 32px;
`;
export const MessagesIcon = styled(BiMessageSquareDetail)`
  color: inherit;
  height: 32px;
  width: 32px;
`;
export const SettingsIcon = styled(AiOutlineSetting)`
  color: #6c6c6c;
  height: 32px;
  width: 32px;
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

export const LinkButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.7rem 1rem;
  color: #fff;
  background-color: #3564dd;
  border-radius: 4px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: #3564dd99;
  }
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
