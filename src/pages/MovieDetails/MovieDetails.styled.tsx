import { Link } from "react-router-dom";
import styled from "styled-components";

export const MoviePoster = styled.img`
  width: 100%;
`;

export const MovieInfo = styled.div`
  position: absolute;
  top: 25%;
  left: 2%;
  width: 40%;
  padding: 15px;
  border-radius: 10px;
  background-color: #000000a4;
  color: white;
`;

export const Button = styled(Link)`
  display: inline-block;
  padding: 8px 20px;
  margin: 10px;
  color: black;
  background-color: white;
  border-radius: 10px;
  text-decoration: none;
  transition-property: color, background-color;
  transition-duration: 250ms;

  :hover,
  :focus {
    color: white;
    background-color: black;
  }
`;