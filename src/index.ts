import express from "express";
import { PrismaClient } from "./generated/prisma/client.js";

const prismaClient = new PrismaClient()
const app = express();


app.use(express.json());


app.post("/"  , async (req,res)=>{
    await prismaClient.user.create({
        data:{
            username:Math.random().toString(),
            password:Math.random().toString()

        }

    })

    res.json({
        "message":"post endpoint"
    })
})


app.get("/" , async (req,res)=>{

    const data = await prismaClient.user.findMany();
        res.json({
            data
        })
    })


app.listen(3000);