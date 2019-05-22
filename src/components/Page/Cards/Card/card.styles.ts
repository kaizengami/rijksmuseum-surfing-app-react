import styled from "styled-components";

export const CardWrapper = styled.div`
  width: 460px;
  height: 120px;
  padding-bottom: 50px;
  cursor: pointer;
`;

export const LongTitle = styled.div`
  font-size: 14px;
  width: 460px;
  text-align: center;
  color: #61efff;
  text-shadow: #61efff 0px 0px 4px;
  text-transform: capitalize;
  border-radius: 3px;
  background-color: #141d2ebe;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  opacity: 0;
  transition: opacity 0.2s ease-in-out;
`;

export const HeaderImage = styled<any>("div")`
  width: 460px;
  height: 110px;
  background-color: #303d56be;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  background-image: ${(props: any) => `url(${props.background})`};
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  &:hover + ${LongTitle} {
    opacity: 1;
  }
`;
