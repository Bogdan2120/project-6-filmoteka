import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { refs } from './my-library';
// import { renderMoviesListTemplate } from './rendermarkup';

// config
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

initializeApp(firebaseConfig);
// get database from Firebase
const db = getFirestore();

const collectionWatchedRef = collection(db, 'Watched');
const collectionQueueRef = collection(db, 'Queue');

export function loadWatchedFilms() {
  getDocs(collectionWatchedRef)
    .then(snapshot => {
      let watched = [];
      snapshot.docs.forEach(doc => {
        watched.push({ ...doc.data() });
        if (watched.length === 0) {
          return;
        }
        refs.defaultText.classList.add('is-hiden');
        console.log(watched);
      });
    })
    .catch(err => console.log(err.message));
}

export function loadQueueFilms() {
  getDocs(collectionQueueRef)
    .then(snapshot => {
      let queue = [];
      snapshot.docs.forEach(doc => {
        queue.push({ ...doc.data() });
        if (queue.length === 0) {
          return;
        }
        refs.defaultText.classList.add('is-hiden');
        console.log(queue);
      });
    })
    .catch(err => console.log(err.message));
}
