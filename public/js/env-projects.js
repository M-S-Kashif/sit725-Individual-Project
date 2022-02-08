//Project Contents...
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


//Requesting Dummy Projects...
const requestProjects = () => {
    $.get('/projects', (projects) => {
        if (projects.length > 0) {
            console.log(projects);
            showProjectList(projects);
        }
    });
};

const showProjectList = (projects) => {
    projects.forEach(project => {
        console.log(project);
        let item = '<div class="col s8">' +
            '<ul>' +
            '<li>' + project.name + '</li>' +
            '<li>' + project.title + '</li>' +
            '<li>' + project.description + '</li>' +
            '<li>' + project.image + '</li>' +
            '</ul>' + '</div>';

        $('#projectlist').append(item);     //Append this item when you find this ID...
    });
};



//Adding a new Project (from about.html)...
const newProject = () => {
    let name = $('#name').val();
    let title = $('#title').val();
    let image = $('#image').val();
    let description = $('#description').val();

    //Sending a new project to the website...
    let userproject = { name, title, description, image };
    console.log("New Project created by " + userproject.name);
    $.ajax({
        url: '/projects',
        contentType: 'application/json',
        data: JSON.stringify(userproject),
        type: 'POST',
        success: function (result) {
            alert("Project successfully submitted...");
        }
    })
};



//Script to run when About Page is loaded...
$(document).ready(function () {
    console.log("Running the second Environment Script!");

    //Initializing Modal.html
    $('.modal').modal();

    //Calling in Function to request for projects...
    requestProjects();
});