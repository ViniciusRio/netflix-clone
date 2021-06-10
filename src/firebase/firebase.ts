import firebase from 'firebase';

const app = firebase.initializeApp({
    apiKey: 'AIzaSyAmbtPjVf52IaiNmfRW4VvrnvYNXMgvGVk',
    authDoimain: 'netflix-clone-two-a277d.firebaseapp.com',
    databaseURL: 'https://netflix-clone-two-a277d-default-rtdb.firebaseio.com',
    storageBucket: 'netflix-clone-two-a277d.appspot.com',
});

const firebaseDatabase = app.database();

export default firebaseDatabase;