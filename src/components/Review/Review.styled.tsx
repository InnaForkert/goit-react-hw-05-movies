import styled from "styled-components";

export const Author = styled.p`
  font-size: 18px;
  margin-bottom: 5px;
`;

export const Quote = styled.blockquote`
  font-style: italic;
  font-size: 14px;
  line-height: 1.2;
`;

export const ReviewText = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  z-index: 2;
  margin-left: 50%;
  margin-top: 10px;
  padding: 20px;
  border-radius: 10px;
  background-color: #000000a4;
  color: white;
`;
