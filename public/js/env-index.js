//Card Contents...
const dummyCard1 = {
    imageURL: '/images/discover.jpg',
    uniqueID: 1,
    description: 'Check out some of the projects our collaborators have in store.',
    title: "Discover What's New Today!",
    linkURL: "#",
    linkname: "Click Here"
};

const dummyCard2 = {
    imageURL: '/images/linked.jpg',
    uniqueID: 2,
    description: 'Do you want to learn about Robotics? Feel free to leave me a message!',
    title: "Meet Sohaib!",
    linkURL: "https://www.linkedin.com/in/muhammad-sohaib-bin-kashif-a992a5226/",
    linkname: "My LinkedIn Profile"
};

var carddata = [dummyCard1, dummyCard2];

//Appending Contents into our cards...
cardcontents = (cards) => {
    cards.forEach(card => {
        console.log(card);
        let item = '<div class="col s6">'+
            '<div class="card">'+
                '<div class="card-image waves-effect waves-block waves-light">' +
                    '<img class="activator" src="' + card.imageURL + '" height="350">' +
                    '<span class="card-title">' + card.title + '</span>' +
                '</div>'+
                '<div class="card-reveal">'+
                    '<span class="card-title grey - text text - darken - 4">' + card.title + '<i class="material-icons right">close</i></span>' +
                    '<p>' + card.description + '</p>' +
                '</div>'+
                    '<div class="card-action">' +
                        '<a href="' + card.linkURL + '">' + card.linkname + '</a>' +
                    '</div>'+
                '</div>'+
            '</div>';

        $('#cardcontents').append(item);
    });
};

// connect to the socket
let socket = io();

// creating the recieving end of the server...
socket.on('MBC', (msg) => {
    console.log(msg);
})

//script to run the document.Only once; after the page gets loaded..
$(document).ready(function () {
    console.log("Running the Environment Script!");

    console.log('Creating the components on index page...');
    cardcontents(carddata);

    //test get call
    $.get('/test?user_name="Saibi"', (result) => {
        console.log(result)
    })
});