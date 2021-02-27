const PetController = require('../controllers/pets.controller');

module.exports = function(app) {
    app.get('/api/pets', PetController.allPets);
    app.post('/api/pets', PetController.createPet);
    app.get('/api/pets/:id', PetController.singlePet);
    app.put('/api/pets/:id', PetController.updatePet);
    app.delete('/api/pets/:id', PetController.deletePet);
};