import axios from 'axios';
const URL = `https://api.themoviedb.org/3`;
const KEY = `633bd9c8c9bc68a8c4a40449237d5fcd`;

export default class NewApiFetches {
  constructor() {}

  async fetchGenresMovie() {
    return await axios.get(`${URL}/genre/movie/list?api_key=${KEY}`);
  }

  async fetchTrendingMovie() {
    const requestArray = [];
    const genresList = await this.fetchGenresMovie();
    const response = await axios.get(
      `${URL}/trending/movie/week?api_key=${KEY}`
    );
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    response.data.results.map(el => {
      requestArray.push({
        id: el.id,
        poster_path: `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`,
        title: el.title,
        release_date: el.release_date.slice(0, 4),
        vote_average: el.vote_average,
        genre_ids: el.genre_ids.map(
          id => genresList.data.genres.find(el => el.id === id).name
        ),
      });
    });
    return requestArray;
  }

  async fetchPopularMovie() {
    const requestArray = [];
    const genresList = await this.fetchGenresMovie();
    const response = await axios.get(`${URL}/movie/popular?api_key=${KEY}`);
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    response.data.results.map(el => {
      requestArray.push({
        id: el.id,
        poster_path: `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`,
        title: el.title,
        release_date: el.release_date.slice(0, 4),
        vote_average: el.vote_average,
        genre_ids: el.genre_ids.map(
          id => genresList.data.genres.find(el => el.id === id).name
        ),
      });
    });
    return requestArray;
  }

  async fetchSearchMovie(newValue, newPage) {
    const requestArray = [];
    this.value = newValue;
    this.page = newPage;
    const genresList = await this.fetchGenresMovie();
    const response = await axios.get(
      `${URL}/search/movie?query=${this.value}&api_key=${KEY}&language=en-US&page=${this.page}&include_adult=false`
    );
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    response.data.results.map(el => {
      requestArray.push({
        id: el.id,
        poster_path: `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${el.poster_path}`,
        title: el.title,
        release_date: el.release_date ? el.release_date.slice(0, 4) : 'n/a',
        vote_average: el.vote_average ? el.vote_average : 'n/a',
        genre_ids: el.genre_ids.map(id =>
          genresList.data.genres
            ? genresList.data.genres.find(el => el.id === id).name
            : 'n/a'
        ),
      });
    });
    return requestArray;
  }

  async fetchDetailsMovie(value) {
    const requestDetails = {};
    const genresList = await this.fetchGenresMovie();
    const response = await axios.get(
      `${URL}/movie/${value}?api_key=${KEY}&language=en-US`
    );
    if (response.status !== 200) {
      throw new Error(response.status);
    }
    requestDetails.poster_path = `https://www.themoviedb.org/t/p/w300_and_h450_bestv2${response.data.poster_path}`;
    requestDetails.id = response.data.id;
    requestDetails.vote_average = response.data.vote_average;
    requestDetails.vote_count = response.data.vote_count;
    requestDetails.popularity = response.data.popularity;
    requestDetails.original_title = response.data.original_title;
    requestDetails.overview = response.data.overview;
    requestDetails.genres = response.data.genres.map(gen => {
      return gen.name;
    });
    return requestDetails;
  }
}
