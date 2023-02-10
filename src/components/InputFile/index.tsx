import { LabelFile, Wrapper, InputF } from "./styled"
import ImageDefault from '../../assets/image.svg'

export const InputFile = () => {
    return (
        <Wrapper>
            <LabelFile htmlFor="inputFile">
                <img src={ImageDefault} alt="" />
            </LabelFile>
            <InputF 
                type="file"
                name="inputFile"
                id="inputFile"
            />
        </Wrapper>
    )
}