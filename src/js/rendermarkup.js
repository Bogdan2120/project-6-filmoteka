import NewApiFetches from './apiFetches';
import Notiflix from 'notiflix';
import Pagination from 'tui-pagination'; //add for pagination
import pagError from '../images/catch-error-pagination.5e5b9d69.jpg';

// export let homePageUrl = document.URL;
const serializedState = JSON.stringify(document.URL);
localStorage.setItem('homePage', serializedState);

const newApiFetches = new NewApiFetches();

const refs = {
  gallery: document.querySelector('.film-cards'),
  searchForm: document.querySelector('.search-form'),
  loading: document.querySelector('.spinner-box'),
  pagination: document.querySelector('.tui-pagination'), //add for pagination
};
let searchQuery = ''; //зробив глобальною, бо потрібна в файлі пагінації (add for pagination)
let totalItems = 0;
const clearMarkup = () => {
  refs.gallery.innerHTML = '';
};

// Render
const renderMoviesListTemplate = moviesArray => {
  const markupMoviesList = moviesArray
    .map(
      ({ genre_ids, poster_path, release_date, title, vote_average, id }) => {
        let genre = genre_ids.join(', ');
        if (genre_ids.length > 2) {
          genre = genre_ids[0] + ', ' + genre_ids[1] + ', ' + 'Other';
        }
        return `
      <li class="film" data-action='${id}'>
        <div class="btn-id">
          <button data-id='${id}' class="btn-youtube-slider">
            <div class="overlay-btn-youtube-text" data-id='${id}'>
              <h2 class="btn-youtube-text" data-id='${id}'>Movie Trailer</h2>
            </div>
          </button>
        </div>
        <a href="#" class="film__link">
          <div class="film__body-img">
            <img
              src="${poster_path}"
              alt="${title}"
              class="film__img" data-action='${id}'
            />
          </div>

          <div class="film__informations">
            <p class="film__name">${title}</p>
            <p class="film__detalies">${genre} | ${release_date}</p>
          </div>
        </a>
      </li>
      `;
      }
    )
    .join('');
  clearMarkup();
  refs.gallery.insertAdjacentHTML('beforeend', markupMoviesList);
};

// -------------- Popular films for BODY ------
newApiFetches
  .fetchPopularMovie(1)
  .then(data => {
    renderMoviesListTemplate(data);
    totalItems = data[0].total_results;

    const pagination = new Pagination(refs.pagination, getOptions());
    // clearMarkup();
    renderMoviesListTemplate(data);

    pagination.off('beforeMove', loadMorePopularFilms); //add for pagination
    pagination.on('beforeMove', loadMorePopularFilms); //add for pagination
    pagination.reset(); //add for pagination
    refs.pagination.classList.remove('is-hidden'); //add for pagination
  })
  .catch(error => console.log(error));

// ------------- Search films -----------------
// Запрос fetchSearchMovie(name, page)
const handleSubmit = e => {
  e.preventDefault();
  const form = e.currentTarget;

  refs.loading.classList.remove('is-hidden');

  searchQuery = form.elements.query.value.trim();

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
        Notiflix.Notify.failure('Sorry! There are no movies with this title');
        form.elements.query.value = '';
        clearMarkup();
        return;
      }
      totalItems = data[0].total_results;
      const pagination = new Pagination(refs.pagination, getOptions());
      clearMarkup();
      renderMoviesListTemplate(data);

      pagination.off('beforeMove', loadMoreSearchFilms); //add for pagination
      pagination.on('beforeMove', loadMoreSearchFilms); //add for pagination
      pagination.reset(); //add for pagination
      refs.pagination.classList.remove('is-hidden'); //add for pagination

      form.elements.query.value = '';
    })
    .catch(error => console.log(error))
    .finally(() => {
      refs.loading.classList.add('is-hidden');
    });
};
refs.searchForm.addEventListener('submit', handleSubmit);

//--------------------------- pagination option -----------------------------------
function getOptions() {
  return {
    totalItems: `${totalItems}`,
    itemsPerPage: 20,
    visiblePages: 3,
    page: 1,
    centerAlign: true,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<strong class="tui-page-btn tui-is-selected tui-page-btn-color">{{page}}</strong>',
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
}

function loadMoreSearchFilms(e) {
  const currentPage = e.page;
  refs.loading.classList.remove('is-hidden');

  newApiFetches
    .fetchSearchMovie(searchQuery, currentPage)
    .then(data => {
      renderMoviesListTemplate(data);
    })
    .catch(error => console.log(error))
    .finally(() => {
      refs.loading.classList.add('is-hidden');
    });
}
const pagErrorImg = `<img src="${pagError}"></img>`;

function loadMorePopularFilms(e) {
  const currentPage = e.page;
  refs.loading.classList.remove('is-hidden');

  newApiFetches
    .fetchPopularMovie(currentPage)
    .then(data => {
      renderMoviesListTemplate(data);
    })
    .catch(error => {
      clearMarkup();
      refs.gallery.insertAdjacentHTML('beforeend', pagErrorImg);
    })
    .finally(() => {
      refs.loading.classList.add('is-hidden');
    });
}

//--------------------------- /pagination option -----------------------------------
