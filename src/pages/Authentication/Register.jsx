import React, { useReducer } from "react";
import { useNavigate } from "react-router-dom";
import { GridContainer, Heading, LightText, AnchorText } from "../../Global";
import loginvector from "../../assets/images/login-vector.png";
import {
  LoginContainer,
  LoginButton,
  LoginImage,
  ImgWrapper,
  LoginForm,
} from "./Auth.elements";
import TextInput from "../../components/ui/TextInput";
import PasswordField from "../../components/ui/PasswordField";
import SelectField from "../../components/ui/SelectField";
import { useRegisterMutation } from "../../api/endpoints/authEndpoints";
import { Label } from "../../components/ui/components.elements";
function Register() {
  const navigate = useNavigate();
  const ACTIONS = {
    firstName: "firstName",
    lastName: "lastName",
    gender: "gender",
    dateOfBirth: "dateOfBirth",
    email: "email",
    phone: "phone",
    password: "password",
    role: "role",
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
      case ACTIONS.phone:
        return { ...state, phone: action.payload };
      case ACTIONS.password:
        return { ...state, password: action.payload };
      case ACTIONS.role:
        return { ...state, role: action.payload };
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
    phone: "",
    password: "",
    role: "Creator",
  });

  const [register, { isLoading: isRegisterLoading }] = useRegisterMutation();
  const handleSubmit = async () => {
    console.log(formData);
    try {
      const response = await register(formData);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <LoginForm rgap="8px">
      <Heading talign="center">Create an account</Heading>
      <LightText talign="center">Start Your 30 day free trial</LightText>
      <GridContainer
        margin="2rem 0 0 0"
        columns="repeat(auto-fill,minmax(600px,auto))"
        rgap="12px"
      >
        <GridContainer
          justify="flex-start"
          columns="repeat(auto-fill,minmax(200px,auto))"
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
          columns="repeat(auto-fill,minmax(180px,auto) )"
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
            name="phone"
            value={formData.phone}
            minwidth="200px"
            placeholder="12345 67890"
            title="Phone"
            onChange={(e) => {
              dispatch({ type: ACTIONS.phone, payload: e.target.value });
            }}
          ></TextInput>
        </GridContainer>
        <GridContainer
          columns="repeat(auto-fill,minmax(180px,auto) )"
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
            options={["Creator", "Brand"]}
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

        <PasswordField placeholder="*******" title="Password"></PasswordField>
      </GridContainer>
      <LoginButton onClick={handleSubmit}>Sign Up</LoginButton>
      <LightText talign="center">
        Been here?{" "}
        <AnchorText onClick={() => navigate("/auth/login")}>Login</AnchorText>
      </LightText>
    </LoginForm>
  );
}

export default Register;
