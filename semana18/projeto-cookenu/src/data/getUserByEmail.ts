import { connection } from "../index";

export async function getUserByEmail (email:string) {

    const result = await connection
    .select('*')
    .from('UserCookenu')
    .where({email});

    return result[0];
}
