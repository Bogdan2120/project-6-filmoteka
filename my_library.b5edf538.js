var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired7c6;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var l={id:e,exports:{}};return t[e]=l,a.call(l.exports,l,l.exports),l.exports}var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}).register=function(e,t){n[e]=t},e.parcelRequired7c6=a),a("2YGUk");const l=()=>{r.gallery.innerHTML=""},i=e=>{const t=e.map((({genres:e,poster_path:t,release_date:n,original_title:a,vote_average:l,id:i})=>{let r=e.join(", ");return e.length>2&&(r=e[0]+", "+e[1]+", Other"),`\n      <li class="film my-library-film">\n        <a href="#" class="film__link">\n          <div class="film__body-img">\n            <img\n              src="${t}"\n              alt="${a}"\n              class="film__img"\n              data-action="${i}"\n            />\n          </div>\n\n          <div class="film__informations">\n            <p class="film__name">${a}</p>\n            <p class="film__detalies">${r} | ${n}</p>\n          </div>\n        </a>\n      </li>\n      `})).join("");r.gallery.insertAdjacentHTML("beforeend",t)};new(0,a("3ydHb").default);const r={btnWatched:document.querySelector('[name="watched"]'),btnQueue:document.querySelector('[name="queue"]'),defaultText:document.querySelector('[name="default-text"]'),gallery:document.querySelector(".my-library-film-card"),loading:document.querySelector(".spinner-box")};let d=function(){try{return JSON.parse(localStorage.getItem("watched"))}catch(e){Notiflix.Notify.failure(e.message)}}(),s=function(){try{return JSON.parse(localStorage.getItem("queue"))}catch(e){Notiflix.Notify.failure(e.message)}}();const c=()=>{r.btnQueue.classList.remove("btn-header__active"),r.btnWatched.classList.add("btn-header__active"),null!==d&&(l(),d.map((e=>i([e]))),r.defaultText.classList.add("is-hidden"))};c(),r.btnWatched.addEventListener("click",c),r.btnQueue.addEventListener("click",(()=>{r.btnQueue.classList.add("btn-header__active"),r.btnWatched.classList.remove("btn-header__active"),null!==s&&(l(),s.map((e=>i([e]))),r.defaultText.classList.add("is-hidden"))})),a("1VOaQ"),a("2hTmC");
//# sourceMappingURL=my_library.b5edf538.js.map
