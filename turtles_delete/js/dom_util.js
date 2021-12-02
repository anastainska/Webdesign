export const EDIT_BUTTON_PREFIX = 'edit-button-';
export const DELETE_BUTTON_PREFIX = "delete-button-";
const nameInput = document.getElementById("name_input");
const descriptionInput = document.getElementById("description_input");
const speedInput = document.getElementById("speed_input");
const weightInput = document.getElementById("weight_input");
const ageInput = document.getElementById("age_input");
// const lenInput = document.getElementById("length_input");

const cardsContainer = document.getElementById("cards_container");

const getItemId = (id) => `item-${id}`;

const cardTemplate = ({ id, name, description, speed, weight, age }) => `
<li id="${getItemId(id)}" class="card">
  <img
    src="https://ih1.redbubble.net/image.460763771.2054/st,small,507x507-pad,600x600,f8f8f8.u5.jpg"
    class="card__image" alt="beautiful turtle">
  <div>
    <h5>${name}</h5>
    <p>${description}</p>
    <p>${speed}</p>
    <p>Weight: ${weight} kg.</p>
    <p>Age: ${age} years.</p>
    <button id="${DELETE_BUTTON_PREFIX}${id}" type="button" class="default_button">
    Delete
    </button>
    <button id="${EDIT_BUTTON_PREFIX}${id}"type="button" class="default_button">
      Edit
    </button>
  </div>
</li>`;

export const addCardToPage = ({ id, name, description, speed, weight, age }, onEditItem, onDeleteItem) => {
  cardsContainer.insertAdjacentHTML(
    "afterbegin",
    cardTemplate({ id, name, description, speed, weight, age})
  );

  const editButton = document.getElementById(`${EDIT_BUTTON_PREFIX}${id}`);
  editButton.addEventListener("click", onEditItem);

  const deleteButton = document.getElementById(`${DELETE_BUTTON_PREFIX}${id}`);
  deleteButton.addEventListener("click", onDeleteItem);
};

export const renderCardsList = (cards, onEditItem, onDeleteItem) => {
  cardsContainer.innerHTML = "";
  // for (const card of cards) {
  //   addCardToPage(cards, onEditItem, onDeleteItem);
  // }
  cards.map((card) => addCardToPage(card, onEditItem, onDeleteItem));
};

export const getInputValues = () => {
  return {
    name: nameInput.value,
    description: descriptionInput.value,
    speed: speedInput.value,
    weight: weightInput.value,
    age: ageInput.value,
    // len: lenInput.value
  };

};
export const clearInputs = () => {
  nameInput.value = "";
  descriptionInput.value = "";
  speedInput.value = "";
  weightInput.value = "";
  ageInput.value = "";
  // lenInput.value = "";
};