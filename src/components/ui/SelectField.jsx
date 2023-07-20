import React from "react";
import { GridContainer } from "../../Global";
import { Label, Select } from "./components.elements";

function SelectField(props) {
  return (
    <GridContainer justify="flex-start" rgap="4px">
      <Label>{props.title} </Label>
      <Select {...props}>
        {props.options?.map((opt) => (
          <option value={opt}>{opt}</option>
        ))}
      </Select>
    </GridContainer>
  );
}

export default SelectField;
