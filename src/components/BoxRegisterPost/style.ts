import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;

`
export const WrapperImageAndTrash = styled.div``
export const Image = styled.div`
    width: 88px;
    height: 88px;
    border-radius: var(--borderRadiusPhoto);
    border: 1px solid ${props => props.theme.colors.borderImage};
    object-fit: contain;

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    gap: var(--spacing1)

`
const input = styled.input`
    width: 100%;
    padding: 12px 16px;
    border-radius: var(--borderRadiusInput);
    background-color: ${props => props.theme.colors.bgInput};
    border: none;
`


export const Input = styled(input)``
export const Textarea = styled(input)`
    min-height: 80px;
`

export const WrapperButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: var(--spacing3);
`
