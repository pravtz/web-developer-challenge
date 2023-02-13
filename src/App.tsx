import { useState } from "react"
import { BoxPost } from "./components/BoxPosts"
import { BoxRegisterPost } from "./components/BoxRegisterPost"
import { LayoutMain } from "./components/LayoutMain"
import { ContentPosts, Wrapper } from "./styles/AppPage"
import {usePost} from "./hooks/usePost"



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

type postType = {
  id: string;
  text: string;
  figure?: string
  author: string
}





function App() {
  const {post, setPost} = usePost()


  const removePost = (id: string): void => {
    setPost(post?.filter((item) => item.id != id))
  }


  return (

    <LayoutMain>
      <Wrapper>
        <BoxRegisterPost/>
        <h2>Feed</h2>
        <ContentPosts>
          {post?.map((post) => {
            return (

              <BoxPost
                key={post.id}
                id={post.id}
                text={post.text}
                figure={post.figure}
                author={post.author}
                removePost={removePost}


              />
            )
          })}
        </ContentPosts>
      </Wrapper>

    </LayoutMain>


  )
}

export default App
