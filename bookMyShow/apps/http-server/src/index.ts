import express from "express"
import prisma from "@repo/prisma/client"

const app = express();
app.use(express.json())

app.get('/', (req , res) => {
    res.json("HI there.")
})

app.post('/signup' , async(req , res) => {
    const userName = req.body.userName 
    const password = req.body.password
    
    const user = await prisma.user.create({
        data: {
            userName , 
            password
        }
    })
    res.json({
        message : "Signup successfull",
        id: user.id
    })
})

app.listen(3000);