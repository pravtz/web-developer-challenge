import { screen } from '@testing-library/react'
import { renderTheme } from '../../utils/renderTheme'

import { Box } from '.'

describe("#Box", () => {
    it("should render Wrapper Box", () => {
        renderTheme(<Box>Anyware</Box>)

        expect(screen.getByText('Anyware')).toBeInTheDocument()
    })
    it("Should render colorand border mode dark", () => {
        renderTheme(<Box>Anyware</Box>)
        /* @ts-ignore */
        const BoxThemeDark = Box('Anyware').type.styledComponentId
        const boxTheme = document.getElementsByClassName(BoxThemeDark)
        const style = window.getComputedStyle(boxTheme[0])

        expect(style.backgroundColor).toBe("rgb(49, 49, 49)")
        expect(style.border).toBe("1px solid #3b3b3b")


    })
})
