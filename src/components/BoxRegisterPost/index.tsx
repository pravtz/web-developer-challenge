import { Box } from "../Box"
import { Wrapper, WrapperButtons, WrapperImageAndTrash, Form, Image, Input, Textarea, WrapperTrash } from "./style"
import ImageDefault from '../../assets/image.svg'
import { ButtonMain } from "../Button"
import Trash from '../../assets/trash.svg'
import { useEffect, useState } from "react"
import { InputFile } from "../InputFile"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import example from '../../assets/example.jpeg'
import example2 from '../../assets/exemple2.jpeg'


const configFile = {
    FILE_SIZE_MAX: "200000",
    FILE_SUPPORTED_FORMATS: ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
}

const schema = yup.object({
    author: yup.string().min(2).required(),
    text: yup.string().min(10).required(),
    figure: yup.mixed()
        .required("você precisa adicionar um arquivo!")
        .test('fileSize', "O arquivo é muito grande",
            (value: any) => {
                return value && value[0].size <= 1000000
            }
        )
        .test('fileType', 'Formato não suportado',
            (value: any) => {
                return value && configFile.FILE_SUPPORTED_FORMATS.includes(value[0].type)
            }
        )
})

type createPostType = {
    text: string;
    figure: object
    author: string
}


export const BoxRegisterPost = (addPost: any) => {
    const [isFigure, setIsFigure] = useState<boolean>(true)
    const [image, setImage] = useState<File | null>()
    const [preview, setPreview] = useState<string | null>()


    const { register, handleSubmit, reset, watch, formState: { isSubmitting, errors } } = useForm({
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (image) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result as string)
            }
            reader.readAsDataURL(image)

            console.log("reader ", reader)
        } else {
            setPreview(null)
        }
    }, [image])







    const handlerDeleteImage = () => {
        setPreview(null)
        setImage(null)
    }


    const submitPost = (data: any) => {
        const { text, figure, author } = data

        console.log(text, figure, author)
    }
    const handlerOnchange = (event: any) => {
        const file = event.target.files[0];
        setImage(file)



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

                    <InputFile imagePreview={preview}  {...register("figure", {
                        onChange: handlerOnchange
                    })} />

                </WrapperImageAndTrash>
                <Form onSubmit={handleSubmit(submitPost)} >
                    <Input placeholder="Digite seu nome" {...register('author')} />
                    <Textarea placeholder="Mensagem" {...register('text')} />

                    <WrapperButtons>
                        <ButtonMain disabled isDesabled variant="link">Descartar</ButtonMain>
                        <ButtonMain type="submit" disabled={isSubmitting} isDesabled={isSubmitting} variant="solid">Publicar</ButtonMain>
                    </WrapperButtons>
                </Form>
            </Wrapper>
        </Box>

    )
}