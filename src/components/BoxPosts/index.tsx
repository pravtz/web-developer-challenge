import { Box } from "../Box"
import { Article, IconClose, Wrapper, Image, Text, Author } from "./syled"
import Close from '../../assets/delete.svg'
import FigureImage from '../../assets/image.svg'
import { ButtonMain } from "../Button"

type BoxPostProps = {
    id: string
    text: string;
    figure?: string;
    author: string;
    removePost: Function

}

export const BoxPost = ({ id, text, figure, author, removePost }: BoxPostProps) => {
    return (
        <Box>
            <IconClose>
                <ButtonMain onClick={() => removePost(id)}>
                    <img src={Close} alt="figura de um circulo com um xis no meio" />
                </ButtonMain>
            </IconClose>
            <Wrapper>
                <Image>
                    <img
                        src={!!figure ? figure : FigureImage}
                        alt={!!figure ? "figura do poste" : "figura de uma imagem"} />
                </Image>
                <Article>
                    <Text>
                        {text}
                    </Text>
                    <Author>
                        <span>Enviado por</span>
                        <p>{author}</p>
                    </Author>
                </Article>
            </Wrapper>

        </Box>
    )
}