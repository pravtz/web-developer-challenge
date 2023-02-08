import styled from "styled-components";


export const WrapperBox = styled.div`
    position: relative;
    padding: 24px;
    background-color: ${(props) => props.theme.colors.bgBox};

    border: 1px solid ${(props) => props.theme.colors.borderBox};
    border-radius: var(--borderRadiusBox);
`