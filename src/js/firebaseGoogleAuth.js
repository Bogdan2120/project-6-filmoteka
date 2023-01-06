import {getAuth,signInWithPopup,GoogleAuthProvider,signOut,} from 'firebase/auth';
import { initializeApp } from "firebase/app";
import { getDatabase, set, ref, onValue, update, remove } from "firebase/database";
import Notiflix from 'notiflix';
import { chooseThemeForNotiflix } from './notiflix';

const firebaseConfig = {
  apiKey: 'AIzaSyBAxD1d6Q1iAwziX2Na8ubQZJCLhj-Pvhg',
  authDomain: 'project-b3c7f.firebaseapp.com',
  databaseURL:
    'https://project-b3c7f-default-rtdb.europe-west1.firebasedatabase.app',
  projectId: 'project-b3c7f',
  storageBucket: 'project-b3c7f.appspot.com',
  messagingSenderId: '815844014735',
  appId: '1:815844014735:web:4184be206f1dcdb43b4efa',
};
firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
export const auth = getAuth();
let user;
const headerMyLibrary = document.querySelector('#header-myLibrary')
headerMyLibrary.addEventListener('click', checkLogInForMyLibrary);
function checkLogInForMyLibrary() {
  chooseThemeForNotiflix();
  if (auth.currentUser === null) {
      headerMyLibrary.removeAttribute('href');
      Notiflix.Report.info('Oops', 'Please Log In first ', 'Okay');
  } else {
      headerMyLibrary.setAttribute('href', './library.html');
  };
};

const login = document
  .getElementById('signin')
  .addEventListener('click', signinUser);
const logout = document
  .getElementById('signout')
  .addEventListener('click', signoutUser);

const provider = new GoogleAuthProvider();

function signinUser() {
  const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
  firebase
    .auth()
    .signInWithPopup(googleAuthProvider)
    .then(function (data) {
      //console.log(data)
      document.getElementById('signin').classList.add('signOut');
      document.getElementById('signout').classList.add('signIn');
      document.getElementById('googleUser').style.display = 'block';
      renderGoogleUser(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function signoutUser() {
  firebase
    .auth()
    .signOut()
    .then(() => {
      //console.log("Sign - out successful.");
      document.getElementById('signin').classList.remove('signOut');
      document.getElementById('signout').classList.remove('signIn');
      document.getElementById('googleUser').style.display = 'none';
    })
    .catch(error => {
      console.log(error);
    });
}

function renderGoogleUser(data) {
  document.getElementById('googleUser').innerHTML = `
          <img class="user-img" src="${data.user.photoURL}">
        `;
}
