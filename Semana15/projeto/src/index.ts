//importando express com Request e Response e cors
import express, {Request, Response, Express} from 'express';
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
    nome: string,
    cpf: number,
    conta: TipoConta,
    transacao: TipoTransacao,
    dataNascimento: number,
    saldo: number

}

enum TipoConta {
    CONTACORRENTE = "Conta-Corrente",
    CONTAPOUPANCA = "Conta-Poupança"
  }

  enum TipoTransacao {
    TED = "TED",
    PIX = "PIX",
    BOLETOBANCARIO = "Boleto-Bancário"
  }

let users: user[] = [
    {
        id: 1,
        nome: "Ana",
        cpf: 10110112302,
        conta: TipoConta.CONTAPOUPANCA,
        transacao: TipoTransacao.PIX,
        dataNascimento: 1990,
        saldo: 0,

    },
    {
        id: 2,
        nome: "João",
        cpf: 10110112305,
        conta: TipoConta.CONTACORRENTE,
        transacao: TipoTransacao.BOLETOBANCARIO,
        dataNascimento: 1975,
        saldo: 0,

    }
]

app.get("/user/all", (req: Request, res: Response) => {
    res.status(200).send(users)
})

app.post("/user", (req: Request, res: Response) => {

    let errorCode: number = 400;

    try {
        const reqBody: user = {
            id: Date.now(),
            nome: req.body.nome,
            cpf: req.body.cpf,
            conta: req.body.conta,
            transacao: req.body.transacao,
            dataNascimento: req.body.dataNascimento,
            saldo: req.body.saldo
        }

        if(!reqBody.nome || !reqBody.cpf || !reqBody.dataNascimento){
            errorCode = 422;
            throw new Error("Algum campo está inválido. Preencha corretamente.");
        }

        users.push(reqBody);
    
        res.status(200).send({message: "Usuário inserido com sucesso!"});
        
    } catch (error) {
        res.status(errorCode).send({message: error.message});
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
  
