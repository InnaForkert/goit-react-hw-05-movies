import { NavLink, Outlet } from "react-router-dom";
import styled from "styled-components";

export const MoviePoster = styled.img`
  position: absolute;
  top: 20%;
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

export const Button = styled(NavLink)`
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
  :focus,
  &.active {
    color: white;
    background-color: black;
    box-shadow: rgba(255, 255, 255, 0.2) 0px 8px 24px;
  }
`;

export const StyledOutlet = styled(Outlet)`
  position: absolute;
  top: 25%;
  right: 2%;
  width: 50%;
  padding: 15px;
  border-radius: 10px;
  background-color: #000000a4;
  color: white;
`;
