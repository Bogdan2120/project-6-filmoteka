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

// ==============================

// const refs = {
//   teamModal: document.querySelector('footer-students-btn'),
// };

// refs.teamModal.addEventListener('click', ev => {
//   evt.preventDefault();

//   var lightbox = new SimpleLightbox('.gallery a', {});
// });
