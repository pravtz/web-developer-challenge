import { createContext, useState } from "react"


const postsSeed = [
    {
      id: "6bac276b21c1c",
      text: "Em tempos de crise, os sábios constroem pontes, enquanto os tolos constroem muros.",
      figure: "",
      author: "Pantera Negra",
    },
    {
      id: "1f0c1974dfd34",
      text: "O medo de perder tira a vontade de ganhar.",
      figure: "",
      author: "Mussum",
    },
    {
      id: "0dacbce5090c6",
      text: "O homem não teria alcançado o possível se, repetidas vezes, não tivesse tentado o impossível.",
      figure: "",
      author: "Max Weber",
    },
]

type postProps = {
    post: typeof postsSeed | undefined
    setPost: any // React.Dispatch<React.SetStateAction<typeof postsSeed>>
}



const DefaultValue = {
    post: postsSeed,
    setPost: () => {}
}


type PostContextProps = {
    children: React.ReactNode
}
export const PostContext = createContext<postProps>(DefaultValue)

const PostContextProvider = ({children}:PostContextProps) => {
const [post, setPost] = useState<typeof postsSeed>(postsSeed)
return (
    <PostContext.Provider
        value={{
            post,
            setPost
        }}
    >
        {children}
    </PostContext.Provider>
)
}

export default PostContextProvider