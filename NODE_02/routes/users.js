
import express from "express";
const users = express();
const routes = express.Router();
import userData from "./userDAta.js";

routes.get("/", (req, res) => {
  // req.body({ users, data });
// console.log(req.body)
  res.send({ users: userData });
});


export default routes;
