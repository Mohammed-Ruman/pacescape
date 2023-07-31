import React from "react";
import { GridContainer } from "../../Global";
import { Input, Label } from "./components.elements";

function FileInput(props) {
  return (
    <GridContainer justify="flex-start" columns="1fr" rgap="4px">
      <Label>{props.title} </Label>
      <Input type="file" {...props} style={{fontSize:"12px"}}></Input>
    </GridContainer>
  );
}

export default FileInput;
