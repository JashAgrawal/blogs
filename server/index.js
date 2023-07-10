require("dotenv").config();
const cors = require("cors");
const express = require("express");
const connectDB = require("./utils/mongo");
const router = require("./routes");
const app = express();
connectDB();
app.use(express.json());
app.use(cors());
app.use("/api", router);
const listener = app.listen(process.env.PORT, () => {
  console.log(`Server started at ${listener.address().port}`);
});
