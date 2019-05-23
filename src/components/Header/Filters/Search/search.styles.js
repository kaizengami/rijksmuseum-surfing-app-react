import styled from "styled-components";

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 50px;
  text-align: center;
  background-color: #38474f;
  color: white;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`;

export const SearchInput = styled.input`
  width: 70%;
  height: 30px;
  padding: 0 60px;
  background-color: #465a63;
  border: none;
  color: white;
  ::placeholder,
  ::-webkit-input-placeholder {
    color: white;
  }
  &:before {
    position: absolute;
    content: "&#8981;";
  }
`;

export const SearchIcon = styled.span`
  transform: scale(0.7);
  &:before {
    position: absolute;
    width: 25px;
    height: 25px;
    display: inline-block;
    margin-top: -15px;
    margin-left: 30px;
    content: " ";
    mask: url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDMyIDMyIj48cGF0aCBkPSJNMjcgMjQuNTdsLTUuNjQ3LTUuNjQ4YTguODk1IDguODk1IDAgMCAwIDEuNTIyLTQuOTg0QzIyLjg3NSA5LjAxIDE4Ljg2NyA1IDEzLjkzOCA1IDkuMDEgNSA1IDkuMDEgNSAxMy45MzhjMCA0LjkyOSA0LjAxIDguOTM4IDguOTM4IDguOTM4YTguODg3IDguODg3IDAgMCAwIDQuOTg0LTEuNTIyTDI0LjU2OCAyNyAyNyAyNC41N3ptLTEzLjA2Mi00LjQ0NWE2LjE5NCA2LjE5NCAwIDAgMS02LjE4OC02LjE4OCA2LjE5NSA2LjE5NSAwIDAgMSA2LjE4OC02LjE4OCA2LjE5NSA2LjE5NSAwIDAgMSA2LjE4OCA2LjE4OCA2LjE5NSA2LjE5NSAwIDAgMS02LjE4OCA2LjE4OHoiLz48L3N2Zz4=");
    background-color: white;
  }
`;
