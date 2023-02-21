import { fireEvent, screen } from '@testing-library/react'
import { renderTheme } from '../../utils/renderTheme'
import { BoxPost } from "."

const postsMock = {
    id: "6bac276b21c1a",
    text: "menssage_01",
    figure: "",
    author: "anyware"
}

describe("BoxPosts", () => {
    it("should render the component with its props", () => {
        renderTheme(<BoxPost
            id={postsMock.id}
            text={postsMock.text}
            figure={postsMock.figure}
            author={postsMock.author}
        />)

        expect(screen.getByRole('heading', { name: /menssage_01/i })).toBeInTheDocument()
        expect(screen.getByText(/enviado por/i)).toBeInTheDocument()
        expect(screen.getByText(/anyware/i)).toBeInTheDocument()
        expect(screen.getByRole('img', { name: /figura de uma imagem/i })).toBeInTheDocument()
    })
    it("should render the delete button", async () => {
        renderTheme(<BoxPost
            id={postsMock.id}
            text={postsMock.text}
            figure={postsMock.figure}
            author={postsMock.author}
        />)


        const button = screen.getByRole('button', { name: /figura de um circulo com um xis no meio/i })
        expect(button).toBeInTheDocument()



    })
})