import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 1000px;
    background-color: #FFF;
    padding-top: 100px;
    padding-bottom: 50px;

    font-family: 'Poppins', sans-serif;

    .first {
        text-align: right;
    }

    .second {
        text-align: left;
    }
`;

export const Area = styled.div`
    width: 90%;
    height: 400px;
    margin: auto;
    margin-bottom: 50px;

    display: flex;
    justify-content: space-between;


    .content {
        width: 50%;
        height: 400px;
    }

    .ondas {
        display: block;
        margin: auto;
    }

`;

export const Text = styled.div`
    width: 100%;

    margin-bottom: 20px;
    font-family: 'Poppins', sans-serif;

`;

export const Titles = styled.h1`
    font-size: 30px;
    font-weight: bold;
    margin-bottom: 15px;
    font-family: 'Poppins', sans-serif;

`;


