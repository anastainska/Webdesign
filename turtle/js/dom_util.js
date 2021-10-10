const itemsContainer = document.getElementById("container__items");

const getItemId = (id) => `item-${id}`

const itemTemplate = ({id, scientific_name, speed, weight, age, length}) =>
`<li id="${getItemId(id)}" class="item-card">
    <img 
        src="https://ih1.redbubble.net/image.460763771.2054/st,small,507x507-pad,600x600,f8f8f8.u5.jpg"
        class="item-container__image" alt="turtle">
    <div>
        <h4>${scientific_name}</h4>
        <p>Age: ${age}</p>
        <p>Weight: ${weight} kilos</p>
        <p>Speed: ${speed} km/h</p>
        <p>Length: ${length} cm</p>
    </div>
</li>`;

export const addItemToPage = ({id, scientific_name, speed, weight, age, length}) => {
    itemsContainer.insertAdjacentHTML(
        "afterbegin", 
        itemTemplate({id, scientific_name, speed, weight, age, length})
    );
};

export const renderItemsList = (items) => {
    itemsContainer.innerHTML = "";

    for (const item of items) {
        addItemToPage(item);
    }
};