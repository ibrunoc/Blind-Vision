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
`;

export const Container = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  top: 0;
  position: fixed;
  align-items: center;
  justify-content: space-between;
  flex-direction: row;
  background: #ffffff;
  box-shadow: 8.66007px 3.60836px 72.1672px rgba(0, 0, 0, 0.18);
  border-radius: 14px;
  margin-top: 60px;
  padding: 15px 29px;
  .Content {
    display: flex;
    h3 {
      font-family: "Poppins";
      font-size: 17px;
      padding: 0 20px;
    }
  }
  .Btn {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 15px 63px;
    background: #252b2b;
    border-radius: 15px;
    color: white;
    cursor: pointer;
  }
`;
