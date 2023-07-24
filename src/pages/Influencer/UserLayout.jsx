import React from "react";
import { AnchorText, GridContainer, Heading, LightText } from "../../Global";
import logo from "../../assets/images/logo.png";
import {
  AccountsIcon,
  AnalyticsIcon,
  CampaignIcon,
  DashboardIcon,
  Menu,
  MenuItem,
  MessagesIcon,
  SideBarContainer,
} from "./User.elements";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";

function UserLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    navigate("/user/" + item);
  };
  return (
    <GridContainer columns="max-content 1fr" align="flex-start">
      <SideBarContainer>
        <aside>
          <GridContainer columns="48px 1fr">
            <img height="56px" src={logo}></img>
            <GridContainer justify="flex-start" rgap="0">
              <Heading>Pacescape</Heading>
              <LightText>Category</LightText>
            </GridContainer>
          </GridContainer>

          <Menu>
            <ul>
              <MenuItem
                onClick={() => handleMenuClick("dashboard")}
                selected={location.pathname.includes("dashboard")}
              >
                <DashboardIcon />
                Dashboard
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuClick("accounts")}
                selected={location.pathname.includes("accounts")}
              >
                <AccountsIcon />
                My Accounts
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuClick("campaign")}
                selected={location.pathname.includes("campaign")}
              >
                <CampaignIcon />
                Campaign
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuClick("analytics")}
                selected={location.pathname.includes("analytics")}
              >
                <AnalyticsIcon />
                Analytics
              </MenuItem>
              <MenuItem
                onClick={() => handleMenuClick("messages")}
                selected={location.pathname.includes("messages")}
              >
                <MessagesIcon />
                Messages
              </MenuItem>
            </ul>
          </Menu>

          <hr></hr>

          <GridContainer
            columns="auto max-content "
            justify="space-between"
            gap="0"
          >
            <b>Teams</b>

            <AnchorText>
              <GridContainer gap="0" columns="min-content min-content">
                <MdAdd style={{ height: "20px", width: "20 px" }} />
                Invite
              </GridContainer>
            </AnchorText>
          </GridContainer>
        </aside>
      </SideBarContainer>
      <Outlet />
    </GridContainer>
  );
}

export default UserLayout;
