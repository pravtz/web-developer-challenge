import { Box } from "../Box"
import { Article, IconClose, Wrapper, Image, Text, Author } from "./syled"
import Close from '../../assets/delete.svg'
import FigureImage from '../../assets/image.svg'
import { ButtonMain } from "../Button"

type BoxPostProps = {
    text: string;
    figure?: string;
    author: string;
}

export const BoxPost = ({ text, figure, author }: BoxPostProps) => {
    return (
        <Box>
            <IconClose>
                <ButtonMain>
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