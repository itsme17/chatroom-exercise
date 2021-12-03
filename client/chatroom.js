let socket = io.connect();
/*client*/
var username = prompt("give username : ");
document.getElementById('sendToAll').addEventListener("click", function () {
    let data = {
        name : username,
        msg :  document.getElementById('msg').value
    }
    socket.emit('sendToAll',data);
})
socket.on('displayMessage', (message) => {
    target.innerHTML += '<br>'+message.name+" : "+message.msg;
});

//msg to yourself
document.getElementById('sendToMe').addEventListener("click", function () {
    let data = {
        name : username,
        msg :  document.getElementById('msg').value
    }
    socket.emit('sendToMe', data);
})