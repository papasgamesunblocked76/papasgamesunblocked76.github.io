import{y as m}from"./hooks.module.B4H3CiOV.js";/* empty css                        */import{l as d}from"./preact.module.BkxX9n6Y.js";var p=0;function e(s,a,c,u,o,t){a||(a={});var i,n,l=a;if("ref"in l)for(n in l={},a)n=="ref"?i=a[n]:l[n]=a[n];var r={type:s,props:l,key:c,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:--p,__i:-1,__u:0,__source:o,__self:t};if(typeof s=="function"&&(i=s.defaultProps))for(n in i)l[n]===void 0&&(l[n]=i[n]);return d.vnode&&d.vnode(r),r}function y({gameUrl:s,title:a,thumbnailUrl:c}){return m(()=>{const u=document.getElementById("play-button"),o=document.getElementById("fullscreen-button"),t=document.getElementById("game-arena");!u||!o||!t||(u.addEventListener("click",()=>{const i=t.dataset.url,n=t.dataset.title;if(!i||!n)return;const l=document.createElement("div");l.className="game-iframe-container";const r=document.createElement("iframe");r.title=n,r.src=i,r.className="game-iframe",r.setAttribute("allowfullscreen",""),r.setAttribute("frameborder","0"),r.setAttribute("scrolling","no"),l.appendChild(r),t.innerHTML="",t.appendChild(l)}),o.addEventListener("click",()=>{t&&(t.requestFullscreen?t.requestFullscreen():t.webkitRequestFullscreen?t.webkitRequestFullscreen():t.msRequestFullscreen&&t.msRequestFullscreen())}))},[]),e("section",{className:"game-wrapper",children:[e("div",{className:"game-container",children:e("div",{id:"game-arena",className:"game-arena","data-url":`${s}${s.endsWith("/")?"index.html":""}`,"data-title":a,children:e("div",{className:"splash-container",children:e("div",{className:"splash-content",children:[e("div",{className:"thumbnail-bg",style:{backgroundImage:`url(${c})`}}),e("div",{className:"content-wrapper",children:[e("img",{src:c,alt:a,className:"thumbnail",loading:"lazy"}),e("button",{id:"play-button",className:"play-button","aria-label":"Play Now"})]})]})})})}),e("div",{className:"controls-wrapper flex items-center justify-between px-4 py-2",children:[e("div",{children:[e("span",{children:"Now playing:"})," ",e("h3",{class:"text-xl font-bold text-gray-900 text-left",children:[" ",a]})," "]}),e("button",{id:"fullscreen-button",className:"fullscreen-button w-8 h-8 flex-shrink-0 bg-no-repeat bg-center bg-contain opacity-75 hover:opacity-100 transition-opacity","aria-label":"Full Screen"})]})]})}e("style",{jsx:!0,children:`
  .controls-wrapper {
    @apply flex items-center justify-between px-4 py-2 bg-gray-100 rounded-b-lg;
  }

  .game-title {
    @apply text-gray-800 truncate mr-4;
  }

  .fullscreen-button {
    @apply w-8 h-8 flex-shrink-0 bg-no-repeat bg-center bg-contain opacity-75 hover:opacity-100 transition-opacity;
    background-image: url('/icons/fullscreen.svg');
  }
`});export{y as default};
