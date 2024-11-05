document.addEventListener("click",function(t){var e=document.querySelector(".spider"),i=document.querySelector(".wall");if(i.contains(t.target)){var n=i.clientWidth,a=i.clientHeight,o=e.offsetWidth,c=e.offsetHeight,f=t.offsetX-o/2,l=t.offsetY-c/2;f=Math.max(0,Math.min(f,n-o)),l=Math.max(0,Math.min(l,a-c)),e.style.left=f+"px",e.style.top=l+"px"}});
//# sourceMappingURL=index.d4434b35.js.map
