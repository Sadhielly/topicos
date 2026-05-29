const btn = document.querySelector("#btn-dark");

const theme = document.querySelector("#theme");


btn.addEventListener("click", function() {
  if (theme.getAttribute("href") === "style.css") {
    theme.setAttribute("href", "dark.css");
  } else {
    theme.setAttribute("href", "style.css");
  }
});