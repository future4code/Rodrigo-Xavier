import { connection } from "./index"

export default async function selectUsersByName(userName: string):Promise<any> {
    const result = await connection.raw(`
         SELECT * 
         FROM aula48_exercicio
         WHERE name = "{userName}"
    `)
   
    return result[0]
 }


//  const result = await connection
//        .select("*")
//        .from("aula48_exercicio")
//        .where("name", "LIKE", `%{userName}%`)
    