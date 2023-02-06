import { Box } from "../Box"
import { Wrapper, WrapperButtons, WrapperImageAndTrash, Form, Image, Input, Textarea } from "./style"
import ImageDefault from '../../assets/image.svg'
import { ButtonMain } from "../Button"


export const BoxRegisterPost = () => {
    return (
        <Wrapper>
            <WrapperImageAndTrash>
                <Image>
                    <img src={ImageDefault} alt="" />
                </Image>
            </WrapperImageAndTrash>
            <Form >
                <Input placeholder="Digite seu nome" />
                <Textarea placeholder="Mensagem" />

                <WrapperButtons>
                    <ButtonMain>Descartar</ButtonMain>
                    <ButtonMain>Publicar</ButtonMain>
                </WrapperButtons>
            </Form>
        </Wrapper>

    )
}