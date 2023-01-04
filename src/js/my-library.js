import { getWatchedFilms, getQueueFilms } from './get-data-from-localstorage';
import { renderMoviesList } from './render-cards';
import Notiflix from 'notiflix';

// Refs
export const refs = {
  btnWatched: document.querySelector('[name="watched"]'),
  btnQueue: document.querySelector('[name="queue"]'),
  defaultText: document.querySelector('[name="default-text"]'),
  myLibraryGallery: document.querySelector('.my-library-film-card'),
};

// render cards
let watched = [];
let queue = [];

const loadWatchedFilms = () => {
  watched = getWatchedFilms();

  if (watched === null) {
    console.log(watched);
    return;
  } else {
    console.log('click');
    refs.defaultText.classList.add('is-hidden');
    console.log(watched);
    // return renderMoviesList(watched);
  }
};

const loadQueueFilms = () => {
  queue = getQueueFilms();
  if (queue === null) {
    console.log(queue);
    return;
  } else {
    console.log('click');
    refs.defaultText.classList.add('is-hidden');
    console.log(queue);
    // return renderMoviesList(queue);
  }
};

// Render wathed films after loading page
loadWatchedFilms();
// Event listener
refs.btnWatched.addEventListener('click', loadWatchedFilms);
refs.btnQueue.addEventListener('click', loadQueueFilms);
