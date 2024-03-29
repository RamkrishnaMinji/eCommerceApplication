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
    width: 40%;

`

const Form = styled.form`
    display: flex;
    flex-wrap: wrap;

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

const Agreement = styled.span`
    font-size: 12px;
    margin: 20px 0px;
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


const Register = () => {
  return (
    <Container>
        <Wrapper>
            <Title>CREATE AN ACCOUNT</Title>
            <Form>
                <Input placeholder="first name"/>
                <Input placeholder="last name"/>
                <Input placeholder="username"/>
                <Input placeholder="email"/>
                <Input placeholder="password"/>
                <Input placeholder="confirm password"/>
                <Agreement>
                    By creating an account, I consent to the processing of my personal data in accourdance with the <b> PRIVACY POLICY </b>
                </Agreement>
                <Button>CREATE</Button>
            </Form>
        </Wrapper>
    </Container>
  )
}

export default Register