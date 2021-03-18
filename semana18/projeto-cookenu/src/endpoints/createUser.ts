import { Request, Response } from "express";
import insertUser from "../data/insertUser";
import {generateId} from "../services/idGenerator";
import { hash } from "../services/hashManager";
import { generateToken } from "../services/authenticator";

export default async function createUser(req: Request,res: Response) {
    
    try {

        if (!req.body.name || !req.body.email || !req.body.password) {
          throw new Error('Preencha os campos "name","email" e "password"')
        }

        if(req.body.password.length < 6){
            throw new Error("A senha deve conter no mínimo 6 carácteres.");
        }

        if(req.body.email.indexOf("@") === -1) {
            throw new Error("Endereço de e-mail inválido.");
        }

        const id: string = generateId()
    
        const cypherPassword = await hash(req.body.password);

        await insertUser(
            id,
            req.body.name,
            req.body.email,
            cypherPassword
        )

        const token: string = generateToken({
            id
         })

        res.status(201).send({message:"Usuário criado!", token})

    } catch (error) {
        res.status(400).send({message: error.message || error.sqlMessage})
    }
}