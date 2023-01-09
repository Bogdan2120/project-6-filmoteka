import { refs } from './my-library';

export const clearMarkup = () => {
  refs.gallery.innerHTML = '';
};

export const renderMoviesList = moviesArray => {
  const markupMoviesList = moviesArray
    .map(
      ({
        genres,
        poster_path,
        release_date,
        original_title,
        vote_average,
        id,
      }) => {
        let genre = genres.join(', ');
        if (genres.length > 2) {
          genre = genres[0] + ', ' + genres[1] + ', ' + 'Other';
        }
        return `
      <li class="film my-library-film">
        <a href="#" class="film__link">
          <div class="film__body-img">
            <img
              src="${poster_path}"
              alt="${original_title}"
              class="film__img"
              data-action="${id}"
            />
          </div>

          <div class="film__informations">
            <p class="film__name">${original_title}</p>
            <p class="film__detalies">${genre} | ${release_date}</p>
          </div>
        </a>
      </li>
      `;
      }
    )
    .join('');

  refs.gallery.insertAdjacentHTML('beforeend', markupMoviesList);
};
