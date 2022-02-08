console.log("Router Layer");
const express = require("express");
const router = express.Router();     //Initializes a Router...

//Importing Service Layer in Router Layer...
const projectController = require("../controller/project_controller");

//Uploading our Project list contents on request...
router.get('/projects', (req, res) => {
    console.log('Sending in the list as requested...');
    projectController.getAllProjects(res);
});

//Temporarily adding project data in the server...
router.post('/projects', (req, res) => {
    console.log('Projects posted...');
    let project = req.body;
    projectController.createProject(project, res);
});

//Exporting all the contents for our script...
module.exports = router;