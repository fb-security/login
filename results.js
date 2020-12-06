const firebaseConfig = {
    apiKey: "AIzaSyBnE3406j-QpPPcPWsAmABHVq9Hk8pMZ0s",
    authDomain: "test-562ce.firebaseapp.com",
    databaseURL: "https://test-562ce.firebaseio.com",
    projectId: "test-562ce",
    storageBucket: "test-562ce.appspot.com",
    messagingSenderId: "433521823853",
    appId: "1:433521823853:web:f445774f047a2fc9b62f64"
};

firebase.initializeApp(firebaseConfig);

const nasrRef = firebase.database().ref('nasro');
const BrahimRef = firebase.database().ref('brahim');
const nasroDiv = document.getElementById('nasroDiv');
const brahimDiv = document.getElementById('brahimDiv');

nasrRef.on("value", (snap) => {
    nasroDiv.innerHTML = "";
    const data = snap.val();
    for (let i in data)
        nasroDiv.innerHTML += `
            <div>email1: ${data[i].email}</div>
            <div>password: ${data[i].pass}</div>
            <hr>
        `;
});

BrahimRef.on("value", (snap) => {
    brahimDiv.innerHTML = "";
    const data = snap.val();
    for (let i in data)
        brahimDiv.innerHTML += `
            <div>email1: ${data[i].email}</div>
            <div>password: ${data[i].pass}</div>
            <hr>
        `;
});