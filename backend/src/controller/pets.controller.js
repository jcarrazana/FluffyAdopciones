import Pet from "../model/Pet";

const petsController = {}; 

petsController.getPets = async (req, res, next) => {
  try {
    const pets = await Pet.find({});

    return res.status(200).send(pets);
  } catch (err) {
    next(err);
  }
};

export default petsController;