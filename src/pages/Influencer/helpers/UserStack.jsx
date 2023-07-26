import React from "react";
import { GridContainer } from "../../../Global";
import Avatar from "./Avatar";

export default function UserStack({ users }) {
  return (
    <GridContainer margin="0" columns="repeat(auto-fill,minmax(20px,1fr))">
      {users.map((user, i) => (
        <Avatar key={i} {...user} />
      ))}
    </GridContainer>
  );
}
