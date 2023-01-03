import NewApiFetches from './apiFetches';
import Notiflix from 'notiflix';
const newApiFetches = new NewApiFetches();

const refs = {
  gallery: document.querySelector('.film-cards'),
  searchForm: document.querySelector('.search-form'),
};

const clearMarkup = () => {
  refs.gallery.innerHTML = '';
};

// Render
export const renderMoviesListTemplate = moviesArray => {
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

  refs.gallery.insertAdjacentHTML('beforeend', markupMoviesList);
};

// -------------- Popular films for BODY ------
newApiFetches
  .fetchPopularMovie()
  .then(data => {
    console.log(data);
    renderMoviesListTemplate(data);
  })
  .catch(error => console.log(error));

// ------------- Search films -----------------
// Запрос fetchSearchMovie(name, page)
const handleSubmit = e => {
  e.preventDefault();
  const form = e.currentTarget;
  const searchQuery = form.elements.query.value.trim();

  newApiFetches
    .fetchSearchMovie(searchQuery)
    .then(data => {
      if (data.length === 0) {
        Notiflix.Notify.failure('Sorry! There is no movies with this title');
        form.elements.query.value = '';
        return;
      }
      clearMarkup();
      renderMoviesListTemplate(data);
      form.elements.query.value = '';
    })
    .catch(error => console.log(error));
};

refs.searchForm.addEventListener('submit', handleSubmit);
