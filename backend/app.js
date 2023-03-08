require("dotenv").config();

const express = require("express");
const path = require("path");
const cors = require("cors");

const port = process.env.PORT;  // pega configuração da porta no arquivo .env

const app = express();

// config json and form data response

app.use(express.json());
app.use(express.urlencoded({ extended: false}));

// Solve CORS

app.use(cors({credentials: true, origin: "http://localhost:3000"}));

// uplod directory

app.use("/uploads", express.static(path.join(__dirname, "/uploads")));

// DB connection

require("./config/db.js");





// routers

const router = require("./routers/Router.js");

app.use(router);

app.listen(port, () => {

    console.log(`app rodando na porta ${port}`);  

});