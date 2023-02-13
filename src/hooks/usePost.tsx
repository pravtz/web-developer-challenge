import { useContext } from "react"
import { PostContext } from "../context/PostContext"

export const usePost = () => {
    const {post, setPost} = useContext(PostContext)
   
    return {post, setPost}
}