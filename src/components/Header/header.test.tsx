import { screen } from '@testing-library/react'
import { renderTheme } from '../../utils/renderTheme'
import { Header } from "."

describe("Header", () => {
    it("should render the logo", () => {
        renderTheme(<Header />)
        const imgTesting = screen.getByAltText(/logo/i)
        expect(imgTesting).toHaveAttribute('src', "/src/assets/bx-logo.png")
    })
})