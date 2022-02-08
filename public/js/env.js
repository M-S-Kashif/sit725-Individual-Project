const dummyProject1 = {
    imageURL: 'discover.jpg',
    uniqueID: 1,
    description: 'Check out some of the projects our collaborators have in store.',
    title: "Discover What's New Today!",
    linkURL: "#",
    linkname: "Click Here"
};

const dummyProject2 = {
    imageURL: 'linked.jpg',
    uniqueID: 2,
    description: 'Do you want to learn about Robotics? Feel free to leave me a message!',
    title: "Meet Sohaib!",
    linkURL: "https://www.linkedin.com/in/muhammad-sohaib-bin-kashif-a992a5226/",
    linkname: "My LinkedIn Profile"
};

let data = [dummyProject1, dummyProject2];

//Appending Contents into cards...
cardcontents = (entries) => {
    entries.forEach(dataentry => {
        console.log(dataentry);
        let item = '<div class="col s6">'+
            '<div class="card">'+
                '<div class="card-image waves-effect waves-block waves-light">' +
                    '<img class="activator" src="' + dataentry.imageURL + '" height="350">' +
                    '<span class="card-title">' + dataentry.title + '</span>' +
                '</div>'+
                '<div class="card-reveal">'+
                    '<span class="card-title grey - text text - darken - 4">' + dataentry.title + '<i class="material-icons right">close</i></span>' +
                    '<p>' + dataentry.description + '</p>' +
                '</div>'+
                    '<div class="card-action">' +
                        '<a href="' + dataentry.linkURL + '">' + dataentry.linkname + '</a>' +
                    '</div>'+
                '</div>'+
            '</div>';

        $('#cardcontents').append(item);
    });
};


//Adding a new Project...
const newProject = () => {
    let name = $('#name').val();
    let title = $('#title').val();
    let image = $('#image').val();
    let description = $('#description').val();

    let userproject = { name, title, description, image };
    console.log("New Project created by " + userproject.name);
};


$(document).ready(function () {
    console.log("Running the Environment Script!");

    console.log('Creating the components...');
    cardcontents(data);

    //test get call
    $.get('/test?user_name="Saibi"', (result) => {
        console.log(result)
    })

    //Initializing Modal.html
    $('.modal').modal();
});