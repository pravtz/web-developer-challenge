import styled from 'styled-components'
import media from 'styled-media-query'

export const WrapperLayoutMain = styled.div`
    width: 100vw;
    height: 100vh;
    overflow-y: scroll;
    background-color: ${(props) => props.theme.colors.bgMain};
`

export const Content = styled.div`
    padding-top: 134px;
    width: min(100%, 516px);
    margin: auto;
    ${media.greaterThan('medium')`
        width: 516px;
        margin: auto;
    `}

    /* ${media.greaterThan('huge')`
        width: 768px;
        margiauton
    `} */
`