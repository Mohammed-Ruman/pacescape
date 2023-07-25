import React from "react";
import {
  GridContainer,
  Heading,
  Heading2,
  LightText,
  LinkButton,
  ScrollContainer,
} from "../../Global";
import { ShareIcon, Table } from "./User.elements";
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
import { PieChart, Pie, Sector } from "recharts";

import { FaEllipsisV, FaHamburger } from "react-icons/fa";
import ActivityRow from "./helpers/ActivityRow";

const data = [
  {
    name: "1",
    James: 4000,
    Kathryn: 2400,
    amt: 2400,
  },
  {
    name: "2",
    James: 3000,
    Kathryn: 1398,
    amt: 2210,
  },
  {
    name: "3",
    James: 2000,
    Kathryn: 9800,
    amt: 2290,
  },
  {
    name: "4",
    James: 2780,
    Kathryn: 3908,
    amt: 2000,
  },
  {
    name: "5",
    James: 1890,
    Kathryn: 4800,
    amt: 2181,
  },
  {
    name: "6",
    James: 2390,
    Kathryn: 3800,
    amt: 2500,
  },
  {
    name: "7",
    James: 3490,
    Kathryn: 4300,
    amt: 2100,
  },
  {
    name: "8",
    James: 3490,
    Kathryn: 4300,
    amt: 2100,
  },
  {
    name: "9",
    James: 3490,
    Kathryn: 4300,
    amt: 2100,
  },
  {
    name: "10",
    James: 1490,
    Kathryn: 4300,
    amt: 2100,
  },
  {
    name: "11",
    James: 390,
    Kathryn: 1300,
    amt: 2100,
  },
  {
    name: "12",
    James: 3490,
    Kathryn: 1300,
    amt: 2100,
  },
];
const pcData = [
  { name: "Group A", value: 400 },
  { name: "Group B", value: 300 },
  { name: "Group C", value: 300 },
  { name: "Group D", value: 200 },
];

function Dashboard() {
  const dummyUsers = [
    {
      name: "Kathryn Murphy",
      views: 4000,
      likes: 999,
      income: "$900",
      status: "new",
    },
    {
      name: "James Harrid",
      views: 15000,
      likes: 999,
      income: "$900",
      status: "new",
    },
    {
      name: "Elon Melon",
      views: 12010,
      likes: 999,
      income: "$1000",
      status: "new",
    },
  ];

  const dummyActivities = [
    {
      image: image,
      name: "Rahul",
      desc: "Maecenas mauris nunc, hendrerit at ipsum vel, consectetur tempus ante. Cras ultricies.",
    },
    {
      image: image,
      name: "Chandan H P",
      desc: "Maecenas mauris nunc, hendrerit at ipsum vel, consectetur tempus ante. Cras ultricies.",
    },
    {
      image: image,
      name: "Vinayak",
      desc: "Maecenas mauris nunc, hendrerit at ipsum vel, consectetur tempus ante. Cras ultricies.",
    },
    {
      image: image,
      name: "Noel Lobo",
      desc: "Maecenas mauris nunc, hendrerit at ipsum vel, consectetur tempus ante. Cras ultricies.",
    },
    {
      image: image,
      name: "Mahesh M",
      desc: "Maecenas mauris nunc, hendrerit at ipsum vel, consectetur tempus ante. Cras ultricies.",
    },
  ];

  return (
    <>
      <GridContainer columns="auto auto " justify="space-between">
        <Heading>Dashboard</Heading>
        <LinkButton>
          <ShareIcon />
          Share
        </LinkButton>
      </GridContainer>
      <GridContainer columns="3fr auto" align="flex-start" padding="1rem 0">
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
        <GridContainer justify="flex-start">
          <GridContainer columns="auto auto" justify="space-between">
            <Heading2 talign="left">Activities</Heading2>
            <select>
              <option>Weekly</option>
              <option>Monthly</option>
              <option>Yearly</option>
            </select>
          </GridContainer>
          <ScrollContainer>
            {dummyActivities.map((act) => (
              <ActivityRow {...act}></ActivityRow>
            ))}
          </ScrollContainer>
          <div>
            <Heading2 talign="left">Statistics</Heading2>
            <LightText>From 1-15 June, 2022</LightText>
          </div>
          <CustomPieChart />
        </GridContainer>
      </GridContainer>
    </>
  );
}

const Example = () => {
  return (
    <BarChart
      width={600}
      height={300}
      data={data}
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
      >
        {pcData.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default Dashboard;
