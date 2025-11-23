import styled from 'styled-components'

export const Container = styled.div`
min-height: 692px;
/* position: fixed; */
position:relative;
bottom: 0;
left: 0;
right: 0;
top:0;
z-index:0;
overflow: hidden;
/* background:#141414; */
/* background-image: url('https://res.cloudinary.com/erracode/image/upload/v1616707951/yohann-libot-k_w6a2Qhnwc-unsplash_2_my32we.jpg'); */
background-repeat: no-repeat;
background-size: cover;
/* background: rgb(166,10,61); */
/* background: linear-gradient(90deg, rgba(166,10,61,1) 35%, rgba(0,0,0,1) 100%);  */
background: #1c1726;
`

export const FormWrap = styled.div`
/* height:100%; */
height:100vh;
display:flex;
flex-direction: column;
justify-content:center;
@media screen and (max-width: 400px) {
    height:80%;
}
`

export const Icon = styled.a`
margin-left:32px;
margin-top:32px;
text-decoration:none;
color: #fff;
font-weight: 700;
font-size:32px;
@media screen and (max-width: 480px){
    margin-left:16px;
    margin-top:8px;
}
`

export const FormContent = styled.div`
height:100px;
display:flex;
flex-direction:column;
justify-content:center;
@media screen and (max-width: 480px){
    padding:10px;
}
`

export const Form = styled.form`
background:#010101;

max-width:400px;
height:auto;
width: 100%;
z-index: 1;
display:grid;
margin: 0 auto;

padding: 32px 32px;

border-radius: 3rem;
box-shadow: 0 1px 3px rgba(0,0,0,0.9);
@media screen and (max-width: 400px){
    padding:32px 32px;
}
`

export const FormH1 = styled.h1`

color: #fff;
font-size: 20px;
font-weight:400;
text-align:center;
`;
export const ImageTitle = styled.img`
  margin-left: auto;
  margin-right: auto;
  width: 50%;
  width: 90px;
`;

export const FormLabel = styled.label`
margin-bottom: 8px;
font-size: 14px;
color: #fff;
`
export const FormInput = styled.input`
/* padding: 16px 16px;
margin-bottom: 32px;
border: none;
border-radius: 4px; */
font-size: 1.2rem;
    font-weight: 400;
    line-height: 2rem;
    outline: 0;
  box-sizing: border-box;
    display: block;
    width: 100%;
    border: 3px solid #8c7db0;
    padding: 0.5rem;
    color: white;
    background: transparent;
    border-radius: 0.5rem;
    margin-bottom: 32px;
    &:focus{
      border: 3px solid #fa1e4e;
  } 
`

export const FormButton = styled.button`
/* background: #01bf71; */
/* background:#a60a3d; */
background:#fa1e4e;
padding: 16px 0;
border: none;
border-radius:4px;
font-size:20px;
cursor:pointer;
`
export const Text = styled.span`
text-align: center;
color: #fff;
font-size:14px;
cursor: pointer;
`
