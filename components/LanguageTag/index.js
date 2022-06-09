import styled from 'styled-components';

const LanguageTag = styled.div`
    display: block;
    width: 80px;
    text-align: center;
    background-color: ${props => props.languageColor};
    color: white;
    padding: 4px;
    font-size: 12px;
    border-radius: 5px;
    margin: 4px 0;
`;

export default LanguageTag;