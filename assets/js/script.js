document.addEventListener('DOMContentLoaded', (e) => {
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todos.forEach(todo => newElement(todo));
});

let newElement=(todo = null) =>{
    let inputValue = todo || document.getElementById("input").value;
    if (inputValue === '') {
        alert("Nese yazinda mellim");
    } else {
        let div = document.createElement("div");
        div.className = "todo";
        div.innerHTML = inputValue + '<span onclick="deleteElement(this)">x</span>';
        document.getElementById("myUL").appendChild(div);
        document.getElementById("input").value = "";
        saveTodos();
    }
}
 let deleteElement=(span)=> {
        let div = span.parentElement;
        div.style.display = "none";
        saveTodos();
    }

let saveTodos=()=> {
        let todos = Array.from(document.getElementsByClassName('todo')).map(todo => todo.innerText.slice(0, -1));
        localStorage.setItem('todos', JSON.stringify(todos));
    }