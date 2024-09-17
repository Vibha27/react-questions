import styled from 'styled-components';

const SearchContainer = styled.div`
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
`;

const SearchArea = styled.div`
    display: flex;
    flex-direction: column;
    padding: 8px 5px;
    flex-basis: 70%;
`;

const ListContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px 0px;
    background-color: lightgray;
`;

const ListItem = styled.div`
    padding: 5px 8px;   
`;

export {
    SearchContainer,
    SearchArea,
    ListContainer,
    ListItem
}