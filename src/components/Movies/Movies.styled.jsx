import styled from "styled-components";

export const MovieLibrary = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
`;

export const MovieCard = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 20%;
  cursor: pointer;
`;

export const MovieTitle = styled.p`
  text-align: center;
  font-size: 20px;
`;
