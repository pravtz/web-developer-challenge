import { useState } from "react"
import { BoxPost } from "./components/BoxPosts"
import { BoxRegisterPost } from "./components/BoxRegisterPost"
import { LayoutMain } from "./components/LayoutMain"
import { ContentPosts, Wrapper } from "./styles/AppPage"
import {usePost} from "./hooks/usePost"
import { useAutoAnimate } from '@formkit/auto-animate/react'

function App() {
  const {post, setPost} = usePost()
  const [parent, enableAnimations] = useAutoAnimate(/* optional config */)

  const removePost = (id: string): void => {
    setPost(post?.filter((item) => item.id != id))
  }
  return (

    <LayoutMain>
      <Wrapper>
        <BoxRegisterPost/>
        {post?.length !== 0 &&  <h2>Feed</h2>}
        <ContentPosts ref={parent}>
        
            {post?.map((post) => {
              return (
                <BoxPost
                  key={post.id}
                  id={post.id}
                  text={post.text}
                  figure={post.figure}
                  author={post.author}
                />
              )
            })}
       
        </ContentPosts>
      </Wrapper>

    </LayoutMain>


  )
}

export default App
