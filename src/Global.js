import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    background-color: #eee;
  }
  *{
    box-sizing: border-box;

  }
`;

//Containers

export const GridContainer = styled.div`
  display: grid;
  align-items: ${(props) => (props.align ? props.align : "center")};
  place-content: ${(props) => (props.place ? props.place : "center")};
  justify-content: ${(props) => (props.justify ? props.justify : "center")};
  margin: ${(props) => (props.margin ? props.margin : "0")};
  padding: ${(props) => (props.padding ? props.padding : "0")};

  width: 100%;
  grid-template-columns: ${(props) => props.columns};
  grid-template-rows: ${(props) => props.rows};
  gap: ${(props) => (props.gap ? props.gap : "1rem")};
  row-gap: ${(props) => (props.rgap ? props.rgap : "1rem")};
`;

//Text Styles

export const Heading = styled.h1`
  color: #222;
  font-weight: 600;
  text-align: center;
  font-size: 28px;
  margin: 0;
`;
export const LightText = styled.p`
  color: #6c6c6c;
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  text-align: ${(props) => props.talign};
`;
export const AnchorText = styled.p`
  color: blue;
  font-weight: 400;
  font-size: 16px;
  margin: 0;
  text-align: ${(props) => props.talign};
  
  display: inline;  
  &:hover {
    cursor: pointer;
    color: #0000ff99;
  }
`;
