import express from "express"
import cartData from "./cartData.js"

const routes =  express.Router()

routes.get("/",(req,res)=>{
    res.send({cart : cartData})
})

export default routes