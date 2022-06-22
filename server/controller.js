// @ts-nocheck

require("dotenv").config();
const { CONNECTION_STRING } = process.env;
const Sequelize = require("sequelize");

const sequelize = new Sequelize(CONNECTION_STRING, {
  dialect: "postgres",
  dialectOptions: {
    ssl: {
      rejectUnauthorized: false,
    },
  },
});

module.exports = {
  getCasts: (req, res) => {
    const { gameId } = req.query;
    sequelize
      .query(`SELECT * FROM casts WHERE game_id = '${gameId}'`)
      .then((dbres) => res.status(200).send(dbres[0]))
      .catch((err) => console.log(err));
  },

  addCast: (req, res) => {
    let { gameId, caster, creds, notes, streamURL } = req.body;
    sequelize
      .query(
        `
        INSERT INTO casts (game_id, caster, creds, notes, stream_url)
        VALUES ('${gameId}', '${caster}', '${creds}', '${notes}', '${streamURL}')`
      )
      .then(() => res.sendStatus(200))
      .catch((err) => console.log(err));
  },

  deleteCast: (req, res) => {
    let { caster } = req.body;
    sequelize.query(`DELETE FROM casts WHERE caster='${caster}'`);
  },

  getUser: (req, res) => {
    const { username, password } = req.query;
    sequelize
      .query(
        `SELECT * FROM users WHERE username = '${username}' and password = '${password}'`
      )
      .then((dbres) => {
        console.log(dbres);
        if (dbres[1].rowCount === 0) {
          return res.status(401).send("Invalid username or password");
        } else res.status(200).send(dbres[0]);
      })
      .catch((error) => {
        alert(error.response.data);
        console.log(error.response.data);
      });
  },
  addUser: (req, res) => {
    console.log(req.body);
    const { firstName, lastName, username, email, password } = req.body;

    sequelize
      .query(
        `
            INSERT INTO users (first_name, last_name, username, email, password)
            VALUES ('${firstName}', '${lastName}', '${username}', '${email}', '${password}')`
      )
      .then(() => res.sendStatus(200))
      .catch((err) => console.log(err));
  },
};
