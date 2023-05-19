import styled from "styled-components";


export default function Footer({remembered}) {

    return (
        <End>
            <p data-test="footer"> {remembered}/8 CONCLUÍDOS</p>
        </End>
    )

}

const End = styled.div`
width: 375px;
height: 70px;
position: fixed;
display: flex;
bottom: 0;
align-items: center;
justify-content: center;
background: #FFFFFF;
box-shadow: 0px -4px 6px rgba(0, 0, 0, 0.05);
p{
    font-family: 'Recursive';
font-style: normal;
font-weight: 400;
font-size: 18px;
line-height: 22px;
color: #333333;
}
`