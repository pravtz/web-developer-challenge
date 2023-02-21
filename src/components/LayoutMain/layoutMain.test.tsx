import { screen } from '@testing-library/react'
import { LayoutMain } from '.'
import { renderTheme } from '../../utils/renderTheme'

describe("LayoutMain", () => {
    it("should render the children element", () => {
        renderTheme(<LayoutMain><p>Anyware</p></LayoutMain>)

        // screen.logTestingPlaygroundURL()

        const elemChildren = screen.getByText(/anyware/i)
        const headerImageOfTheLayout = screen.getByRole('img', {
            name: /logo/i
        })

        expect(elemChildren).toBeInTheDocument()
        expect(headerImageOfTheLayout).toBeInTheDocument()
    })
})