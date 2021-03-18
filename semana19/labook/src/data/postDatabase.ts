import { Post } from "../business/entities/post"
import { connection } from "./connection"


export const insertPost = async (
   post: Post
) => {
   await connection('labook_posts')
      .insert({
         id: post.id,
         photo: post.photo,
         description: post.description,
         type: post.type,
         create_at: post.created_at,
         author_id: post.author_id
      })
}

export const selectPostById = async (
   id: string
): Promise<any> => {
   const result: any = await connection('labook_posts')
        .select("*")
        .where({ id });
      return {
        id: result[0].id,
        photo: result[0].photo,
        description: result[0].description,
        type: result[0].type,
        created_at: result[0].created_at,
        author_id: result[0].author_id,
}