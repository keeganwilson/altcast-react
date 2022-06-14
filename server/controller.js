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
    const { gameId } = req.body;
    sequelize
      .query(`SELECT * FROM casts WHERE id = ${gameId}`)
      .then((dbres) => res.status(200).send(dbres[0]))
      .catch((err) => console.log(err));
  },

  addCast: (req, res) => {
    const { gameId, caster, creds, notes, streamURL } = req.body;

    sequelize
      .query(
        `
        INSERT INTO casts (gameId, caster, creds, notes, streamURL)
        VALUES (${gameId} ${caster}, ${creds}, ${notes}, ${streamURL})`
      )
      .then(() => res.sendStatus(200))
      .catch((err) => console.log(err));
  },

  getUser: (req, res) => {
    const { email } = req.query;
    sequelize
      .query(`SELECT * FROM users WHERE email = '${email}'`)
      .then((dbres) => res.status(200).send(dbres[0]))
      .catch((err) => console.log(err));
  },
  addUser: (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    sequelize
      .query(
        `
            INSERT INTO users (first_name, last_name, email, password)
            VALUES ('${firstName}', '${lastName}', '${email}', '${password}')`
      )
      .then(() => res.sendStatus(200))
      .catch((err) => console.log(err));
  },
};
