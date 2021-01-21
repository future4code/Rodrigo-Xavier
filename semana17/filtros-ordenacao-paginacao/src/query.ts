import { connection } from "./index"

export async function selectUsersByName(userName: string):Promise<any> {
    const result = await connection.raw(`
         SELECT id, name, email, type
         FROM aula48_exercicio
         WHERE name = "${userName}"
    `)
   
    return result[0]
 }

 
export async function selectUsersBytype(type: string):Promise<any> {
    const result = await connection.raw(`
         SELECT id, name, email, type
         FROM aula48_exercicio
         WHERE name = "${type}"
    `)
   
    return result[0]
 }
    