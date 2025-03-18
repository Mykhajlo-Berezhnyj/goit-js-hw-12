import{a as m,S as y,i}from"./assets/vendor-mYwBqgd4.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const c of n.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerPolicy&&(n.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?n.credentials="include":e.crossOrigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function r(e){if(e.ep)return;e.ep=!0;const n=a(e);fetch(e.href,n)}})();m.defaults.baseURL="https://pixabay.com/api/";const h="49272526-e1b2de60044cea6af49c76424",C=async(s,o,a)=>(await m.get("",{params:{key:h,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:a,page:o}})).data,t={form:document.querySelector(".form"),inputQuery:document.querySelector('input[name="search-text"]'),btnSearch:document.querySelector(".btn-search"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),btnScrollUp:document.getElementById("scrollToTop"),btnLoad:document.querySelector(".btn-load")},L=new y(".gallery a",{captionData:"alt",captionDelay:250}),b=s=>{const o=t.gallery,a=s.map(r=>` <li class="gallery-item">
  <a class="gallery-link" href="${r.largeImageURL}">
    <img class="gallery-img" src="${r.webformatURL}" alt="${r.tags}" loading="lazy" />
    <div class="image-info">
      <p><strong>Likes</strong> ${r.likes}</p>
      <p><strong>Views</strong> ${r.views}</p>
      <p><strong>Comments</strong> ${r.comments}</p>
      <p><strong>Downloads</strong> ${r.downloads}</p>
    </div>
  </a>
</li>`).join("");o.insertAdjacentHTML("beforeend",a),L.refresh()},w="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M6.81%200.219C6.95056%200.0787966%207.14097%204.21785e-05%207.3395%200L16.6605%200C16.859%204.21785e-05%2017.0494%200.0787966%2017.19%200.219L23.781%206.81C23.9212%206.95056%2024%207.14097%2024%207.3395V16.6605C24%2016.859%2023.9212%2017.0494%2023.781%2017.19L17.19%2023.781C17.0494%2023.9212%2016.859%2024%2016.6605%2024H7.3395C7.14097%2024%206.95056%2023.9212%206.81%2023.781L0.219%2017.19C0.0787966%2017.0494%204.21785e-05%2016.859%200%2016.6605L0%207.3395C4.21785e-05%207.14097%200.0787966%206.95056%200.219%206.81L6.81%200.219ZM7.65%201.5L1.5%207.65V16.35L7.65%2022.5H16.35L22.5%2016.35V7.65L16.35%201.5H7.65Z'%20fill='%23FAFAFB'/%3e%3cpath%20d='M6.96888%206.969C7.03854%206.89915%207.12131%206.84374%207.21243%206.80593C7.30354%206.76812%207.40122%206.74866%207.49988%206.74866C7.59853%206.74866%207.69621%206.76812%207.78733%206.80593C7.87844%206.84374%207.96121%206.89915%208.03088%206.969L11.9999%2010.9395L15.9689%206.969C16.0386%206.89927%2016.1214%206.84395%2016.2125%206.80621C16.3036%206.76847%2016.4013%206.74905%2016.4999%206.74905C16.5985%206.74905%2016.6961%206.76847%2016.7873%206.80621C16.8784%206.84395%2016.9611%206.89927%2017.0309%206.969C17.1006%207.03873%2017.1559%207.12151%2017.1937%207.21262C17.2314%207.30373%2017.2508%207.40138%2017.2508%207.5C17.2508%207.59861%2017.2314%207.69626%2017.1937%207.78737C17.1559%207.87848%2017.1006%207.96127%2017.0309%208.031L13.0604%2012L17.0309%2015.969C17.1006%2016.0387%2017.1559%2016.1215%2017.1937%2016.2126C17.2314%2016.3037%2017.2508%2016.4014%2017.2508%2016.5C17.2508%2016.5986%2017.2314%2016.6963%2017.1937%2016.7874C17.1559%2016.8785%2017.1006%2016.9613%2017.0309%2017.031C16.9611%2017.1007%2016.8784%2017.156%2016.7873%2017.1938C16.6961%2017.2315%2016.5985%2017.2509%2016.4999%2017.2509C16.4013%2017.2509%2016.3036%2017.2315%2016.2125%2017.1938C16.1214%2017.156%2016.0386%2017.1007%2015.9689%2017.031L11.9999%2013.0605L8.03088%2017.031C7.96114%2017.1007%207.87836%2017.156%207.78725%2017.1938C7.69614%2017.2315%207.59849%2017.2509%207.49988%2017.2509C7.40126%2017.2509%207.30361%2017.2315%207.2125%2017.1938C7.12139%2017.156%207.03861%2017.1007%206.96888%2017.031C6.89914%2016.9613%206.84383%2016.8785%206.80609%2016.7874C6.76835%2016.6963%206.74893%2016.5986%206.74893%2016.5C6.74893%2016.4014%206.76835%2016.3037%206.80609%2016.2126C6.84383%2016.1215%206.89914%2016.0387%206.96888%2015.969L10.9394%2012L6.96888%208.031C6.89903%207.96133%206.84362%207.87857%206.80581%207.78745C6.768%207.69633%206.74854%207.59865%206.74854%207.5C6.74854%207.40135%206.768%207.30366%206.80581%207.21255C6.84362%207.12143%206.89903%207.03867%206.96888%206.969Z'%20fill='%23FAFAFB'/%3e%3c/svg%3e";function v(){t.loader.classList.remove("hidden")}function S(){t.loader.classList.add("hidden")}const F=()=>{window.scrollY>300?t.btnScrollUp.classList.add("show"):t.btnScrollUp.classList.remove("show")},E=()=>{window.scrollTo({top:0,behavior:"smooth"})};let l=1,d=!1,p="",u=0;const g=15;t.form.addEventListener("submit",s=>{s.preventDefault();const o=t.inputQuery.value.trim();if(!o){i.warning({title:"Caution",message:"The form cannot be empty! Please check and fill it out.",position:"topRight",maxWidth:300}),t.inputQuery.value="";return}p=o,l=1,t.gallery.innerHTML="",f(),t.inputQuery.value=""});const f=async()=>{if(!d){d=!0,v();try{const s=await C(p,l,g),o=s.hits;if(u=s.totalHits,o.length===0){i.error({message:" Sorry, there are no images matching your search query.Please try again!",messageColor:"#FAFAFB",position:"topRight",backgroundColor:"#EF4040",borderColor:"#FFBEBE",maxWidth:432,class:"custom-toast",theme:"dark",iconUrl:w});return}b(o);const r=document.querySelector(".gallery-item").getBoundingClientRect().height;l>1&&window.scrollBy({top:r*2,left:0,behavior:"smooth"});const e=Math.ceil(u/g);l>=e?(i.info({title:"End of results",message:"We're sorry, but you've reached the end of search results.",position:"bottomRight",backgroundColor:"#ff3d00",messageColor:"#FAFAFB"}),t.btnLoad.style.display="none"):(t.btnLoad.style.display="block",l+=1)}catch(s){console.error("Error:",s),i.error({title:"error",message:s.message||"Something went wrong. Please try again."})}finally{d=!1,S()}}};t.btnLoad.addEventListener("click",f);window.addEventListener("scroll",F);t.btnScrollUp.addEventListener("click",E);
//# sourceMappingURL=index.js.map
