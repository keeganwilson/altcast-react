require("dotenv").config();
const express = require("express");
const cors = require("cors");

const {
  getCasts,
  addCast,
  deleteCast,
  getUser,
  addUser,
} = require("./controller");

const { SERVER_PORT } = process.env;

const app = express();

app.use(express.json());
app.use(cors());

app.get("/casts", getCasts);
app.post("/casts", addCast);
app.delete("/casts", deleteCast);

app.get("/users", getUser);
app.post("/users", addUser);

app.listen(SERVER_PORT, () =>
  console.log(`Server running at warp ${SERVER_PORT}`)
);
