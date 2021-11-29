const express = require('express');
const router = express.Router();

const login = require('../middleware/login');

const UsersController = require('../controllers/users-controller');
const FlowersController = require('../controllers/flowers-controller');
const PlantsController = require('../controllers/plants-controller');
const DirectController = require('../controllers/direct-controller');

//AUTH
router.post('/login', UsersController.login);
router.post('/register', UsersController.registerReq);
router.post('/logout', UsersController.logout);

//USERS for ROLE_ADMIN
router.get('/', login.auth, UsersController.searchUsers);
router.post('/', login.auth, UsersController.registerUser);
router.patch('/', login.auth, UsersController.patchUser);
router.delete('/', login.auth, UsersController.deleteUser);

//FLOWERS
router.get('/flowers', FlowersController.findallflowers);
router.get('/flowers/:id', FlowersController.findbyidflowers);
router.post('/flowers', FlowersController.addnewflowers);
router.patch('/flowers', FlowersController.patchflowers);
router.delete('/flowers', FlowersController.deleteflowers);

//PLANTS
router.get('/plants', PlantsController.findallplants);
router.get('/plants/:id', PlantsController.findbyidplants);
router.post('/plants', PlantsController.addnewplants);
router.patch('/plants', PlantsController.patchplants);
router.delete('/plants', PlantsController.deleteplants);

//DIRECT
router.get('/direct/stocks', DirectController.directstocks);
router.post('/direct/order', DirectController.directorder);
router.get('/direct/orders',);
router.patch('/direct/order/:id',);
router.delete('/direct/order/:id',);

module.exports = router;