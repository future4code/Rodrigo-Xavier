import { connection } from "..";
import { User } from "../types/User";



  export default async function selectUserByToken(id: string): Promise<User> {

    try {
      const result = await connection("UserCookenu")
      .select("*")
      .where({ id });
      
      return {
        id: result[0].id,
        name: result[0].name,
        email: result[0].email
      };
    
   } catch (error) {
      throw new Error(error.slqMessage || error.message);
    }}
