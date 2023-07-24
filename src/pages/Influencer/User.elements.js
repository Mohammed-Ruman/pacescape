import styled from "styled-components";
import { GridContainer } from "../../Global";
import {
  BiSolidDashboard,
  BiSolidUserAccount,
  BiMessageSquareDetail
} from "react-icons/bi";
import { MdCampaign, MdAnalytics } from "react-icons/md";
export const SideBarContainer = styled(GridContainer)`
  padding: 2rem;
  background-color: white;
  height: 100vh;
  align-items: flex-start;
  place-content: flex-start;
  grid-template-columns: 1fr;
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
