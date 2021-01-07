//importando express com Request e Response e cors
import express, {Request, Response} from 'express';
import cors from 'cors';

//extra: importando configuração de rede do node
import { AddressInfo } from "net";
//iniciando a aplicação web com express
const app = express();

//ativando os módulos de Bodyparser e cors
app.use(express.json());
app.use(cors());

type user = {
    id: number,
    name: string,
    email: string,
    type: "ADMIN" | "NORMAL"
    age: number
}

let users: user[] = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: "ADMIN",
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: "NORMAL",
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: "NORMAL",
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: "NORMAL",
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: "ADMIN",
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: "ADMIN",
        age: 60
    }
]

app.get("/user", (req: Request, res: Response) => {
    let errorCode: number = 400;
    try {
      const type: string = req.query.type as string;
      if (type !== "ADMIN" && type !== "NORMAL") {
        errorCode = 422;
        throw new Error("Tipo inválido. Tente novamente");
      }
      const userType = users.filter(
        (user) => user.type.toUpperCase() === type.toUpperCase()
      );
      if (!userType) {
        errorCode = 400;
        throw new Error("Tipo não encontrado");
      }
      const resposta = userType;
      res.status(200).send(resposta);
    } catch (error) {
      res.status(errorCode).send(error.message);
    }
  });

const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
       const address = server.address() as AddressInfo;
       console.log(`Server is running in http://localhost: ${address.port}`);
    } else {
       console.error(`Failure upon starting server.`);
    }
  });