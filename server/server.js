const axios = require("axios");
require("dotenv").config();
const { SERVER_PORT } = process.env;
const { data } = require("./data");

const express = require("express");
const cors = require("cors");
const app = express();

console.log("here is data", data);

app.post("/data", data);

app.use(cors());
app.use(express.json());

app.listen(SERVER_PORT, () => console.log(`running on ${SERVER_PORT}`));
