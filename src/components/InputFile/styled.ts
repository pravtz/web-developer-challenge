import styled from "styled-components";

export const Wrapper = styled.div``
   
    
type LabelFileProps = {
    errorLabel?: boolean
}
export const LabelFile = styled.label<LabelFileProps>`
    width: 88px;
    height: 88px;
    border: 1px solid ${(props) => props.errorLabel ? "red" : props.theme.colors.borderImage};
  
    border-radius: var(--borderRadiusPhoto);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: ${props => props.errorLabel ? "0" : "var(--spacing1)"};
    
  


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