import { insertPost, selectPostById } from "../data/postDatabase"
import { Post, POST_TYPES } from "./entities/post"
import { AuthenticationData } from "./entities/user"
import { getTokenData } from "./services/authenticator"
import { generateId } from "./services/igGenerator"

export const businessCreatePost = async (
    photo: string,
    description: string,
    type: POST_TYPES,
    created_at: Date,
    author_id: string
) => {
    
 
       const tokenData: AuthenticationData = getTokenData(token)
 
       const id: string = generateId()
 
       await insertPost({
             id,
             photo,
             description,
             type,
             created_at,
             author_id: tokenData.id
          })
}

export const businessGetPostById = async (
    id: string
) => {
    const result = await selectPostById(id)
 
       if (!result) {
          throw new Error('Post not found')
       }
 
       const post: Post = {
          id: result.id,
          photo: result.photo,
          description: result.description,
          type: result.type,
          created_at: result.created_at,
          author_id: result.author_id
       }
       return post
}