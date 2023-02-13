import { generateId } from "../../utils/generateId";
import { PostTypeCreate, PostTypeList} from './postType'

export const addPostService = (posts: PostTypeList[],{ text, figure, author }:PostTypeCreate): PostTypeList[] => {
    const id= generateId()
    return [...posts, { id, text, figure, author }]

}