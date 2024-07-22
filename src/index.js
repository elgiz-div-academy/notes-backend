const express = require("express");
const router = require("./routes");
const cors = require("cors");
const { port } = require("./config");

require("./models/index")();

const app = express();
app.use(express.json());
app.use(cors());

app.use(router);

app.listen(port, (err) => {
  if (err) console.log(err);
  else console.log(`Application is running on ${port} port`);
});
