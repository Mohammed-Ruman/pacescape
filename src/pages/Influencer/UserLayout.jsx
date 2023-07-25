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

function UserLayout() {
  const location = useLocation();
  const navigate = useNavigate();

  const dummyUsers = [
    { name: "appe", online: true, image: logo },
    { name: "appe", online: false, image: logo },
    { name: "appe", online: false, image: logo },
  ];

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
          <GridContainer
            margin="1rem 0"
            columns="repeat(auto-fill,minmax(20px,1fr))"
          >
            {dummyUsers.map((user, i) => (
              <Avatar key={i} {...user} />
            ))}
          </GridContainer>
          <GridContainer
            style={{ position: "absolute", bottom: "1rem", left: "1rem" }}
            columns="36px max-content 36px"
            justify="flex-start"
          >
            <Avatar image={logo}></Avatar>
            <GridContainer justify="flex-start" rgap="0">
              <b>Craig Denis</b>
              <LightText>
                <small>cragidenis@gmail.com</small>
              </LightText>
            </GridContainer>
            <SettingsIcon />
          </GridContainer>
        </aside>
      </SideBarContainer>

      <div style={{ position: "relative", height: "100vh", padding: "1rem" }}>
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
