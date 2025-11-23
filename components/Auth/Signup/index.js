import React, {useState,useContext, useEffect} from 'react'
import axios from 'axios';
import {toast, Toast} from 'react-toastify';
import Link from 'next/link'
import { Container, Form, FormButton, FormContent, FormH1, FormInput, FormLabel, FormWrap, Icon, Text, ImageTitle, SpinnerWrapper } from './SignupElements'
import Spinner from '../../Spinner/Spinner';
import { Loader } from 'semantic-ui-react'
import {useRouter} from 'next/router';
import {Context} from '../../../context'
import 'semantic-ui-css/semantic.min.css'
const NEXT_PUBLIC = require('../../../utils/api').API

const Signup = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false)

    const {state, dispatch} = useContext(Context);
    console.log("STATE", state);
    const {user} = state;
    const router = useRouter();


    useEffect(() => {
        if(user !== null) router.push('/')
    }, [user])

    const handleSubmit = async (e) => {
        e.preventDefault();
        // console.table({name,email,password});
        try {
            setLoading(true);
            const {data} = await axios.post(`${NEXT_PUBLIC}/register`, {
                name,
                email,
                password
            });
            // console.log('REGISTER RESPONSE',data);
            toast.success('Registration successful. Please Login.')
            setLoading(false);
        } catch (error) {
            toast.error(error.response.data)
            setLoading(false);
        }
    };

    return (
        <>
            <Container>
                <FormWrap>
                    <FormContent>
                        <Form onSubmit={handleSubmit}>
                            {/* <ImageTitle src="https://i.imgur.com/XpSJ53b.png" alt=""/> */}
                            <ImageTitle src="https://i.imgur.com/GcDBhCi.png" alt=""/>
                            <FormH1>Signup</FormH1>
                            <FormLabel htmlFor='for' >Name</FormLabel>
                            <FormInput type='text' required value={name} onChange={ (e) => setName(e.target.value)} placeholder="Enter Name" />
                            <FormLabel htmlFor='for'>Email</FormLabel>
                            <FormInput type='email' required  value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email"/>
                            <FormLabel htmlFor='for'>Password</FormLabel>
                            <FormInput type='password' required value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password"/>
                            <FormButton type='submit'>
                                {loading ? <Loader active inline='centered' /> : 'Continue'}
                            </FormButton>
                            
                            <br/>
                            <Link href="/login">
                                <Text>Go to Login</Text>
                            </Link>

               
                        </Form>
                    </FormContent>
                </FormWrap>

            </Container>
        </>
    )
}

export default Signup