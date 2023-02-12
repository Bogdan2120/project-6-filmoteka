import { getWatchedFilms, getQueueFilms } from './get-data-from-localstorage';
import { renderMoviesList, clearMarkup } from './render-cards';
import nothingHereUrl from '../images/movie.png';
// Refs
export const refs = {
  btnWatched: document.querySelector('[name="watched"]'),
  btnQueue: document.querySelector('[name="queue"]'),
  defaultText: document.querySelector('[name="default-text"]'),
  gallery: document.querySelector('.my-library-film-card'),
  buttonW: document.querySelector('.modal-watched-btn'),
};

const btnModal = document.querySelector('body');
btnModal.addEventListener('click', selectBtn);

function selectBtn(event) {
  if (event.target.classList.contains('modal-watched-btn')) {
    loadWatchedFilms();
  }
  if (event.target.classList.contains('modal-queue-btn')) {
    loadQueueFilms();
  }
  return;
}

const createMovieList = value => {
  if (value === null || value.length === 0) {
    refs.gallery.innerHTML = `<img style="width: 500px" src="${nothingHereUrl}" alt="There is nothing" />`;
  } else {
    clearMarkup();
    value.map(el => renderMoviesList([el]));
    refs.defaultText.classList.add('is-hidden');
  }
};

const loadWatchedFilms = () => {
  let watched = getWatchedFilms();
  refs.btnQueue.classList.remove('btn-header__active');
  refs.btnWatched.classList.add('btn-header__active');
  createMovieList(watched);
};

const loadQueueFilms = () => {
  let queue = getQueueFilms();
  refs.btnQueue.classList.add('btn-header__active');
  refs.btnWatched.classList.remove('btn-header__active');
  createMovieList(queue);
};

// Render wathed films after loading page

loadWatchedFilms();

// Event listener
refs.btnWatched.addEventListener('click', loadWatchedFilms);
refs.btnQueue.addEventListener('click', loadQueueFilms);
