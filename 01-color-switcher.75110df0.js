const t={start:document.querySelector("button[data-start]"),stop:document.querySelector("button[data-stop]"),body:document.querySelector("body")};let e=null;function o(){return`#${Math.floor(16777215*Math.random()).toString(16)}`}t.stop.disabled=!0,t.start.addEventListener("click",(function(){t.body.style.backgroundColor=o(),t.start.disabled=!0,t.stop.disabled=!1,e=setInterval((()=>{t.body.style.backgroundColor=o()}),1e3)})),t.stop.addEventListener("click",(function(){clearInterval(e),t.start.disabled=!1,t.stop.disabled=!0}));
//# sourceMappingURL=01-color-switcher.75110df0.js.map