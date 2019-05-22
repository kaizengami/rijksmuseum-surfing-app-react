import styled from "styled-components";

export const CardsWrapper = styled.div`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  & div {
    flex: 0 50%;
    margin: 0 auto;
  }
`;
