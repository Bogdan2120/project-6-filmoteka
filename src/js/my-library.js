import { getWatchedFilms, getQueueFilms } from './get-data-from-localstorage';
import { renderMoviesList, clearMarkup } from './render-cards';
import NewApiFetches from './apiFetches';

const newApiFetches = new NewApiFetches();

// Refs
export const refs = {
  btnWatched: document.querySelector('[name="watched"]'),
  btnQueue: document.querySelector('[name="queue"]'),
  defaultText: document.querySelector('[name="default-text"]'),
  gallery: document.querySelector('.my-library-film-card'),
  loading: document.querySelector('.spinner-box'),
};

// render
let watched = getWatchedFilms();
let queue = getQueueFilms();

const loadWatchedFilms = () => {
  refs.btnQueue.classList.remove('btn-header__active');
  refs.btnWatched.classList.add('btn-header__active');

  if (watched === null) {
    return;
  } else {
    clearMarkup();
    refs.loading.classList.remove('is-hidden');
    watched.map(id =>
      newApiFetches
        .fetchMovieById(id)
        .then(data => {
          renderMoviesList(data);
        })
        .catch(err => new Error(err))
        .finally(() => {
          refs.loading.classList.add('is-hidden');
        })
    );
    refs.defaultText.classList.add('is-hidden');
  }
};

const loadQueueFilms = () => {
  refs.btnQueue.classList.add('btn-header__active');
  refs.btnWatched.classList.remove('btn-header__active');
  if (queue === null) {
    return;
  } else {
    clearMarkup();
    refs.loading.classList.remove('is-hidden');

    queue.map(id =>
      newApiFetches
        .fetchMovieById(id)
        .then(data => {
          renderMoviesList(data);
        })
        .catch(err => new Error(err))
        .finally(() => {
          refs.loading.classList.add('is-hidden');
        })
    );
    refs.defaultText.classList.add('is-hidden');
  }
};

// Render wathed films after loading page
loadWatchedFilms();
// Event listener
refs.btnWatched.addEventListener('click', loadWatchedFilms);
refs.btnQueue.addEventListener('click', loadQueueFilms);