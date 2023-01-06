import { getWatchedFilms, getQueueFilms } from './get-data-from-localstorage';
// import { renderMoviesList } from './render-cards';
import axios from 'axios';

const URL = `https://api.themoviedb.org/3`;
const KEY = `633bd9c8c9bc68a8c4a40449237d5fcd`;

// Refs
export const refs = {
  btnWatched: document.querySelector('[name="watched"]'),
  btnQueue: document.querySelector('[name="queue"]'),
  defaultText: document.querySelector('[name="default-text"]'),
  myLibraryGallery: document.querySelector('.my-library-film-card'),
};

const renderMoviesList = moviesArray => {
  const markupMoviesList = moviesArray
    .map(({ genre_ids, poster_path, release_date, title, vote_average }) => {
      let genre = genre_ids.join(', ');
      if (genre_ids.length > 2) {
        genre = genre_ids[0] + ', ' + genre_ids[1] + ', ' + 'Other';
      }
      return `
      <li class="film">
        <a href="#" class="film__link">
          <div class="film__body-img">
            <img
              src="${poster_path}"
              alt="${title}"
              class="film__img"
            />
          </div>

          <div class="film__informations">
            <p class="film__name">${title}</p>
            <p class="film__detalies">${genre} | ${release_date}</p>
          </div>
        </a>
      </li>
      `;
    })
    .join('');

  refs.myLibraryGallery.insertAdjacentHTML('beforeend', markupMoviesList);
};
let watched = getWatchedFilms();

const loadWatchedFilms = () => {
  if (watched === null) {
    return;
  } else {
    let arr = watched.map(id =>
      axios
        .get(`${URL}/movie/${id}?api_key=${KEY}`)
        .then(resp => renderMoviesList(resp.data))
        .catch(() => [])
    );
    refs.defaultText.classList.add('is-hidden');
  }
};

const loadQueueFilms = () => {
  const queue = getQueueFilms();
  console.log(queue);

  if (queue === null) {
    return;
  } else {
    queue.map(el => axios.get(`${URL}/movie/${el}?api_key=${KEY}`));

    refs.defaultText.classList.add('is-hidden');
    // return renderMoviesList(queue);
  }
};

// Render wathed films after loading page
loadWatchedFilms();
// Event listener
refs.btnWatched.addEventListener('click', loadWatchedFilms);
refs.btnQueue.addEventListener('click', loadQueueFilms);
