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
};

// render
let watched = getWatchedFilms();
let queue = getQueueFilms();

const loadWatchedFilms = () => {
  if (watched === null) {
    return;
  } else {
    clearMarkup();

    watched.map(id =>
      newApiFetches
        .fetchMovieById(id)
        .then(data => {
          renderMoviesList(data);
        })
        .catch(err => new Error(err))
    );
    refs.defaultText.classList.add('is-hidden');
  }
};

const loadQueueFilms = () => {
  if (queue === null) {
    return;
  } else {
    clearMarkup();

    queue.map(id =>
      newApiFetches
        .fetchMovieById(id)
        .then(data => {
          renderMoviesList(data);
        })
        .catch(err => new Error(err))
    );
    refs.defaultText.classList.add('is-hidden');
  }
};

// Render wathed films after loading page
loadWatchedFilms();
// Event listener
refs.btnWatched.addEventListener('click', loadWatchedFilms);
refs.btnQueue.addEventListener('click', loadQueueFilms);
