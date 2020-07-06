import "dotenv/config";
import express from "express";
import exphbs from "express-handlebars";
import path from "path";
import cors from "cors";
import helmet from "helmet";

import env from "./config/env";
import setRouter from "./router/index.js";

const startServer = () => {
  const server = express();
  const port = env.PORT || 8080;        

  server.use(express.static(path.join(__dirname, "public")));

  server.engine(".hbs", exphbs({        
    defaultLayout: "main",
    layoutsDir: path.join(__dirname, "views/layout"), 
    extname: ".hbs"      
  }));

  server.set("view engine", ".hbs");
  server.set("views", path.join(__dirname, "views"));

  //conectamos los middlewares de terceros
  server.use(cors());
  server.use(helmet());

  //conectamos el ruteo
  setRouter(server);

  //Se atrapan los errores en express
  server.use((err, req, res, next) => {
    let {statusCode, message } = err;

    statusCode = statusCode || 500;
    message = message || "Server error";

    res.status(statusCode).send({
      error: true,
      statusCode: statusCode,
      message: message
    });
  });

  server.listen(port, () => {
    console.log(`Server is up in port ${port}`)
  });
};

startServer(); 