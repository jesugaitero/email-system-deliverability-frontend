import React,{useState} from 'react'
import styled from 'styled-components';
import Badge from '../Badge'
import { darkThemeColor } from '../../utils'
import {RiHomeLine, RiFileCopyLine} from 'react-icons/ri';
import {AiOutlinePieChart} from 'react-icons/ai'
import { Button, Header, Icon, Modal } from 'semantic-ui-react';
import UpdateEmailSettings from '../MainContent/UpdateEmailSettings';



const Container = styled.div`
  width: 20%;
  height:100% !important;
  border-radius: 2rem;
  /* background-color: #091322; */
  background-color: #000;
  box-shadow: 0 1px 3px rgba(0,0,0,0.9);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap:3rem;
`
const ProfileContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Avatar = styled.img`
  height: 7rem;
  border-radius:1rem;
  margin-top: 20%;
`
const Name = styled.h1`
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  margin: 0.8rem 0 0.5rem 0;
`
const LinksContainer = styled.div`
 box-shadow: 0 1px 3px rgba(0,0,0,0.9);
  background-color: ${darkThemeColor};
  width: 100%;
  height: 100%;
  border-radius:2rem;
`
const Links = styled.ul`
  list-style-type:none;
  display: flex;
  flex-direction: column;
  /* padding-top:2rem; */
  padding: 0;
  height:60%;
`
const Link = styled.li`
    padding: 1rem 3rem;
  /* margin-left:10%; */
  /* margin-bottom: 2rem; */
  display: flex;
  gap: 1rem;
  color: #e4e4e4;
  cursor: pointer;
  &:hover{
    color: #fa1e4e !important;
    transition: all 0.3s cubic-bezier(0.000, 0.000, 0.230, 1) !important;
  }
 
  h3 {
    font-weight: 300;
    margin: 0px !important;
    
  }
  svg{
    font-size:1.1rem;
    /* margin-top:20% */
  }

  
`
const ContactContainer = styled.div`
  width: 60%;
  /* background-color: #091322; */
  background-color: #000;
  box-shadow: 0 1px 3px rgba(0,0,0,0.9);
  color:#c4c4c4;
  height: 11%;
  margin: auto auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  padding:1rem;
  a {
    color:white;
    text-decoration:none;

  }
`


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


const Sidebar = ({setShowDashboard, setShowEmailDashboard, setShowEmailSettings,setReloadEmailSettings, setShowLinodeDashboard, user,emailSettings}) => {
  const [update, setUpdate] = useState(null);
  const [open, setOpen] = useState(false)
  const handleUpdate = async (id) => {
    setOpen(true);
    console.log(update);
    console.log(id);
  }
  return (
    <>
    <Container>
      <ProfileContainer>
        {/* <Avatar src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRPh7gQ8vrftP2L6xF4tow-Hz8GzmUIB7IscA&usqp=CAU'/> */}
        {/* <Avatar src='https://i.imgur.com/XpSJ53b.png'/> */}
        <Avatar src='https://i.imgur.com/GcDBhCi.png'/>

        <Name>Anonymous User</Name>
        <Badge content="Pro Level"/>
      </ProfileContainer>
      <LinksContainer>
        <Links>
        <Link onClick={()=>{
            setShowDashboard(true)
            setShowEmailDashboard(false)
            setShowEmailSettings(false)
            setShowLinodeDashboard(false)
          }}>
            <RiHomeLine/>
            <h3>Dashboard</h3>
          </Link>
          <Link onClick={()=>{
            setShowDashboard(false)
            setShowEmailSettings(false)
            setShowEmailDashboard(true)
            setShowLinodeDashboard(false)
          }}>
            <AiOutlinePieChart/>
            <h3>Templates</h3>
          </Link>
          {/* <Link onClick={()=>{
            setShowDashboard(false)
            setShowEmailDashboard(false)
            setShowEmailSettings(true)
          }}> */}
          <Link onClick={()=>{
            setShowDashboard(false)
            setShowEmailSettings(false)
            setShowEmailDashboard(false)
            setShowLinodeDashboard(true)
          }}>
            <AiOutlinePieChart/>
            <h3>Endpoints Settings</h3>
          </Link>
          <Link onClick={()=>{
            setOpen(true)}}>
            <AiOutlinePieChart/>
            <h3>Email Settings</h3>
          </Link>
        </Links>
        <ContactContainer>
          <span>Need support?</span>
          <a href="#">Contact us</a>
        </ContactContainer>
      </LinksContainer>
    </Container>
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
        Update Email Settings
      </Header>
      <Modal.Content>
        <UpdateEmailSettings user={user} setReloadEmailSettings={setReloadEmailSettings} emailSettings={emailSettings}/>
        {/* <UpdateTemplate update={update} setRefreshTemplates={setRefreshTemplates}/> */}
      </Modal.Content>
      <Modal.Actions>
        {/* <FormButton  onClick={() => setOpen(false)}>
          <Icon name='remove' /> Go Back
        </FormButton> */}
        {/* <ActionButton remove onClick={()=> handleDelete(template._id)}>Delete</ActionButton> */}
        <FormButton  onClick={() => setOpen(false)}>
          <Icon name='remove' /> Go Back
        </FormButton>
      </Modal.Actions>
    </Modal>
    </>
  )
}

export default Sidebar
