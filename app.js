require("dotenv").config();

const bodyParser = require("body-parser");
const express = require("express");
const appRootPath = require("app-root-path");

const routerWeb = require("./routes/web");
const routerApi = require("./routes/api");

const app = express();
const port = process.env.APP_PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${appRootPath}/public`));

app.set("view engine", "ejs");

routerApi(app);
routerWeb(app);

app.listen(port, () => console.log(`SepiMU running on port ${port}!`));
