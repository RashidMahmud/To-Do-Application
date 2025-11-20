                                                        // Catching the elements from html file
const input = document.getElementById('todo-input');
const addBtn = document.getElementById('add-btn');
const todoList = document.getElementById('todo-list');

                                                        // To-do button

addBtn.addEventListener('click', () => {
  const text = input.value.trim();
  if (text !== "") {
    addTodoItem(text);
    input.value = "";
  }
});