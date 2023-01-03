import { refs } from './my-library';
import { renderMoviesList } from './render-cards';

// get database from localstorage and render

export function loadWatchedFilms() {
  try {
    let watched = [];
    const watchedItems = localStorage.getItem('watched');
    const parsedWatchedItems = JSON.parse(localStorage.getItem('watched'));
    watched.push(parsedWatchedItems);

    if (watched.lenght === 1) {
      return;
    } else {
      refs.defaultText.classList.add('is-hiden');
      console.log(watched);
      return renderMoviesList(watched);
    }
  } catch (err) {
    console.log(err.message);
  }
}

export function loadQueueFilms() {
  try {
    let queue = [];
    const parseQueuedItems = JSON.parse(localStorage.getItem('queue'));
    queue.push(parseQueuedItems);

    if (queue.lenght === 1) {
      return;
    } else {
      refs.defaultText.classList.add('is-hiden');
      console.log(queue);
      return renderMoviesList(queue);
    }
  } catch (err) {
    console.log(err.message);
  }
}
