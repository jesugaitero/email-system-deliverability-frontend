import React,{useState, useContext} from 'react'
import styled from 'styled-components'
import { themeColor } from '../../../utils'
import axios from 'axios'
import {toast, Toast} from 'react-toastify';
import { Loader } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css';
import { Context } from '../../../context';
const NEXT_PUBLIC = require('../../../utils/api').API

const FormContainer = styled.div`
  height:94%;
  /* background-color:white; */
  background:#1c1726;
  margin: 0;
  padding: 1rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0,0,0,0.9);
  

`
const FormWrapper = styled.div`
  display: flex ;
  align-items: center;
  margin-bottom: 0 .5rem;
  justify-content: center;
`
const Details = styled.div`
  margin-left: 1rem;
`
const Form = styled.form`
  /* margin-left: 1rem; */
`
const Title = styled.h3`
  font-weight: 500;
  color:white;
  margin: 5px;
`
const Subtitle = styled.h5`
  font-weight: 300;
  color:white;
  margin: 5px;
`
const Message = styled.h5`
  font-weight: 300;
  color:white;
  margin: 5px;
`
const Icon = styled.img`
  
`
const SubmitBtn = styled.h5`
  color: ${themeColor};
  text-align:end;
`
const Input = styled.input`
  /* border: none;
  background-color: #dce4ff;
  border-radius: 0.5rem;
  padding: 0.5rem;
  width: 300px;
  &:focus{
    border: none;
    outline: none;
  } */
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
    &:focus{
      border: 3px solid #fa1e4e;
  } 
`;

const TextArea = styled.textarea`
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
    height: 25vh;
    &:focus{
      border: 3px solid #fa1e4e;
  } 
`;

const SubmitButton = styled.a`
    background-color: #fa1e4e;
    color: #000;
    font-weight: 700;
    overflow: hidden;
    position: relative;
    text-decoration: none;
    -webkit-transition: background-color .25s ease-in-out;
    -moz-transition: background-color .25s ease-in-out;
    -ms-transition: background-color .25s ease-in-out;
    -o-transition: background-color .25s ease-in-out;
    transition: background-color .25s ease-in-out;
    white-space: nowrap;
`
const FormButton = styled.button`
/* background: #01bf71; */
width: 100%;
margin-top: 1rem;
background-color:#fa1e4e;
padding: 16px 0;
border: none;
font-weight: 700;
border-radius:4px;
font-size:20px;
cursor:pointer;
color: white;
-webkit-transition: background-color .25s ease-in-out;
    -moz-transition: background-color .25s ease-in-out;
    -ms-transition: background-color .25s ease-in-out;
    -o-transition: background-color .25s ease-in-out;
    transition: background-color .25s ease-in-out;
    &:hover{
      background-color: #d71e47;
    }

    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
`

function UpdateEmailSettings({setRefreshTemplates, update,user,setReloadEmailSettings,emailSettings}) {

  const [host, setHost] = useState('');
  const [port, setPort] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [passwordEmail, setPasswordEmail] = useState('');
  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        setLoading(true);
        const {data} = await axios.put(`${NEXT_PUBLIC}/update-email-settings`, {
          host,
          port,
          userEmail,
          passwordEmail,
          user: emailSettings.user
        });
        // console.log(data);
        toast.success('Settings updated.')
        setReloadEmailSettings(true)
        setLoading(false);
    } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error('There was an error, try again.')
    }
};
  return (
    <>
      <Form onSubmit={handleSubmit}>
        <FormContainer>
          <FormWrapper>
            {/* <Icon>

            </Icon> */}
            <Details>
              <Subtitle>Host</Subtitle>
              <Input type="text" required value={host} onChange={(e) => setHost(e.target.value)} placeholder={emailSettings.host}/>
              <Subtitle>Port</Subtitle>
              <Input type="text" required value={port} onChange={(e) => setPort(e.target.value)} placeholder={emailSettings.port}/>
              <Subtitle>Transporter email</Subtitle>
              <Input type="text" required value={userEmail} onChange={(e) => setUserEmail(e.target.value)} placeholder={emailSettings.email_user}/>
              <Subtitle>Transporter password</Subtitle>
              <Input type="password" required value={passwordEmail} onChange={(e) => setPasswordEmail(e.target.value)} placeholder={emailSettings.email_password}/>
            </Details>
            
          </FormWrapper>
          
        </FormContainer>
        <FormButton type='submit'>
        {loading ? <Loader active inline='centered' /> : 'Update'}
        </FormButton>
    </Form>

    </>
  )
}

export default UpdateEmailSettings
