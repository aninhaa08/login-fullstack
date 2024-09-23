import express from 'express'
import cors from 'cors'
import { PrismaClient } from '@prisma/client'

//guardará tudo que estiver dentro do prisma
const prisma = new PrismaClient()

const app = express()
app.use(express.json())

//biblioteca adicionada para acabar com o erro de CORS (o back-end impede a página do front de acessá-lo)
//a forma que foi declarado o CORS (sem especificar qual página poderá acessá-lo), o torna não seguro, mas iremos utilizar por ser um projeto pequeno
app.use(cors())


//requisição assíncrona para ele aguardar o retorno do banco de dados (rota com body params)
app.post('/users', async (req, res) => {

    //pegando a requisição feita no body e salvando em user (prisma)
    await prisma.user.create({
        data: {
            name: req.body.name,
            email: req.body.email,
            age: req.body.age
        }
    })

    //exbibindo o status da requisição
    res.status(201).json(req.body)
})



//criação de uma rota para listar todos os usuários (rota com body params/query params)
app.get('/users', async (req, res) => {

    let users = []

    //condição para uso do query params
    if(req.query){
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    } else {
        users = await prisma.user.findMany()
    }

    ////código utilizado durante o body params
    // const users = await prisma.user.findMany()

    //resposta a ser enviada/exibindo o status da requisição
    res.status(200).json(users)
})



//rota utilizando route params (thunderclient) e body params (aqui no server)
//o ":id" significa a criação de uma variável para o parâmetro de id, já que ele está sendo informado pelo thunderclient e pode ser alterado a qualquer momento
app.put('/users/:id', async (req, res) => {

    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })


    res.status(201).json(req.body)
})



app.delete('/users/:id', async (req, res) => {

    //possui também o deleteMany
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })
    

    res.status(200).json({message: 'Usuário deletado!'})
})


app.listen(3000)