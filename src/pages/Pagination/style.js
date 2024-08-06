import styled from 'styled-components';

const PageContainer = styled.div`
    display: flex;
    flex-direction: row;
    padding: 2px;
    // background-color: lightgray;
`;

const SinglePage = styled.div`
    padding: 5px;
    margin-left: 8px;
    color: black;

    &:hover {
        cursor: ${(props) => props.disabled ? "not-allowed" : "pointer"};
    }
`;

export {
    PageContainer,
    SinglePage
}