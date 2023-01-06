import { teamItem } from './super-team';
import * as basicLightbox from 'basiclightbox';

const refs = {
  openModalBtn: document.querySelector('.footer-students-btn'),
};

function createUnit(data) {
  return data
    .map(({ name, title, previewImg, svg, position, gitHub }) => {
      return `<div class="unit">
      <div class="wraper-img">
      <img src="${previewImg}" alt="${name}" title="${title}" class="unit-img" />
      <a href="${gitHub}"><img src="${svg}" alt="${name}" title="${title}" class="unit-svg" />
      </a>
      </div>
    <p class="unit-info name"> ${name}</p>
    <p class="unit-info role"> ${position}</p>
</div>`;
    })
    .join('');
}

refs.openModalBtn.addEventListener('click', openModal);
const markup = createUnit(teamItem);
const modal = basicLightbox.create(`<div class="modal"> 
${markup}
</div>`);

function openModal(e) {
  modal.show();

  window.addEventListener('keydown', closeModalHandler);

  function closeModalHandler(e) {
    if (e.code === 'Escape') {
      modal.close();
      window.removeEventListener('keydown', closeModalHandler);
    }
  }
}
