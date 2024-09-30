import{a as f,S as T,i as g}from"./assets/vendor-C4-ZuMk8.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&r(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const $="46160271-30a7facc458188e9573ebab80",H="https://pixabay.com/api";f.defaults.baseURL=H;async function p(t){const a={params:t},s=await f.get(`/?key=${$}`,a);if(s.status!==200)throw new Error(s.statusText);if(s.data.totalHits===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return s.data}const y=document.querySelector(".gallery"),h=document.querySelector(".loader"),u=document.querySelector(".load-more button"),c={messageColor:"white",position:"topRight",message:""};function w(t){const a=t.map(s=>{const{webformatURL:r,largeImageURL:e,tags:o,likes:i,views:M,comments:q,downloads:P}=s;return`
            <a class="gallery-link" href="${e}">
                <img
                    class="gallery-image"
                    src="${r}"
                    data-source="${e}"
                    alt="${o}"
                />
                <div class="image-descrition">
                    <div>
                        <span class="image-descrition-font">Likes</span>
                        <span class="image-descrition-font">${i}</span>
                    </div>
                    <div>
                        <span class="image-descrition-font">Views</span>
                        <span class="image-descrition-font">${M}</span>
                    </div>
                    <div>
                        <span class="image-descrition-font">Comments</span>
                        <span class="image-descrition-font">${q}</span>
                    </div>
                    <div>
                        <span class="image-descrition-font">Downloads</span>
                        <span class="image-descrition-font">${P}</span>
                    </div>
                </div>
            </a>`}).join("");y.innerHTML+=a,new T(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function C(){y.innerHTML=""}function L(){h.innerHTML="<span></span>"}function v(){h.innerHTML=""}function b(){u.style.display="block"}function S(){u.style.display="none"}function d(t){c.message=t,c.backgroundColor="red",g.error(c)}function I(t){c.message=t,g.info(c)}let O="",l=1,m=0;const E=15,R=document.querySelector(".form-image"),n={q:O,image_type:"photo",orientation:"horizontal",safesearch:!0,page:l,per_page:E},N=()=>{const a=document.querySelector(".gallery-link:last-child").getBoundingClientRect().height*2;window.scrollBy({top:a,left:0,behavior:"smooth"})},x=async t=>{const{imageName:a}=t.currentTarget.elements;if(n.q=a.value.trim(),n.page=1,t.preventDefault(),t.currentTarget.reset(),n.q===""){d("Image name cannot to be empty!");return}C(),S(),L();try{const{hits:s,totalHits:r}=await p(n);m=Math.ceil(r/E),w(s),m>1&&b()}catch(s){d(s.message)}finally{v()}},D=async()=>{l+=1,n.page=l,S(),L();try{const{hits:t}=await p(n);w(t),N(),l<m?b():I("We're sorry, but you've reached the end of search results.")}catch(t){d(t.message)}finally{v()}};R.addEventListener("submit",x);u.addEventListener("click",D);
//# sourceMappingURL=index.js.map
