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
  height: 600px;

  display: flex;

  .right {
    width: 50%;
  }
  .left {
    width: 50%;

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
  width: 80%;
  height: 40px;
  background-color: #edeeff;
  margin-bottom: 20px;
  border-radius: 5px;
`;

export const SubButton = styled.button`
  width: 80%;
  height: 30px;
  background-color: black;
  color: white;
`;
