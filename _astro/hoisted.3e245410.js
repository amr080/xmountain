import"./hoisted.6d1dc2ae.js";import"./hoisted.8b67775f.js";import"./hoisted.f570b092.js";const o=localStorage.getItem("ofac-popup-seen"),e=document.getElementById("ofac-popup");setTimeout(()=>{e&&!o&&(e.style.opacity="1",e.style.pointerEvents="all")},1e3);const n=()=>{e&&(e.style.opacity="0",e.style.pointerEvents="none",localStorage.setItem("ofac-popup-seen","true"))},t=document.getElementById("ofac-button");t&&t.addEventListener("click",n);
