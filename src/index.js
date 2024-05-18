const dotenv = require("dotenv");
dotenv.config();
const express = require("express");
const cors = require("cors");

const app = express();

require("./discord/client-ready");
require("./discord/message-create.js");
require("./discord/message-reaction-add.js");
require("./discord/interaction-create.js");

app.use(cors());
app.use(express.json());

const port = process.env.PORT ? process.env.PORT : 3333;

app.listen(port, () => {
  console.log(`Server is running in port ${port} 🚀`);
});
