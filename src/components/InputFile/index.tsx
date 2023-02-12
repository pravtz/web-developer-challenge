import { LabelFile, Wrapper, InputF, ImageLabel } from "./styled"
import ImageDefault from '../../assets/image.svg'
import { forwardRef } from "react";


type InputFileProps = {
    onChange: any
    imagePreview: any
    name: string

}



const InputBaseFile = ({ name, imagePreview, ...res }: InputFileProps, ref: any) => {

    return (
        <Wrapper>
            <LabelFile htmlFor={name}>
                <ImageLabel isDefaultImage={!imagePreview} src={imagePreview ? imagePreview : ImageDefault} alt="" />
            </LabelFile>
            <InputF

                type="file"
                name={name}
                id={name}
                ref={ref}
                {...res}
            />
        </Wrapper>
    )
}

export const InputFile = forwardRef(InputBaseFile)