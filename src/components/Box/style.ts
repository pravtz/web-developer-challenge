import styled from "styled-components";

export const WrapperBox = styled.div`
    padding: var(--spacing3);
    background-color: ${(props) => props.theme.colors.bgBox};

    border: 1px solid ${(props) => props.theme.colors.borderBox};
`