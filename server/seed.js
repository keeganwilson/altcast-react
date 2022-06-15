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
  seed: (req, res) => {
    sequelize.query(
      `
        drop table if exists users;
        drop table if exists casts;

        CREATE TABLE users (
            user_id serial primary key,
            first_name varchar(100),
            last_name varchar(100),
            email varchar(100),
            password varchar(50)
        ); 
        
        CREATE TABLE casts (
            cast_id serial primary key,
            user_id int REFERENCES users(user_id),
            game_id varchar(50),
            creds varchar(1000),
            notes varchar(2000),
            stream_url varchar(1000)
        );

        INSERT INTO users (first_name, last_name, email, password)
        VALUES ('Keegan', 'Wilson', 'somedude@gmail.com', 'password');
        `
    );
  },
};
