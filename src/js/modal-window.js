import modal from '../templates/modal.hbs';
import * as basicLightbox from 'basiclightbox';
import 'basiclightbox/dist/basicLightbox.min.css';

import { initStorageButton } from './initModalButtons';
import NewApiFetches from './apiFetches';
import Notiflix from 'notiflix';

import SVG from '../images/symbol-arial.svg';

const newApiFetches = new NewApiFetches();

const filmModal = document.querySelector('.cards-containe');
const loading = document.querySelector('.spinner-box');

filmModal.addEventListener('click', selectFilmSlider);

function selectFilmSlider(event) {
  event.preventDefault();
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  renfetch(event.target.dataset.action);
}

const renfetch = id => {
  loading.classList.remove('is-hidden');
  newApiFetches
    .fetchDetailsMovie(id)
    .then(data => {
      const genresJoin = data.genres.join(', ');
      const popularityFixed = data.popularity.toFixed(1);
      const voteFixed = data.vote_average.toFixed(1);
      const value = { ...data, genresJoin, SVG, popularityFixed, voteFixed };
      const modalCreate = modal(value);
      const instance = basicLightbox.create(modalCreate);
      instance.show();
      initStorageButton(data);
      const closeBtnCard = instance
        .element()
        .querySelector('.modal-card-film-close-btn');
      closeBtnCard.addEventListener('click', instance.close);
      window.addEventListener('keydown', handleKeyPress);

      function handleKeyPress({ code }) {
        if (code === 'Escape' && instance.visible()) {
          instance.close();
        }
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Sorry! There are no movie information found');
      console.log(error);
    })
    .finally(() => {
      loading.classList.add('is-hidden');
    });
};
