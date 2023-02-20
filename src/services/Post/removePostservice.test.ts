import {removePostService} from "./removePostService"

const postsMock = [
    {
        id: "6bac276b21c1a",
        text: "menssage_01",
        figure: "",
        author: "anyware"
    },
    {
        id: "6bac276b21c2a",
        text: "menssage_02",
        figure: "",
        author: "anyware"
    },
]

describe("RemovePostService",() => {
    it("should remove item post", () => {

        const result = removePostService(postsMock, "6bac276b21c2a")
        expect(result.length).toEqual(1)
        
    })
})