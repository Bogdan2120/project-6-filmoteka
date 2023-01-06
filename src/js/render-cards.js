import { refs } from './my-library';

export const clearMarkup = () => {
  refs.gallery.innerHTML = '';
};

export const renderMoviesList = moviesArray => {
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
