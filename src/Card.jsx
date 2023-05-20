import styled from "styled-components";
import rigthIcon from "./assets/icone_certo.png";
import almostIcon from "./assets/icone_quase.png";
import setaPlay from "./assets/seta_play.png"
import vector from "./assets/Vector.png"
import { useState } from "react";
import noIcon from "./assets/icone_erro.png";


export default function Card({remembered,setRemembered,name, index, question, answer, open, setOpen}) {

    const [datatest, setDatatest] = useState('')
    const [currentState, setCurrentState] = useState('state1')
    const [icon, setIcon] = useState('')

    function show() {
        setCurrentState('state2')
        console.log(open)
        setOpen(true)
        console.log(open)
    }
    function currentQuestion(){
        setCurrentState('state3')
        console.log(open)
    }
    function no() {
        setCurrentState('state4')
        console.log(remembered)
        setIcon(noIcon)
        setOpen(false)
        setDatatest('no-icon')
    }
    function almost() {
        setIcon(almostIcon)
        setCurrentState('state4')
        let current = remembered
        console.log(current)
        setRemembered(current+1);
        setOpen(false);
        setDatatest('partial-icon')
    }
    function zap() {
        setIcon(rigthIcon)
        console.log(remembered)
        setCurrentState('state4')
        setRemembered(remembered +1);
        setOpen(false)
        setDatatest('zap-icon')
        //Button += 
    }

    return (
        <div data-test='flashcard'>

            {currentState === 'state1' && <ClosedCard1>
                <span data-test="flashcard-text">Pergunta {index}</span> 
                <img src={setaPlay} data-test="play-btn" onClick={show} alt="setaplay" />
            </ClosedCard1>}
    
            {currentState === 'state2' && <OpenCard>
                <span data-test="flashcard-text">{question}</span> 
                <img src={vector} data-test="turn-btn" onClick={currentQuestion} alt='vector'/>
            </OpenCard>}
    
            {currentState === 'state3' && <OpenCard>
                <p data-test="flashcard-text">{answer}</p>
                <Buttons>
                    <Button selected='red'  data-test="no-btn" onClick={no}>Não lembro!</Button>
                    <Button selected='orange' data-test="partial-btn" onClick={almost}>Quase não lembrei</Button>
                    <Button selected='green' data-test="zap-btn" onClick={zap}>Zap!</Button>
                </Buttons>            
            </OpenCard>}
    
            {currentState === 'state4' && <ClosedCard2 color={`${icon === rigthIcon ? 'green' : (icon === almostIcon ? 'orange' : 'red' )}`}>
                <span data-test="flashcard-text">Pergunta {index}</span> 
                <img src={icon} data-test={datatest} alt="setaplay" />
            </ClosedCard2>}

        </div>            

        )
}


const Buttons = styled.div`
    display: flex;
    padding-top: 30px;
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

`
const ClosedCard2 = styled.div`
width: 300px;
height: 65px;
display:flex;
justify-content: space-between;
padding: 0 10px;
margin: 15px 0;
align-items: center;
display:flex;
background: #FFFFFF;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 700;
font-size: 16px;
line-height: 19px;
text-decoration-line: line-through;
color: ${props => props.color}
`


const OpenCard = styled.div`
width: 300px;
margin: 15px 0;
padding-top: 10px;
padding-left: 10px;
height: 131px;
display: flex;
flex-direction:column;
position: relative;
background: #FFFFD5;
box-shadow: 0px 4px 5px rgba(0, 0, 0, 0.15);
border-radius: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
img{
    position: absolute;
    width: 30px;
    height: 20px;
    right: 5px;
    bottom:5px;
}

`
const Button = styled.button`
width: 85.17px;
height: 37.17px;
border-radius: 5px;
margin: 5px;
font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;
color: #FFFFFF;
background-color: ${props => props.selected}
`