const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
require("dotenv").config();
const cors = require("cors");
const eventRouter = require("./modules/events/event.routes");
const dbConnection = require("./mongodb/dbConnection");

app.use(eventRouter);
app.use(cors(corsOptions));
app.use(cors());
// cors
var corsOptions = {
    origin: 'http://localhost:3000',
    optionsSuccessStatus: 200 
}
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

dbConnection();

app.get("/", (req, res) => {
  res.send("edumart");
});

app.listen(port, () => {
  console.log(`edumart port: ${port}`);
});