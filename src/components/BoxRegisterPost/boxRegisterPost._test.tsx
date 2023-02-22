import { fireEvent, screen, waitFor } from '@testing-library/react'
import { renderTheme } from '../../utils/renderTheme'
import { BoxRegisterPost } from '.'


describe("BoxRegisterPost", () => {

    it("should render component", async () => {


        let file = new File(["foo"], "foo.png", { type: "image/png" });

        renderTheme(<BoxRegisterPost />)

        const text = screen.getByPlaceholderText(/mensagem/i)
        const figure = screen.getByTestId('figure')
        const author = screen.getByPlaceholderText(/digite seu nome/i)
        const buttonSubmit = screen.getByRole('button', { name: /publicar/i })

        await waitFor(() => {
            fireEvent.change(figure, {
                target: { files: [file] }
            })
        })

        fireEvent.input(text, {
            target: {
                value: 'teste'
            }
        })
        fireEvent.input(author, {
            target: {
                value: 'teste teste teste'
            }
        })

        fireEvent.submit(buttonSubmit)

        expect(text).toHaveValue("teste")
        expect(author).toHaveValue("teste teste teste")

    })
})