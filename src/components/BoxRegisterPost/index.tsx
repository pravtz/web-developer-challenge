import { Box } from "../Box"
import { Wrapper, WrapperButtons, WrapperImageAndTrash, Form, Image, Input, Textarea, WrapperTrash, ErrorImageMenssage, ErrorMensageInput } from "./style"
import { ButtonMain } from "../Button"
import Trash from '../../assets/trash.svg'
import { useEffect, useState } from "react"
import { InputFile } from "../InputFile"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import { usePost } from "../../hooks/usePost"
import { addPostService } from "../../services/Post/addPostService"
import { useAutoAnimate } from '@formkit/auto-animate/react'



const configFile = {
    FILE_SIZE_MAX: 1000000,
    FILE_SUPPORTED_FORMATS: ['image/jpg', 'image/jpeg', 'image/gif', 'image/png']
}

const schema = yup.object({
    author: yup.string().required("O nome é obrigatório"),
    text: yup.string().min(5, "É necessário pelo menos 5 caracteres").required("O texto é obrigatório"),
    figure: yup.mixed()
        .required("você precisa adicionar um arquivo!")
        .test('fileSize', "O arquivo é muito grande",
            (value: any) => {
                return value[0] && value[0].size <= 1000000
            }
        )
        .test('fileType', 'Formato não suportado',
            (value: any) => {
                return value[0] && configFile.FILE_SUPPORTED_FORMATS.includes(value[0].type)
            }
        )
})

export const BoxRegisterPost = () => {
    const [isFigure, setIsFigure] = useState<boolean>(true)
    const [image, setImage] = useState<File | null>()
    const [preview, setPreview] = useState<string | null>()
    const { post, setPost } = usePost()
    const [parent, enableAnimations] = useAutoAnimate(/* optional config */)


    const { register, handleSubmit, reset, setError, clearErrors, watch, formState: { isSubmitting, errors, isValid, isLoading } } = useForm({
        resolver: yupResolver(schema)
    })

    useEffect(() => {
        if (image) {
            const reader = new FileReader()
            reader.onloadend = () => {
                setPreview(reader.result as string)
            }
            reader.readAsDataURL(image)


        } else {
            setPreview(null)
        }
    }, [image])

    const handlerDeleteImage = () => {
        setPreview(null)
        setImage(null)
    }
    const handlerClearAll = () => {
        handlerDeleteImage()
        reset()
        clearErrors()
    }

    const submitPost = (data: any) => {
        const { text, figure, author } = data
        if (isValid && preview && figure) {
            const result = addPostService(post, { text, figure: preview, author })
            setPost(result)
            reset()
            handlerDeleteImage()
        } else {
            setError("figure", { type: "required", message: "A imagem é obrigatória" })
        }

    }

    const handlerOnchange = (event: any) => {
        const file = event.target.files[0];

        if (!configFile.FILE_SUPPORTED_FORMATS.includes(file.type)) {
            setError("figure", { type: "fileType", message: "O tipo de arquivo não é suportado" })
        }

        if (file.size >= configFile.FILE_SIZE_MAX) {
            setError("figure", { type: "fileSize", message: `o tamanho do arquivo deve ser menor que ${configFile.FILE_SIZE_MAX / 1000000}Mb` })
        }
        if (configFile.FILE_SUPPORTED_FORMATS.includes(file.type) && file.size <= configFile.FILE_SIZE_MAX) {
            clearErrors("figure")
            console.log("passei por aqui")
        }

        if (!errors.figure) {
            setImage(file)
        } else {
            handlerDeleteImage()
        }
    }

    return (
        <Box>
            <Wrapper>
                <Form onSubmit={handleSubmit(submitPost)}>
                    <WrapperImageAndTrash>
                        <WrapperTrash isVisibled={isFigure}>
                            <ButtonMain onClick={handlerDeleteImage}>
                                <img src={Trash} alt="figura de uma lixeira" />
                            </ButtonMain>
                        </WrapperTrash>

                        <InputFile imagePreview={preview} error={!!errors.figure?.message} {...register("figure", {
                            onChange: handlerOnchange,

                        })} />

                    </WrapperImageAndTrash>
                    <ErrorImageMenssage>
                        <p ref={parent}>{errors.figure?.message}</p>
                    </ErrorImageMenssage>
                    <div >
                        <Input placeholder="Digite seu nome" aria-invalid={!!errors.author?.message} ariaError={!!errors.author?.message} {...register('author')} />
                        <ErrorMensageInput ref={parent}>{errors.author?.message}</ErrorMensageInput>
                    </div>
                    <div>
                        <Textarea placeholder="Mensagem" aria-invalid={!!errors.text?.message} ariaError={!!errors.text?.message} {...register('text')} />
                        <ErrorMensageInput ref={parent} >{errors.text?.message}</ErrorMensageInput>
                    </div>

                    <WrapperButtons>
                        <ButtonMain type="button" onClick={handlerClearAll} disabled={isSubmitting} isDesabled={isSubmitting} variant="link">Descartar</ButtonMain>
                        <ButtonMain type="submit" disabled={isSubmitting} isDesabled={isSubmitting} variant="solid">Publicar</ButtonMain>
                    </WrapperButtons>
                </Form>
            </Wrapper>
        </Box>

    )
}