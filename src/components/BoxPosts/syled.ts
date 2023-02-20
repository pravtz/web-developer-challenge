import styled from "styled-components";

export const Wrapper = styled.section`
padding-top: 32px;
display: flex;
flex-direction: row;
align-items: flex-start;
gap: var(--spacing4);



`
export const IconClose = styled.div`
    position: absolute;
    right: 12px;
    top: 12px;
    width: 20px;
    height: 20px;
`


export const Image = styled.div`
    min-width: 88px;
    min-height: 88px;
    border-radius: var(--borderRadiusPhoto);
    border: 1px solid ${props => props.theme.colors.borderImage};
    object-fit: contain;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: var(--spacing1);

    img{
        width: 88px;
        height: 88px;
    }

`
export const ImageContent = styled.img`
    object-fit: cover;
    width: 99%;
    border-radius: var(--borderRadiusPhoto);
   
`
export const Article = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: var(--spacing2);
   
`

export const Text = styled.h2`
    line-height: 20px;
    font-size: 16px;
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    color: ${props => props.theme.colors.textFeed};

`
export const Author = styled.div`
    
    display: flex;
    flex-direction: column;


    span{
        font-weight: 500;
        color: #5f5f5f;
        font-size: var(--fontSize-xs);
    }
    p{
        font-size: var(--fontSize-sm);
        color: #7a7a7a;
    }
`