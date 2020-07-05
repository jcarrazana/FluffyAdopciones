import petsRouter from "./pets.router";

const setRouter = (server) => {
  petsRouter(server);
}

export default setRouter;