import { renderMoviesListTemplate } from './rendermarkup';

const refs = {
  btnWatched: document.querySelector('[name="watched"]'),
  btnQueue: document.querySelector('[name="queue"]'),
};
// get firebase data
const firebaseWathedFilms = firebase.database().refs('watched');
const firebaseQueueFilms = firebase.database().refs('queue');
// cheking data
const loadWatchedFilms = () => {
  if (!firebaseWathedFilms) {
    console.log('Empty');
    return;
  }
  firebaseWathedFilms.on('value', datas => {
    datas.array.forEach(el => {
      renderMoviesListTemplate(el);
    });
  });
};

const loadQueueFilms = () => {
  if (!firebaseQueueFilms) {
    console.log('Empty');
    return;
  }
  firebaseQueueFilms.on('value', datas => {
    datas.array.forEach(el => {
      renderMoviesListTemplate(el);
    });
  });
};
// render wathed films after loading page
loadWatchedFilms();
// Event listener
refs.btnWatched.addEventListener('click', loadWatchedFilms);
refs.btnQueue.addEventListener('click', loadQueueFilms);
