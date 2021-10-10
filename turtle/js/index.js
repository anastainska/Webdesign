import { renderItemsList } from "./dom_util.js";
import { getAllTurtles as getAllTurtles } from "./turtles.js";

const searchButton = document.getElementById("search__button");
const clearSearchButton = document.getElementById("clear__search__button");
const searchInput = document.getElementById("search__input");
const sortCheckbox = document.getElementById("sort__checkbox");
const countButton = document.getElementById("count__button");

let turtles = [];

export const refetchAllTurtles = () => {
  const allTurtles = getAllTurtles();

  turtles = allTurtles.sort((a, b) => b.scientific_name.localeCompare(a.scientific_name));

  renderItemsList(turtles);
};

searchButton.addEventListener("click", () => {
  const foundTurtles = turtles.filter((turtle) => turtle.scientific_name.search(searchInput.value) !== -1);

  renderItemsList(foundTurtles);
});

clearSearchButton.addEventListener('click', () => {
  renderItemsList(turtles);

  searchInput.value = "";
});

sortCheckbox.addEventListener("change", function () {
  if (this.checked) {
    const sortedTurtles = turtles.sort(
      (a, b) => parseInt(a.weight) - parseInt(b.weight));

    renderItemsList(sortedTurtles);
  } else {
    refetchAllTurtles();
  }
});

countButton.addEventListener("click", () => {
  let sum = turtles.map(o => o.weight).reduce((a, c) => a + c);
  document.getElementById("total-weight").innerText = sum;
  console.log(sum);
});

refetchAllTurtles();