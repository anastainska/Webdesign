
import {
    getInputValues,
    renderCardsList,
    EDIT_BUTTON_PREFIX,
    clearInputs
} from "./dom_util.js"
import { getTurtles,updateTurtle, pushTurtle } from "./turtles.js";

const formFields = document.getElementsByClassName("form-control");
const submitButton = document.getElementById("submit_button");

const searchButton = document.getElementById("search_btn");
const clearSearchButton = document.getElementById("clear_search_btn");
const searchInput = document.getElementById("search_input");
const sortCheckbox = document.getElementById("sort_checkbox");
const countButton = document.getElementById("count_btn");


let turtles = [];


const onEditItem = async (element) => {
    const itemId = element.target.id.replace(EDIT_BUTTON_PREFIX, "");

    const { name, description, speed, weight, age} = getInputValues();
    await updateTurtle(itemId, { name, description, speed, weight, age })

    clearInputs();

    updateTurtle(itemId, {
        name, description, speed, weight, age
    })

    refetchallTurtles();
};


const refetchallTurtles = async () => {
    const allTurtles = await getTurtles();
    turtles = allTurtles;
    renderCardsList(allTurtles, onEditItem);
};


const validateInput = () => {
    if (Array.from(formFields).filter(x => x.value.trim() === "").length !== 0) {
        alert("Please fill out required fields");
        return false;
    } else {
        return true
    }
}


submitButton.addEventListener("click", (event) => {
    if (!validateInput()) {
        return;
    }

    event.preventDefault();

    let { name, description, speed, weight, age } = getInputValues();
    let id = parseInt((getTurtles().length) + 1);

    pushTurtle({
        id,
        name,
        description,
        speed,
        weight,
        age 
    });
    refetchallTurtles();

    clearInputs();
});


searchButton.addEventListener("click", () => {
    console.log(turtles)
    const foundTurtles = turtles.filter(turtle => turtle.name.search(searchInput.value) !== -1);
    console.log(foundTurtles)
    renderCardsList(foundTurtles, onEditItem);

});

clearSearchButton.addEventListener("click", () => {
    renderCardsList(turtles, onEditItem);
    searchInput.value = "";
});

sortCheckbox.addEventListener("change", () => {
    if (sortCheckbox.checked) {
        const sortedTurtles = getTurtles().slice().sort(
            (a, b) => parseInt(a.age) - parseInt(b.age));
        renderCardsList(sortedTurtles);
    } else {
        refetchallTurtles();
    }
});


countButton.addEventListener("click", () => {
    let sum = turtles.map(o => o.weight).reduce((a, c) => { return parseInt(a) + parseInt(c) });
    document.getElementById("total-weight").innerText = sum;
})

refetchallTurtles();