import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Navbar from '../Navbar'
import FormEmail from './FormEmail'
import TemplateEmail from './TemplateEmail'
import InfoOne from './InfoOne'
import InfoTwo from './InfoTwo'
import CreateTemplate from './CreateTemplate'
import LinodeSettings from './LinodeSettings'
import axios from 'axios'
import { toast, Toast } from 'react-toastify';
import ReactHtmlParser from 'react-html-parser';

const NEXT_PUBLIC = require('../../utils/api').API

const Container = styled.div`

  width: 80%;
  background: linear-gradient(to bottom right, white  right, #e6e4ff 70%);
  border-bottom-right-radius: 2rem;
  border-top-right-radius: 2rem;
  /* margin: 1rem 8rem 1rem 4rem; */
  margin: 1rem 4rem 1rem 4rem;

`
const Subcontainer = styled.div`
  margin: 0.5rem 0;
  height: 80%;
  width: 100%;
  display: flex;
  /* flex-direction:column; */
  flex-direction:row;

  gap: 4rem;
`
const TitleText = styled.h3`
  height:20%;

`
const SectionOne = styled.div`
  display: flex;
  justify-content: space-between;
  /* height: 40%; */
  height: 80%;
  flex-direction: column ;
  gap: 2rem;
  /* width:100%; */
  width: 90%;
`
const ColOne1 = styled.div`
  display: flex;
  gap: 3rem;
  flex-wrap: wrap;
  
`
const ColOne2 = styled.div`
display: flex;
`
const SectionTwo = styled.div`
  display: flex;
  gap: 2rem;
  width: 100%;
  height:95%;
`
const ColTwo1 = styled.div`
  display: flex;
  flex-direction: column;
  height: 115%;
  width: 100%;
`
const ColTwo2 = styled.div`

`
const FormButton = styled.button`
/* background: #01bf71; */
margin: 1rem;
background-color:#fa1e4e;
padding: 16px 16px;
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

const MainContent = (
  { loadBitlaunchServers,bitlaunchServers, setBitlaunchServers, bitlaunchSettings, setBitlaunchSettings, servers,setServers,loadLinodeServers,
     showLinodeDashboard, linodeSettings, setLinodeSettings, emailSettings, showDashboard, showEmailDashboard, showSettingsDashboard, templates, 
     setRefreshTemplates, customServers,loadCustomServers, fetchUser,setReloadBitlaunchSettings,setReloadLinodeSettings
  }
  
  ) => {

  const [one, setOne] = useState(false);
  const [two, setTwo] = useState(false);
  const [three, setThree] = useState(false);
  const [four, setFour] = useState(false);
  const [five, setFive] = useState(false);
  const [six, setSix] = useState(false);


  const [reloadServers, setReloadServers] = useState(false);

  const [emailFiles, setEmailFiles] = useState(null);

  const [selectedTemplate, setSelectedTemplate] = useState(false);

  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  
  const [useTls, setUseTls] = useState(false);
  const [useSll, setUseSll] = useState(false);

  const [loading, setLoading] = useState(false);

  const [radioValue, setRadio] = useState(true);
  // const [servers, setServers] = useState([]);
  // const loadLinodeServers = async () => {
  //   const { data } = await axios.get(`${NEXT_PUBLIC}/get-linode-servers`)
  //   console.log(data)
  //   setServers(data)
  // }

  useEffect(() => {
    // console.log('loading servers');
    // if(linodeSettings.key){

    (async () => {
 
       await loadLinodeServers();
       await loadBitlaunchServers();
       await loadCustomServers();
       await setReloadServers(false)
      
    })();
    // }
    // setReloadServers(false)
  }, [reloadServers])

  const dataForm = {
    title,
    subject,
    message,
    one,
    two,
    three,
    four,
    five,
    six,
    selectedTemplate,
    emailSettings,
    emailFiles
  }

  const [inputList, setInputList] = useState([{ customHeader: "" }]);

  const [values, setValues] = useState({
    formData: '',
    senderEmail:'',
    titleForm: '',
    subjectForm: '',
    manualTargetEmails: '',
    intervalTime: '',
    emailPerMail: ''
  });


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // var msg = ReactHtmlParser(message)
      setLoading(true);
      const { formData } = values

      const newArray= inputList.map(element => {
        return element.customHeader
      });

    // console.log(newArray)

    const myObj = {}
    for (var uwu in newArray) {
      const slug = newArray[uwu].split(':');
      // console.log(slug[1]);
      // console.log(slug[0]);
      myObj[slug[0]] = slug[1];
      
    }
    
    // console.log(myObj) 

      formData.set('useSmtp', radioValue)
      formData.set('selectedTemplate', selectedTemplate)
      formData.set('host', emailSettings.host)
      formData.set('port', emailSettings.port)
      formData.set('email_user', emailSettings.email_user)
      formData.set('email_password', emailSettings.email_password)
      formData.set('key', linodeSettings.key)
      formData.set('headers', myObj)
      formData.set('ssl', useSll)
      formData.set('tls', useTls)
      formData.set('headers', myObj)
      for (var value of formData.values()) {
        console.log(value);
      }

       axios({
        method: "post",

        url: `${NEXT_PUBLIC}/send-email-server`,
        data: formData,
        headers: { "Content-Type": "multipart/form-data" },
      }).then(function(response) {
        toast.success('Emails are being sent.')
        setLoading(false);
      })
      .catch(function(error) {
        setLoading(false);
        console.log(error);
        toast.error('There was an error, check settings and try again.')
      })


    } catch (error) {
      setLoading(false);
      console.log(error);
      toast.error('There was an error, check settings and try againn.')
    }
  };


  return (
    <Container>
      <Navbar />
      <Subcontainer>
        <SectionOne>

          <ColOne1>
            {showDashboard && <InfoTwo
              one={one} setOne={setOne}
              two={two} setTwo={setTwo}
              three={three} setThree={setThree}
              four={four} setFour={setFour}
              five={five} setFive={setFive}
              six={six} setSix={setSix}
              emailFiles={emailFiles} setEmailFiles={setEmailFiles}
              radioValue={radioValue} setRadio={setRadio}
              values={values} setValues={setValues}
              servers={servers} bitlaunchServers={bitlaunchServers} customServers={customServers}
            />}
            {showEmailDashboard && <TemplateEmail templates={templates} setRefreshTemplates={setRefreshTemplates} />}
            {showSettingsDashboard && ''}
            {showLinodeDashboard && <LinodeSettings 
            setReloadBitlaunchSettings={setReloadBitlaunchSettings}
            setReloadLinodeSettings={setReloadLinodeSettings}
            fetchUser={fetchUser}
            linodeSettings={linodeSettings} 
            bitlaunchSettings={bitlaunchSettings}
            setLinodeSettings={setLinodeSettings} 
            setBitlaunchSettings={setBitlaunchSettings}
            setReloadServers={setReloadServers} 
            setServers={setServers} 
            servers={servers} 
            customServers={customServers}
            bitlaunchServers={bitlaunchServers}
            setBitlaunchServers={setBitlaunchServers}
            />}
            {/* {JSON.stringify(dataForm)} */}
          </ColOne1>
          <ColOne2>
            {/* <FormButton>Create canned email</FormButton> */}
            {/* <FormButton>Create canned email</FormButton> */}
          </ColOne2>
        </SectionOne>
        <SectionTwo>
          <ColTwo1>
            {showDashboard && <FormEmail useSll={useSll} useTls={useTls} setUseTls={setUseTls} setUseSll={setUseSll} inputList={inputList} setInputList={setInputList} values={values} setValues={setValues} loading={loading} handleSubmit={handleSubmit} selectedTemplate={selectedTemplate} setSelectedTemplate={setSelectedTemplate} templates={templates} title={title} setTitle={setTitle} subject={subject} setSubject={setSubject} message={message} setMessage={setMessage} />}
            {showEmailDashboard && <CreateTemplate setRefreshTemplates={setRefreshTemplates} />}
            {showSettingsDashboard && ''}
            {/* {selectedTemplate} */}
          </ColTwo1>

          {/* <ColTwo2></ColTwo2> */}
        </SectionTwo>
      </Subcontainer>
    </Container>
  )
}

export default MainContent



// if(one){
//   toast.success('one here.')
//   axios({
//     method: "post",
//     url: "http://localhost:8001/api/run-spam",
//     data: formData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
//       //handle success
//       console.log(response);
//     })
//     .catch(function (response) {
//       //handle error
//       console.log(response);
//     });
// }
// if(two){
//   toast.success('two here.')
//   axios({
//     method: "post",
//     url: "/api/send-email",
//     data: formData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
//       //handle success
//       console.log(response);
//     })
//     .catch(function (response) {
//       //handle error
//       console.log(response);
//     });
// }
// if(three){
//   toast.success('three here.')
//   axios({
//     method: "post",
//     url: "/api/send-email",
//     data: formData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
//       //handle success
//       console.log(response);
//     })
//     .catch(function (response) {
//       //handle error
//       console.log(response);
//     });
// }
// if(four){
//   toast.success('four here.')
//   axios({
//     method: "post",
//     url: "/api/send-email",
//     data: formData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
//       //handle success
//       console.log(response);
//     })
//     .catch(function (response) {
//       //handle error
//       console.log(response);
//     });
// }
// if(five){
//   toast.success('five here.')
//   axios({
//     method: "post",
//     url: "/api/send-email",
//     data: formData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
//       //handle success
//       console.log(response);
//     })
//     .catch(function (response) {
//       //handle error
//       console.log(response);
//     });
// }
// if(six){
//   toast.success('six here.')
//   axios({
//     method: "post",
//     url: "/api/send-email",
//     data: formData,
//     headers: { "Content-Type": "multipart/form-data" },
//   })
//     .then(function (response) {
//       //handle success
//       console.log(response);
//     })
//     .catch(function (response) {
//       //handle error
//       console.log(response);
//     });
// }