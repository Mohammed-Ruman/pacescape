import React, { useReducer } from "react";
import { LoginButton, LoginForm } from "./Auth.elements";
import { GridContainer, Heading, LightText } from "../../Global";
import TextInput from "../../components/ui/TextInput";
import FileInput from "../../components/ui/FileInput";
import { useLocation, useNavigate } from "react-router-dom";
import { BASE_URL } from "../../utils/constants";

function BrandInfo() {
  const location = useLocation();
  const navigate = useNavigate();
  const ACTIONS = {
    user: "user",
    companyName: "companyName",
    description: "description",
    gstin: "gstin",
    tin: "tin",
    file: "file",
  };
  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.user:
        return { ...state, user: action.payload };
      case ACTIONS.companyName:
        return { ...state, companyName: action.payload };
      case ACTIONS.description:
        return { ...state, description: action.payload };
      case ACTIONS.gstin:
        return { ...state, gstin: action.payload };
      case ACTIONS.tin:
        return { ...state, tin: action.payload };
      case ACTIONS.file:
        return { ...state, file: action.payload };
      default:
        return;
    }
  }

  const [formData, dispatch] = useReducer(reducer, {
    user: location.state.email,
    companyName: "",
    description: "",
    gstin: "",
    tin: "",
    file: "",
  });

  const handleSubmit = async () => {
    const form_data = new FormData();
    console.log(formData);
    for (var key in formData) {
      form_data.append(key, formData[key]);
    }
    try {
      const res = await fetch(`${BASE_URL}/user/public/brand-owner/signup`, {
        method: "POST",
        body: form_data,
      });
      if (res.status === 200) {
        navigate("/");
      }
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <LoginForm style={{ bottom: "auto" }}>
      <Heading talign="center">Let us know a bit more about your brand</Heading>
      <LightText talign="center">Company Details</LightText>
      <GridContainer
        justify="flex-start"
        columns="repeat(auto-fill,minmax(180px,1fr))"
        gap="1rem"
        margin="1rem 0 0 0"
      >
        <TextInput
          name="user"
          value={formData.user}
          minwidth="180px"
          placeholder="JohnDoe@gmail.com"
          title="Your Email"
          disabled
          onChange={(e) => {
            dispatch({ type: ACTIONS.user, payload: e.target.value });
          }}
        ></TextInput>
        <TextInput
          name="companyName"
          value={formData.companyName}
          minwidth="150px"
          placeholder="Pacescape"
          title="Brand Name"
          onChange={(e) => {
            dispatch({ type: ACTIONS.companyName, payload: e.target.value });
          }}
        ></TextInput>
      </GridContainer>
      <GridContainer
        columns="repeat(auto-fill,minmax(280px,1fr))"
        justify="flex-start"
      >
        <TextInput
          name="description"
          value={formData.description}
          placeholder="Our enterprise focuses on..."
          title="Description"
          onChange={(e) => {
            dispatch({ type: ACTIONS.description, payload: e.target.value });
          }}
        ></TextInput>
      </GridContainer>
      <GridContainer
        columns="repeat(auto-fill,minmax(200px,1fr))"
        justify="flex-start"
      >
        <TextInput
          name="gstin"
          value={formData.gstin}
          minwidth="180px"
          placeholder="22AAAA0000A1Z5"
          title="GST Identification Number"
          onChange={(e) => {
            dispatch({ type: ACTIONS.gstin, payload: e.target.value });
          }}
        ></TextInput>
        <TextInput
          name="tin"
          value={formData.tin}
          minwidth="180px"
          placeholder="AAAAA8888A"
          title="Tax Identification Number"
          onChange={(e) => {
            dispatch({ type: ACTIONS.tin, payload: e.target.value });
          }}
        ></TextInput>
      </GridContainer>
      <FileInput
        title="Logo"
        type="file"
        name="file"
        onChange={(e) => {
          dispatch({
            type: ACTIONS.file,
            payload: e.target.files[0],
          });
        }}
      />
      <LoginButton onClick={handleSubmit}>Save & Proceed</LoginButton>
    </LoginForm>
  );
}

export default BrandInfo;
