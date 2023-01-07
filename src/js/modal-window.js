const basicLightbox = require('basiclightbox');
import 'basiclightbox/dist/basicLightbox.min.css';
import NewApiFetches from './apiFetches';
// import '../sass/modal.scss';
import SVG from '../images/symbol-arial.svg';
const newApiFetches = new NewApiFetches();

const filmLink = document.querySelector('.film-cards');
const loading = document.querySelector('.spinner-box');

filmLink.addEventListener('click', selectFilm);

function selectFilm(event) {
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
      <div>
        <p >
          <img class="img-card-modal" src="${poster_path}" alt="" ">
        </p>
      </div>
      <div>
        <h2 class="name-film">${original_title}</h2>
        <div class="box-film-params">
          <div>
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
                <p class="list-modal-items__params">${vote_average} / ${vote_count}
                  <span class="list-modal-items__params-value"></span>
                </p>
              </li>
              <li class="list-modal-items">
                <p class="list-modal-items__params">${popularity}
                </p>
              </li>
              <li class="list-modal-items">
                <p class="list-modal-items__params">${original_title}
                </p>
              </li>
              <li class="list-modal-items">
                <p class="list-modal-items__params">${genres}
                </p>
              </li>
            </ul>
          </div>
        </div>
        <p class="dÐµscription__params">About
          <span class="items__value">${overview}</span>
        </p>
        <div class="box-modal-btn">
          <button class="modal-watched-btn">add to Watched</button>
          <button class="modal-queue-btn">add to queue</button>
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
      const refs = {
        buttonWatched: document.querySelector('.modal-watched-btn'),
        buttonQueue: document.querySelector('.modal-queue-btn'),
      };

      const storageWatched = () => {
        addStorageMovie('watched', data.id);
      };
      const storageQueue = () => {
        addStorageMovie('queue', data.id);
      };
      refs.buttonWatched.addEventListener('click', storageWatched);
      refs.buttonQueue.addEventListener('click', storageQueue);
    })
    .catch(error => console.log(error))
    .finally(() => {
      loading.classList.add('is-hidden');
    });
};

const addStorageMovie = (key, value) => {
  let dataFromLocalStorage = load(key);
  if (dataFromLocalStorage === undefined) {
    dataFromLocalStorage = [];
  }
  const uniqueValue = [value, ...dataFromLocalStorage].filter(
    (course, index, array) => array.indexOf(course) === index
  );
  save(key, uniqueValue);
  console.log(uniqueValue);
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
