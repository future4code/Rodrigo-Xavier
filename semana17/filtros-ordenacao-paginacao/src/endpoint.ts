import express, { Express, Request, Response } from "express";
import selectAllUsers from "./query";
import selectUsersByName from "./query";
import { user } from "././types/user"


export const getAllUsersByName = async(req: Request,res: Response): Promise<void> =>{

    try {
       const userName = req.query.name as string
       const users = await selectUsersByName(userName)
 
       if(!users.length){
          res.statusCode = 404
          throw new Error("No recipes found")
       }
 
       res.status(200).send(users)
       
    } catch (error) {
       console.log(error)
       res.send(error.message || error.sqlMessage)
    }
 }