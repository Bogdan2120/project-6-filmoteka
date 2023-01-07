import * as basicLightbox from 'basiclightbox';

const loading = document.querySelector('.spinner-box');

function createTrailerLink(elementRef) {
  const trailerBtn = elementRef;

  trailerBtn.forEach(el =>
    el.addEventListener('click', e => {
      drawModalForTrailler(e.currentTarget.dataset.id);
    })
  );

  function drawModalForTrailler(id) {
    loading.classList.remove('is-hidden');

    const ApiKey = '633bd9c8c9bc68a8c4a40449237d5fcd';
    const url = `https://api.themoviedb.org/3/movie/${id}/videos?api_key=${ApiKey}&language=en-US`;
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const id = data.results[0].key;
        const instance = basicLightbox.create(`
  <iframe width="560" height="315" src='https://www.youtube.com/embed/${id}'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
`);
        instance.show();
        modalClBtTrailer(instance);
      })
      .catch(() => {
        const instance = basicLightbox.create(`
    <iframe width="560" height="315" src='http://www.youtube.com/embed/zwBpUdZ0lrQ' frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      `);

        instance.show();
        modalClBtTrailer(instance);
      })
      .finally(() => {
        loading.classList.add('is-hidden');
      });
  }

  function modalClBtTrailer(instance) {
    const modalBox = document.querySelector('.basicLightbox--iframe');
    modalBox.insertAdjacentHTML(
      'afterbegin',
      `<button
        type="button"
        class="lightbox__button"
        data-action="close-lightbox"
        ></button>
    `
    );
    const modalCloseBtn = document.querySelector(
      '[data-action="close-lightbox"]'
    );
    modalCloseBtn.addEventListener('click', () => instance.close());
  }
}

export default { createTrailerLink };
