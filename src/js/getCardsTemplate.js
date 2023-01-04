export function createMarkup(filmsGalery) {
  return filmsGalery
    .map(
      ({
        title,
        poster_path,
        release_date,
        genre_ids,
      }) => /*html*/ `<li class="film">
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
            <p class="film__detalies">${genre_ids} | ${release_date}</p>
          </div>
        </a>
      </li>`
    )
    .join('');
}
