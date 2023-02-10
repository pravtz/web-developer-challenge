import styled from "styled-components";

export const Wrapper = styled.div`
   
    
`
export const LabelFile = styled.label`
     width: 88px;
    height: 88px;
    border: 1px solid ${(props) => props.theme.colors.borderImage};
    border-radius: var(--borderRadiusPhoto);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing1);

    img{
        width: 24px;
        height: 24px;
    }
`
export const InputF = styled.input`
    display: none;
`