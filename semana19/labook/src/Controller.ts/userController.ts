import { Request, Response } from "express";
import { BusinessLogin, businessSignup } from "../business/userBusiness";

    export const signup = async (req: Request, res: Response) => {
    try {
       let message = "Success!"
       const { name, email, password } = req.body
 
       const token = await businessSignup(name, email, password)
 
       res.status(201).send({ message, token })
 
    } catch (error) {
       res.statusCode = 400
       let message = error.sqlMessage || error.message
 
       res.send({ message })
    }
 }

export const login = async (req: Request, res: Response) => {
    try {
       let message = "Success!"
 
       const { email, password } = req.body
 
       const token = await BusinessLogin(email, password)
 
       res.status(200).send({ message, token })
 
    } catch (error) {
       let message = error.sqlMessage || error.message
       res.statusCode = 400
 
       res.send({ message })
    }
 }