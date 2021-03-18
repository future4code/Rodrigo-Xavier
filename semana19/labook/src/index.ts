/**************************** IMPORTS ******************************/

import express, { Express, Request, Response } from "express"
import cors from "cors"
import { signup } from "./Controller.ts/userController"
import { login } from "./Controller.ts/login"
import { createPost } from "./Controller.ts/postController"
import { getPostById } from "./Controller.ts/getPostById"
 

/**************************** CONFIG ******************************/

const app: Express = express()
app.use(express.json())
app.use(cors())

/**************************** TYPES ******************************/

/**************************** SERVICES ******************************/

/**************************** ENDPOINTS ******************************/

app.post('user/signup', signup)
app.post('/users/login', login)


app.post('/posts/create', createPost)
app.get('/posts/:id', getPostById)

/**************************** SERVER INIT ******************************/

app.listen(3003, () => {
   console.log("Server running on port 3003")
})