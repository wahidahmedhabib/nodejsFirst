import express from "express"
import productData from "./productData.js"

const routes = express.Router()

routes.get('/' ,(req , res)=>{
    res.send({product : productData})
})
export default routes