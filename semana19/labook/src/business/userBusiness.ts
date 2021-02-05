import { insertUser, selectUserByEmail } from "../data/userDatabase"
import { User } from "./entities/user"
import { generateToken } from "./services/authenticator"
import { compare, hash } from "./services/hashManager"
import { generateId } from "./services/igGenerator"


export const businessSignup = async(
    name: string,
    email: string,
    password: string
) => {
    let message = "Success!"

    if (!name || !email || !password) {
        message = '"name", "email" and "password" must be provided'
        throw new Error(message)
     }

     const id: string = generateId()

     const cypherPassword = await hash(password);

     await insertUser({
      id,
      name,
      email,
      password: cypherPassword
   })
  

     const token: string = generateToken({ id })
     return token
}

export const BusinessLogin = async(
    email: string,
    password: string
) => {
    let message = "Success!"
    if (!email || !password) {
        message = '"email" and "password" must be provided'
        throw new Error(message)
     }

     const user: User = await selectUserByEmail(email)

     if (!user) {
      message = "Invalid credentials"
      throw new Error(message)
   }
     

     const passwordIsCorrect: boolean = await compare(password, user.password)

     if (!passwordIsCorrect) {
        message = "Invalid credentials"
        throw new Error(message)
     }

     const token: string = generateToken({
        id: user.id
     })
     return token
}