import React, { useState } from "react";
import { GridContainer } from "../../Global";
import { Input, Label } from "./components.elements";
import { EyeInVisible, EyeVisible } from "./components.elements";
function PasswordField(props) {
  const [visible, setVisible] = useState(false);
  return (
    <GridContainer justify="flex-start" rgap="4px">
      <Label>Password </Label>
      <div style={{ position: "relative" }}>
        <div style={{ position: "absolute", right: "1.8rem", top: "1.2rem" }}>
          {visible ? (
            <EyeVisible onClick={() => setVisible(false)} />
          ) : (
            <EyeInVisible onClick={() => setVisible(true)} />
          )}
        </div>
        <Input type={visible ? "text" : "password"} {...props}></Input>
      </div>
    </GridContainer>
  );
}

export default PasswordField;
