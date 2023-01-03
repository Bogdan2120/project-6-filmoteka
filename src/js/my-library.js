console.log('hello');
import { renderMoviesListTemplate } from './rendermarkup';
// Refs
const refs = {
  btnWatched: document.querySelector('[name="watched"]'),
  btnQueue: document.querySelector('[name="queue"]'),
  defaultText: document.querySelector('[name="default-text"]'),
};
// Get firebase data
const firebaseWathedFilms = firebase.database().refs('watched');
const firebaseQueueFilms = firebase.database().refs('queue');
// Cheking data
const loadWatchedFilms = () => {
  if ((firebaseWathedFilms = [''] || firebaseWathedFilms.lenght === 0)) {
    return;
  }
  defaultText.classList.add('is-hiden');
  
  firebaseWathedFilms.on('value', datas => {
    datas.forEach(el => {
      renderMoviesListTemplate(el);
    });
  });
};

const loadQueueFilms = () => {
  if ((firebaseQueueFilms = [''] || firebaseQueueFilms.lenght === 0)) {
    return;
  }
  defaultText.classList.add('is-hiden');

  firebaseQueueFilms.on('value', datas => {
    datas.forEach(el => {
      renderMoviesListTemplate(el);
    });
  });
};
// Render wathed films after loading page
loadWatchedFilms();
// Event listener
refs.btnWatched.addEventListener('click', loadWatchedFilms);
refs.btnQueue.addEventListener('click', loadQueueFilms);
