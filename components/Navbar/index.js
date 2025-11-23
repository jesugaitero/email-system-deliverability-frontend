import {useContext} from 'react'
import styled from 'styled-components';
import {FiSearch} from 'react-icons/fi';
import {AiOutlineLogout} from 'react-icons/ai';
import { Context } from '../../context'
import axios from 'axios';
import { useRouter } from 'next/router';
import {toast, Toast} from 'react-toastify';
import 'semantic-ui-css/semantic.min.css'

const NEXT_PUBLIC = require('../../utils/api').API


const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height:10%;
`
const Text = styled.h1`
  span{
    font-weight: 500;
    color: #484258;
  }
`;

const InputContainer = styled.nav`
  display: flex;
`;

const Icon = styled.div`
  height: 3rem;
  width: 3rem;
  background-color: #dce4ff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom-left-radius: 0.5rem;
  border-top-left-radius: 0.5rem;

  svg{
    color: #5555;
  }
`;
const Input = styled.input`
  border: none;
  background-color: #dce4ff;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;
  &:focus{
    border: none;
    outline: none;
  }
`;
const FormButton = styled.button`
/* background: #01bf71; */
margin: 1rem;
background-color:#000;
padding: 16px 16px;
border: none;
font-weight: 300;
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
    /* background: #4a3e65;
    border: 1px solid #8c7db0;
    border-radius: 3.8rem;
    transition: all .1s ease-in-out;
    color: #fff;
    font-weight: 500;
    cursor: pointer;
    transform: scale(1.05);
    padding: 5px 16px;
    svg{
    color: white;
  } */
`

const Navbar = () => {

  const {state, dispatch} = useContext(Context);

  const router = useRouter();

  const logout = async () => {
    dispatch({ type: "LOGOUT"});
    window.localStorage.removeItem('user');
    const {data} = await axios.get(`${NEXT_PUBLIC}/logout`);
    toast.success(data.message)
    router.push("/login")
  }

  return (
    <NavbarContainer>
      <Text>Hello,
      <span> Anonymous User</span>
      </Text>
      <InputContainer>
      <FormButton onClick={logout}>
      <AiOutlineLogout/>  Logout
      </FormButton>
      
        {/* <Icon>
          <FiSearch/>
        </Icon>
        <Input type="text" placeholder="Some txt"/> */}
      </InputContainer>
    </NavbarContainer>
  )
}

export default Navbar
