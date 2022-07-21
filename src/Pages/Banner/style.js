import styled from "styled-components"

export const Background = styled.div`
padding-top:100px;
width:100%;
height:50vh; 
background: rgb(255,255,255);
background: linear-gradient(90deg, rgba(255,255,255,1) 64%, rgba(37,43,43,1) 64%);

.Container{
  max-width:90vw;
  margin:auto;
  display:flex;
  align-items:center;
  justify-content:space-between;
}
.TextArea{
  width:30vw;
  height: auto;
  h1{
font-family: 'Poppins';
font-size: 96px;
color: #232323;
font-weight:bold;
margin-bottom:80px;
  }

p{
  font-family: 'Poppins';
font-style: normal;
font-size: 14px;
color: #5F6073;
}
}

.Image{

 .ImgGlass{
  width:40vw
 }
}
`;

export const PaymentsArea= styled.div`
display:flex;
align-items:center;
justify-content:space-evenly;
width:100%;
height:100px;
background:#EDEEFF;

.imgpayment{
width:100px;
height:100px;
}
`