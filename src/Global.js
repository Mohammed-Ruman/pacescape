import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  body {
    
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

export const ScrollContainer = styled(GridContainer)`
  place-content: start;
  grid-template-columns: 1fr;
  row-gap: 4px;
  max-height: ${(props) => (props.maxHeight ? props.maxHeight : "300px")};
  overflow: auto;
`;

//Text Styles

export const Heading = styled.h1`
  color: #222;
  font-weight: 600;
  text-align: center;
  font-size: 28px;
  margin: 0;
`;
export const Heading2 = styled.h2`
  color: #222;
  font-weight: 500;
  text-align: ${(props) => (props.talign ? props.talign : "center")};
  font-size: 20px;
  margin: 0;
`;
export const BoldText = styled.p`
  color: #222;
  font-weight: 600;

  font-size: 14px;
  margin: 0;
`;
export const LightText = styled.p`
  color: #6c6c6c;
  font-weight: 400;
  font-size: 18px;
  margin: 0;
  text-align: ${(props) => props.talign};
`;
export const SmallLightText = styled(LightText)`
  color: #bbb;
  font-size: 11px;
`;
export const AnchorText = styled.a`
  color: blue;
  font-weight: 400;
  font-size: 16px;
  text-decoration: none;
  margin: 0;
  text-align: ${(props) => props.talign};

  display: inline;
  &:hover {
    cursor: pointer;
    color: #0000ff99;
  }
`;

//BUttons
export const LinkButton = styled.button`
  display: flex;
  align-items: center;
  gap: 4px;
  padding: 0.7rem 1rem;
  color: #fff;
  background-color: #3564dd;
  border-radius: 4px;
  border: none;

  &:hover {
    cursor: pointer;
    background-color: #3564dd99;
  }
`;
