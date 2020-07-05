import petsData from "../mock/pets.json";

const petsRouter = (server) => {
  server.get("/", (req, res) => {
    return res.render("adoptions", {
      petsData: petsData
    });
  });
}

export default petsRouter;