import{a as m,S as T,i as f}from"./assets/vendor-C4-ZuMk8.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const n of s.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&r(n)}).observe(document,{childList:!0,subtree:!0});function o(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(e){if(e.ep)return;e.ep=!0;const s=o(e);fetch(e.href,s)}})();const $="46160271-30a7facc458188e9573ebab80",H="https://pixabay.com/api";m.defaults.baseURL=H;async function g(t){const a={params:t},o=await m.get(`/?key=${$}`,a);if(o.status!==200)throw new Error(o.statusText);if(o.data.totalHits===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");return o.data}const p=document.querySelector(".gallery"),h=document.querySelector(".loader"),u=document.querySelector(".load-more button"),i={messageColor:"white",position:"topRight",message:""};function y(t){const a=t.map(o=>{const{webformatURL:r,largeImageURL:e,tags:s,likes:n,views:M,comments:P,downloads:q}=o;return`
            <a class="gallery-link" href="${e}">
                <img
                    class="gallery-image"
                    src="${r}"
                    data-source="${e}"
                    alt="${s}"
                />
                <div class="image-descrition">
                    <div>
                        <span class="image-descrition-font">Likes</span>
                        <span class="image-descrition-font">${n}</span>
                    </div>
                    <div>
                        <span class="image-descrition-font">Views</span>
                        <span class="image-descrition-font">${M}</span>
                    </div>
                    <div>
                        <span class="image-descrition-font">Comments</span>
                        <span class="image-descrition-font">${P}</span>
                    </div>
                    <div>
                        <span class="image-descrition-font">Downloads</span>
                        <span class="image-descrition-font">${q}</span>
                    </div>
                </div>
            </a>`}).join("");p.innerHTML+=a,new T(".gallery a",{captionsData:"alt",captionDelay:250}).refresh()}function C(){p.innerHTML=""}function w(){h.innerHTML="<span></span>"}function L(){h.innerHTML=""}function v(){u.style.display="block"}function b(){u.style.display="none"}function S(t){i.message=t,i.backgroundColor="red",f.error(i)}function O(t){i.message=t,f.info(i)}let R="",c=1,d=0;const E=15,I=document.querySelector(".form-image"),l={q:R,image_type:"photo",orientation:"horizontal",safesearch:!0,page:c,per_page:E},N=()=>{const a=document.querySelector(".gallery-link:last-child").getBoundingClientRect().height*2;window.scrollBy({top:a,left:0,behavior:"smooth"})},x=async t=>{const{imageName:a}=t.currentTarget.elements;l.q=a.value,t.preventDefault(),t.currentTarget.reset(),C(),b(),w();try{const{hits:o,totalHits:r}=await g(l);d=Math.ceil(r/E),y(o),d>1&&v()}catch(o){S(o.message)}finally{L()}},D=async()=>{c+=1,l.page=c,b(),w();try{const{hits:t}=await g(l);y(t),N(),c<d?v():O("We're sorry, but you've reached the end of search results.")}catch(t){S(t.message)}finally{L()}};I.addEventListener("submit",x);u.addEventListener("click",D);
//# sourceMappingURL=index.js.map
