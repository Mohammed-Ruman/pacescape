import React from "react";
import {
  AnchorText,
  GridContainer,
  Heading,
  Heading2,
  LightText,
} from "../../Global";
import logo from "../../assets/images/logo.png";
import logo2 from "../../assets/images/login-vector.png";
import {
  AccountsIcon,
  AnalyticsIcon,
  CampaignIcon,
  DashboardIcon,
  Menu,
  MenuItem,
  MessagesIcon,
  SideBarContainer,
  IconText,
  SettingsIcon,
  BottomNavbar,
  UserLayoutContainer,
} from "./User.elements";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { MdAdd } from "react-icons/md";
import Avatar from "./helpers/Avatar";
import UserStack from "./helpers/UserStack";
import { dummyStackUsers } from "../../data/dummyData";

function UserLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const handleMenuClick = (item) => {
    navigate("/user/" + item);
  };
  return (
    <UserLayoutContainer>
      <SideBarContainer>
        <aside>
          <GridContainer columns="48px 1fr">
            <img height="56px" src={logo}></img>
            <GridContainer justify="flex-start" rgap="0">
              <IconText>Pacescape</IconText>
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
          <UserStack users={dummyStackUsers} />
          <GridContainer
            style={{ position: "absolute", bottom: "1rem", left: "1rem" ,right:"0"}}
            columns="36px max-content auto"
            justify="flex-start"
          >
            <Avatar image={logo}></Avatar>
            <GridContainer justify="flex-start" rgap="0">
              <small>
                <b>Craig Denis</b>
              </small>
              <LightText style={{ fontSize: "11px" }}>
                cragidenis@gmail.com
              </LightText>
            </GridContainer>
            <SettingsIcon />
          </GridContainer>
        </aside>
      </SideBarContainer>

      <div style={{ position: "relative", height: "100vh" }}>
        <Outlet />
      </div>
      <BottomNavbar>
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
      </BottomNavbar>
    </UserLayoutContainer>
  );
}

export default UserLayout;
