require('dotenv').config();
const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const cors = require("cors");

const PORT = process.env.PORT || 3001;

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

//Modules
const user = require("./src/modules/user/user.network");
const userHistory = require("./src/modules/user-history/user-history.network");

app.get("/", (req, resp) => {
    return resp.status(200).json({
        timestamp: new Date().toISOString(),
        status: 200,
        message: "successfull"
    });
});

app.listen(PORT, () => {
	console.log(`Server start in the port: ${PORT}`);
});

app.use("/", user);
app.use("/", userHistory);