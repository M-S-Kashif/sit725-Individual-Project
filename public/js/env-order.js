//Creating Suggestion Buttons...
const itemButton1 = document.querySelector("#btn-1");
const itemButton2 = document.querySelector("#btn-2");
const itemButton3 = document.querySelector("#btn-3");
const itemButton4 = document.querySelector("#btn-4");


//Creating a function for adding suggestions...
const addItem1 = () => {
    //Creating a function for adding suggestions in the contents of the form
    let item1 = 'Rpi4 (1 boxing with essentials) + (M14) \n';
    $('#order_list').append(item1);
    console.log("Item 1 Added...");
}

const addItem2 = () => {
    //Creating a function for adding suggestions in the contents of the form
    let item2 = 'HP Docking Station (1 boxing) + (D05) \n';
    $('#order_list').append(item2);
    console.log("Item 2 Added...");
}

const addItem3 = () => {
    //Creating a function for adding suggestions in the contents of the form
    let item3 = "Components Jar (1 box of resistors, capacitors, and ICs) + (C55) \n";
    $('#order_list').append(item3);
    console.log("Item 3 Added...");
}

const addItem4 = () => {
    //Creating a function for adding suggestions in the contents of the form
    let item4 = "Hard Drive (1 TB HDD) + (H43) \n";
    $('#order_list').append(item4);
    console.log("Item 4 Added...");
}


//Adding Event Listeners...
itemButton1.addEventListener("click", addItem1, false);
itemButton2.addEventListener("click", addItem2, false);
itemButton3.addEventListener("click", addItem3, false);
itemButton4.addEventListener("click", addItem4, false);


//Creating a function for taking in contents and sending them to the generated reciept...
let printReciept = () => {
    //Grabbing components of the form...
    let fname = document.querySelector("#first_name").value;
    let lname = document.querySelector("#last_name").value;
    let email = document.querySelector("#email").value;
    let haddr = document.querySelector("#home_addr").value;
    let contents = document.querySelector("#order_list").value;

    let reciept = '<div class="card blue-grey darken-1 large">' +
        '<div class="card-content white-text">' +
        '<span class="card-title">Thank you for shopping with us!</span>' +
        '<p>Here is the reciept of your order. If you made any mistakes, please let us know via email.</p>' +
        '<br>' + '<div class="row">' + '<label class="col s3" style="font-size:18px">First Name: </label> <p class="col s6" id="reciept-fname">' + fname + '</p>' +
        '</div>' + '<div class="row">' + '<label class="col s3" style="font-size:18px">Last Name: </label> <p class="col s6" id="reciept-lname">' + lname +
        '</p>' + '</div>' + '<div class="row">' + '<label class="col s3" style="font-size:18px">Email Address: </label> <p class="col s6" id="reciept-email">' + email +
        '</p>' + '</div>' + '<div class="row">' + '<label class="col s3" style="font-size:18px">Home Address: </label> <p class="col s6" id="reciept-haddr">' + haddr + '</p>' +
        '</div> ' + '<div class="row">' + '<label class="col s3" style = "font-size:18px"> Items Ordered: </label>' + '<p class="col s6" id="reciept-contents">' + contents +
        '</p>' + '</div>' + '</div>' + '<div class="card-action">' + '<a href="index.html"> Back to the Home Page</a></div>' + '</div>';

    $('#order-reciept').append(reciept);
}


$("#send-order-btn").click(() => {
    //Create the contents of the reciept...
    printReciept();
});


