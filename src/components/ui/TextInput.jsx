import React from "react";
import { Input, Label } from "./components.elements";
import { GridContainer } from "../../Global";

function TextInput(props) {
  return (
    <GridContainer justify="flex-start" rgap="4px">
      <Label>{props.title} </Label>
      <Input {...props}></Input>
    </GridContainer>
  );
}

export default TextInput;
