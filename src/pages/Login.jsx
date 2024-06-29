import styled from "styled-components";
import React from "react";
import { mobile } from "../Response";

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: red;
  display: flex;
  justify-content: center;
  align-items: center;
  background: linear-gradient(
      rgba(255, 255, 255, 0.3),
      rgba(255, 255, 255, 0.3)
    ),
    url("https://wallpapercave.com/wp/wp5843017.jpg") center;

    background-repeat: no-repeat;
    background-size: 100%;
`;

const Wrapper = styled.div`
  width: 25%;
  padding: 25px;
  background-color: white;
  ${mobile({ width: "75%" })};
`;

const Title = styled.h1`
  font-size: 26px;
  font-weight: 400;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  flex: 1;
  min-width: 40%;
  margin: 20px 10px 0px 0px;
  padding: 10px;

  &:focus {
    outline: none;
  }
`;

const Button = styled.button`
  width: 40%;
  padding: 15px 20px;
  border: none;
  background-color: teal;
  color: white;
  cursor: pointer;
  margin: 15px 0;
`;

const Link = styled.a`
  font-size: 12px;
  text-decoration: underline;
  margin-top: 10px;
  cursor: pointer;
`;

const Login = () => {
  return (
    <Container>
      <Wrapper>
        <Title>LOGIN</Title>
        <Form>
          <Input placeholder="username" />
          <Input placeholder="password" />
          <Button>LOGIN</Button>
          <Link>FORGOT PASSWORD?</Link>
          <Link>CREATE A NEW ACCOUNT</Link>
        </Form>
      </Wrapper>
    </Container>
  );
};

export default Login;
