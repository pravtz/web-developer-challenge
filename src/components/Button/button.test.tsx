import { render, screen } from '@testing-library/react'
import { ButtonMain } from '.'

describe('#ButtonMain', () => {
    it("should render button", () => {
        render(<ButtonMain>Teste Button</ButtonMain>)

        const button = screen.getByText("Teste Button")

        expect(button).toBeInTheDocument()
    })
    it("should render with variant link", () => {
        render(<ButtonMain variant="link" >any</ButtonMain>)

        /* @ts-ignore */
        const buttonMain = ButtonMain('any').type.styledComponentId
        const themeButton = document.getElementsByClassName(buttonMain)
        const style = window.getComputedStyle(themeButton[0])

        expect(style.backgroundColor).toBe("transparent")



    })
    it("should render with variant solid", () => {
        render(<ButtonMain variant="solid" >any</ButtonMain>)

        /* @ts-ignore */
        const buttonMain = ButtonMain('any').type.styledComponentId
        const themeButton = document.getElementsByClassName(buttonMain)
        const style = window.getComputedStyle(themeButton[0])

        expect(style.backgroundColor).toBe("rgb(113, 187, 0)")



    })
})

