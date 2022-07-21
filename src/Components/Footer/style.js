import styled from "styled-components";

const Media = {
  Tablet: "@media(max-width: 1024px)",
  MobileM: "@media(max-width: 425px)",
  MobileS: "@media(max-width: 320px)",
};

export const Main = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #252b2b;
  color: white;
  padding: 20px;
`;
