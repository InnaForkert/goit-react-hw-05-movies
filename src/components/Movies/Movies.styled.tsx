import styled from "styled-components";

export const MovieLibrary = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-bottom: 40px;
`;

export const MovieCard = styled.li`
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
