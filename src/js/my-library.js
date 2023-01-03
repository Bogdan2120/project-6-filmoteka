import { loadWatchedFilms, loadQueueFilms } from './get-data-from-localstorage';

// Refs
export const refs = {
  btnWatched: document.querySelector('[name="watched"]'),
  btnQueue: document.querySelector('[name="queue"]'),
  defaultText: document.querySelector('[name="default-text"]'),
  myLibraryGallery: document.querySelector('.my-library-film-card'),
};

// Render wathed films after loading page
loadWatchedFilms();
// Event listener
refs.btnWatched.addEventListener('click', loadWatchedFilms);
refs.btnQueue.addEventListener('click', loadQueueFilms);
