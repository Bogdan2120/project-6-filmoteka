!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},l=e.parcelRequired7c6;null==l&&((l=function(e){if(e in t)return t[e].exports;if(e in n){var l=n[e];delete n[e];var a={id:e,exports:{}};return t[e]=a,l.call(a.exports,a,a.exports),a.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired7c6=l),l("j1Fxp");const a=()=>{r.gallery.innerHTML=""},o=e=>{const t=e.map((({genre_ids:e,poster_path:t,release_date:n,title:l,vote_average:a})=>{let o=e.join(", ");return e.length>2&&(o=e[0]+", "+e[1]+", Other"),`\n      <li class="film">\n        <a href="#" class="film__link">\n          <div class="film__body-img">\n            <img\n              src="${t}"\n              alt="${l}"\n              class="film__img"\n            />\n          </div>\n\n          <div class="film__informations">\n            <p class="film__name">${l}</p>\n            <p class="film__detalies">${o} | ${n}</p>\n          </div>\n        </a>\n      </li>\n      `})).join("");r.gallery.insertAdjacentHTML("beforeend",t)};const i=new(0,l("foEof").default),r={btnWatched:document.querySelector('[name="watched"]'),btnQueue:document.querySelector('[name="queue"]'),defaultText:document.querySelector('[name="default-text"]'),gallery:document.querySelector(".my-library-film-card")};let c=function(){try{return JSON.parse(localStorage.getItem("watched"))}catch(e){Notiflix.Notify.failure(e.message)}}();const d=()=>{null!==c&&(a(),c.map((e=>i.fetchMovieById(e).then((e=>{console.log(e),o(e)})).catch((e=>console.log(e))))),r.defaultText.classList.add("is-hidden"))};let s=function(){try{return JSON.parse(localStorage.getItem("queue"))}catch(e){Notiflix.Notify.failure(e.message)}}();d(),r.btnWatched.addEventListener("click",d),r.btnQueue.addEventListener("click",(()=>{console.log(s),null!==s&&(a(),s.map((e=>i.fetchMovieById(e).then((e=>{console.log(e),o(e)})).catch((e=>console.log(e))))),r.defaultText.classList.add("is-hidden"))})),l("dsadE")}();
//# sourceMappingURL=my_library.29e86795.js.map