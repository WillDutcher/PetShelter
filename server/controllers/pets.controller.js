const Pet = require('../models/pets.model');

const allPets = (req, res) => {
    Pet.find({}).sort({ petType: "ascending", petName: "ascending" })
        .then((allPets) => {
            console.log(allPets);
            res.json(allPets);
        })
        .catch((err) => {
            console.log(`Error in allPets: ${ err }`);
            res.status(400).json(err);
        })
};

const createPet = (req, res) => {
    console.log(req.body)
    Pet.create(req.body)
        .then((newPet) => {
            console.log(newPet);
            res.json(newPet);
        })
        .catch((err) => {
            console.log(`Error in createPet: ${ err }`);
            res.status(400).json(err);
        })
};

const singlePet = (req, res) => {
    console.log(req.params.id);
    Pet.findById(req.params.id)
        .then(onePet => {
            console.log(onePet);
            res.json(onePet);
        })
        .catch((err) => {
            console.log(`Error in singlePet: ${ err }`);
            res.status(400).json(err);
        })
};

const updatePet = (req, res) => {
    console.log(req.params.id);
    console.log(req.body);
    Pet.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true
    })
        .then(updatedPet => {
            console.log(updatedPet);
            res.json(updatedPet);
        })
        .catch((err) => {
            console.log(`Error in updatePet: ${ err }`);
            res.status(400).json(err);
        })
};

const deletePet = (req, res) => {
    console.log(req.params.id);
    Pet.findByIdAndDelete(req.params.id)
        .then((deletedPet) => {
            console.log(deletedPet);
            res.json(deletedPet);
        })
        .catch((err) => {
            console.log(`Error in deletePet: ${ err }`);
            res.status(400).json(err);
        })
};

module.exports = {
    allPets,
    createPet,
    singlePet,
    updatePet,
    deletePet
};