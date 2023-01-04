// get database from localstorage and render

export function getWatchedFilms() {
  try {
    return JSON.parse(localStorage.getItem('watched'));
  } catch (err) {
    Notiflix.Notify.failure(err.message);

    console.log(err.message);
    return [];
  }
}

export function getQueueFilms() {
  try {
    return JSON.parse(localStorage.getItem('queue'));
  } catch (err) {
    Notiflix.Notify.failure(err.message);

    console.log(err.message);
    return [];
  }
}
