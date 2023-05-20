import { useState } from 'react'
import logo from './assets/logo.png'
import FlashCards from './Flashcards'
import Footer from './Footer'
import styled from 'styled-components'
import Decks from './Decks'

export default function Front() {
    const [remembered, setRemembered] = useState(0)
    

    return (
        <Page>
            <Header>
                <img  src={logo} />
                <p>ZapRecall</p>
            </Header>
            <FlashCards remembered={remembered} setRemembered={setRemembered}Decks={Decks}/>
            <Footer remembered={remembered}/>
        </Page>
    )

}


const Page = styled.div`
box-sizing: border-box;
width: 375px;
height: 100%;
background: #FB6B6B;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 30px;
    
    p {
        width: 203px;
        padding-left: 10px;
        height: 44px;
        font-family: 'Righteous';
        font-style: normal;
        font-weight: 400;
        font-size: 36px;
        line-height: 45px;
        display: flex;
        align-items: center;
        text-align: center;
        letter-spacing: -0.012em;
        color: #FFFFFF;
    }

    img{
        width: 52px;
        height: 60px;
    }
`