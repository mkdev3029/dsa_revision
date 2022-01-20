const addBtn = document.getElementById("add-btn");

if (localStorage.getItem("todo") === null) {
  localStorage.setItem("todo", JSON.stringify([]));
}

addBtn.onclick = () => {
  const todoText = document.getElementById("todo-text").value;
  console.log(todoText);
  var todoData = {
    id: Math.floor(Math.random() * 1000),
    title: todoText,
    status: false,
  };

  const dataLocal = JSON.parse(localStorage.getItem("todo"));

  dataLocal.push(todoData);

  localStorage.setItem("todo", JSON.stringify(dataLocal));

  showData(todoData);
};

function displayFromLocalStorage() {
  const data = JSON.parse(localStorage.getItem("todo"));
  // array of objects

  data.length !== 0 &&
    data.forEach((todoData) => {
      showData(todoData);
    });
}

displayFromLocalStorage();

// toggle

function showData(todoData) {
  const showDataDiv = document.getElementById("show-data");

  const todoContentDiv = document.createElement("div");
  todoContentDiv.className = "todo-content";
  todoContentDiv.style = "display: flex; justify-content: center; gap: 10px";

  const titlePara = document.createElement("p");
  titlePara.textContent = todoData.title;

  const statusPara = document.createElement("p");
  statusPara.id = todoData.id;

  statusPara.textContent = todoData.status;

  const toggleBtn = document.createElement("button");
  toggleBtn.textContent = "Toggle";

  toggleBtn.onclick = () => {
    toggleStatus(todoData);
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";

  deleteBtn.onclick = () => {
    deleteTodo(todoData);
  };

  const editBtn = document.createElement("button");
  editBtn.textContent = "Edit";

  editBtn.onclick = () => {
    editTodo(todoData);
  };

  todoContentDiv.append(titlePara, statusPara, toggleBtn, deleteBtn, editBtn);

  showDataDiv.append(todoContentDiv);
}

function toggleStatus(todoData) {
  const todoStatus = document.getElementById(`${todoData.id}`);

  if (todoStatus.textContent == "false") {
    todoStatus.textContent = "true";
  } else {
    todoStatus.textContent = "false";
  }

  let dataLocal = JSON.parse(localStorage.getItem("todo"));

  var mappedData = dataLocal.map((item) => {
    if (item.id === todoData.id) {
      return {
        ...item,
        status: !item.status,
      };
    }
    return item;
  });

  localStorage.setItem("todo", JSON.stringify(mappedData));
}

function deleteTodo(todoData) {
  const todoStatus = document.getElementById(`${todoData.id}`);

  todoStatus.parentElement.remove();

  let dataLocal = JSON.parse(localStorage.getItem("todo"));

  var filteredData = dataLocal.filter((item) => {
    return item.id !== todoData.id;
  });

  // console.log(filteredData);

  localStorage.setItem("todo", JSON.stringify(filteredData));
}

function editTodo(todoData) {
  const showDataDiv = document.getElementById("show-data");
  showDataDiv.style.display = "none";

  const showEditDiv = document.getElementById("show-edit");
  showEditDiv.style = "display: block; text-align: center";

  const editedDiv = document.createElement("div");

  const inputBox = document.createElement("input");
  inputBox.id = `${todoData.id}-edited`;
  inputBox.value = todoData.title;

  const doneBtn = document.createElement("button");
  doneBtn.textContent = "Done";

  doneBtn.onclick = () => {
    edited(todoData);
  };

  editedDiv.append(inputBox, doneBtn);

  showEditDiv.append(editedDiv);
}

function edited(todoData) {
  const editedInput = document.getElementById(`${todoData.id}-edited`);

  // console.log(editedInput.value);

  const showDataDiv = document.getElementById("show-data");
  showDataDiv.style.display = "block";

  const showEditDiv = document.getElementById("show-edit");
  showEditDiv.style.display = "none";

  editedInput.parentElement.remove();

  let dataLocal = JSON.parse(localStorage.getItem("todo"));

  let mappedData = dataLocal.map((item) => {
    if (item.id === todoData.id) {
      return {
        ...item,
        title: editedInput.value,
      };
    }
    return item;
  });

  localStorage.setItem("todo", JSON.stringify(mappedData));

  showEditedData();
}

function showEditedData() {
  const showDataDiv = document.getElementById("show-data");
  showDataDiv.remove();

  const newShowDataDiv = document.createElement("div");
  newShowDataDiv.id = "show-data";
  const body = document.getElementsByTagName("body")[0];
  body.appendChild(newShowDataDiv);

  displayFromLocalStorage();
}
