import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const input1 = "email";
const input2 = "password";

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: calibri;
`;

const Heading = styled.h1`
  font-size: 65px;
  margin: 10px;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Input = styled.input`
  padding: 10px;
  margin: 10px;
  font-size: 15px;
  border: 2px solid
    ${(props) => (props.borderColor === "alert" ? "red" : "#ddd")};
  border-radius: 3px;
  width: 300px;
`;
const InputButton = styled.input`
  background: orange;
  font-size: 20px;
  border-radius: 3px;
  border: 2px solid white;
  color: white;
  margin: 0.5em 1em;
  padding: 0.25em 1em;
  transition: 0.3s;
  :hover {
    cursor: pointer;
    color: dodgerblue;
    background-color: white;
  }
`;

const LoginPage = ({ data, change, submit }) => (
  <FormWrapper>
    <Heading>Register</Heading>
    <Form>
    <label>Username</label>
      <Input
        type="text"
        value=""
        borderColor="none"
      />
      <label>Password</label>
      <Input
        type="text"
        value=""
        borderColor="none"
      />
	  <Link to={"/home"}>
      <InputButton type="submit" id="submit" />
	  </Link>
    </Form>
  </FormWrapper>
);

export default LoginPage;
