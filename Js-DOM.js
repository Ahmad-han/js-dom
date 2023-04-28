const elementLyst = document.getElementById("elementLyst");

const addButton = document.getElementById("addButton");

const addButton2 = document.getElementById("addButton2");

const deleteButton = document.getElementById("deleteButton");

const deleteButton2 = document.getElementById("deleteButton2");

const destroyButton = document.getElementById("destroyButton");

const contain = document.getElementById("contain");

const addElement = () => {
    let newLi = document.createElement("li");
    let newTxtLi = document.createTextNode("Новый эдемент");
    newLi.appendChild(newTxtLi);
    newLi.classList.add("list-item");
    elementLyst.appendChild(newLi);
}


const addElementBefore = () => {
    let newLi = document.createElement("li");
    let newTxtLi = document.createTextNode("Новый элемент в начале");
    newLi.appendChild(newTxtLi);
    elementLyst.prepend(newLi);
}


const deleteFirstElement = () => {
    elementLyst.removeChild(elementLyst.firstChild);
}

const deleteLastElement = () => {
    elementLyst.removeChild(elementLyst.lastChild);
}


const destroyAll = () => {
    document.body.remove(contain);
    document.body.style.backgroundColor = "black";
}