import { render, screen } from '@testing-library/react'
import { ButtonMain } from '.'

describe('#ButtonMain', () => {
    it("should render button", () => {
        render(<ButtonMain>Teste Button</ButtonMain>)

        const button = screen.getByText("Teste Button")

        expect(button).toBeInTheDocument()
    })
})