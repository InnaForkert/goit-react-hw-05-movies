import { Link } from "react-router-dom";
import styled from "styled-components";

export const MovieCardStyled = styled(Link)`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 20%;
  cursor: pointer;
  transition-property: transform, box-shadow;
  transition-duration: 250ms;
  padding-bottom: 10px;
  background-color: black;
  color: white;

  :hover,
  :focus {
    transform: scale(1.05);
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  }
`;

export const MovieTitle = styled.p`
  text-align: center;
  font-size: 16px;
`;
