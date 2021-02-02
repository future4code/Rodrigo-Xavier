import { connection } from "../data/connection";
import { user } from "../business/entities/user";

export const insertUser = async(
   user: user
) => {
   await connection.insert({
      id: user.id,
      name: user.name,
      email: user.email,
      password: user.password,
      role: user.role
   }).into('to_do_list_users')
}