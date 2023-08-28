let form = document.getElementById("form");
let input = document.getElementById("todos-input");
let errorMessage = document.getElementById("err");
let posts = document.getElementById("todos-container");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  formValidation();
});

let formValidation = () => {
  if (input.value === "") {
    errorMessage.innerHTML = "Task cannot be blank";
    return;
  } else if (input.value.trim().length < 5) {
    errorMessage.innerHTML = "Post requires a minimum of 5 characters";
    return;
  } else {
    errorMessage.innerHTML = "";
    setAndCreateTodo();
  }
};

let data = {};

let setAndCreateTodo = () => {
  data["text"] = input.value;
  createPost();
};

let createPost = () => {
  posts.innerHTML += `
  <div class="content">
      <p>${data.text}</p>
      <span class="options">
        <i onClick="editPost(this)" class="fas fa-edit edit"></i>
        <i onClick="deletePost(this)" class="fas fa-trash-alt delete"></i>
      </span>
  </div>
  `;
  input.value = "";
  storeTodos();
};

let deletePost = (e) => {
  e.parentElement.parentElement.remove();
  storeTodos();
};

let editPost = (e) => {
  input.value = e.parentElement.previousElementSibling.innerHTML;
  e.parentElement.parentElement.remove();
  storeTodos();
};

posts.addEventListener("click", (e) => {
  if (e.target.tagName === "P") {
    e.target.classList.toggle("checked");
    storeTodos();
  }
});

function storeTodos() {
  localStorage.setItem("Todos", posts.innerHTML);
}

function getTodos() {
  posts.innerHTML = localStorage.getItem("Todos");
}

getTodos();
