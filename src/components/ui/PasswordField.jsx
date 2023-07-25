import React, { useState } from "react";
import { GridContainer } from "../../Global";
import { Input, Label } from "./components.elements";
import { EyeInVisible, EyeVisible } from "./components.elements";
function PasswordField(props) {
  const [visible, setVisible] = useState(false);
  return (
    <GridContainer
      style={{ position: "relative" }}
      justify="flex-start"
      columns="1fr"
      rgap="4px"
    >
      <Label>Password </Label>

      <div style={{ position: "absolute", right: "1.8rem", top: "2.8rem" }}>
        {visible ? (
          <EyeVisible onClick={() => setVisible(false)} />
        ) : (
          <EyeInVisible onClick={() => setVisible(true)} />
        )}
      </div>
      <Input type={visible ? "text" : "password"} {...props}></Input>
    </GridContainer>
  );
}

export default PasswordField;
