import cards from "./Decks";
import styled from "styled-components";

const deck = cards;


function Card(props) {
    console.log(props)
    return (
    <div>
        <ClosedCard1>
            <span>Pergunta {props.index}</span> 
            <ion-icon name='play-outline' onClick={show} ></ion-icon>
        </ClosedCard1>
        <OpenCard>
            <span>{props.question}</span> 
            <img src="./assets/vector.png" onClick={question}/>
        </OpenCard>
        <OpenCard>
            {props.answer}
            <div className="buttons">
                <Buttons onClick={no}>Não lembro!</Buttons>
                <Buttons onClick={almost}>Quase não lembrei</Buttons>
                <Buttons onClick={zap}>Zap!</Buttons>
            </div>            
        </OpenCard>
        <ClosedCard2>
            <span>Pergunta {props.index}</span> 
            <ion-icon name='play-outline'></ion-icon>
        </ClosedCard2>
    </div>
    )
}
function show() {}
function question(){}
function no() {}
function almost() {}
function zap() {}


export default function FlashCards() {

//"play-outline"

    return (
    <Cards>
        {deck.map((card, index) => { return (<Card key={index} 
        answer={card.answer}
        question={card.question} 
        index={index + 1} 
        icon='play-outline'
        /> )
    })} 
    </Cards>)
}

const Cards = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`

const ClosedCard1 = styled.div`
width: 300px;
height: 65px;
display:flex;
justify-content: space-between;
padding: 0 10px;
margin: 15px 0;
align-items: center;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
color: #333333;
//display: ${ (props) => show ? 'inline' : 'none' }
`
const ClosedCard2 = styled.div`
width: 300px;
height: 65px;
display:flex;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: none
`



const OpenCard = styled.div`
width: 300px;
height: 131px;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
display: none
`
const Buttons = styled.button`
width: 85.17px;
height: 37.17px;
border-radius: 5px;


`