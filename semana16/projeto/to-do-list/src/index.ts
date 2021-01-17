import express, { Express, Request, Response } from "express";
import knex from "knex";
import cors from "cors";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import { errorMonitor } from "events";

dotenv.config();

export const connection = knex({
   client: "mysql",
   connection: {
      host: process.env.DB_HOST,
      port: 3306,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
   }
})

const app: Express = express();
app.use(express.json());
app.use(cors())

// async function createUser ( 
   //    id: number,
   //    name: string,
   //    nickname: string,
   //    email: string 
   //    ): Promise<void> {
   //    await connection.raw(`
   //    INSERT INTO TodoListUser VALUES ( 
   //    ${id},
   //    "${name}",
   //    "${nickname}", 
   //    "${email}"
   //    );
   //    `) 
   //    }

   
const createUser = async (
   id: number,
   name: string,
   nickname: string,
   email: string
 ): Promise<void> => {
   await connection
   .insert({
      id: id,
      name: name,
      nickname: nickname,
      email: email
    })
    .into("TodoListUser");
 };

 app.put("/user", async (req: Request, res: Response) => {
   try {
     await createUser(
       req.body.id,
       req.body.name,
       req.body.nickname,
       req.body.email
     );
 
     res.status(200).send();
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
 });
 

const searchUserById = async (id: string): Promise<any> => {
   const result = await connection.raw(`
     SELECT * FROM Actor WHERE id = '${id}'
   `)
 
    return result[0][0]
 }
 
 app.get("/user/:id", async (req: Request, res: Response) => {
   try {
     const id = req.params.id;
     const searchUser = await searchUserById(id);
 
     res.status(200).send(searchUser)
   } catch (err) {
     res.status(400).send({
       message: err.message,
     });
   }
 });





const server = app.listen(process.env.PORT || 3003, () => {
   if (server) {
      const address = server.address() as AddressInfo;
      console.log(`Server is running in http://localhost:${address.port}`);
   } else {
      console.error(`Failure upon starting server.`);
   }
});
