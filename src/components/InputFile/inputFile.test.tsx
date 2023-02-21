import { fireEvent, screen, waitFor } from '@testing-library/react'
import { InputFile } from '.'
import { renderTheme } from '../../utils/renderTheme'

describe("InputFile", () => {
    let file: object

    beforeEach(() => {
        file = new File(["foo"], "chucknorris.png", { type: "image/png" });
    })

    it("should render input element of type file", async () => {

        renderTheme(<InputFile name='test' imagePreview={false} />)

        const uploader = screen.getByTestId(/test/i)

        await waitFor(() => {
            fireEvent.change(uploader, {
                target: { files: [file] }
            })
        })

        const image = document.getElementById("test");
        /* @ts-ignore */
        expect(image?.files[0].name).toBe("chucknorris.png");
        /* @ts-ignore */
        expect(image?.files.length).toBe(1);






        //expect(screen.getByPlaceholderText(/test/i))
    })
})