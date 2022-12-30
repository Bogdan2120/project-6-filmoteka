import { getAuth, signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";


 const firebaseConfig = {
    apiKey: "AIzaSyBAxD1d6Q1iAwziX2Na8ubQZJCLhj-Pvhg",
    authDomain: "project-b3c7f.firebaseapp.com",
    databaseURL: "https://project-b3c7f-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "project-b3c7f",
    storageBucket: "project-b3c7f.appspot.com",
    messagingSenderId: "815844014735",
    appId: "1:815844014735:web:4184be206f1dcdb43b4efa"
  };
firebase.initializeApp(firebaseConfig);

const login = document.getElementById('signin').addEventListener('click', signinUser);
const logout = document.getElementById('signout').addEventListener('click', signoutUser)

const provider = new GoogleAuthProvider();


function signinUser() {
    const googleAuthProvider = new firebase.auth.GoogleAuthProvider;
    firebase.auth().signInWithPopup(googleAuthProvider)
        .then(function (data){
          //console.log(data)
          document.getElementById('signin').classList.add('signOut');
          document.getElementById('signout').classList.add('signIn');
          document.getElementById('googleUser').style.display = "block";
            renderGoogleUser(data);
        })
        .catch(function(error){
            console.log(error)
        })
    }

function signoutUser(){
    firebase.auth().signOut().then(() => {
        //console.log("Sign - out successful.");
        document.getElementById('signin').classList.remove('signOut');
      document.getElementById('signout').classList.remove('signIn');
      document.getElementById('googleUser').style.display = "none";
    }).catch(error => {
          console.log(error)
        })
      }


      function renderGoogleUser(data){
          document.getElementById('googleUser').innerHTML = `
          <img class="user-img" src="${data.user.photoURL}">
        `
}