import "dotenv/config";
import express from "express";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "./generated/prisma/client.js";

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
    throw new Error("DATABASE_URL is required");
}

const adapter = new PrismaPg({ connectionString });
const prismaClient = new PrismaClient({ adapter });
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