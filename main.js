const items = document.querySelector("#do__lists");
const items2 = document.querySelector("#done__lists");
const items3 = document.querySelector("#memo__lists");
const input = document.querySelector("#input");
const input2 = document.querySelector("#input2");
const addbtn = document.querySelector("#add1");
const addbtn2 = document.querySelector("#add2");

addbtn.addEventListener("click", onAdd);
addbtn2.addEventListener("click", onAdd2);

let id = 0;

function onAdd() {
  const text = input.value;
  if (text == "") {
    input.focus();
    return;
  }
  const item = createItem(text);
  items.appendChild(item);
  input.value = "";
  input.focus();
}

function onAdd2() {
  const text = input2.value;
  if (text == "") {
    input2.focus();
    return;
  }
  const item = createItem2(text);
  items3.appendChild(item);
  input2.value = "";
  input2.focus();
}

function createItem(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "list");
  itemRow.setAttribute("data-key", id);
  itemRow.innerHTML = `<span class="list__name">${text}</span>
  <input type="checkbox" name="checkbox" id="check" data-id="${id}" />`;

  id++;
  return itemRow;
}

input.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    onAdd();
  }
});

function createItem2(text) {
  const itemRow = document.createElement("li");
  itemRow.setAttribute("class", "list");
  itemRow.setAttribute("data-key", id);
  itemRow.innerHTML = `<span class="list__name">${text}</span>
  <i class="fas fa-trash" data-id="${id}" />`;

  id++;
  return itemRow;
}

items.addEventListener("click", (event) => {
  const id = event.target.dataset.id;
  const selected = event.target.checked;
  if (id && selected) {
    const toBeDeleted = document.querySelector(`.list[data-key="${id}"]`);
    toBeDeleted.remove();

    items2.appendChild(toBeDeleted);
    toBeDeleted.scrollIntoView({ block: "center" });
  }
});

items2.addEventListener("click", (event) => {
  remove(event);
});

items3.addEventListener("click", (event) => {
  remove(event);
});

function remove(event) {
  const id = event.target.dataset.id;

  if (id) {
    const toBeDeleted = document.querySelector(`.list[data-key="${id}"]`);
    toBeDeleted.remove();
  }
}
