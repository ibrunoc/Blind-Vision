import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  padding-top: 30px;
  text-align: center;
  background-color: #fff;

  .main {
    width: 90%;
    margin: auto;
  }
`;

export const Titles = styled.h1`
  font-size: 30px;
  font-family: "Poppins", sans-serif;
  margin: auto;

  margin-bottom: 40px;
`;

export const FormArea = styled.div`
  width: 100%;
  height: auto;
  padding-bottom: 50px;
  display: block;

  .right {
    width: 100%;
  }
  .left {
    width: 100%;

    .desc {
      height: 200px;
    }
  }
`;

export const InputTitle = styled.h2`
  font-size: 22px;
  font-family: "Poppins";
  margin-bottom: 20px;
`;

export const InputArea = styled.input`
  width: 50%;
  height: 50px;
  background-color: #edeeff;
  margin-bottom: 20px;
  padding-left: 20px;
  border-radius: 20px;
`;

export const SubButton = styled.button`
  width: 200px;
  height: 50px;
  background-color: black;
  display: block;
  margin: auto;
  color: white;
  border-radius: 20px;
`;
