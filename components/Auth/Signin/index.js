import React, { useState, useContext, useEffect } from "react";
import { Context } from "../../../context";
import axios from "axios";
import Link from "next/link";
import { Loader } from "semantic-ui-react";
import {
  Container,
  Form,
  FormButton,
  FormContent,
  FormH1,
  FormInput,
  FormLabel,
  FormWrap,
  Icon,
  Text,
  ImageTitle,
} from "./SigninElements";
import { useRouter } from "next/router";
import { toast, Toast } from "react-toastify";
import "semantic-ui-css/semantic.min.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const { state, dispatch } = useContext(Context);
  const NEXT_PUBLIC = require('../../../utils/api').API;
  console.log(NEXT_PUBLIC)
  //console.log("STATE", state);
  const { user } = state;
  const router = useRouter();


  useEffect(() => {
    if (user !== null) router.push("/");
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // console.table({email,password});
    try {
      setLoading(true);
      const { data } = await axios.post(`${NEXT_PUBLIC}/login`, {
        email,
        password,
      });
      console.log(NEXT_PUBLIC);
      // console.log('REGISTER RESPONSE',data);
      dispatch({
        type: "LOGIN",
        payload: data,
      });
      window.localStorage.setItem("user", JSON.stringify(data));
      router.push("/");
      toast.success("Login successful. Redirecting.");
      setLoading(false);
    } catch (error) {
      toast.error(error.response.data);
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
              <ImageTitle src="https://i.imgur.com/GcDBhCi.png" alt="" />
              <FormH1>Signin</FormH1>
              <Icon to="/"></Icon>
              <FormLabel htmlFor="for">Email</FormLabel>
              <FormInput
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Email"
              />
              <FormLabel htmlFor="for">Password</FormLabel>
              <FormInput
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter Password"
              />
              <FormButton type="submit">Continue</FormButton>
              <br />
              <Link href="/register">
                <Text>Go to Register</Text>
              </Link>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  );
};

export default SignIn;
