
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
const headerMyLibrary = document.querySelector('#header-myLibrary')

headerMyLibrary.addEventListener('click', checkLogInForMyLibrary);

function checkLogInForMyLibrary() {
  chooseThemeForNotiflix();
  if (auth.currentUser === null) {
      headerMyLibrary.removeAttribute('href');
      Notiflix.Report.info('Oops', 'Please Log In first ', 'Okay');
  } else {
      headerMyLibrary.setAttribute('href', './my_library.html');
  };
};

document.getElementById('dashboard').style.display="none"

document.getElementById('login').addEventListener('click', GoogleLogin)
document.getElementById('logout').addEventListener('click', LogoutUser)

let provider = new firebase.auth.GoogleAuthProvider()

function GoogleLogin(){
  console.log('Login Btn Call')
  firebase.auth().signInWithPopup(provider).then(res=>{
    console.log(res.user)

    showUserDetails(res.user)
  }).catch(e=>{
    console.log(e)
  })
}
function showUserDetails(user){
  document.getElementById('userDetails').innerHTML = `
    <img src="${user.photoURL}" style="width:30%" class="photo_user">
    <p class="name">${user.displayName}</p>
  `
}

function checkAuthState(){
  firebase.auth().onAuthStateChanged(user=>{
    if(user){
      document.getElementById('LoginScreen').style.display="none"
      document.getElementById('dashboard').style.display="block"
      showUserDetails(user)
    }else{

    }
  })
}

function LogoutUser(){
  console.log('Logout Btn Call')
  firebase.auth().signOut().then(()=>{
    document.getElementById('LoginScreen').style.display="block"
    document.getElementById('dashboard').style.display="none"
  }).catch(e=>{
    console.log(e)
  })
}
checkAuthState()
