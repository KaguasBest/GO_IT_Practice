const e={body:document.querySelector("body"),checkbox:document.querySelector(".checkbox")};e.checkbox.addEventListener("click",(function(){!0===e.checkbox.checked&&(localStorage.setItem("theme","dark-theme"),e.body.classList.add("dark"),e.body.classList.remove("light")),!1===e.checkbox.checked&&(localStorage.setItem("theme","light-theme"),e.body.classList.add("light"),e.body.classList.remove("dark"))}));
//# sourceMappingURL=index.1ccdaff5.js.map
