import petsController from "../controller/pets.controller";

const petsRouter = (server) => {
  server.get("/api/v1/pets", petsController.getPets);
}

export default petsRouter;