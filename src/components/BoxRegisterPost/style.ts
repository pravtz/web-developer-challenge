import styled from "styled-components";

export const Wrapper = styled.div`
display: flex;
flex-direction: column;


`
export const WrapperImageAndTrash = styled.div`
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

type WrapperTrashProps = {
    isVisibled: boolean
}
export const WrapperTrash = styled.div<WrapperTrashProps>`
    display: ${(props) => props.isVisibled ? 'block' : 'none'};
    position: absolute;
    right: calc((100% / 2) - 88px);
`
export const Image = styled.div`
    width: 88px;
    height: 88px;
    border-radius: var(--borderRadiusPhoto);
    border: 1px solid ${props => props.theme.colors.borderImage};
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing1);

    img{
        width: 24px;
        height: 24px;
    }

`
export const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: var(--spacing1);
    gap: var(--spacing1)

`
type InputProps = {
    ariaError: boolean
}
export const Input = styled.input<InputProps>`
    width: 100%;
    height: 40px;
    padding: 12px 16px;
    border-radius: var(--borderRadiusInput);
    background-color: ${props => props.theme.colors.bgInput};
    border: none;
    color: white;
    outline: ${props => props.ariaError ? "0.5px solid red" : "none"};
    &:focus{
        border: none;
        outline: ${props => props.ariaError ? "0.5px solid red" :"1px solid rgb(113, 187, 0, 0.5)"};
    }
    &::placeholder{
        color: #9f9f9f;
    }
    &::invalid{
        border: 1px solid red;
    }

`
type TextareaProps = {
    ariaError: boolean
}
export const Textarea = styled.textarea<TextareaProps>`
    min-height: 80px;
    width: 100%;
    height: 40px;
    padding: 12px 16px;
    border-radius: var(--borderRadiusInput);
    background-color: ${props => props.theme.colors.bgInput};
    border: none;
    color: white;
    outline: ${props => props.ariaError ? "0.5px solid red" : "none"};
    resize: none;
    
    &:focus{
        border: none;
        outline: ${props => props.ariaError ? "0.5px solid red" :"1px solid rgb(113, 187, 0, 0.5)"} ;
    }

    &::placeholder{
        color: #9f9f9f;
    }
    &::invalid{
        border: 1px solid red;
    }
`

export const WrapperButtons = styled.div`
    display: flex;
    justify-content: flex-end;
    gap: var(--spacing3);
    margin-top: var(--spacing3);
`


export const ErrorMensageInput = styled.p` 
    color: var(--danger);
    font-size: var(--fontSize-xs);
    margin-left: 14px;
    
    
`
