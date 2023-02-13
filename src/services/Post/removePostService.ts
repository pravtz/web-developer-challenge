import { PostTypeList } from "./postType"

export const removePostService = (posts: PostTypeList[] ,id: string): PostTypeList[] | [] => {
    const newArr = posts.filter((item) => item.id != id)

    return [...newArr]
  }