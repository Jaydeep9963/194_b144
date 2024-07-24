const searchContainer = document.querySelector(".search");
const button = document.querySelector(".btn");
const input = document.querySelector(".input");

button.addEventListener("click", () => {
  searchContainer.classList.toggle("active");

  // Focus on the input when the "active" class is added
  if (searchContainer.classList.contains("active")) {
    input.focus();
  }
});
