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
  


`
type ImageLabelProps = {
    isDefaultImage?: Boolean
}
export const ImageLabel = styled.img<ImageLabelProps>`
    object-fit: cover;
    width: ${props => props.isDefaultImage ? "24px" : "99%"};
    height: ${props => props.isDefaultImage ? "24px" : "99%"};;
    border-radius: var(--borderRadiusPhoto);
        
        
`
export const InputF = styled.input`
    display: none;
`