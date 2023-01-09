import { getWatchedFilms, getQueueFilms } from './get-data-from-localstorage';
import { renderMoviesList, clearMarkup } from './render-cards';

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
  refs.btnQueue.classList.remove('btn-header__active');
  refs.btnWatched.classList.add('btn-header__active');

  if (watched === null || watched.length === 0) {
    return;
  } else {
    clearMarkup();
    watched.map(el => renderMoviesList([el]));
    refs.defaultText.classList.add('is-hidden');
  }
};

const loadQueueFilms = () => {
  refs.btnQueue.classList.add('btn-header__active');
  refs.btnWatched.classList.remove('btn-header__active');

  if (queue === null || queue.length === 0) {
    return;
  } else {
    clearMarkup();
    queue.map(el => renderMoviesList([el]));
    refs.defaultText.classList.add('is-hidden');
  }
};

// Render wathed films after loading page
loadWatchedFilms();
// Event listener
refs.btnWatched.addEventListener('click', loadWatchedFilms);
refs.btnQueue.addEventListener('click', loadQueueFilms);
