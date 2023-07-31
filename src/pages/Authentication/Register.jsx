import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";

//Styled Components
import { GridContainer, Heading, LightText, AnchorText } from "../../Global";
import { LoginButton, LoginForm, FormContainer } from "./Auth.elements";
import { Label } from "../../components/ui/components.elements";

//Components
import TextInput from "../../components/ui/TextInput";
import PasswordField from "../../components/ui/PasswordField";
import SelectField from "../../components/ui/SelectField";

//RTK API Hooks

//Form Validation
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import FileInput from "../../components/ui/FileInput";

function Register() {
  const navigate = useNavigate();
  const schema = yup
    .object({
      firstName: yup.string().required(),
      age: yup.number().positive().integer().required(),
    })
    .required();
  const ACTIONS = {
    firstName: "firstName",
    lastName: "lastName",
    gender: "gender",
    dateOfBirth: "dateOfBirth",
    email: "email",
    phoneNumber: "phoneNumber",
    password: "password",
    role: "role",
    file: "file",
  };
  function reducer(state, action) {
    switch (action.type) {
      case ACTIONS.firstName:
        return { ...state, firstName: action.payload };
      case ACTIONS.lastName:
        return { ...state, lastName: action.payload };
      case ACTIONS.gender:
        return { ...state, gender: action.payload };
      case ACTIONS.dateOfBirth:
        return { ...state, dateOfBirth: action.payload };
      case ACTIONS.email:
        return { ...state, email: action.payload };
      case ACTIONS.phoneNumber:
        return { ...state, phoneNumber: action.payload };
      case ACTIONS.password:
        return { ...state, password: action.payload };
      case ACTIONS.role:
        return { ...state, role: action.payload };
      case ACTIONS.file:
        return { ...state, file: action.payload };
      default:
        return;
    }
  }

  const [formData, dispatch] = useReducer(reducer, {
    firstName: "",
    lastName: "",
    gender: "Male",
    dateOfBirth: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "brand_owner",
  });

  const handleSubmit = async () => {
    const form_data = new FormData();
    for (var key in formData) {
      form_data.append(key, formData[key]);
    }

    try {
      const res = await fetch("http://3.108.115.50:8085/user/public/signup", {
        method: "POST",
        body: form_data,
      });
      if (res.status === 200) {
        navigate("/brandinfo", { state: { email: formData.email } });
      }
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <LoginForm columns="1fr" rgap="8px" style={{ bottom: "auto" }}>
      <Heading talign="center">Create an account</Heading>
      <LightText talign="center">Start Your 30 day free trial</LightText>

      <GridContainer
        justify="flex-start"
        columns="repeat(auto-fill,minmax(200px,1fr))"
        gap="1rem"
      >
        <TextInput
          name="firstName"
          value={formData.firstName}
          minwidth="200px"
          placeholder="John"
          title="First Name"
          onChange={(e) => {
            dispatch({ type: ACTIONS.firstName, payload: e.target.value });
          }}
        ></TextInput>
        <TextInput
          name="lastName"
          value={formData.lastName}
          minwidth="200px"
          placeholder=" Doe"
          title="Last Name"
          onChange={(e) => {
            dispatch({ type: ACTIONS.lastName, payload: e.target.value });
          }}
        ></TextInput>
      </GridContainer>
      <GridContainer
        columns="repeat(auto-fill,minmax(280px,1fr))"
        justify="flex-start"
      >
        <TextInput
          name="email"
          value={formData.email}
          placeholder="johndoe@gmail.com"
          title="Email"
          onChange={(e) => {
            dispatch({ type: ACTIONS.email, payload: e.target.value });
          }}
        ></TextInput>
        <TextInput
          name="phoneNumber"
          value={formData.phoneNumber}
          minwidth="200px"
          placeholder="91 12345 67890"
          title="Phone"
          onChange={(e) => {
            dispatch({ type: ACTIONS.phoneNumber, payload: e.target.value });
          }}
        ></TextInput>
      </GridContainer>
      <GridContainer
        columns="repeat(auto-fill,minmax(180px,1fr) )"
        justify="flex-start"
      >
        <TextInput
          name="dateOfBirth"
          value={formData.dateOfBirth}
          minwidth="150px"
          placeholder="johndoe@gmail.com"
          title="Date of Birth"
          type="date"
          onChange={(e) => {
            dispatch({
              type: ACTIONS.dateOfBirth,
              payload: e.target.value,
            });
          }}
        ></TextInput>
        <SelectField
          value={formData.role}
          onChange={(e) => {
            dispatch({
              type: ACTIONS.role,
              payload: e.target.value,
            });
          }}
          options={["brand_owner"]}
          title="Join as"
        ></SelectField>
        <div>
          <Label>Gender</Label>

          <LightText>
            <input
              type="radio"
              name="gender"
              value="Male"
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.gender,
                  payload: e.target.value,
                });
              }}
            />
            Male
          </LightText>

          <LightText>
            <input
              type="radio"
              name="gender"
              value="Female"
              onChange={(e) => {
                dispatch({
                  type: ACTIONS.gender,
                  payload: e.target.value,
                });
              }}
            />
            Female
          </LightText>
        </div>
      </GridContainer>
      <FileInput
        title="Profile Picture"
        type="file"
        name="file"
        onChange={(e) => {
          dispatch({
            type: ACTIONS.file,
            payload: e.target.files[0],
          });
        }}
      />

      <PasswordField
        name="password"
        value={formData.password}
        onChange={(e) => {
          dispatch({
            type: ACTIONS.password,
            payload: e.target.value,
          });
        }}
        placeholder="*******"
        title="Password"
      ></PasswordField>

      <LoginButton onClick={handleSubmit}>Sign Up </LoginButton>

      <LightText talign="center">
        Been here? <AnchorText onClick={() => navigate("/")}>Login</AnchorText>
      </LightText>
    </LoginForm>
  );
}

export default Register;
