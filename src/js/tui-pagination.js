import NewApiFetches from './apiFetches';
import 'tui-pagination/dist/tui-pagination.css';
// const newApiFetches = new NewApiFetches();
import { createMarkup } from './getCardsTemplate';
import Pagination from 'tui-pagination';

//------------------------TEMP-------------------
const refs = {
  pagination: document.querySelector('.tui-pagination'),
  cards: document.querySelector('.film-cards'),
  searchBtn: document.querySelector('.search__btn'),
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search__input'),
  list: document.querySelector('.film-cards'),
};
//------------------------імпорт fetchSearchMovie-----------------------
const newApiFetches = new NewApiFetches();
//------------------------/імпорт fetchSearchMovie-----------------------
// console.log(refs);

let searchQuery = '';
let totalItems = 0;
const PER_PAGE = 20;

refs.searchForm.addEventListener('submit', searchSubmit);

function searchSubmit(e) {
  e.preventDefault();
  searchQuery = e.target.searchQuery.value.trim();

  newApiFetches
    .fetchSearchMovie(searchQuery, 1)
    .then(data => {
      if (data.length === 0) {
        refs.pagination.classList.add('is-hidden');
        refs.list.innerHTML = '';
        return;
      }
      // totalItems = data.total_results;
      // console.log(data);
      // console.log(totalItems);
      render(data);
      pagination.off('beforeMove', loadMoreFilms);
      pagination.on('beforeMove', loadMoreFilms);

      pagination.reset();
      refs.pagination.classList.remove('is-hidden');
      // console.log(data.length);
    })
    .catch(error => console.log(error));
  e.target.reset();
}

function render(data) {
  const markup = createMarkup(data);

  refs.list.innerHTML = '';
  refs.list.innerHTML = markup;
  // refs.searchInput.value = '';
}

//--------------------------/TEMP-----------------

const options = {
  totalItems: 250,
  itemsPerPage: PER_PAGE,
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

// const page = pagination.getCurrentPage();

//---------------------колбек події пагінації------------------

function loadMoreFilms(e) {
  const currentPage = e.page;

  newApiFetches
    .fetchSearchMovie(searchQuery, currentPage)
    .then(data => {
      render(data);
      console.log('Search ', data);
    })
    .catch(error => console.log(error));
}
