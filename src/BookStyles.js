import styled from "styled-components";

export const BookContainer = styled.div`
  @import url("https://fonts.googleapis.com/css?family=Domine&display=swap");
  border: 1px solid red;
  display: flex;
  padding: 10px;
`;

export const BookImage = styled.div``;

export const BookDetails = styled.div`
  margin-left: 10px;

  display: flex;
  flex-direction: column;

  h1 {
    font-family: "Domine", serif;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 0;
  }
`;

export const Authors = styled.p`
  font-family: "Domine", serif;
  font-weight: 100;
  font-size: 10px;
  margin-top: 0;
`;
