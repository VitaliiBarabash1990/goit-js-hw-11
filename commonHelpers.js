import{S as l,i as a}from"./assets/vendor-8c59ed88.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function u(n){const r="https://pixabay.com/api",o=new URLSearchParams({key:"43049359-de94a67b88373614faa3cefb0",image_type:"photo",orientation:"horizontal",safesearch:"true"}),i=`${r}/?${o}&q=${encodeURIComponent(n)}`;return fetch(i).then(e=>{if(!e.ok)throw new Error(e.status);return e.json()}).then(e=>{if(e.hits.length===0)throw new Error("No images found");return e}).catch(e=>{throw console.error("Error fetching images:",e),e})}const f=document.querySelector(".gallery");function m(n){const r=n.map(o=>d(o)).join("");f.innerHTML=r}function d({webformatURL:n,largeImageURL:r,tags:o,likes:i,views:e,comments:t,downloads:s}){return`
    <a class="gallery__item" href="${r}">
      <div class="photo-card">
        <img src="${n}" alt="${o}" loading="lazy" />
        <div class="info">
          <p class="info-item"><b>Likes:</b> ${i}</p>
          <p class="info-item"><b>Views:</b> ${e}</p>
          <p class="info-item"><b>Comments:</b> ${t}</p>
          <p class="info-item"><b>Downloads:</b> ${s}</p>
        </div>
      </div>
    </a>
  `}const h=document.querySelector("#search-form"),g=document.querySelector(".gallery"),c=document.querySelector(".loading-indicator");let p=new l(".gallery a");h.addEventListener("submit",y);function y(n){n.preventDefault();const r=n.target.elements.searchQuery.value.trim();if(r===""){a.warning({title:"Warning",message:"Please enter a search term!",position:"topRight"});return}g.innerHTML="",c.style.display="block",u(r).then(o=>{if(c.style.display="none",o.hits.length===0){a.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}m(o.hits),p.refresh()}).catch(o=>{c.style.display="none",a.error({title:"Error",message:"Failed to fetch images. Please try again later!",position:"topRight"}),console.error("Error in fetching images:",o)})}
//# sourceMappingURL=commonHelpers.js.map
