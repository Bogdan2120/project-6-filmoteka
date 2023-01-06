import { getWatchedFilms, getQueueFilms } from './get-data-from-localstorage';
import { renderMoviesList, clearMarkup } from './render-cards';
import axios from 'axios';
import NewApiFetches from './apiFetches';

const URL = `https://api.themoviedb.org/3`;
const KEY = `633bd9c8c9bc68a8c4a40449237d5fcd`;
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

const loadWatchedFilms = () => {
  if (watched === null) {
    return;
  } else {
    clearMarkup();

    watched.map(id =>
      newApiFetches
        .fetchMovieById(id)
        .then(data => {
          console.log(data);
          renderMoviesList(data);
        })
        .catch(err => console.log(err))
    );
    refs.defaultText.classList.add('is-hidden');
  }
};

let queue = getQueueFilms();

const loadQueueFilms = () => {
  console.log(queue);

  if (queue === null) {
    return;
  } else {
    clearMarkup();

    queue.map(id =>
      newApiFetches
        .fetchMovieById(id)
        .then(data => {
          console.log(data);
          renderMoviesList(data);
        })
        .catch(err => console.log(err))
    );
    refs.defaultText.classList.add('is-hidden');
  }
};

// Render wathed films after loading page
loadWatchedFilms();
// Event listener
refs.btnWatched.addEventListener('click', loadWatchedFilms);
refs.btnQueue.addEventListener('click', loadQueueFilms);
