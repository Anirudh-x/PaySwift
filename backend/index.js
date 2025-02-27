const express = require("express");
const cors = require("cors");

const mainRouter = require("./routes/index.js")

const app = express();
const port = process.env.port || 3000;

app.use(cors());
app.use(express.json());

app.use("/api/v1", mainRouter)

app.listen(port, () => {
  console.log(`Running on port ${port}`);
})