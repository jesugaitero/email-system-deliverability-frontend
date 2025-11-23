import React,{useState} from 'react'
import styled from 'styled-components'
import { themeColor } from '../../../utils'
import axios from 'axios'
import {toast, Toast} from 'react-toastify';
import { Loader } from 'semantic-ui-react'
import 'semantic-ui-css/semantic.min.css'
import dynamic from 'next/dynamic';
const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

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

const QuillModules = {
  toolbar: [
      [{ header: '1' }, { header: '2' }, { header: [3, 4, 5, 6] }, { font: [] }],
      [{ size: [] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [{ list: 'ordered' }, { list: 'bullet' }],
      ['link', 'image', 'video'],
      ['clean'],
      ['code-block']
  ]
};

 const QuillFormats = [
  'header',
  'font',
  'size',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'link',
  'image',
  'video',
  'code-block'
];


function CreateTemplate({setRefreshTemplates}) {

  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  
  const handleBody = e => {
    console.log(e);
    setMessage(e);

};

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({email,password});
    try {
        setLoading(true);
        const {data} = await axios.post(`${NEXT_PUBLIC}/create-template`, {
            title,
            subject,
            message
        });
        console.log(data);
        setRefreshTemplates(true)
        toast.success('Template created.')
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
              <Title>Title</Title>
              <Input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Write the email title"/>
              <Subtitle>Subject</Subtitle>
              <Input type="text" required value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Write the email Subject"/>
              <Message >Message</Message>
              <ReactQuill 
                    // value={value}
                    // onChange={setValue}
      
                    value={message}
                    // onChange={message}
                    // value={message} 
                    onChange={handleBody}
                    modules={QuillModules}
                    formats={QuillFormats}
                    />
              {/* <TextArea type="text" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write the email message"/> */}
            </Details>
            
          </FormWrapper>
          
        </FormContainer>
        <FormButton type='submit'>
        {loading ? <Loader active inline='centered' /> : 'Create'}
        </FormButton>
    </Form>

    </>
  )
}

export default CreateTemplate
