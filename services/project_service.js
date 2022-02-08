/*
console.log("Service Layer");

//Importing DB Layer in Service Layer...
//let dbo = require("../db/project_db");
let projectsCollection;


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


setTimeout(() => {
    //projectsCollection = dbo.db("test").collection("devices");
    console.log("Accessed the projects...")
}, 2000);

 


//Insert a project into the collection...
const insertProject = (project, res) => {
    projectsCollection.insert(project, (err, result) => {
        console.log('Project Inserted', result);

        //Use this command for tesing instead of connecting the items in the database...
        projectList.push(project);
        res.send({result:200});
    });
};

//A Function to retrieve all the projects...
const getProjects = (res) => {
    projectsCollection.find().toArray(function (err, result) {
        if (err) throw err;
        res.send(result);
    });
};

//Export the two functions from this script...
module.exports = {
    getProjects,
    insertProject
}


let getAllProjects = (res) => {
    projectsCollection.find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

const getProjectByID = (id, res) => {
    projectsCollection.find().toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    });
}

const InsertProject = (project, res) => {
    projectsCollection.insertOne(project, (err, result) => {
        if (err) throw err;
        //Sending the result status...
        res.send({ result: 204 });
    });
}
*/

