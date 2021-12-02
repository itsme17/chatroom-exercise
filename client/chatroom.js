let socket = io.connect();
/*client*/
document.getElementById('sendToAll').addEventListener("click", function () {
    socket.emit('sendToAll', document.getElementById('msg').value);
})
socket.on('displayMessage', (message) => {
    target.innerHTML += '<br>'+message;
});

//msg to yourself
document.getElementById('sendToMe').addEventListener("click", function () {
    socket.emit('sendToMe', document.getElementById('msg').value);
})
