require("dotenv").config();
const express = require("express");
const { seed } = require("./seed.js");

const { getCasts, addCast, getUser, addUser } = require("./controller");

const { SERVER_PORT } = process.env;

const app = express();

app.post("/seed", seed);

app.get("/casts", getCasts);
app.post("/casts", addCast);

app.get("/users", getUser);
app.post("/users", addUser);

app.listen(SERVER_PORT, () =>
  console.log(`Server running at warp ${SERVER_PORT}`)
);
