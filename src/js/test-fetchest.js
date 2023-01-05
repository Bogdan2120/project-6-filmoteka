import NewApiFetches from './apiFetches';
import * as basicLightbox from 'basiclightbox';

const newApiFetches = new NewApiFetches();

// ------------ Tranding films for SLIDERS -----
newApiFetches
  .fetchTrendingMovie()
  .then(data => {
    console.log('Trending ', data);
  })
  .catch(error => console.log(error));

// -------------- Popular films for BODY ------
newApiFetches
  .fetchPopularMovie()
  .then(data => {
    console.log('Popular ', data);
  })
  .catch(error => console.log(error));

// ------------- Search films -----------------
// Запрос fetchSearchMovie(name, page)
newApiFetches
  .fetchSearchMovie('max', 1)
  .then(data => {
    console.log('Search ', data);
  })
  .catch(error => console.log(error));

// ----------- Ditails for MODAL WINDOW -------
// Запрос newApiFetches fetchDetailsMovie(id)
newApiFetches
  .fetchDetailsMovie(76600)
  .then(data => {
    console.log('Details ', data);
  })
  .catch(error => console.log(error));

// ------------- Trailer ----------------------
// Запрос newApiFetches fetchTrailerMovie(id)
const list = document.querySelector('body');
newApiFetches
  .fetchTrailerMovie(76341)
  .then(data => {
    // console.log('Trailer ', data.results);
    const id = data.results[0].key;
    const instance = basicLightbox.create(`
  <iframe width="560" height="315" src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
    instance.show();
  })
  .catch(error => console.log(error));
