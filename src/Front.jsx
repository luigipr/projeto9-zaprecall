import logo from './assets/logo.png'
import FlashCards from './Flashcards'
import Footer from './Footer'
import styled from 'styled-components'

export default function Front() {

    return (
        <Page>
            <Header>
                <img  src={logo} />
                <p>ZapRecall</p>
            </Header>
            <FlashCards />
            <Footer />
        </Page>
    )

}


const Page = styled.div`
box-sizing: border-box;
width: 375px;
height: 100vh;
background: #FB6B6B;
`

const Header = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    
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