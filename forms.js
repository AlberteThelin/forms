let todo = "";
const todoArray = [];
const ul = document.querySelector("ul");

document.querySelector("#todoForm").addEventListener("submit", function(event) {
    console.log("Submitting the form");
    event.preventDefault();

    todo = document.querySelector("#todo").value;
    console.log(todo);
    todoArray.push(todo);
    
    let template = todoArray.map(todoItem => `
    <li>${todoItem}</li>
    `);
    ul.innerHTML = template.join("");
});
