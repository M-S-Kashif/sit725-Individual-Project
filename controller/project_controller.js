console.log("Controller Layer");

//Importing DB Layer in Service Layer...
let dbo = require("../db/project_db");

//Creating a collection for our MongoDB...
let projectsCollection = dbo.db("Individual_Project").collection("Projects");


//Initializing Dummy Projects...
const dummyProject1 = {
    name: 'Hobbs',
    ID: 1,
    description: 'Used Unity to create a Mobile Application',
    title: "Mobile App",
    image: "Unity Mobile App"
};

const dummyProject2 = {
    name: 'Sohaib',
    ID: 2,
    description: 'Made a three-legged Robot with a camera',
    title: "Spy Robot",
    image: "Spy Robot"
};

let projectList = [dummyProject1, dummyProject2];


//All the functions present in the Controller Layer are mentioned right here...

//A Function to retrieve all the projects...
const getAllProjects = (res) => {
    console.log('controller accessing the service to get all the projects...')
    projectsCollection.find().toArray(function (err, result) {
        if (err) {
            throw err;
        }
        else {
            res.send(result);
        }
    });
}

//Insert a project into the DB collection...
const createProject = (project, res) => {
    console.log("Creating a new project...")
    projectsCollection.insertOne(project, (err, result) => {
        if (err) {
            throw err;
        } else {
            //Adding contents into an array...
            projectList.push(result);
            console.log('Project Inserted', result);
        }        
    });
}

//Inserting Dummy Projects from the DB Collection...
const insertDummies = () => {
    projectsCollection.insertMany(projectList, (err, result) => {
        if (err) {
            throw err;
        }
        else {
            console.log("Projects Inserted.")
        }
    })
}


setTimeout(() => {
    //insertDummies();
}, 5000);

module.exports = {
    getAllProjects, createProject
}