import styled from 'styled-components'

export const WrapperHeader = styled.div`
    width: 100%;
    height: 93px;
    position: fixed;
    z-index: 10;

    display: flex;
    justify-content: center;
    align-items: center;

    border-bottom: 1px solid ${(props) => props.theme.colors.borderHeader};

    background-color: ${(props) => props.theme.colors.bgBoxHeader};
`

export const Brand = styled.div`
    width: 103px;
    height: 45px;
`