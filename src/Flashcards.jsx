import cards from "./Decks";
import styled from "styled-components";
import Card from "./Card";
import { useState } from "react";

const deck = cards;

export default function FlashCards({remembered,setRemembered,name, index, question, answer}) { 
   
    const [open, setOpen] = useState(false)

    return (
    <Cards>
        {deck.map((card, index) => { return (<Card data-test='flashcard' key={index} 
        answer={card.answer}
        question={card.question} 
        index={index + 1} 
        remembered={remembered}
        setRemembered={setRemembered}
        open={open}
        setOpen={setOpen}
        /> )
    })} 
    </Cards>)
}

const Cards = styled.div`
display: flex;
flex-direction: column;
align-items: center;
height: auto;
padding-bottom: 70px;
margin-bottom: ${props => props.open === true ? '180px' : 0};
`
