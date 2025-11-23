// import React, { useState, useEffect } from 'react'
// import styled from 'styled-components';
// import Badge from '../../Badge';
// import {themeColor} from '../../../utils'
// import CheckBox from '../CheckBox'
// import axios from 'axios'
// import {toast, Toast} from 'react-toastify';
// import { Button, Header, Icon, Modal } from 'semantic-ui-react';
// import UpdateTemplate from '../UpdateTemplate'

// const TemplateContainer = styled.div`
//   height: 50vh;
//   /* width: 14rem; */
//   /* width: 100%; */
//   /* width: 440px; */
//   width: 115vh;
//   justify-content: center;
//   /* background-color: white; */
//   background: #1c1726;
//   border-radius:1rem;
//   padding: 1rem;
//   color:white;
//   display: flex;
//   flex-wrap: wrap;
//   /* gap: 2rem; */
//   box-shadow: 0 1px 3px rgba(0,0,0,0.9);

// `
// const LinodeCardInput = styled.form`
//   height: auto;
//   /* width: 14rem; */
//   /* width: 100%; */
//   /* width: 440px; */
//   width: 115vh;
//   justify-content: center;
//   text-align: center;
//   /* background-color: white; */
//   background: #1c1726;
//   border-radius:1rem;
//   padding: 1rem;
//   color:white;
//   display: flex;
//   flex-direction: column;
//   /* flex-wrap: wrap; */
//   /* gap: 2rem; */
//   box-shadow: 0 1px 3px rgba(0,0,0,0.9);

// `
// const InputBox = styled.div`
//   display: flex;
//   flex-direction: row;

// `
// const ActionBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
// `
// const Card = styled.div`
//   background-color: rgba(183,194,243,0.3);
//   box-shadow: 0 1px 3px rgba(0,0,0,0.9);
//   /* border: ${props => (props.selected ? '4px solid #fa1e4e' : 'none')}; */
//   transition: all 0.3s cubic-bezier(0.000, 0.000, 0.230, 1) !important;
//   border-radius: 1rem;
//   /* margin-bottom: 1rem; */
//   margin: 0.3rem 0.4rem;
//   width: fit-content;
//   height: fit-content;
//   /* cursor: pointer; */
  
// `
// const Template = styled.div`
//   display: flex;
//   align-items: center;
//   justify-content: space-around;
//   margin: 0.4rem;
//   padding-top: 0.6rem;
// `
// const TemplateWrapper = styled.div`
// max-height: 40vh;
//     overflow-y: scroll;
//   /* width: 35rem; */
//   width: 115vh;
//   border-radius: 1rem;
//   /* background-color: white; */
//   /* height: 140%; */
// `
// const CardContent = styled.div`

// `
// const IconStyle = styled.div`

// `
// const Info = styled.div`
//   display: flex;
//   align-items: center;
//   width: 50%;
// `
// const TextContainer = styled.div`
//   margin-left: 1rem;
// `

// const Title = styled.h4`
//   color:white;
//   margin-bottom: 0.1rem;
//   margin-top: 0.1rem;
// `
// const Actions = styled.div`
//   display: flex;
//   justify-content: space-between;
//   width: 30%;
//   align-items: center;
// `
// const Subtitle = styled.h5`
//   color: white;
//   margin-bottom: 0.1rem;
//   margin-top: 0.1rem;
// `
// const TitleText = styled.h3`
//  margin: 2px !important;
// `;

// const FormButton = styled.button`
// /* background: #01bf71; */
// /* width: 15%; */
// margin-left: 1rem;
// background-color:#d71e47;
// /* padding: 16px 0; */
// border: none;
// font-weight: 700;
// border-radius:4px;
// font-size:20px;
// cursor:pointer;
// color: white;
// -webkit-transition: background-color .25s ease-in-out;
//     -moz-transition: background-color .25s ease-in-out;
//     -ms-transition: background-color .25s ease-in-out;
//     -o-transition: background-color .25s ease-in-out;
//     transition: background-color .25s ease-in-out;
//     &:hover{
//       background-color: #d71e47;
//     }

//     box-shadow: 0 1px 3px rgba(0,0,0,0.9);

//     ${({small}) => small && `
//       padding: 5px 10px !important;

//   ` }
// `


// const Select = styled.select`
//   width: 150px;
//   /* height: 35px; */
//   background: transparent;
//   border-radius: 0.5rem;
//   color: gray;
//   /* padding-left: 5px; */
//   font-size: 14px;
//   border: 3px solid #8c7db0;
//   /* margin-left: 10px; */
//   font-size: 1.2rem;
//     font-weight: 400;
//     line-height: 2rem;
//   outline:none;
//   padding: 0.5rem;
//   /* border-color: ; */
//     color: #8c7db0;
//     -webkit-transition: background-color .25s ease-in-out;
//     -moz-transition: background-color .25s ease-in-out;
//     -ms-transition: background-color .25s ease-in-out;
//     -o-transition: background-color .25s ease-in-out;
//     transition: background-color .25s ease-in-out;
//     &:focus{
//       border: 3px solid #fa1e4e;
//   } 
// `

// const ActionButton = styled.span`
//   padding: 0.3rem 1rem !important;
//   border-radius: 1rem !important;
//   font-weight: 500 !important;
//   color: white !important;
//   background-color: ${themeColor} !important;
//   cursor: pointer !important;
//   box-shadow: 0 1px 3px rgba(0,0,0,0.9) !important;

//   ${({glow}) => glow && `
//       font-size:0.8rem !important;
//       padding:0.2rem 0.5rem !important;
//       font-weight: normal;color: #2f233d !important;
//       background-color: rgba(109,134, 245, 0.192) !important;
//       color: white !important;
//   ` }
//   ${({edit}) => edit && `
//       font-size:0.8rem !important;
//       padding:0.2rem 0.5rem !important;
//       font-weight: normal !important;
//       color: #2f233d !important;
//       background-color: #70e00041 !important;
//       color: #70e000 !important;
//   ` }
//     ${({remove}) => remove && `
//       font-size:0.8rem !important;
//       padding:0.2rem 0.5rem !important;
//       font-weight: normal !important;
//       color: #2f233d !important;
//       background-color: #ff595e41 !important;
//       color: #ff595e !important;
//   ` }
// `


// const Input = styled.input`
//   font-size: 1.2rem;
//     font-weight: 400;
//     line-height: 2rem;
//     outline: 0;
//   box-sizing: border-box;
//     display: block;
//     width: 100%;
//     border: 3px solid #8c7db0;
//     padding: 0.5rem;
//     color: white;
//     background: transparent;
//     border-radius: 0.5rem;
//     &:focus{
//       border: 3px solid #fa1e4e;
//   } 
// `;
// const TitleInput = styled.h3`
//   font-weight: 500;
//   color:white;
//   margin: 5px;
//   margin-bottom: 1rem;
// `

// const FormBox = styled.div`
//   display: flex;
//   flex-direction: row;
//   gap: 1px;
// `

// function LinodeSettings({linodeSettings,setLinodeSettings,setReloadServers ,setServers, servers}) {
  

//   const [open, setOpen] = useState(false)

  
//   const handleDelete = async (id) => {
//     try {
//       console.log(id);
//       const answer = window.confirm("Are you sure you want to delete?")
//       if (!answer) return;
//       const {data} = await axios.put(`${NEXT_PUBLIC}/delete-server/${id}`)
//       setReloadServers(true)
//       console.log('SERVER DELETED', data);
//       toast.success('Server deleted successfully.')
//     } catch (error) {
//       toast.error('There was an error, try again.')
//     }
//   }
//   const handleTest = async (id) => {
//     try {
//       console.log(id);
//       // const {data} = await axios.put(`${NEXT_PUBLIC}/delete-server/${id}`)

//       toast.success('Testing linode Server Email.')
//     } catch (error) {
//       toast.error('There was an error, try again.')
//     }
//   }

//   const [key, setKey] = useState('');

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     // console.table({email,password});
//     try {
//         // setLoading(true);
//         const {data} = await axios.post(`${NEXT_PUBLIC}/update-linode-settings`, {
//             key,
//             user: linodeSettings.user,
//         });
//         console.log(data);
  
//         toast.success('Key updated.')
//         // setLoading(false);
//     } catch (error) {
//         // setLoading(false);
//         console.log(error);
//         toast.error('There was an error, try again.')
//     }
// };

// const [amountSelected, setAmountSelected] = useState(0);
// const deployServer = async (e) => {
//   e.preventDefault();
//   console.log(linodeSettings.key);
//   if(amountSelected > 0){
//         // console.table({email,password});
//       try {
//         // setLoading(true);
//         const {data} =  await axios.post(`${NEXT_PUBLIC}/deploy-server`, {
//             key: linodeSettings.key,
//             amount: amountSelected,
//         });
//         console.log(data);
        
//         toast.success(data)
//         setTimeout(function(){ setReloadServers(true) }, 10000);
//         // setLoading(false);
//     } catch (error) {
//         // setLoading(false);
//         console.log(error.response.data);
//         toast.error(error.response.data)
//     }
//   } else {
//     toast.error('Please select the amount of servers to deploy.')
//   }
// };
// const reloadServers = async (e) => {
//   e.preventDefault()
//   setReloadServers(true);
// }

//   return (
//     <>
//         <LinodeCardInput onSubmit={handleSubmit}>
//         <TitleText>Add Lidone </TitleText>
//         <TitleInput>Key</TitleInput>
//         <InputBox>
//           {/* <Input type="text" required value={key} onChange={(e) => setKey(e.target.value)} placeholder={linodeSettings.key}/> */}
//           <Input type="password" required value={key} onChange={(e) => setKey(e.target.value)} placeholder="************"/>

//           <FormButton type='submit'>
//             Save
//           </FormButton>

//         </InputBox>
//         </LinodeCardInput>
//         <TemplateContainer>

//       <TemplateWrapper>
//       <ActionBox>
//       <TitleText>Endpoints</TitleText>
//       <TitleText>Total: {servers.length}</TitleText>
//       <TitleText>Total:</TitleText>

//       <FormBox>
//         {/* {JSON.stringify(amountSelected)} */}
//       {/* <Select onChange={(e) => setAmountSelected(e.target.value)} >
//                 <option value="" hidden>
//                     Select amount
//                   </option>
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                   <option value="5">5</option>
//                   <option value="6">6</option>
//                   <option value="7">7</option>
//                   <option value="8">8</option>
//                   <option value="9">9</option>
//                   <option value="10">10</option>
//                 </Select> */}
//       <FormButton small 
//       // onClick={deployServer}
//       onClick={()=>{
//         setOpen(true)}}
//       >
//             Deploy
//           </FormButton>
//           <FormButton onClick={reloadServers}>
//             Refresh
//           </FormButton>
//       </FormBox>
    

          
//       </ActionBox>
//     {/* {  renderTemplates()} */}
//         {/* {JSON.stringify(templates)} */}
//         {servers && 
//           servers.map((server) => (
//             <CardContent>
//             <Template>
//               <Info>
//                 <IconStyle>
//                   @
//                 </IconStyle>
//                 <TextContainer>
//                   <Title>Name</Title>
//                   <Subtitle>{server.serverInfo.label}</Subtitle>
//                 </TextContainer>
//                 <TextContainer>
//                   <Title>Server Id</Title>
//                   <Subtitle>{server.serverInfo.id}</Subtitle>
//                 </TextContainer>
//                 <TextContainer>
//                   <Title>Server IP</Title>
//                   <Subtitle>{server.serverInfo.ipv4[0]}</Subtitle>
//                 </TextContainer>
//               </Info>
//               <Actions>
//                 <ActionButton remove onClick={()=> handleDelete(server._id)}>Delete</ActionButton>
//                 <ActionButton edit onClick={()=> handleTest(server._id)}>Test</ActionButton>
//               </Actions>
//             </Template>
//           </CardContent>
//           ))
//         }
//       </TemplateWrapper>
//     </TemplateContainer>
//     <Modal
//       basic
//       onClose={() => setOpen(false)}
//       onOpen={() => setOpen(true)}
//       open={open}
//       size='small'
      
//     >
//       <Header icon>
//         Deploy linode Servers
//       </Header>
//       <Header icon>
//       <Select onChange={(e) => setAmountSelected(e.target.value)} >
//                 <option value="" hidden>
//                     Select amount
//                   </option>
//                   <option value="1">1</option>
//                   <option value="2">2</option>
//                   <option value="3">3</option>
//                   <option value="4">4</option>
//                   <option value="5">5</option>
//                   <option value="6">6</option>
//                   <option value="7">7</option>
//                   <option value="8">8</option>
//                   <option value="9">9</option>
//                   <option value="10">10</option>
//         </Select>
//         <FormButton onClick={deployServer}>
//             Run
//           </FormButton>
//       </Header>
//       {/* <Modal.Content >

//       </Modal.Content> */}
//       <Modal.Actions>
//         <FormButton  onClick={() => setOpen(false)}>
//           <Icon name='remove' /> Go Back
//         </FormButton>
//       </Modal.Actions>
//     </Modal>
//     </>
//   )
// }

// export default LinodeSettings








import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import Badge from '../../Badge';
import {themeColor} from '../../../utils'
import CheckBox from '../CheckBox'
import axios from 'axios'
import {toast, Toast} from 'react-toastify';
import { Button, Header, Icon, Modal,Loader } from 'semantic-ui-react';
import UpdateTemplate from '../UpdateTemplate'

const NEXT_PUBLIC = require('../../../utils/api').API

const TemplateContainer = styled.div`
  height: 50vh;
  /* width: 14rem; */
  /* width: 100%; */
  /* width: 440px; */
  width: 115vh;
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
const LinodeCardInput = styled.div`
  height: auto;
  /* width: 14rem; */
  /* width: 100%; */
  /* width: 440px; */
  width: 115vh;
  justify-content: center;
  text-align: center;
  /* background-color: white; */
  background: #1c1726;
  border-radius:1rem;
  padding: 1rem;
  color:white;
  display: flex;
  flex-direction: column;
  /* flex-wrap: wrap; */
  /* gap: 2rem; */
  box-shadow: 0 1px 3px rgba(0,0,0,0.9);

`
const LinodeCardForm = styled.form`

`
const InputBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;

`
const ActionBox = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
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
max-height: 40vh;
    overflow-y: scroll;
  /* width: 35rem; */
  width: 115vh;
  border-radius: 1rem;
  /* background-color: white; */
  /* height: 140%; */
`
const CardContent = styled.div`

`
const IconStyle = styled.div`
display: inline-grid;

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
const SubtitleIP = styled.h5`
  color: white;
  margin-bottom: 0.1rem;
  margin-top: 0.1rem;
  display: none;
  &:hover{
    display: block;
  }
`
const TitleText = styled.h3`
 margin: 10px !important;
`;

const FormButton = styled.button`
/* background: #01bf71; */
/* width: 15%; */
margin: 10px;
margin-left: 1rem;
background-color:#d71e47;
/* padding: 16px 0; */
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

    ${({small}) => small && `
      padding: 5px 10px !important;

  ` }
`


const Select = styled.select`
  width: 150px;
  /* height: 35px; */
  background: transparent;
  border-radius: 0.5rem;
  color: gray;
  margin: 3rem;
  /* padding-left: 5px; */
  font-size: 14px;
  border: 3px solid #8c7db0;
  /* margin-left: 10px; */
  font-size: 1.2rem;
    font-weight: 400;
    line-height: 2rem;
  outline:none;
  padding: 0.5rem;
  /* border-color: ; */
    color: #8c7db0;
    -webkit-transition: background-color .25s ease-in-out;
    -moz-transition: background-color .25s ease-in-out;
    -ms-transition: background-color .25s ease-in-out;
    -o-transition: background-color .25s ease-in-out;
    transition: background-color .25s ease-in-out;
    &:focus{
      border: 3px solid #fa1e4e;
  } 
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
  ${({install}) => install && `
      font-size:0.8rem !important;
      padding:0.2rem 0.5rem !important;
      font-weight: normal !important;
      color: white !important;
      background-color: rgba(183,194,243,.3) !important;

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


const Input = styled.input`
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
const TitleInput = styled.h3`
  font-weight: 500;
  color:white;
  margin: 5px;
  margin-bottom: 1rem;
`

const FormBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 1px;
`
const Logo = styled.img`
    width: 30px;
    height: 30px;
    margin: 15px;
    border-radius: 15px;
    background: white;

`;

const Tabs = styled.div`
  overflow: hidden;
  background: #fff;
  font-family: Open Sans;
  height: 3em;
`;

const Tab = styled.button`
  border: none;
  outline: none;
  cursor: pointer;
  width: 40%;
  position: relative;
  color: white;
  border-radius:4px;
  margin-right: 0.1em;
  font-weight: 700;
  border: ${props => (props.active ? "1px solid #ccc" : "")};
  border-bottom: ${props => (props.active ? "none" : "")};
  background-color: ${props => (props.active ? "#d71e47" : "black")};
  height: ${props => (props.active ? "3em" : "2.6em; top:.4em")};
  transition: background-color 0.5s ease-in-out;

  :hover {
    background-color: white;
  }

  box-shadow: 0 1px 3px rgba(0,0,0,0.9);

  ${({small}) => small && `
    padding: 5px 10px !important;

` }
`;
const Content = styled.div`
  ${props => (props.active ? "" : "display:none")}
`;


function LinodeSettings(
  {bitlaunchSettings, setBitlaunchSettings,bitlaunchServers,setBitlaunchServers, linodeSettings,setLinodeSettings,
  setReloadServers ,setServers, servers, customServers,setReloadLinodeSettings,setReloadBitlaunchSettings}
  ) {
  

  const [open, setOpen] = useState(false)

  const [openBitlaunch, setOpenBitlaunch] = useState(false)
  const [openCustomServer, setOpenCustomServer] = useState(false)

  const [loading, setLoading] = useState(false)

  const [regions,setRegions] = useState([])
  const [bitlaunchRegions,setBitlaunchRegions] = useState([])

  useEffect(() => {
    (async () => {
      const response = await axios.get(`${NEXT_PUBLIC}/get-linode-regions`);
      // console.log(response.data.data)
      setRegions(response.data.data);
      const responseBit = await axios.get(`${NEXT_PUBLIC}/get-bitlaunch-regions`);
      // console.log(responseBit.data.region)
      setBitlaunchRegions(responseBit.data.region);
    })()
  }, [])

  const handleDelete = async (id) => {
    try {
       
      // console.log(id);
      const answer = window.confirm("Are you sure you want to delete?")
      if (!answer) return;
      setLoading(true);

      const {data} = await axios.put(`${NEXT_PUBLIC}/delete-server/${id}`)
      setLoading(false);
      setReloadServers(true)
      console.log('SERVER DELETED', data);
      toast.success('Server deleted successfully.')
    } catch (error) {
      toast.error('There was an error, try again.')
    }
  }

  const handleDeleteBitlaunch = async (id) => {
    try {
      console.log(id);
      const answer = window.confirm("Are you sure you want to delete?")
      if (!answer) return;
      setLoading(true);

      const {data} = await axios.put(`${NEXT_PUBLIC}/delete-server-bitlaunch/${id}`)
      setLoading(false);
      setReloadServers(true)
      console.log('SERVER DELETED', data);
      toast.success('Server deleted successfully.')
    } catch (error) {
      toast.error('There was an error, try again.')
    }
  }
  const handleDeteleCustom = async (id) => {
    try {
      console.log(id);
      const answer = window.confirm("Are you sure you want to delete?")
      if (!answer) return;
      setLoading(true);

      const {data} = await axios.put(`${NEXT_PUBLIC}/delete-server-custom/${id}`)
      setLoading(false);
      setReloadServers(true)
      console.log('SERVER DELETED', data);
      toast.success('Server deleted successfully.')
    } catch (error) {
      toast.error('There was an error, try again.')
    }
  }
  const handleTest = async (id) => {
    try {
      console.log(id);
      // const {data} = await axios.put(`${NEXT_PUBLIC}/delete-server/${id}`)

      toast.success('Testing linode Server Email.')
    } catch (error) {
      toast.error('There was an error, try again.')
    }
  }
  const handleInstall = async (idServer,ip) => {
    try {
      console.log(idServer);
      setLoading(true);
      const id = toast.loading(`Attempting to install packages for ${ip}`)
      await axios.post(`${NEXT_PUBLIC}/install-packages/${idServer}`).then(resp => {
        toast.success('Success.')
        toast.success(resp)
      }).catch(err => {
        toast.error(err)
        toast.error('error')
      })
      toast.update(id, { render: "Packages installed successfully", type: "success", isLoading: false });
      setTimeout(function(){     toast.dismiss(); }, 3000);
      setLoading(false);
    } catch (error) {
      toast.error('There was an error, try again.')
    }
  }
  const handleInstallCustom = async (idServer,ip) => {
    try {
      console.log(idServer);
      setLoading(true);
      const id = toast.loading(`Attempting to install packages for ${ip}`)
      await axios.post(`${NEXT_PUBLIC}/install-packages-custom/${idServer}`).then(resp => {
        toast.success('Success.')
        toast.success(resp)
      }).catch(err => {
        toast.error(err)
        toast.error('error')
      })
      setLoading(false);
      toast.update(id, { render: "Packages installed successfully", type: "success", isLoading: false });
      setTimeout(function(){     toast.dismiss(); }, 3000);
    } catch (error) {
      toast.error('There was an error, try again.')
    }
  }
  const handleInstallBitlaunch = async (idServer,ip) => {
    try {
      // console.log(idServer);
      setLoading(true);
      const id = toast.loading(`Attempting to install packages for ${ip}`)
      await axios.post(`${NEXT_PUBLIC}/install-packages-bitlaunch/${idServer}`).then(resp => {
        toast.success('Success.')
        toast.success(resp)
      }).catch(err => {
        toast.error(err)
        toast.error('error')
      })
      toast.update(id, { render: "Packages installed successfully", type: "success", isLoading: false });
      setTimeout(function(){     toast.dismiss(); }, 3000);
      setLoading(false);
    } catch (error) {
      toast.error('There was an error, try again.')
    }
  }

  const [key, setKey] = useState('');
  const [customIp, setCustomIp] = useState('');
  const [customPassword, setCustomPassword] = useState('');
  const [customUsername, setCustomUsername] = useState('');
  const [keyBitLaunch, setKeyBitLaunch] = useState('');

  const handleSubmit = async (e) => {
      e.preventDefault();
      try {
          const {data} = await axios.post(`${NEXT_PUBLIC}/update-linode-settings`, {
              key,
              user: linodeSettings.user,
          });
          // console.log(data);
          setReloadLinodeSettings(true)
          toast.success('Key updated.')
      } catch (error) {
          console.log(error);
          toast.error('There was an error, try again.')
      }
  };
  const handleSubmitBitLaunch = async (e) => {
      e.preventDefault();
      try {
          const {data} = await axios.post(`${NEXT_PUBLIC}/update-bitlaunch-settings`, {
            keyBitLaunch,
              user: linodeSettings.user,
          });
          // console.log(data);
          setReloadBitlaunchSettings(true)
          toast.success('Bitlaunch Key updated.')
      } catch (error) {
          console.log(error);
          toast.error('There was an error, try again.')
      }
  };

const [amountSelected, setAmountSelected] = useState(0);
const [countrySelected, setCoutrySelected] = useState(0);

  const deployServer = async (e) => {
      e.preventDefault();
      console.log(linodeSettings.key);
      if(amountSelected > 0){
        // toast.info('Requesting deploy...')
        const id = toast.loading("Please wait...")
        setLoading(true);
        setOpen(false)
        var x = 0;
        var intervalID = await setInterval(async function () {
          try {
            const {data} =  await axios.post(`${NEXT_PUBLIC}/deploy-server`, {
              key: linodeSettings.key,
              amount: amountSelected,
              country: countrySelected,
              softwareVersion: 'No software installed yet'
              });
              console.log(data);
              toast.success(data)
              setReloadServers(true)
          } catch (error) {
            console.log('error bro')
            toast.error(error.response.data)
          }
          if (++x == amountSelected) {
              window.clearInterval(intervalID);
              setLoading(false);
              toast.update(id, { render: "Deploy requests finished", type: "success", isLoading: false });
              setTimeout(function(){     toast.dismiss(); }, 3000);
          }
        }, 20000);
      } else {
        toast.error('Please select the amount of servers to deploy.')
      }
  };

  const deployBitlaunchServer = async (e) => {
    e.preventDefault();
    console.log(bitlaunchSettings.key);
    if(amountSelected > 0){
      toast.info('Requesting deploy...')
      const id = toast.loading("Please wait...")
      setLoading(true);
      setOpenBitlaunch(false)
      var x = 0;
      var intervalID = await setInterval(async function () {
        try {
          const {data} =  await axios.post(`${NEXT_PUBLIC}/deploy-server-bitlaunch`, {
            key: bitlaunchSettings.key,
            amount: amountSelected,
            country: countrySelected,
            softwareVersion: 'No software installed yet'
            });
            console.log(data);
            toast.success(data)
            setReloadServers(true)
        } catch (error) {
          toast.error(error.response.data)
        }
        if (++x == amountSelected) {
            window.clearInterval(intervalID);
            setLoading(false);
            toast.update(id, { render: "Deploy requests finished", type: "success", isLoading: false });
            setTimeout(function(){     toast.dismiss(); }, 3000);
        }
      }, 20000);
    } else {
      toast.error('Please select the amount of servers to deploy.')
    }
  };

const reloadServers = async (e) => {
  e.preventDefault()
  setReloadServers(true);
}
const connectCustomServer = async (e) => {
  e.preventDefault()
  setOpenCustomServer(false)


  setLoading(true);
  toast.info('Please wait...')
try {
  const {data} =  await axios.post(`${NEXT_PUBLIC}/create-custom-server`, {
    customPassword,
    customIp,
    customUsername,
    softwareVersion: 'No software installed yet'
    });
    console.log(data)
    setLoading(false);

    toast.success(`${data}`)

} catch (error) {
  console.log(error.response)
  setLoading(false);
  toast.error(`${error.response.data}`)
}
  
}


const [active, setActive] = useState(0);
const handleClick = e => {
  const index = parseInt(e.target.id, 0);
  if (index !== active) {
    setActive(index);
  }
};

var allServers = servers.concat(bitlaunchServers,customServers)
  return (
    <>
      <LinodeCardInput >
        <InputBox>
          <Tab onClick={handleClick} active={active === 3} id={3}>
            All servers
          </Tab>
          <Tab onClick={handleClick} active={active === 0} id={0}>
            Linode
          </Tab>
          <Tab onClick={handleClick} active={active === 1} id={1}>
            Bitlaunch
          </Tab>
          <Tab onClick={handleClick} active={active === 2} id={2}>
            Custom Server
          </Tab>
        </InputBox>

{/* LINODE */}
      <Content active={active === 0}>
        <LinodeCardForm onSubmit={handleSubmit}>
            <TitleText>Add Lidone </TitleText>
            <TitleInput>Key</TitleInput>
            <InputBox>
              {/* <Input type="text" required value={key} onChange={(e) => setKey(e.target.value)} placeholder={linodeSettings.key}/> */}
              <Input type="password" required value={key} onChange={(e) => setKey(e.target.value)} placeholder="************"/>
              <FormButton type='submit'>
                Save
              </FormButton>
            </InputBox>
        </LinodeCardForm>
      </Content>
      {/* BITLAUNCH */}
      <Content active={active === 1}>
        <LinodeCardForm onSubmit={handleSubmitBitLaunch} >
              <TitleText>Add BitLaunch </TitleText>
              <TitleInput>Key</TitleInput>
              <InputBox>
                <Input type="password" required  value={keyBitLaunch} onChange={(e) => setKeyBitLaunch(e.target.value)} placeholder="************"/>
                <FormButton type='submit'>
                  Save
                </FormButton>
              </InputBox>
        </LinodeCardForm>
      </Content>
      <Content active={active === 2}>
        <LinodeCardForm onSubmit={handleSubmitBitLaunch} >
              <TitleText>Add Custom Server </TitleText>
        </LinodeCardForm>
      </Content>

      </LinodeCardInput>
{/* LINODE */}
    <TemplateContainer>
        <Content active={active === 0}>
          <TemplateWrapper>
            <ActionBox>
            <TitleText>Endpoints</TitleText>
            <TitleText>Total: {servers.length}</TitleText>

            <FormBox>
            <FormButton small 
            disabled={loading}
            onClick={()=>{
              setOpen(true)}}
            >
                        {loading ? <Loader active inline /> : 'Deploy'}
                </FormButton>
                <FormButton onClick={reloadServers}>
                  Refresh
                </FormButton>
            </FormBox> 
            </ActionBox>
              {servers && 
                servers.map((server, i) => (
                  <CardContent key={i}>
                  <Template>
                    <Info>
                      <IconStyle>
                      <Logo src={server.imageCover}/>
                      <ActionButton edit >{server.serverInfo.status}</ActionButton>
                      </IconStyle>
                      <TextContainer>
                        <Title>Name</Title>
                        <Subtitle>{server.fakeDomain}</Subtitle>
                      </TextContainer>
                      <TextContainer>
                        <Title>Software Version</Title>
                        <Subtitle>{server.softwareVersion}</Subtitle>
                      </TextContainer>
                      {/* <TextContainer>
                        <Title>Server IP</Title>
                        <div id="DivForHoverItem">
                          <div id="HiddenText">
                            <SubtitleIP>{server.serverInfo.ipv4[0]}</SubtitleIP>
                            </div>
                        </div>
        
                      </TextContainer> */}
                      <TextContainer>
                        <Title>Sent emails</Title>
                        <Subtitle>{server.sendedEmails.length}</Subtitle>
                      </TextContainer>
                    </Info>
                    <Actions>
                      <ActionButton remove disabled={loading} onClick={()=> handleDelete(server._id)}>{loading ? <Loader active inline /> : 'Delete'}</ActionButton>
                      {server.serverInfo.status == 'running' && <ActionButton edit disabled={loading} onClick={()=> handleTest(server._id)}>{loading ? <Loader active inline /> : 'Test'}</ActionButton>}
                    
                      {server.serverInfo.status == 'running' && <ShowInstall loading={loading} handleInstall={handleInstall} server={server}/>}
                
                    </Actions>
                  </Template>
                </CardContent>
                ))
              }
          </TemplateWrapper>
        </Content>

        {/* BITLAUNCH */}
        <Content active={active === 1}>
          <TemplateWrapper>
            <ActionBox>
              <TitleText>Endpoints</TitleText>
              <TitleText>Total: {bitlaunchServers.length}</TitleText>
              <FormBox>
                  <FormButton 
                  small 
                  disabled={loading}
                  onClick={()=>{
                  setOpenBitlaunch(true)}}
                  >
                    {loading ? <Loader active inline /> : 'Deploy'}
                  </FormButton>
                  <FormButton onClick={reloadServers}>
                    Refresh
                  </FormButton>
              </FormBox> 
              </ActionBox>
              {bitlaunchServers && 
                bitlaunchServers.map((bitlaunch,i) => (
                  <CardContent key={i}>
                  <Template>
                    <Info>
                      <IconStyle>
                      <Logo src={bitlaunch.imageCover}/>
                      <ActionButton edit >{bitlaunch.serverInfo.status}</ActionButton>
                      </IconStyle>
                      <TextContainer>
                        <Title>Name</Title>
                        <Subtitle>{bitlaunch.fakeDomain}</Subtitle>
                      </TextContainer>
                      <TextContainer>
                        <Title>Software Version</Title>
                        <Subtitle>{bitlaunch.softwareVersion}</Subtitle>
                      </TextContainer>
                      <TextContainer>
                        <Title>Server IP</Title>
                        <div id="DivForHoverItem">
                          <div id="HiddenText">
                            <SubtitleIP>{bitlaunch.serverInfo.ipv4[0]}</SubtitleIP>
                            </div>
                        </div>
        
                      </TextContainer>
                      <TextContainer>
                        <Title>Sent emails</Title>
                        <Subtitle>{bitlaunch.sendedEmails.length}</Subtitle>
                      </TextContainer>
                    </Info>
                    <Actions>
                      <ActionButton remove disabled={loading} onClick={()=> handleDeleteBitlaunch(bitlaunch._id)}>{loading ? <Loader active inline /> : 'Delete'}</ActionButton>
                      {bitlaunch.serverInfo.status == 'ok' && <ActionButton edit disabled={loading} onClick={()=> handleTest(bitlaunch._id)}>{loading ? <Loader active inline /> : 'Test'}</ActionButton>}
                    
                      {bitlaunch.serverInfo.status == 'ok' && <ShowInstall loading={loading} handleInstall={handleInstallBitlaunch} server={bitlaunch}/>}
                
                    </Actions>
                  </Template>
                </CardContent>
                ))
              }
        
          </TemplateWrapper>
        </Content>

        <Content active={active === 2}>
          <TemplateWrapper>
            <ActionBox>
              <TitleText>Endpoints</TitleText>
              {/* <TitleText>Total: {bitlaunchServers.length}</TitleText>
              <TitleText>Total: {bitlaunchServers.length}</TitleText> */}
              <FormBox>
                  <FormButton 
                  small 
                  disabled={loading}
                  onClick={()=>{
                  setOpenCustomServer(true)}}
                  >
                    {loading ? <Loader active inline /> : 'Connect'}
                  </FormButton>
                  <FormButton onClick={reloadServers}>
                    Refresh
                  </FormButton>
              </FormBox> 
              </ActionBox>
              {customServers && 
                customServers.map((custom,i) => (
                  <CardContent key={i}>
                  <Template>
                    <Info>
                      <IconStyle>
                      <Logo src={custom.imageCover}/>
                      {/* <ActionButton edit >{custom.serverInfo.status}</ActionButton> */}
                      <ActionButton edit >Added</ActionButton>
                      </IconStyle>
                      <TextContainer>
                        <Title>Name</Title>
                        <Subtitle>{custom.fakeDomain}</Subtitle>
                      </TextContainer>
                      <TextContainer>
                        <Title>Software Version</Title>
                        <Subtitle>{custom.softwareVersion}</Subtitle>
                      </TextContainer>
                      <TextContainer>
                        <Title>Server IP</Title>
                        <div id="DivForHoverItem">
                          <div id="HiddenText">
                            <SubtitleIP>{custom.serverInfo.ipv4}</SubtitleIP>
                            </div>
                        </div>
        
                      </TextContainer>
                      <TextContainer>
                        <Title>Sent emails</Title>
                        <Subtitle>{custom.sendedEmails.length}</Subtitle>
                      </TextContainer>
                    </Info>
                    <Actions>
                      <ActionButton remove disabled={loading} onClick={()=> handleDeteleCustom(custom._id)}>{loading ? <Loader active inline /> : 'Delete'}</ActionButton>
                      <ActionButton edit disabled={loading} onClick={()=> handleTest(custom._id)}>{loading ? <Loader active inline /> : 'Test'}</ActionButton>
                      <ShowInstall loading={loading} handleInstall={handleInstallCustom} server={custom}/>
                
                    </Actions>
                  </Template>
                </CardContent>
                ))
              }

        
          </TemplateWrapper>
        </Content>
        <Content active={active === 3}>
          <TemplateWrapper>
            <ActionBox>
              <TitleText>Endpoints</TitleText>
              {/* <TitleText>Total: {bitlaunchServers.length}</TitleText>
              <TitleText>Total: {bitlaunchServers.length}</TitleText> */}
              {/* <FormBox>
                  <FormButton 
                  small 
                  disabled={loading}
                  onClick={()=>{
                  setOpenCustomServer(true)}}
                  >
                    {loading ? <Loader active inline /> : 'Connect'}
                  </FormButton>
                  <FormButton onClick={reloadServers}>
                    Refresh
                  </FormButton>
              </FormBox>  */}
              </ActionBox>
              {allServers && 
                allServers.map((server, i) => (
                  <CardContent key={i}>
                  <Template>
                    <Info>
                      <IconStyle>
                      <Logo src={server.imageCover}/>
                      {/* <ActionButton edit >{custom.serverInfo.status}</ActionButton> */}
                      <ActionButton edit >Added</ActionButton>
                      </IconStyle>
                      <TextContainer>
                        <Title>Name</Title>
                        <Subtitle>{server.fakeDomain}</Subtitle>
                      </TextContainer>
                      <TextContainer>
                        <Title>Software Version</Title>
                        <Subtitle>{server.softwareVersion}</Subtitle>
                      </TextContainer>
                      {/* <TextContainer>
                        <Title>Server IP</Title>
                        <div id="DivForHoverItem">
                          <div id="HiddenText">
                            <SubtitleIP>{server.serverInfo.ipv4[0]}</SubtitleIP>
                            </div>
                        </div>
        
                      </TextContainer> */}
                      <TextContainer>
                        <Title>Sent emails</Title>
                        <Subtitle>{server.sendedEmails.length}</Subtitle>
                      </TextContainer>
                    </Info>
                    {/* <Actions>
                      <ActionButton remove disabled={loading} onClick={()=> handleDeteleCustom(custom._id)}>{loading ? <Loader active inline /> : 'Delete'}</ActionButton>
                      <ActionButton edit disabled={loading} onClick={()=> handleTest(custom._id)}>{loading ? <Loader active inline /> : 'Test'}</ActionButton>
                      <ShowInstall loading={loading} handleInstall={handleInstallCustom} server={custom}/>
                
                    </Actions> */}
                  </Template>
                </CardContent>
                ))
              }

        
          </TemplateWrapper>
        </Content>
    </TemplateContainer>

    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      size='small'
      
    >
      <Header icon>
        Deploy linode Servers
      </Header>
      <Header icon>
      <Select onChange={(e) => setAmountSelected(e.target.value)} >
                <option value="" hidden>
                    Select amount
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
        </Select>
      <Select onChange={(e) => setCoutrySelected(e.target.value)} >
                <option value="" hidden>
                    Select Country
                  </option>
                  {regions &&
                  regions.map((region) => (
                    <option value={region.id}>{region.country}</option>
                  ))}
 
        </Select>
        <FormButton onClick={deployServer} disabled={loading}> 
        {loading ? <Loader active inline /> : 'Deploy'}
        </FormButton>

      </Header>
      {/* <Modal.Content >

      </Modal.Content> */}
      <Modal.Actions>
        <FormButton  onClick={() => setOpen(false)}>
          <Icon name='remove' /> Go Back
        </FormButton>
      </Modal.Actions>
    </Modal>
    {/* bitlaunch */}
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={openBitlaunch}
      size='small'
    >
      <Header icon>
        Deploy Bitlaunch Servers
      </Header>
      <Header icon>
      <Select onChange={(e) => setAmountSelected(e.target.value)} >
                <option value="" hidden>
                    Select amount
                  </option>
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                  <option value="4">4</option>
                  <option value="5">5</option>
                  <option value="6">6</option>
                  <option value="7">7</option>
                  <option value="8">8</option>
                  <option value="9">9</option>
                  <option value="10">10</option>
        </Select>
      <Select onChange={(e) => setCoutrySelected(e.target.value)} >
                <option value="" hidden>
                    Select Region
                  </option>
                  {bitlaunchRegions &&
                  bitlaunchRegions.map((region, i) => (
                    <option key={i} value={region.subregion.id}>{region.name}</option>
                  ))}
 
        </Select>

        <FormButton onClick={deployBitlaunchServer} disabled={loading}> 
        {loading ? <Loader active inline /> : 'Deploy'}
        </FormButton>

      </Header>
      {/* <Modal.Content >

      </Modal.Content> */}
      <Modal.Actions>
        <FormButton  onClick={() => setOpenBitlaunch(false)}>
          <Icon name='remove' /> Go Back
        </FormButton>
      </Modal.Actions>
    </Modal>
    {/* custom server */}
    <Modal
      basic
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={openCustomServer}
      size='small'
    >
      <Header icon>
        Connect to Custom Server
      </Header>
      <Header icon>

      <InputBox>
              {/* <Input type="text" required value={key} onChange={(e) => setKey(e.target.value)} placeholder={linodeSettings.key}/> */}
              <Input type="text" required value={customIp} onChange={(e) => setCustomIp(e.target.value)} placeholder="Ip"/>
              <Input type="text" required value={customUsername} onChange={(e) => setCustomUsername(e.target.value)} placeholder="Username"/>
              <Input type="password" required value={customPassword} onChange={(e) => setCustomPassword(e.target.value)} placeholder="Password"/>

            </InputBox>
        <FormButton onClick={connectCustomServer} disabled={loading}> 
        {loading ? <Loader active inline /> : 'Connect'}
        </FormButton>

      </Header>
      {/* <Modal.Content >

      </Modal.Content> */}
      <Modal.Actions>
        <FormButton  onClick={() => setOpenCustomServer(false)}>
          <Icon name='remove' /> Go Back
        </FormButton>
      </Modal.Actions>
    </Modal>
    </>
  )
}

function ShowInstall(props) {
const {server, loading, handleInstall} = props;
  return (
    <>
      {server.softwareVersion == "No software installed yet" ? <ActionButton install disabled={loading} onClick={()=> handleInstall(server._id, server.serverInfo.ipv4[0])}>{loading ? <Loader active inline /> : 'Install Packages'}</ActionButton> : '' }
    </>
  )
}

export default LinodeSettings
