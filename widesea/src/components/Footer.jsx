import { AddIcCall, MailOutline } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
    display: flex;
    height: 20vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #00eeff1c;
`
const Name = styled.h1`
    margin-top: 30px;
    
    flex: 1;
`
const Desc = styled.p`

    font-size: 20px;
    flex: 1;
`
const SocialContainer = styled.div`
    height: 15px;
    flex: 1;
    display: flex;
`
const SocialIcon = styled.div`
    flex: 1;
`
const SocialInfo = styled.div`
    flex: 1;
    padding-left: 12px;
    font-weight: 500;
`

const Footer = () => {
  return (
    <Container>
            <Name>Built by - Ramkrishna Minji</Name>
            <Desc>
                If you have any suggestion, feel free to contact me.
            </Desc>
            <SocialContainer>
                <SocialIcon>
                    <AddIcCall/>
                </SocialIcon>
                <SocialInfo>
                    8910048160
                </SocialInfo>
            </SocialContainer>

            <SocialContainer>
                <SocialIcon>
                    <MailOutline/>
                </SocialIcon>
                <SocialInfo>
                    ramkrishnaminji06@gmail.com
                </SocialInfo>
            </SocialContainer>
    </Container>
  )
}

export default Footer