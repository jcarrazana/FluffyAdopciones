import "dotenv/config";
import express from "express";

import env from "./config/env";

const server = express();
const port = env.PORT || 8080;

server.use(cors());

server.listen(port, () => {
  console.log(`Server is up in port ${port}`)
});
