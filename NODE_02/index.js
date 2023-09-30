import express from "express";
import router from "./routes/index.js";
// const routes = express.Router()

const port = 5000;
const app = express();

app.use("/", (req, res, next) => {
//   console.log("REQ--->>>>", req.query);
  if (req.query.apikey == '123') {
    next();
  } else {
    console.log("ghrr JAooo...");
    res.send({messagae: "wronge HY,,,,"})
  }
});

app.use("/api", router);

app.listen(port, (req, res) => {
  console.log("SERVER IS RUNNING ON PORT ", port);
});
