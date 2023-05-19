import cards from "./Decks";
import styled from "styled-components";
import Card from "./Card";

const deck = cards;



export default function FlashCards({remembered,setRemembered,name, index, question, answer}) { 
   
    return (
    <Cards>
        {deck.map((card, index) => { return (<Card key={index} 
        answer={card.answer}
        question={card.question} 
        index={index + 1} 
        remembered={remembered}
        setRemembered={setRemembered}
        /> )
    })} 
    </Cards>)
}

const Cards = styled.div`
display: flex;
flex-direction: column;
align-items: center;
`
