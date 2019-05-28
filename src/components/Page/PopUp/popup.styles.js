import styled, { keyframes } from "styled-components";

const popUp = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`;

export const PopUpWrapper = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  /* background-color: #e4f9ffab; */
  text-align: center;
  font-size: 30px;
  opacity: 1;
  border-radius: 6px;
  /* box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19); */
  animation-name: ${popUp};
  animation-duration: 0.5s;
  animation-timing-function: ease-in;
  animation-fill-mode: forwards;
  animation-iteration-count: 1;
`;

export const Image = styled.img`
  height: 250px;
  border-radius: 2px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const BottomButtons = styled.div`
  width: 100%;
  position: absolute;
  display: flex;
  justify-content: space-around;
  bottom: 10px;
`;

export const Button = styled.button`
  font-family: "Lato";
  color: #ff7e7e;
  text-shadow: #ff7e7e 0px 0px 6px;
  text-transform: capitalize;
  font-size: 14px;
  &:nth-child(2) {
    color: #97fffac9;
    text-shadow: #97fffac9 0px 0px 4px;
  }
`;
