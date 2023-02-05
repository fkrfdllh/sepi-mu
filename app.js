require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");

const routerWeb = require("./routes/web");
const routerApi = require("./routes/api");

const app = express();
const port = process.env.APP_PORT;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

routerApi(app);
routerWeb(app);

app.listen(port, () => console.log(`SepiMU running on port ${port}!`));
