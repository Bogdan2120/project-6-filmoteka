import NewApiFetches from './apiFetches';
import Notiflix from 'notiflix';
import Pagination from 'tui-pagination'; //add for pagination
import 'tui-pagination/dist/tui-pagination.css'; //add for pagination

const newApiFetches = new NewApiFetches();

const refs = {
  gallery: document.querySelector('.film-cards'),
  searchForm: document.querySelector('.search-form'),
  pagination: document.querySelector('.tui-pagination'), //add for pagination
};
let searchQuery = ''; //зробив глобальною, бо потрібна в файлі пагінації (add for pagination)

const clearMarkup = () => {
  refs.gallery.innerHTML = '';
};

// Render
const renderMoviesListTemplate = moviesArray => {
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
    .fetchSearchMovie(searchQuery, 1)
    .then(data => {
      if (data.length === 0) {
        //  ----------------------add for pagination { -----------------------
        const isHiddenClass = refs.pagination.classList.contains('is-hidden');
        if (!isHiddenClass) {
          refs.pagination.classList.add('is-hidden');
        }
        //  ----------------------} add for pagination -----------------------
        Notiflix.Notify.failure('Sorry! There is no movies with this title');
        form.elements.query.value = '';
        return;
      }
      clearMarkup();
      renderMoviesListTemplate(data);

      pagination.off('beforeMove', loadMoreFilms); //add for pagination
      pagination.on('beforeMove', loadMoreFilms); //add for pagination
      pagination.reset(); //add for pagination
      refs.pagination.classList.remove('is-hidden'); //add for pagination

      form.elements.query.value = '';
    })
    .catch(error => console.log(error));
};
refs.searchForm.addEventListener('submit', handleSubmit);

//--------------------------- pagination option -----------------------------------
const options = {
  totalItems: 250,
  itemsPerPage: 20,
  visiblePages: 7,
  page: 1,
  centerAlign: true,
  template: {
    page: '<a href="#" class="tui-page-btn">{{page}}</a>',
    currentPage:
      '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
    moveButton:
      '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(refs.pagination, options);

function loadMoreFilms(e) {
  const currentPage = e.page;

  newApiFetches
    .fetchSearchMovie(searchQuery, currentPage)
    .then(data => {
      renderMoviesListTemplate(data);
      console.log('Search ', data);
    })
    .catch(error => console.log(error));
}
//--------------------------- /pagination option -----------------------------------
