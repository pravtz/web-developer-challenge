import { Box } from "../Box"
import { Article, IconClose, Wrapper, Image, Text, Author, ImageContent } from "./syled"
import Close from '../../assets/delete.svg'
import FigureImage from '../../assets/image.svg'
import { ButtonMain } from "../Button"
import { usePost } from "../../hooks/usePost"
import {removePostService} from "../../services/Post/removePostService"
import {PostTypeList} from "../../services/Post/postType"

type BoxPostProps = {
    id: string
    text: string;
    figure?: string;
    author: string;
}

export const BoxPost = ({ id, text, figure, author }: BoxPostProps) => {
    const {post, setPost} = usePost()

    const handlerRemovePost = (post: any, id: string) => {
        const remv = removePostService(post, id)
        setPost(remv)
    }

    return (
        

        <Box>
            <IconClose>
                <ButtonMain onClick={() => handlerRemovePost(post, id)}>
                    <img src={Close} alt="figura de um circulo com um xis no meio" />
                </ButtonMain>
            </IconClose>
            <Wrapper>
                <Image>
                    <ImageContent
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