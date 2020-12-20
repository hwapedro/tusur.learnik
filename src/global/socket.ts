import io from 'socket.io-client';

const socket = io('http://germangorodnev.com:8000'); 

socket.on('connect', async () => {
  console.log('Client has connected to the server!')
  socket.send({
    type: 'auth',
    token: localStorage.getItem('token'),
  })
})

// async created() {
//     const qs = new URLSearchParams(location.search);
//     const login = qs.get('login');
//     const password = qs.get('password');
//     this.username = login;
//     // get test login/password
//     const tokenr = await fetch(`http://localhost:3000/api/v1/auth/login`, {
//         method: 'POST',
//         body: JSON.stringify({ login, password }),
//         headers: new Headers({ 'content-type': 'application/json' })
//     })
//     const body = await tokenr.json();
//     this.token = body.token;

//     this.

//     this.

//     this.socket.on('message', (data) => {
//         switch (data.type) {
//             case 'joinArena': {
//                 if (data.success) {
//                     this.setState('search');
//                     this.timeInQueueInterval = setInterval(() => {
//                         this.timeInQueue += 1;
//                     }, 1000);
//                 }
//                 break;
//             }
//             case 'opponentFound': {
//                 const { room, opponent } = data;
//                 this.ROOM_ID = room;
//                 this.opponent = opponent;
//                 this.task = room.tasks[0];
//                 this.room = room;

//                 clearInterval(this.timeInQueueInterval);
//                 this.nextQuestion();

//                 break;
//             }
//             default: {
//                 console.log('Strange response', data);
//             }
//         }
//     });
//     this.nextQuestion();
//     // Add a disconnect listener 
//     this.socket.on('disconnect', () => {
//         this.setState('start');
//     });
// }