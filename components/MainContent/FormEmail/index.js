import React, { useState, useEffect, useCallback, useRef } from "react";
import styled from "styled-components";
import { themeColor } from "../../../utils";
import dynamic from "next/dynamic";
import { Button, Header, Modal, Loader } from "semantic-ui-react";
// const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });
// import CodeMirror, { scrollPastEnd } from "@uiw/react-codemirror";
// import { javascript } from "@codemirror/lang-javascript";

// const SunEditor = dynamic(() => import("suneditor-react"), {
//   ssr: false,
// });
// const CodeMirror = dynamic(() => import("@uiw/react-codemirror"), {
//   ssr: false,
// });

// import 'suneditor/dist/css/suneditor.min.css'; // Import Sun Editor's CSS File
// import CodeMirror from 'codemirror'
// import 'codemirror/mode/htmlmixed/htmlmixed'
// import 'codemirror/lib/codemirror.css'

/*
const MarkdownEditor = dynamic(
  () => import("@uiw/react-markdown-editor").then((mod) => mod.default),
  { ssr: false }
);
*/

import "@uiw/react-markdown-editor/markdown-editor.css";
import "@uiw/react-markdown-preview/markdown.css";

// import CodeMirror from '@uiw/react-codemirror';
// import { javascript } from '@codemirror/lang-javascript';

const CodeMirror = dynamic(() => import("@uiw/react-codemirror"), {
  ssr: false,
});

import axios from "axios";

//import 'react-quill/dist/quill.snow.css';

const FormContainer = styled.div`
  height: 73vh;
  overflow-y: scroll;
  /* background-color:white; */
  background: #1c1726;
  margin: 0;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;
const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 0 0.5rem;
  justify-content: center;
`;
const Details = styled.div`
  /* margin-left: 1rem;
  margin-right: 1rem;
  width: 455px;
 flex-wrap: wrap; 
justify-content: space-between;  */
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px 0 12px 0;
`;

const InputBox = styled.div`
  width: calc(100% / 2 - 20px);
  margin-bottom: 20px;
`;
const InputBoxWrap = styled.div`
  display: flex;
  flex-direction: column;
`;
const Title = styled.h3`
  font-weight: 500;
  color: white;
  margin: 5px;
`;
const Subtitle = styled.h5`
  font-weight: 300;
  color: white;
  margin: 5px;
`;
const Message = styled.h5`
  font-weight: 300;
  color: white;
  margin: 5px;
`;
const Icon = styled.img``;
const SubmitBtn = styled.h5`
  color: ${themeColor};
  text-align: end;
`;
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
  &:focus {
    border: 3px solid #fa1e4e;
  }
`;
const InputNumber = styled.input`
  font-size: 1.2rem;
  font-weight: 400;
  line-height: 2rem;
  outline: 0;
  box-sizing: border-box;
  display: block;
  width: 90px;
  border: 3px solid #8c7db0;
  padding: 0.5rem;
  color: white;
  background: transparent;
  border-radius: 0.5rem;
  &:focus {
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
  &:focus {
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
  -webkit-transition: background-color 0.25s ease-in-out;
  -moz-transition: background-color 0.25s ease-in-out;
  -ms-transition: background-color 0.25s ease-in-out;
  -o-transition: background-color 0.25s ease-in-out;
  transition: background-color 0.25s ease-in-out;
  white-space: nowrap;
`;
const FormButton = styled.button`
  /* background: #01bf71; */
  margin-top: 1rem;
  background-color: #fa1e4e;
  padding: 16px 0;
  border: none;
  font-weight: 700;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  color: white;
  -webkit-transition: background-color 0.25s ease-in-out;
  -moz-transition: background-color 0.25s ease-in-out;
  -ms-transition: background-color 0.25s ease-in-out;
  -o-transition: background-color 0.25s ease-in-out;
  transition: background-color 0.25s ease-in-out;
  &:hover {
    background-color: #d71e47;
  }
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  ${({ small }) =>
    small &&
    `
      width: 30px !important;
      padding: 0px;
      margin: 1rem;
  `}
`;
const Select = styled.select`
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
  outline: none;
  padding: 0.5rem;
  /* border-color: ; */
  color: #8c7db0;
  -webkit-transition: background-color 0.25s ease-in-out;
  -moz-transition: background-color 0.25s ease-in-out;
  -ms-transition: background-color 0.25s ease-in-out;
  -o-transition: background-color 0.25s ease-in-out;
  transition: background-color 0.25s ease-in-out;
  &:focus {
    border: 3px solid #fa1e4e;
  }
  option {
    color: black;
    background: #8c7db0;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;

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
  outline: none;
  padding: 0.5rem;
  /* border-color: ; */
  color: #8c7db0;
  cursor: pointer;
  -webkit-transition: background-color 0.25s ease-in-out;
  -moz-transition: background-color 0.25s ease-in-out;
  -ms-transition: background-color 0.25s ease-in-out;
  -o-transition: background-color 0.25s ease-in-out;
  transition: background-color 0.25s ease-in-out;
  &:focus {
    border: 3px solid #fa1e4e;
  }
  /* &:hover{
      background-color: #d71e47;
    } */
  width: 100%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);
`;
const FormButtonModal = styled.button`
  /* background: #01bf71; */
  /* width: 15%; */
  margin-left: 1rem;
  background-color: #d71e47;
  /* padding: 16px 0; */
  border: none;
  font-weight: 700;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  color: white;
  -webkit-transition: background-color 0.25s ease-in-out;
  -moz-transition: background-color 0.25s ease-in-out;
  -ms-transition: background-color 0.25s ease-in-out;
  -o-transition: background-color 0.25s ease-in-out;
  transition: background-color 0.25s ease-in-out;
  &:hover {
    background-color: #d71e47;
  }

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

  ${({ small }) =>
    small &&
    `
      padding: 5px 10px !important;

  `}
`;

const BackgroundModal = styled.div`
  width: 100%;
  height: 100vh;
  background: rgba(0, 0, 0, 0.8);
  position: fixed;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
`;
const ModalWrapper = styled.div`
  width: 800px;
  height: 500px;
  position: relative;
  z-index: 10;
`;
const HeaderBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;
const HeaderWrapperBox = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: fit-content;
`;

const QuillModules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { header: [3, 4, 5, 6] }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"],
  ],
};

const QuillFormats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block",
];

function FormEmail({
  inputList,
  setInputList,
  loading,
  handleSubmit,
  setUseTls,
  setUseSll,
  selectedTemplate,
  setSelectedTemplate,
  templates,
  title,
  setTitle,
  subject,
  setSubject,
  message,
  setMessage,
  values,
  setValues,
}) {
  const [value, setValue] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);

  const [openModal, setOpenModal] = useState(false);

  const handleMessage = (e) => {
    e.preventDefault();
    console.log("ee");

    setOpenModal((prev) => !prev);
    setBody(body);
  };

  const handleBody = (editor, data, value) => {
    formData.set("message", value);
  };

  //modal exit at click outside
  const modalRef = useRef();
  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      setOpenModal(false);
    }
  };

  const blogFromLS = () => {
    if (typeof window === "undefined") {
      return false;
    }

    if (localStorage.getItem("blog")) {
      return JSON.parse(localStorage.getItem("blog"));
    } else {
      return false;
    }
  };
  const [body, setBody] = useState(blogFromLS());

  const {
    formData,
    titleForm,
    subjectForm,
    senderEmail,
    emailPerMail,
    intervalTime,
  } = values;

  const handleChange = (name) => (e) => {
    // console.log(e.target.value);
    const value = name === "file" ? e.target.files[0] : e.target.value;
    formData.set(name, value);
    setValues({ ...values, [name]: value, formData, error: "" });
  };

  // handle input change
  const handleInputChange = (e, index) => {
    e.preventDefault();
    const { name, value } = e.target;
    const list = [...inputList];
    list[index][name] = value;
    console.log(list);
    setInputList(list);

    // var shit = JSON.stringify(inputList)
    // formData.set('headers', inputList)
  };

  // handle click event of the Remove button
  const handleRemoveClick = (e, index) => {
    e.preventDefault();
    const list = [...inputList];
    list.splice(index, 1);
    setInputList(list);
  };

  // handle click event of the Add button
  const handleAddClick = () => {
    setInputList([...inputList, { customHeader: "" }]);
  };

  const showForm = () => {
    if (!selectedTemplate) {
      // setTitle('')
      // setSubject('')
      // setMessage('')
      return (
        <>
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <FormWrapper>
                <Details>
                  <InputBox>
                    <Title>Select template</Title>
                    <Select
                      onChange={(e) => setSelectedTemplate(e.target.value)}
                    >
                      <option value="" hidden>
                        Type
                      </option>
                      {templates &&
                        templates.map((template) => (
                          <>
                            <option value={template._id}>
                              {template.title}
                            </option>
                          </>
                        ))}
                    </Select>
                  </InputBox>
                  <InputBox>
                    <Title>Sender name</Title>
                    {/* <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Write the email Title" /> */}
                    <Input
                      type="text"
                      value={titleForm}
                      onChange={handleChange("titleForm")}
                      placeholder="Write the Sender Name"
                    />
                  </InputBox>
                  <InputBox>
                    <Subtitle>Email sender</Subtitle>
                    {/* <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Write the email Title" /> */}
                    <Input
                      type="text"
                      value={senderEmail}
                      onChange={handleChange("senderEmail")}
                      placeholder="Write the Email sender"
                    />
                  </InputBox>
                  <InputBox>
                    <Subtitle>Subject</Subtitle>
                    <Input
                      type="text"
                      value={subjectForm}
                      onChange={handleChange("subjectForm")}
                      placeholder="Write the email Subject"
                    />
                  </InputBox>
                  <InputBox>
                    <Subtitle>Interval between mails</Subtitle>
                    <InputNumber
                      type="number"
                      value={intervalTime}
                      onChange={handleChange("intervalTime")}
                    />
                  </InputBox>
                  <InputBox>
                    <Subtitle>Email per mail</Subtitle>
                    <InputNumber
                      type="number"
                      value={emailPerMail}
                      onChange={handleChange("emailPerMail")}
                    />
                  </InputBox>
                  <InputBox>
                    <Message>Message</Message>
                    <FormButtonEmail onClick={handleMessage}>
                      Set Content Message
                    </FormButtonEmail>
                  </InputBox>
                  <InputBox>
                    <Title>Use TLS</Title>
                    <Select onChange={(e) => setUseTls(e.target.value)}>
                      {/* <option value="" hidden>
                    Type
                  </option> */}
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>
                    </Select>
                  </InputBox>
                  <InputBox>
                    <Title>Use SSL</Title>
                    <Select onChange={(e) => setUseSll(e.target.value)}>
                      {/* <option value="" hidden>
                    Type
                  </option> */}
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>
                    </Select>
                  </InputBox>
                  <InputBoxWrap>
                    <Subtitle>Custom Headers</Subtitle>
                    <HeaderBox>
                      {inputList.map((x, i) => {
                        return (
                          <>
                            <HeaderWrapperBox>
                              <Input
                                name="customHeader"
                                placeholder="'x-my-key': 'header value'"
                                value={x.customHeader}
                                onChange={(e) => handleInputChange(e, i)}
                              />
                              {inputList.length !== 1 && (
                                <FormButton
                                  className="mr10"
                                  small
                                  onClick={(e) => handleRemoveClick(e, i)}
                                >
                                  -
                                </FormButton>
                              )}
                              {inputList.length - 1 === i && (
                                <FormButton small onClick={handleAddClick}>
                                  +
                                </FormButton>
                              )}
                            </HeaderWrapperBox>
                          </>
                        );
                      })}
                    </HeaderBox>
                  </InputBoxWrap>

                  {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}

                  {/* <Input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} placeholder="Write the email Subject"/> */}

                  {/* dont touch this please */}
                  {/* <CodeMirror
                    value="console.log('hello world!');"
                    height="200px"
                    width="420px"
                    theme="dark"
                    // extensions={[javascript({ jsx: true })]}
                    onChange={(value, viewUpdate) => {
                      console.log('value:', value);
                    }}
                  /> */}

                  {/* <ReactQuill 
                    value={body}
                    onChange={handleBody}
                    modules={QuillModules}
                    formats={QuillFormats}
                    /> */}
                  {/* <TextArea type="text" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write the email message"/> */}
                </Details>
              </FormWrapper>
            </FormContainer>
            <FormButton type="submit">
              {loading ? <Loader active inline="centered" /> : "Submit"}
            </FormButton>
          </form>
        </>
      );
    } else {
      return (
        <>
          <form onSubmit={handleSubmit}>
            <FormContainer>
              <FormWrapper>
                <Details>
                  <Title>Select template</Title>
                  <Select onChange={(e) => setSelectedTemplate(e.target.value)}>
                    <option value="" hidden>
                      Type
                    </option>
                    {templates &&
                      templates.map((template) => (
                        <>
                          <option value={template._id}>{template.title}</option>
                        </>
                      ))}
                  </Select>
                  <Title>Sender Name</Title>
                  <Input
                    type="text"
                    //  disabled={isDisabled}
                    // value={value.title}
                    onChange={handleChange("titleForm")}
                    value={titleForm}
                  />
                  <Subtitle>Email sender</Subtitle>
                  {/* <Input type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Write the email Title" /> */}
                  <Input
                    type="text"
                    value={senderEmail}
                    onChange={handleChange("senderEmail")}
                    placeholder="Write the Email sender"
                  />

                  <Subtitle>Subject</Subtitle>
                  <Input
                    type="text"
                    //  disabled={isDisabled}
                    //  value={value.subject}
                    onChange={handleChange("subjectForm")}
                    value={subjectForm}
                  />
                  <Subtitle>Interval between mails</Subtitle>
                  <InputNumber
                    type="number"
                    value={intervalTime}
                    onChange={handleChange("intervalTime")}
                  />
                  <Subtitle>Email per mail</Subtitle>
                  <InputNumber
                    type="number"
                    value={emailPerMail}
                    onChange={handleChange("emailPerMail")}
                  />

                  <InputBox>
                    <Title>Use TLS</Title>
                    <Select onChange={(e) => setUseTls(e.target.value)}>
                      <option value="" hidden>
                        Type
                      </option>
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>
                    </Select>
                  </InputBox>
                  <InputBox>
                    <Title>Use SSL</Title>
                    <Select onChange={(e) => setUseSll(e.target.value)}>
                      <option value="" hidden>
                        Type
                      </option>
                      <option value={false}>No</option>
                      <option value={true}>Yes</option>
                    </Select>
                  </InputBox>

                  <Subtitle>Custom Headers</Subtitle>
                  <HeaderBox>
                    {inputList.map((x, i) => {
                      return (
                        <>
                          <HeaderWrapperBox>
                            <Input
                              name="customHeader"
                              placeholder="'x-my-key': 'header value'"
                              value={x.customHeader}
                              onChange={(e) => handleInputChange(e, i)}
                            />
                            {inputList.length !== 1 && (
                              <FormButton
                                className="mr10"
                                small
                                onClick={() => handleRemoveClick(e, i)}
                              >
                                -
                              </FormButton>
                            )}
                            {inputList.length - 1 === i && (
                              <FormButton small onClick={handleAddClick}>
                                +
                              </FormButton>
                            )}
                          </HeaderWrapperBox>
                        </>
                      );
                    })}
                  </HeaderBox>
                  {/* <div style={{ marginTop: 20 }}>{JSON.stringify(inputList)}</div> */}
                  <Message>Message</Message>
                  <FormButtonEmail onClick={handleMessage}>
                    Set Content Message
                  </FormButtonEmail>

                  {/* <ReactQuill 
                    // disabled={isDisabled}
                    // value={value.message || ''}
                    value={body}
                    modules={QuillModules}
                    formats={QuillFormats}
                    onChange={handleBodyTemp}
                    /> */}
                </Details>
              </FormWrapper>
            </FormContainer>
            <FormButton type="submit">
              {loading ? <Loader active inline="centered" /> : "Submit"}
            </FormButton>
          </form>
          {/* <form onSubmit={handleSubmit}>
          <FormContainer>
            <FormWrapper >
              <Icon>
              
              </Icon>
              <Details>
              <Title>Select template</Title>
                <Select onChange={(e) => setSelectedTemplate(e.target.value)} >
                <option value="" hidden>
                    Type
                  </option>
                {templates && 
                templates.map((template) => (
                  <>
                  <option value={template._id}>{template.title}</option>
                  </>
                ))
              }

                </Select>
                <Title>Title</Title>
                    <Input type="text" disabled={isDisabled}  value={value.title} />
                    <Subtitle>Subject</Subtitle>
                    <Input type="text" disabled={isDisabled} value={value.subject} />
                    <Message >Message</Message>
                    <ReactQuill 
                    value={value.message || ''}
                    modules={QuillModules}
                    formats={QuillFormats}
                    />

              </Details>
            </FormWrapper>
          </FormContainer>
          <FormButton type="submit" >{loading ? <Loader active inline='centered' /> : 'Submit'}</FormButton>
        </form> */}
        </>
      );
    }
  };
  {
    /* <Message >Message</Message>
                    <TextArea type="text" required value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write the email message"/> */
  }

  return (
    <>
      {showForm()}

      {openModal ? (
        <BackgroundModal ref={modalRef} onClick={closeModal}>
          <ModalWrapper>
            {/*<MarkdownEditor
          height={400}
          // ref={msgReference}
          //  onChange={(editor, data, value) => setMarkdown(value)}
          onChange={handleBody}
          value={body}
          />*/}
          </ModalWrapper>
        </BackgroundModal>
      ) : (
        ""
      )}
    </>
  );
}

export default FormEmail;
