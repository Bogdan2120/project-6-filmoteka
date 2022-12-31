import NewApiFetches from './apiFetches';
import 'tui-pagination/dist/tui-pagination.css';
// import { createMarkup } from './getCardsTemplate';
import Pagination from 'tui-pagination';
import renderMoviesListTemplate from './rendermarkup';
import searchQuery from './rendermarkup';
// import refs from './rendermarkup';

//------------------------TEMP-------------------
const refs = {
  pagination: document.querySelector('.tui-pagination'),
};
//------------------------імпорт fetchSearchMovie-----------------------
const newApiFetches = new NewApiFetches();
//------------------------/імпорт fetchSearchMovie-----------------------
// console.log(refs);

// let searchQuery = '';
let totalItems = 0;
const PER_PAGE = 20;

// refs.searchForm.addEventListener('submit', searchSubmit);

//--------------------------/TEMP-----------------

// export const options = {
//   totalItems: 250,
//   itemsPerPage: PER_PAGE,
//   visiblePages: 7,
//   page: 1,
//   centerAlign: true,
//   template: {
//     page: '<a href="#" class="tui-page-btn">{{page}}</a>',
//     currentPage:
//       '<strong class="tui-page-btn tui-is-selected">{{page}}</strong>',
//     moveButton:
//       '<a href="#" class="tui-page-btn tui-{{type}} custom-class-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</a>',
//     disabledMoveButton:
//       '<span class="tui-page-btn tui-is-disabled tui-{{type}} custom-class-{{type}}">' +
//       '<span class="tui-ico-{{type}}">{{type}}</span>' +
//       '</span>',
//     moreButton:
//       '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip custom-class-{{type}}">' +
//       '<span class="tui-ico-ellip">...</span>' +
//       '</a>',
//   },
// };

// export const pagination = new Pagination(refs.pagination, options);
// console.log('refs.pagination (tui-pagination)', refs.pagination);
// const page = pagination.getCurrentPage();

//---------------------колбек події пагінації------------------

// export function loadMoreFilms(e) {
//   const currentPage = e.page;

//   newApiFetches
//     .fetchSearchMovie(searchQuery, currentPage)
//     .then(data => {
//       renderMoviesListTemplate(data);
//       console.log('Search ', data);
//     })
//     .catch(error => console.log(error));
// }
