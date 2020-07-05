import petsData from "../mock/pets.json";

const petsRouter = (server) => {
  server.get("/api/v1/pets", (req, res) => {
    return res.status(200).send(petsData);
  });
}

export default petsRouter;