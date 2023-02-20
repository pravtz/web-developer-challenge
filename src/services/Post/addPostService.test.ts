import {addPostService} from "./addPostService"

const postsMock = [
    {
        id: "6bac276b21c1a",
        text: "menssage_01",
        figure: "",
        author: "anyware"
    }
]

describe("AddPostService",() => {
    it("should add item post", () => {

        const result = addPostService(postsMock, {
            text: "menssage_02",
            figure: {},
            author: "anyware"
        })
        expect(result.length).toEqual(2)
        
    })
})