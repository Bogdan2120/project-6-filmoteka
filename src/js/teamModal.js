import { teamItem } from './super-team';
import simpleLightbox from 'simplelightbox';

(() => {
  const refs = {
    openModalBtn: document.querySelector('[data-modal-open]'),
    closeModalBtn: document.querySelector('[data-modal-close]'),
    modal: document.querySelector('[data-modal]'),
  };

  refs.openModalBtn.addEventListener('click', toggleModal);
  refs.closeModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.modal.classList.toggle('is-hidden');
  }
})();

const refs = {
  galleryEl: document.querySelector('.super-team'),
};

// console.log(refs.galleryEl);

function createUnit(data) {
  return data
    .map(({ name, howDo, title, previewImg, largeImg }) => {
      return `<li class="unit">
    <a href="${largeImg}">
        <img src="${previewImg}" alt="${name}" title="${title}" class="unit-img" />
    </a>
    <div>
    <p class="unit-info"> ${name}</p>
    <p class="unit-info">Make: ${howDo}</p>
    </div>
</li>`;
    })
    .join('');
}

function blockStandartAction(evt) {
  evt.preventDefault();

  if (evt.target.nodeName !== 'IMG') {
    console.log('this not IMG');
    return;
  }
}

function onShowPicture(evt) {
  blockStandartAction(evt);
  // open
  var lightbox = new SimpleLightbox('.super-team a', {});
}

// show event
const galleryEl = document.querySelector('.super-team');

galleryEl.addEventListener('click', onShowPicture);

// markup
const imgMarkup = createUnit(teamItem);
galleryEl.insertAdjacentHTML('beforeend', imgMarkup);
