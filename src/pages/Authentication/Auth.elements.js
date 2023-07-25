import styled from "styled-components";
import { GridContainer } from "../../Global";

export const LoginContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    background: #efb697;
  }
`;
export const FormContainer = styled.div`
  margin: auto;
  display: grid;
  grid-template-areas: ". ." ". ." ". . .";
`;
export const LoginImage = styled.img`
  margin-left: -200px;
  margin-top: -30px;
  @media screen and (max-width: 768px) {
    background: #efb697;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    margin-top: 0;
    height: 170px;
    position: absolute;
    bottom: 80vh;
  }
`;

export const ImgWrapper = styled(GridContainer)`
  height: 100vh;
  overflow: hidden;
  justify-content: flex-end;
`;

export const LoginForm = styled(GridContainer)`
  row-gap: 8px;
  max-width: 600px;
  margin: auto;
  @media screen and (max-width: 768px) {
    position: absolute;
    padding: 2rem;
    top: 20vh;
    left: 0;
    right: 0;
    width: 100%;
    background-color: white;
    border-top-right-radius: 1rem;
    border-top-left-radius: 1rem;
    box-shadow: 0px -13px 15px -7px rgba(0, 0, 0, 0.1);
  }
`;

export const LoginButton = styled.button`
  padding: 1.2rem 1.8rem;

  font-size: 18px;
  color: white;
  background-color: #3564dd;
  border: none;
  border-radius: 2rem;
  font-weight: 600;
  transition: all 0.2s ease-in-out;
  margin-top: 1rem;
  &:hover {
    cursor: pointer;
    background-color: #3564ddbb;
  }
`;
