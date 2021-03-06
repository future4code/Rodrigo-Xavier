import express from "express";
import knex from "knex";
import dotenv from "dotenv";
import { AddressInfo } from "net";
import cors from "cors";
import createUser from "./endpoints/createUser";
import { login } from "./endpoints/login";
import { getUserByToken } from "./endpoints/getUserByToken";

const app = express();
app.use(express.json());
app.use(cors());

dotenv.config();

export const connection = knex({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: 3306,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
});


app.post('/signup', createUser)
app.post('/login', login)
app.get('/user/profile', getUserByToken)


const server = app.listen(process.env.PORT || 3001, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
});