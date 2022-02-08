//Initializing our socket...
let socket = io();

//Creating the actual shape of the message...
const createMessage = (msg, isRight = false) => {
    let justify = isRight ? 'msg-right' : 'msg-left';
    return `<p class="${justify}"> ${msg} </p><br style="clear:both"/>`;
}

$("#chat-send-btn").click(() => {
    //Step 1: Send this message to the back-end server
    const msg = $("#chat-msg").val(); 
    setTimeout(() => {
        socket.emit('chat:msg', msg);
    }, 1000);
    
    //Step 2: Add this message to the chat display
    $("#chat-msg-display").append(createMessage($("#chat-msg").val(), true));

    //Step 3: Clear the message from the input once sent
    $("#chat-msg").val("");
});

//Recieving the broadcast from the Server...
socket.on('chat:broadcast', (msg) => {
    $("#chat-msg-display").append(createMessage(msg, false));
});