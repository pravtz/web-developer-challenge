import styled, { css } from 'styled-components'

type WrapperButtonProps = {
    variant?: 'solid' | 'link' 
    isDesabled?: boolean
}



export const WrapperButton = styled.button<WrapperButtonProps>`
    color: white;
    cursor: pointer;
    background-color: transparent;
    border: none;
    opacity: 0.7;

    &:hover{
        opacity: 1;
    }


    ${({variant, isDesabled}) => 
        variant=="solid" && css `
        background-color: ${isDesabled ? "#777" : "#71bb00;"} ;
        padding: 12px 24px;
        border-radius: 8px;
        font-size:14px;
        border: none;
        opacity: 0.9;
        cursor: ${isDesabled ? "not-allowed;" : "pointer"};

        &:hover{
            opacity: 1;
        }

    `}

    ${({variant, isDesabled}) => 
        variant=="link" && css `
        background-color: transparent;
        border: none;
        font-size:14px;
        color: #5f5f5f;
        text-decoration: underline;
        opacity: 1;
        cursor: ${isDesabled ? "not-allowed;" : "pointer"};

        &:hover{
            color: ${isDesabled ? "##5f5f5f":" #6f6f6f"};
            

        }
        
        
    `}
    


`