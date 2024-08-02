import styled from "styled-components";

const CirclesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`;

const CircleCSS = styled.div`
    width: ${props => props.num ? props.num*100 : 100 }px;
    height: ${props => props.num ? props.num*100 : 100 }px;
    border-radius: 100%;
    border: 1px solid black;
    display: flex;
    justify-content: center;
    align-items: center;
`
export {
    CirclesContainer,
    CircleCSS
}