import { Box } from "../Box"
import { Wrapper, WrapperButtons, WrapperImageAndTrash, Form, Image, Input, Textarea, WrapperTrash } from "./style"
import ImageDefault from '../../assets/image.svg'
import { ButtonMain } from "../Button"
import Trash from '../../assets/trash.svg'
import { useState } from "react"


export const BoxRegisterPost = () => {
    const [isFigure, setIsFigure] = useState<boolean>(true)

    const handlerDeleteImage = () => {
        return (
            console.log('deleting..')
        )
    }


    return (
        <Box>
            <Wrapper>
                <WrapperImageAndTrash>
                    <WrapperTrash isVisibled={isFigure}>
                        <ButtonMain onClick={handlerDeleteImage}>
                            <img src={Trash} alt="figura de uma lixeira" />
                        </ButtonMain>
                    </WrapperTrash>

                    <Image>
                        <img src={ImageDefault} alt="figura de uma imagem" />
                    </Image>
                </WrapperImageAndTrash>
                <Form >
                    <Input placeholder="Digite seu nome" />
                    <Textarea placeholder="Mensagem" />

                    <WrapperButtons>
                        <ButtonMain disabled isDesabled variant="link">Descartar</ButtonMain>
                        <ButtonMain disabled isDesabled variant="solid">Publicar</ButtonMain>
                    </WrapperButtons>
                </Form>
            </Wrapper>
        </Box>

    )
}