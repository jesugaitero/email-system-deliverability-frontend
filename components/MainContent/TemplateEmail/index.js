import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Badge from '../../Badge';
import {themeColor} from '../../../utils'
import CheckBox from '../CheckBox'
import axios from 'axios'
import {toast, Toast} from 'react-toastify';
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import UpdateTemplate from '../UpdateTemplate'

const NEXT_PUBLIC = require('../../../utils/api').API

const TemplateContainer = styled.div`
  height: 520px;
  /* width: 14rem; */
  /* width: 100%; */
  width: 440px;
  justify-content: center;
  /* background-color: white; */
  background: #1c1726;
  border-radius:1rem;
  padding: 1rem;
  color:white;
  display: flex;
  flex-wrap: wrap;
  /* gap: 2rem; */
  box-shadow: 0 1px 3px rgba(0,0,0,0.9);

`
const Card = styled.div`
  background-color: rgba(183,194,243,0.3);
  box-shadow: 0 1px 3px rgba(0,0,0,0.9);
  /* border: ${props => (props.selected ? '4px solid #fa1e4e' : 'none')}; */
  transition: all 0.3s cubic-bezier(0.000, 0.000, 0.230, 1) !important;
  border-radius: 1rem;
  /* margin-bottom: 1rem; */
  margin: 0.3rem 0.4rem;
  width: fit-content;
  height: fit-content;
  /* cursor: pointer; */
  
`
const Template = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin: 0.4rem;
  padding-top: 0.6rem;
`
const TemplateWrapper = styled.div`
max-height: 400px;
    overflow-y: scroll;
  width: 35rem;
  border-radius: 1rem;
  /* background-color: white; */
  height: 140%;
`
const CardContent = styled.div`

`
const IconStyle = styled.div`

`
const Info = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`
const TextContainer = styled.div`
  margin-left: 1rem;
`

const Title = styled.h4`
  color:white;
  margin-bottom: 0.1rem;
  margin-top: 0.1rem;
`
const Actions = styled.div`
  display: flex;
  justify-content: space-between;
  width: 30%;
  align-items: center;
`
const Subtitle = styled.h5`
  color: white;
  margin-bottom: 0.1rem;
  margin-top: 0.1rem;
`
const TitleText = styled.h3`
 
`;

const FormButton = styled.button`
/* background: #01bf71; */
width: 100%;
margin-top: 1rem;
background-color:#000;
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

const ActionButton = styled.span`
  padding: 0.3rem 1rem !important;
  border-radius: 1rem !important;
  font-weight: 500 !important;
  color: white !important;
  background-color: ${themeColor} !important;
  cursor: pointer !important;
  box-shadow: 0 1px 3px rgba(0,0,0,0.9) !important;

  ${({glow}) => glow && `
      font-size:0.8rem !important;
      padding:0.2rem 0.5rem !important;
      font-weight: normal;color: #2f233d !important;
      background-color: rgba(109,134, 245, 0.192) !important;
      color: white !important;
  ` }
  ${({edit}) => edit && `
      font-size:0.8rem !important;
      padding:0.2rem 0.5rem !important;
      font-weight: normal !important;
      color: #2f233d !important;
      background-color: #70e00041 !important;
      color: #70e000 !important;
  ` }
    ${({remove}) => remove && `
      font-size:0.8rem !important;
      padding:0.2rem 0.5rem !important;
      font-weight: normal !important;
      color: #2f233d !important;
      background-color: #ff595e41 !important;
      color: #ff595e !important;
  ` }
`


function TemplateEmail({templates,setRefreshTemplates}) {

  // console.log(templates);
  // const renderTemplates = templates =>
  // templates.map((c, i) => (
  //   <>
  //     <div>hola</div>
  //   </>
  // ));

  const handleDelete = async (id) => {
    try {
      console.log(id);
      const answer = window.confirm("Are you sure you want to delete?")
      if (!answer) return;
      const {data} = await axios.put(`${NEXT_PUBLIC}/email-templates/${id}`)
      setRefreshTemplates(true)
      console.log('EMAIL DELETED', data);
      toast.success('Template deleted successfully.')
    } catch (error) {
      toast.error('There was an error, try again.')
    }
  }
  const [update, setUpdate] = useState(null);
  const [open, setOpen] = useState(false)
  const handleUpdate = async (id) => {
    setOpen(true);
    console.log(update);
    console.log(id);
  }


  return (
    <>
        <TemplateContainer>
      <TitleText>Template list</TitleText>
      <TemplateWrapper>
    {/* {  renderTemplates()} */}
        {/* {JSON.stringify(templates)} */}
        {templates && 
          templates.map((template) => (
            <CardContent>
            <Template>
              <Info>
                <IconStyle>
                  @
                </IconStyle>
                <TextContainer>
                  <Title>{template.title}</Title>
                  <Subtitle>{template.subject}</Subtitle>
                </TextContainer>
              </Info>
              <Actions>
                <ActionButton  edit onClick={()=> {
                  setUpdate(template)
                  handleUpdate(template._id)
                  }}>Edit</ActionButton>
                <ActionButton remove onClick={()=> handleDelete(template._id)}>Delete</ActionButton>
          
              </Actions>
            </Template>
          </CardContent>
          ))
        }
      </TemplateWrapper>
    </TemplateContainer>

    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      // trigger={<Button>Basic Modal</Button>}
    >
      <Header icon>
        {/* <Icon name='archive' /> */}
        Update Email Template
      </Header>
      <Modal.Content>
        <UpdateTemplate update={update} setRefreshTemplates={setRefreshTemplates}/>
      </Modal.Content>
      <Modal.Actions>
        <FormButton  onClick={() => setOpen(false)}>
          <Icon name='remove' /> Go Back
        </FormButton>
        {/* <ActionButton remove onClick={()=> handleDelete(template._id)}>Delete</ActionButton> */}
        {/* <Button color='green' inverted onClick={() => setOpen(false)}>
          <Icon name='checkmark' /> Yes
        </Button> */}
      </Modal.Actions>
    </Modal>
    </>
  )
}

export default TemplateEmail
