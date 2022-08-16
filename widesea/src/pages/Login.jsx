import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: url("https://wallpaperaccess.com/full/4893706.jpg") center;
    display: flex;
    align-items: center;
    justify-content: center;
    background-size: cover;

`

const Wrapper = styled.div`
    padding: 20px;
    background-color: white;
    width: 30%;

`

const Form = styled.form`
    display: flex;
    flex-direction: column;

`

const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
`

const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 10px;
`

const Button = styled.button`
    width: 40%;
    border: node;
    margin: 20px 0px 20px 0px;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer; 
` 

const Link = styled.a`
    margin: 5px 0px;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`


const Login = () => {
  return (
    <Container>
        <Wrapper>
            <Title>SIGN IN</Title>
            <Form>
                <Input placeholder="username"/>
                <Input placeholder="password"/>
                <Button>LOG IN</Button>
                <Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
                <Link>CREATE A NEW ACCOUNT</Link>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Login