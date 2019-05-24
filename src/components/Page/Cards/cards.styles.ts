import styled from "styled-components";

export const CardsWrapper = styled<any>("div")`
  width: 1000px;
  display: flex;
  flex-wrap: wrap;
  margin-top: 10px;
  ${({ isPopUpVisible }) =>
    isPopUpVisible &&
    `
    filter: blur(5px) saturate(50%);
  `}
  & div {
    flex: 0 50%;
    margin: 0 auto;
  }
`;
