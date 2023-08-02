import React from "react";
import {
  GridContainer,
  Heading,
  Heading2,
  LightText,
  LinkButton,
  ScrollContainer,
} from "../../Global";
import {
  ShareIcon,
  Table,
  DashboardContainer,
  LogoutIcon,
} from "./User.elements";
import image from "../../assets/images/logo.png";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PieChart, Pie } from "recharts";

import { FaEllipsisV } from "react-icons/fa";
import {
  dummyActivities,
  dummyUsers,
  pcData,
  statisticsData,
} from "../../data/dummyData";
import Activities from "./helpers/Activities";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../reduxSlices/authSlice";
import { useLazyLogoutQuery } from "../../api/endpoints/authEndpoints";
import { useNavigate } from "react-router-dom";

function Dashboard() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [signout, signOutResults] = useLazyLogoutQuery();
  const counter = useSelector((state) => state.auth);
  console.log(counter);
  const handleLogOut = async () => {
    const res = await signout();
    if (signOutResults.isSuccess) {
      dispatch(logOut());
      navigate("/");
    }
  };
  return (
    <DashboardContainer>
      <GridContainer columns="auto auto " justify="space-between">
        <Heading>Dashboard</Heading>
        <LinkButton onClick={handleLogOut}>
          Logout
          <LogoutIcon />
        </LinkButton>
      </GridContainer>
      <GridContainer
        align="flex-start"
        columns="repeat(auto-fill,minmax(500px,1fr))"
      >
        <GridContainer justify="flex-start">
          <GridContainer columns="auto auto" justify="space-between">
            <Heading2>Statistics</Heading2>
            <select>
              <option>2020</option>
              <option>2021</option>
              <option>2022</option>
              <option>2023</option>
            </select>
          </GridContainer>
          <Example />
          <GridContainer>
            <Heading2 talign="flex-start">Top Creators</Heading2>
            <Table>
              <thead>
                <tr>
                  <th>Creator Name</th>
                  <th>Views</th>
                  <th>Likes</th>
                  <th> Income</th>
                  <th>Status</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {dummyUsers.map((user) => (
                  <tr>
                    <td>{user.name}</td>
                    <td>{user.views}</td>
                    <td>{user.likes}</td>
                    <td>{user.income}</td>
                    <td>{user.status}</td>
                    <td>
                      <FaEllipsisV />
                    </td>
                  </tr>
                ))}
              </tbody>

              <tr></tr>
            </Table>
          </GridContainer>
        </GridContainer>
        <GridContainer justify="flex-end">
          {/* <GridContainer columns="auto auto" justify="space-between">
            <Heading2 talign="left">Activities</Heading2>
            <select>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </GridContainer> */}
          <Activities data={dummyActivities} />
          <div>
            <Heading2 talign="left">Statistics</Heading2>
            <LightText>From 1-15 June, 2022</LightText>
          </div>
          <CustomPieChart />
        </GridContainer>
      </GridContainer>
    </DashboardContainer>
  );
}

const Example = () => {
  return (
    <BarChart
      width={600}
      height={300}
      data={statisticsData}
      margin={{
        top: 20,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Bar dataKey="Kathryn" stackId="a" fill="#E2773D" />
      <Bar dataKey="James" stackId="a" fill="#3564DD" />
    </BarChart>
  );
};

const CustomPieChart = () => {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
    index,
    name,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <GridContainer columns="1fr 100px" gap="0">
      <PieChart width={200} height={200}>
        <Pie
          data={pcData}
          cx="50%"
          cy="50%"
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          dataKey="value"
          nameKey="name"
        >
          {pcData.map((entry, index) => (
            <Cell
              label
              key={`cell-${index}`}
              fill={COLORS[index % COLORS.length]}
            />
          ))}
        </Pie>
      </PieChart>
      <GridContainer rgap="0" margin="auto 0 0 0" align="flex-end">
        {pcData.map((pd, i) => (
          <GridContainer columns="auto 1fr">
            <div
              style={{
                height: "8px",
                width: "8px",
                backgroundColor: COLORS[i % COLORS.length],
              }}
            ></div>
            <small style={{ margin: "0" }}>{pd.name}</small>
          </GridContainer>
        ))}
      </GridContainer>
    </GridContainer>
  );
};

export default Dashboard;
