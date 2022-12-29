import NewApiFetches from './apiFetches';
import 'tui-pagination/dist/tui-pagination.css';
// const newApiFetches = new NewApiFetches();

import Pagination from 'tui-pagination';

//------------------------TEMP-------------------
const refs = {
  pagination: document.querySelector('.tui-pagination'),
  cards: document.querySelector('.film-cards'),
  searchBtn: document.querySelector('.search__btn'),
  searchForm: document.querySelector('.search-form'),
  searchInput: document.querySelector('.search__input'),
};

console.log(refs);

refs.searchForm.addEventListener('submit', searchSubmit);

function searchSubmit(e) {
  e.preventDefault();
  searchQuery = e.target.searchQuery.value.trim();

  newApiFetches
    .fetchSearchMovie('max', 1)
    .then(data => {
      console.log('Search ', data);
    })
    .catch(error => console.log(error));

  // console.log(searchQuery);
}
//--------------------------/TEMP-----------------

const PER_PAGE = 20;

const options = {
  totalItems: 0,
  itemsPerPage: PER_PAGE,
  visiblePages: 7,
  page: 1,
  centerAlign: false,
  template: {
    page: '<a href="#" class="tui-custon">{{page}}</a>',
    currentPage:
      '<span class="tui-custon tui-custon-is-selected">{{page}}</span>',
    moveButton:
      '<a href="#" class="tui-custon tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</a>',
    disabledMoveButton:
      '<span class="tui-custon tui-is-disabled tui-{{type}}">' +
      '<span class="tui-ico-{{type}}">{{type}}</span>' +
      '</span>',
    moreButton:
      '<a href="#" class="tui-custon tui-{{type}}-is-ellip">' +
      '<span class="tui-ico-ellip">...</span>' +
      '</a>',
  },
};

const pagination = new Pagination(refs.pagination, options);

const page = pagination.getCurrentPage();

pagination.on('beforeMove', loadMoreFilms);

//---------------------колбек події пагінації------------------

function loadMoreFilms(e) {
  const currentPage = e.page;

  newApiFetches
    .fetchSearchMovie('max', currentPage)
    .then(data => {
      console.log('Search ', data);
    })
    .catch(error => console.log(error));
  //   spinerPlay();
  // unsplash
  //   .getPopylarPhotos(currentPage)
  //   .then(({ results }) => {
  //     const markup = createMarkup(results); //

  //     refs.list.innerHTML = markup;
  //   })
  //   .catch(error => {
  //     Notify.failure(error.message);
  //     refs.pagination.classList.add('is-hidden');
  //   })
  //   .finally(() => {
  //     spinerStop();
  //   });
}
//----------------створення масиву розмітки елементів---------------

function createMarkup(photos) {
  return photos
    .map(
      ({ urls, alt_description }) => /*html*/ `<li class="gallery__item">
    <img src="${urls.small}" alt="${alt_description}" class="gallery-img">
</li>`
    )
    .join('');
}

//------------------------імпорт fetchSearchMovie-----------------------
const newApiFetches = new NewApiFetches();

//-----------------------------------------------------------------------
