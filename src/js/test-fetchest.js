import NewApiFetches from './js/apiFetches';
const newApiFetches = new NewApiFetches();

newApiFetches
  .fetchTrendingMovie()
  .then(data => {
    console.log('Trending ', data);
  })
  .catch(error => console.log(error));

newApiFetches
  .fetchPopularMovie()
  .then(data => {
    console.log('Popular ', data);
  })
  .catch(error => console.log(error));

newApiFetches
  .fetchSearchMovie('max', 1)
  .then(data => {
    console.log('Search ', data);
  })
  .catch(error => console.log(error));

newApiFetches
  .fetchDetailsMovie(76600)
  .then(data => {
    console.log('Details ', data);
  })
  .catch(error => console.log(error));

// ================================
