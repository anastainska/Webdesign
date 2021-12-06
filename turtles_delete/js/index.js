import { getAllTurtles, postTurtle, editTurtle, deleteTurtle } from "./api.js";
import {
    getInputValues,
    renderCardsList,
    EDIT_BUTTON_PREFIX,
    DELETE_BUTTON_PREFIX,
    clearInputs
} from "./dom_util.js"
// import { getTurtles, postTurtle, updateTurtle } from "./turtles.js";

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
    // await updateTurtle(itemId, { name, description, speed, weight, age, len })

    clearInputs();

    editTurtle(itemId, {
        name, description, speed, weight, age
    }).then(refetchallTurtles)

    // refetchallTurtles();
};

const onDeleteItem = (element) => {
	const id = element.target.id.replace(DELETE_BUTTON_PREFIX, "");
	deleteTurtle(id).then(refetchallTurtles);
};


const refetchallTurtles = async () => {
    const allTurtles = await getAllTurtles();
    turtles = allTurtles;
    console.log("refetchallTurtles func")
    console.log(allTurtles)
    renderCardsList(allTurtles, onEditItem, onDeleteItem);
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
    let id = parseInt((getAllTurtles().length) + 1);

    postTurtle({
        id,
        name,
        description,
        speed,
        weight,
        age 
    }).then(refetchallTurtles);

    clearInputs();
});


searchButton.addEventListener("click", () => {
    console.log(turtles)
    const foundTurtles = turtles.filter(turtle => turtle.name.search(searchInput.value) !== -1);
    console.log(foundTurtles)
    renderCardsList(foundTurtles, onEditItem, onDeleteItem);

});

clearSearchButton.addEventListener("click", () => {
    renderCardsList(turtles, onEditItem, onDeleteItem);
    searchInput.value = "";
});

sortCheckbox.addEventListener("change", function (e) {
    if (this.checked) {
        const sortedTurtles = turtles.sort(
            (card1, card2) => parseInt(card1.age) - parseInt(card2.age));
        renderCardsList(sortedTurtles, onEditItem);
    }
    else {
        refetchallTurtles();
    }
});


countButton.addEventListener("click", () => {
    let sum = turtles.map(o => o.weight).reduce((a, c) => { return parseInt(a) + parseInt(c) });
    document.getElementById("total-weight").innerText = sum;
})

refetchallTurtles();