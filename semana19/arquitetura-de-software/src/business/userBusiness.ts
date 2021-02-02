import { hash } from "./services/hashManager";
import { insertUser } from "../data/insertUser";
import { generateToken } from "./services/authenticator";
import { generateId } from "./services/idGenerator";
import { USER_ROLES } from "./entities/user";

export const businessSignup = async (
    name: string,
    email: string,
    password: string,
    role: USER_ROLES
) => {

    if (
        !name ||
        !email ||
        !password ||
        !role
     ) {
        throw new Error('Preencha os campos "name", "email" e "password"')
     }

     const id: string = generateId()

     const cypherPassword = await hash(password);

     await insertUser({
        id,
        name,
        email,
        password: cypherPassword,
        role
     })

     const token: string = generateToken({
        id,
        role: role
     })
     
     return token
}