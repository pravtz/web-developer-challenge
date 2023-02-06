import { render, screen } from '@testing-library/react'
import { Box } from '.'

describe("#Box", () => {
    it("should render Wrapper Box", () => {
        render(<Box>Anyware</Box>)

        expect(screen.getByText('Anyware')).toBeInTheDocument()
    })
})
