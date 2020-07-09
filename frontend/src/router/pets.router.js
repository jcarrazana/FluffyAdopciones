import fetch from "node-fetch";

let petsData;

const petsRouter = (server) => {  
  server.get("/adoptions", async (req, res) => {
    
    await fetch('http://localhost:4000/api/v1/pets')
    .then((response) => {
    return response.json();
    })
    .then((pets) => {
    console.log(pets);
    petsData = pets;
    }); 
    console.log(petsData);
    return res.render("adoptions", {
      petsData: petsData
    });
  });
}

export default petsRouter;

