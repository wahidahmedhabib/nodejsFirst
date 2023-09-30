import express from "express";
import cors from "cors";
const app = express();
const port = 5000;

const users = [
  { id: 1, name: "pak", code: 92 },
  { id: 2, name: "ind", code: 91 },
  { id: 3, name: "chi", code: 93 },
  { id: 4, name: "japan", code: 95 },
];

app.use(express.json());
app.use(cors());

app.get("/users", (req, res) => {
  res.send(users);
});

app.post("/order", (req, res) => {
  // res.send('users-->>', users);
  // users.push({ id: users.length + 1, ...req.body });
  console.log("req---->>", req.body);
  res.send({ message: "data Addedd successfully" });
  // console.log("res---->>", res)
});

app.delete("/users/:id", (req, res) => {
  const index = users.findIndex((v) => v.id == Number(req.params.id));
  if (index != -1) {
    users.splice(index, 1);
    res.send({ message: "user deleted successfully" });
  } else {
    res.send({ message: "please Enter Correct Id" });
  }
});

app.put("/users/:id", (req, res) => {
  const index = users.findIndex((v) => v.id == Number(req.params.id));
  if (index != -1) {
    users.splice(index, 1, { id: Number(req.params.id), ...req.body });
    res.send({ message: "user EDITED successfully" });
  } else {
    res.send({ message: "Please Enter Correct id.." });
  }
});

app.listen(port, () => {
  console.log("SEVER IS RUNNING ON PORT", port);
});
