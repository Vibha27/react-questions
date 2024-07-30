import styled from 'styled-components';

const TrafficCircle = styled.div`
    border-radius: 100%;
    width: 200px;
    height: 200px;
    margin-bottom: 5px;
    background-color: ${(props) => props.color ? props.color : "grey"}
`;

export {
    TrafficCircle
}