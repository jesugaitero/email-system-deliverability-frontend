import React, { useState,useEffect } from 'react'
import styled from 'styled-components';
import Badge from '../../Badge';
import {themeColor} from '../../../utils'
import CheckBox from '../CheckBox'
import { Button, Header, Icon, Modal,Loader } from 'semantic-ui-react';
import RadioButton from './RadioButton'
const InfoCardTwo = styled.div`
    overflow-y: scroll;
  /* height: 100%; */
  height: 55vh;
  /* width: 14rem; */
  width: 100%;
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
const InfoCardTo = styled.div`
  height: fit-content;
  /* width: 14rem; */
  width: 100%;
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
  border: ${props => (props.selected ? '4px solid #fa1e4e' : 'none')};
  transition: all 0.3s cubic-bezier(0.000, 0.000, 0.230, 1) !important;
  border-radius: 1rem;
  /* margin-bottom: 1rem; */
  margin: 0.3rem 0.4rem;
  width: fit-content;
  height: fit-content;
  cursor: pointer;
  
`
const CardContent = styled.div`
  /* padding: 0.7rem 1rem 0.3rem 1rem; */
  padding: 1.5rem;
  gap:1rem;
  flex-direction:row;
  
  
`
const InfoContainer = styled.div`
  margin-left: 0.7rem;
`
const Row = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0.4rem;
  ${({justify}) => justify && `
    justify-content:space-around;
    width: 90%;
  `}
`

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
const Title = styled.h3`
  color:white;
  margin-bottom: 0.1rem;
  margin-top: 0.1rem;
`
const Subtitle = styled.h5`
  color: white;
  margin-bottom: 0.1rem;
  margin-top: 0.1rem;
`
const InputCheckBox = styled.input`
    position: absolute;
    top: 0;
    left: 0;
    opacity: 1;
    width: 100%;
    height: 100%;
    z-index: 999;
    cursor: pointer;
    

`;
const Digit = styled.div`
  background-color: ${themeColor};
  padding: 0.8rem 1rem;
  font-size: 1.3rem;
  border-radius: 1rem;
  position: relative;
  box-shadow: 0 1px 3px rgba(0,0,0,0.9);
`
  /* ${InputCheckBox}:checked ~ ${Digit} {
    opacity: 1;
    background-color: red;
 } */

const FormButton = styled.label`
  width: 100%;
  /* height: 35px; */
  background: transparent;
  border-radius: 0.5rem;
  color: gray;
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
    cursor:pointer;
    -webkit-transition: background-color .25s ease-in-out;
    -moz-transition: background-color .25s ease-in-out;
    -ms-transition: background-color .25s ease-in-out;
    -o-transition: background-color .25s ease-in-out;
    transition: background-color .25s ease-in-out;
    &:focus{
      border: 3px solid #fa1e4e;
  } 
    /* &:hover{
      background-color: #d71e47;
    } */
    width: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
`
const FormButtonEmail = styled.button`
  width: 100%;
  /* height: 35px; */
  background: transparent;
  border-radius: 0.5rem;
  color: gray;
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
    cursor:pointer;
    -webkit-transition: background-color .25s ease-in-out;
    -moz-transition: background-color .25s ease-in-out;
    -ms-transition: background-color .25s ease-in-out;
    -o-transition: background-color .25s ease-in-out;
    transition: background-color .25s ease-in-out;
    &:focus{
      border: 3px solid #fa1e4e;
  } 
    /* &:hover{
      background-color: #d71e47;
    } */
    width: 100%;
    box-shadow: 0 1px 3px rgba(0,0,0,0.9);
`

const EmailInputBox = styled.div`
    display:flex;
    flex-direction: row;
    gap: 10px;
    width: inherit;
`
const FormButtonModal = styled.button`
/* background: #01bf71; */
/* width: 15%; */
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

const Logo = styled.img`
    width: 30px;
    height: 30px;
    margin: 15px;
    border-radius: 15px;
    background: white;

`;




function InfoTwo(props) {

  // const {one, setOne, two, setTwo, three, setThree, four, setFour, five, setFive, six, setSix, setEmailFiles, emailFiles,radioValue, setRadio, servers} = props
  const { setEmailFiles, emailFiles,radioValue, setRadio, servers,bitlaunchServers,customServers, values, setValues} = props
  const [open, setOpen] = useState(false)


const [checkedServer, setCheckedServer] = useState([]); // tags

  useEffect(() => {
    setValues({ ...values, formData: new FormData() });
  }, []);

  const {formData, manualTargetEmails } = values;

  const onInputChange = (e) => {
    
  }


  const handleChange = name => e => {
    // console.log(e.target.value);
    if(name === 'file'){
      setEmailFiles(e.target.files[0]);
    }
    const value = name === 'file' ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: '' });
};

  const handleToggle = t => () => {
    setValues({ ...values});
    // return the first index or -1
    const clickedServer = checkedServer.indexOf(t);
    const all = [...checkedServer];

    if (clickedServer === -1) {
        all.push(t);
    } else {
        all.splice(clickedServer, 1);
    }
    console.log(all);
    setCheckedServer(all);
    formData.set('servers', all);
  };


    const [listServers, setListServers] = useState(null);
    const [filteredServers, setFilteredServers] = useState(null);

    useEffect(() => {
      (async () => {
        const listServer = servers.concat(bitlaunchServers,customServers)
        setListServers(listServer)
        
      })()
    }, [servers])

  const [filters,setFilters] = useState({softwareVersion: 'No software installed yet'})
  useEffect(() => {
    // console.log('filter server')
    // listServers && setFilteredServers(
    //   listServers.filter((item) =>
    //     Object.entries(filters).every(([key,value]) => 
    //       item[key].includes(value)
    //       // console.log(value, key, item)
    //     )
    //   )
    // )
    if (listServers) {
      var newArray = listServers.filter(function (el)
      {
        return el.softwareVersion != 'No software installed yet';
      }
      );

      console.log('the arr');
      console.log(newArray);
      setFilteredServers(newArray)
    }
  
  }, [listServers])


  const showServers = () => {
    return (
      filteredServers &&
      filteredServers.map((t, i) => (
            // <li className="list-unstyled">
                  <article key={i}  className="feature1">
                    <input type="checkbox" onChange={handleToggle(t._id)} />
                    <div>
                      {/* <span>
                        20 GB<br/>
                        + $15.00
                      </span> */}
                      <CardContent>
                        <Row>
                          <Digit>
                              {/* {i} */}
                              <Logo src={t.imageCover}/>
                          </Digit>

                          <InfoContainer>
                            {/* <Title>{t.serverInfo.ipv4[0]}</Title> */}
                            <Title>{t.fakeDomain}</Title>
                            {/* <Subtitle>Some subtitle</Subtitle> */}
                          </InfoContainer>
                        </Row>
                        <Row justify>
                          <Badge content={`${t.fakeEmail}`} glow/>
                        </Row>
                      </CardContent>
                    </div>
                  </article>
            // </li>
        ))
    );
  };


  return (
    <>
        <InfoCardTwo>
          {showServers()}

          {/* <Card selected={one} checked={one} onClick={({ target }) => setOne(!one)}>
            <CardContent>
              <Row>
                <Digit>
                    70
                </Digit>

                <InfoContainer>
                  <Title>Some title</Title>
                  <Subtitle>Some subtitle</Subtitle>
                </InfoContainer>
              </Row>
              <Row justify>
                <Badge content='some txt' glow/>
                <Badge content='some txt' glow/>
              </Row>
            </CardContent>
          </Card>
          <Card selected={two} checked={two} onClick={({ target }) => setTwo(!two)}>
            <CardContent>
              <Row>
              <Digit>
                70
                </Digit>
                <InfoContainer>
                  <Title>Some title</Title>
                  <Subtitle>Some subtitle</Subtitle>
                </InfoContainer>
              </Row>
              <Row justify>
                <Badge content='some txt' glow/>
                <Badge content='some txt' glow/>
              </Row>
            </CardContent>
          </Card>
          <Card selected={three} checked={three} onClick={({ target }) => setThree(!three)}>
            <CardContent>
              <Row>
                <Digit>70</Digit>
                <InfoContainer>
                  <Title>Some title</Title>
                  <Subtitle>Some subtitle</Subtitle>
                </InfoContainer>
              </Row>
              <Row justify>
                <Badge content='some txt' glow/>
                <Badge content='some txt' glow/>
              </Row>
            </CardContent>
          </Card>
          <Card selected={four} checked={four} onClick={({ target }) => setFour(!four)}>
            <CardContent>
              <Row>
                <Digit>70</Digit>
                <InfoContainer>
                  <Title>Some title</Title>
                  <Subtitle>Some subtitle</Subtitle>
                </InfoContainer>
              </Row>
              <Row justify>
                <Badge content='some txt' glow/>
                <Badge content='some txt' glow/>
              </Row>
            </CardContent>
          </Card>
          <Card selected={five} checked={five} onClick={({ target }) => setFive(!five)}>
            <CardContent>
              <Row>
                <Digit>70</Digit>
                <InfoContainer>
                  <Title>Some title</Title>
                  <Subtitle>Some subtitle</Subtitle>
                </InfoContainer>
              </Row>
              <Row justify>
                <Badge content='some txt' glow/>
                <Badge content='some txt' glow/>
              </Row>
            </CardContent>
          </Card>
          <Card selected={six} checked={six} onClick={({ target }) => setSix(!six)}>
            <CardContent>
              <Row>
                <Digit>70</Digit>
                <InfoContainer>
                  <Title>Some title</Title>
                  <Subtitle>Some subtitle</Subtitle>
                </InfoContainer>
              </Row>
              <Row justify>
                <Badge content='some txt' glow/>
                <Badge content='some txt' glow/>
              </Row>
            </CardContent>
          </Card> */}
          </InfoCardTwo>
          <InfoCardTo>
          <RadioButton
            label="Use SMTP"
            name="radio"
            value={radioValue}
            checked={radioValue}
            onChange={({ target }) => {
              console.log(target.value);
              setRadio(Boolean(target.value));
            }}
          />
          <RadioButton
            label="No SMTP"
            name="radio"
            value={!radioValue}
            checked={!radioValue}
            onChange={({ target }) => setRadio(!target.value)}
          />
          <EmailInputBox>
          <FormButton>
            {emailFiles ? `${emailFiles.name}` : 'Upload Target emails'}
              {/* Upload Target Emails */}
              {/* <input type="file" multiple hidden onChange={onInputChange}  /> */}
              <input type="file" multiple hidden onChange={handleChange('file') }  />
            </FormButton>
            or
            <FormButtonEmail onClick={()=>{setOpen(true)}}>
 
              Set Target Emails
            </FormButtonEmail>
          </EmailInputBox>

          </InfoCardTo>

          <Modal
            basic
            onClose={() => setOpen(false)}
            onOpen={() => setOpen(true)}
            open={open}
            size='small'
            
          >
            <Header icon>
              Write down email targets
            </Header>
            <Header icon>
            <TextArea type="text" value={manualTargetEmails} onChange={handleChange('manualTargetEmails')} />
             
              {/* <FormButton onClick={deployServer} disabled={loading}> 
              {loading ? <Loader active inline /> : 'Deploy'}
              </FormButton> */}

            </Header>
            {/* <Modal.Content >

            </Modal.Content> */}
            <Modal.Actions>
              <FormButtonModal  onClick={() => setOpen(false)}>
                <Icon name='remove' /> Go Back
              </FormButtonModal>
            </Modal.Actions>
          </Modal>


    </>
  )
}

export default InfoTwo
