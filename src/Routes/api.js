const express = require('express');
const router = express.Router();


const blogController = require('../Controllers/blogController');
const blogDetailsController = require('../Controllers/blogDetailsController');
const commentController = require('../Controllers/commentController');
const messageController = require('../Controllers/messageController');
const portfolioController = require('../Controllers/portfolioController');
const productController = require('../Controllers/productController');
const profitController = require('../Controllers/profitController');
const projectController = require('../Controllers/projectController');
const serviceController = require('../Controllers/serviceController');
const titleController = require('../Controllers/titleController');

//blogController
router.get('/blogControl/create', blogController.create);
router.get('/blogControl/read', blogController.read);
router.get('/blogControl/delete', blogController.delete);
router.get('/blogControl/update', blogController.update);

//blogDetailsController
router.get('/blogDetailsControl/create', blogDetailsController.create);
router.get('/blogDetailsControl/read', blogDetailsController.read);
router.get('/blogDetailsControl/delete', blogDetailsController.delete);
router.get('/blogDetailsControl/update', blogDetailsController.update);

//commentController
router.get('/commentControl/create', commentController.create);
router.get('/commentControl/read', commentController.read);
router.get('/commentControl/delete', commentController.delete);
router.get('/commentControl/update', commentController.update);

//messageController
router.get('/messageControl/create', messageController.create);
router.get('/messageControl/read', messageController.read);
router.get('/messageControl/delete', messageController.delete);
router.get('/messageControl/update', messageController.update);

//portfolioController
router.get('/portfolioControl/create', portfolioController.create);
router.get('/portfolioControl/read', portfolioController.read);
router.get('/portfolioControl/delete', portfolioController.delete);
router.get('/portfolioControl/update', portfolioController.update);

//productController
router.get('/productControl/create', productController.create);
router.get('/productControl/read', productController.read);
router.get('/productControl/delete', productController.delete);
router.get('/productControl/update', productController.update);

//profitController
router.get('/profitControl/create', profitController.create);
router.get('/profitControl/read', profitController.read);
router.get('/profitControl/delete', profitController.delete);
router.get('/profitControl/update', profitController.update);

//projectController
router.get('/projectControl/create', projectController.create);
router.get('/projectControl/read', projectController.read);
router.get('/projectControl/delete', projectController.delete);
router.get('/projectControl/update', projectController.update);

//serviceController
router.get('/serviceControl/create', serviceController.create);
router.get('/serviceControl/read', serviceController.read);
router.get('/serviceControl/delete', serviceController.delete);
router.get('/serviceControl/update', serviceController.update);

//titleController
router.get('/titleControl/create', titleController.create);
router.get('/titleControl/read', titleController.read);
router.get('/titleControl/delete', titleController.delete);
router.get('/titleControl/update', titleController.update);


module.exports = router;