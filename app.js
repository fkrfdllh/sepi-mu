require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");

const router = require("./routes/web");

const app = express();
const port = process.env.APP_PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

router(app);

app.listen(port, () => console.log(`SepiMU running on port ${port}!`));
