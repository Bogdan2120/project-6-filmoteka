const basicLightbox = require('basiclightbox');
import 'basiclightbox/dist/basicLightbox.min.css';
import NewApiFetches from './apiFetches';
import Notiflix from 'notiflix';
// import '../sass/_modal-window.scss';
import SVG from '../images/symbol-arial.svg';
// import { renderMoviesList, clearMarkup } from './render-cards';
const newApiFetches = new NewApiFetches();

const filmModal = document.querySelector('body');
const loading = document.querySelector('.spinner-box');

filmModal.addEventListener('click', selectFilmSlider);

const refresh = () => {
  location.reload();
};

function selectFilmSlider(event) {
  if (event.target.nodeName !== 'IMG') {
    return;
  }
  renfetch(event.target.dataset.action);
}

const render = ({
  original_title,
  poster_path,
  vote_average,
  vote_count,
  popularity,
  genres,
  overview,
}) => {
  return `
  <div class="modal-film-card">
      <button type="button" class="modal-card-film-close-btn" data-modal-card-film-close>
        <svg class="modal-card-film-close-btn-icon" width="17" height="17">
          <use href="${SVG}#close-btn"></use>
        </svg>
      </button>
      <div class="box-img">
          <img class="img-card-modal" src="${poster_path}" alt="" ">
      </div>
      <div>
        <h2 class="name-film">${original_title}</h2>
        <div class="box-film-params">
          <div class="modal-box-key">
            <ul class="list-modal">
              <li class="list-modal-items">
                <p class="list-modal-items__params">Vote / Votes
                </p>
              </li>
              <li class="list-modal-items">
                <p class="list-modal-items__params">Popularity
                </p>
              </li>
              <li class="list-modal-items">
                <p class="list-modal-items__params">Original Title
                </p>
              </li>
              <li class="list-modal-items">
                <p class="list-modal-items__params">Genre
                </p>
              </li>
            </ul>
          </div>
          <div>
            <ul class="list-modal">
              <li class="list-modal-items">
                <p class="list-modal-items__params-value">
                <span class="list-modal-items__params-value-average">${vote_average.toFixed(
                  2
                )}</span> / ${vote_count}
                  
                </p>
              </li>
              <li class="list-modal-items">
                <p class="list-modal-items__params-value">${popularity.toFixed(
                  1
                )}
                </p>
              </li>
              <li class="list-modal-items">
                <p class="list-modal-items__params-value">${original_title}
                </p>
              </li>
              <li class="list-modal-items">
                <p class="list-modal-items__params-value">${genres}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <p class="discription__params">About
          <span class="items__value">${overview}</span>
        </p>
        <div class="box-modal-btn">
          <button class="modal-watched-btn modal-submint-btn modal-watched-btn-hower">Add to watched</button>
          <button class="modal-queue-btn modal-submint-btn modal-queue-btn-hower" data-action=add>Add to queue</button>

          </div>
      </div>
    </div>
  `;
};

const renfetch = id => {
  loading.classList.remove('is-hidden');
  newApiFetches
    .fetchDetailsMovie(id)
    .then(data => {
      const instance = basicLightbox.create(render(data));
      instance.show();

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

      const refs = {
        buttonWatched: document.querySelector('.modal-watched-btn'),
        buttonQueue: document.querySelector('.modal-queue-btn'),
      };

      let dataW = load('watched');
      if (dataW === undefined) {
        dataW = [];
      }
      if (dataW.find(el => el.id === data.id) !== undefined) {
        refs.buttonWatched.textContent = 'Remove from watched';
      }

      let dataQ = load('queue');
      if (dataQ === undefined) {
        dataQ = [];
      }
      if (dataQ.find(el => el.id === data.id) !== undefined) {
        refs.buttonQueue.textContent = 'Remove from queue';
      }

      const storageWatched = () => {
        let dataArr = load('watched');
        if (dataArr === undefined) {
          dataArr = [];
        }
        if (dataArr.find(el => el.id === data.id) !== undefined) {
          storageRemWatched();
          refs.buttonWatched.textContent = 'Add to watched';
        } else {
          addStorageMovie('watched', data);
          refs.buttonWatched.textContent = 'Remove from watched';
        }
      };

      const storageQueue = () => {
        let dataArr = load('queue');
        if (dataArr === undefined) {
          dataArr = [];
        }
        if (dataArr.find(el => el.id === data.id) !== undefined) {
          storageRemQueue();
          refs.buttonQueue.textContent = 'Add to queue';
        } else {
          addStorageMovie('queue', data);
          refs.buttonQueue.textContent = 'Remove from queue';
        }
      };

      const storageRemQueue = () => {
        let dataArr = load('queue');
        let objIndex = dataArr.findIndex(el => el.id === data.id);
        dataArr.splice(objIndex, 1);
        localStorage.removeItem('queue');
        save('queue', dataArr);
        if (document.URL === 'http://localhost:1234/my_library.html#') {
          refresh();
        }
      };
      const storageRemWatched = () => {
        let dataArr = load('watched');
        let objIndex = dataArr.findIndex(el => el.id === data.id);
        dataArr.splice(objIndex, 1);
        localStorage.removeItem('watched');
        save('watched', dataArr);
        if (document.URL === 'http://localhost:1234/my_library.html#') {
          refresh();
        }
      };

      refs.buttonWatched.addEventListener('click', storageWatched);
      refs.buttonQueue.addEventListener('click', storageQueue);

      if (load('watched').includes(data)) {
        refs.buttonWatched.textContent = 'Add to watched';
      }
      if (load('queue').includes(data)) {
        refs.buttonQueue.textContent = 'Add to queue';
      }
    })
    .catch(error => {
      Notiflix.Notify.failure('Sorry! There are no movie information found');
      // console.log(error);
    })
    .finally(() => {
      loading.classList.add('is-hidden');
    });
};

const addStorageMovie = (key, value) => {
  let dataFromLocalStorage = load(key);
  if (dataFromLocalStorage === undefined) {
    dataFromLocalStorage = [];
  }

  dataFromLocalStorage.push(value);
  save(key, dataFromLocalStorage);
};

const load = key => {
  try {
    const serializedState = localStorage.getItem(key);

    return serializedState === null ? undefined : JSON.parse(serializedState);
  } catch (err) {
    console.error('Get state error: ', err);
  }
};

const save = (key, value) => {
  try {
    const serializedState = JSON.stringify(value);
    localStorage.setItem(key, serializedState);
  } catch (err) {
    console.error('Set state error: ', err);
  }
};
