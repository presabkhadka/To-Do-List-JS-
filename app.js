let inputTask = document.querySelector("#taskInput");
let addBtn = document.querySelector("#addBtn");
let taskList = document.querySelector("#list-container");

let addTask = ()=>{
    if(inputTask.value === ''){
        alert("Please enter your task")
    } else{
            let li = document.createElement("li")
            li.innerHTML = inputTask.value;
            taskList.appendChild(li);
            let span = document.createElement("span");
            span.innerHTML="\u00d7";
            li.appendChild(span);
    }
    inputTask.value= "";
    saveData();
}

taskList.addEventListener('click', function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", taskList.innerHTML);
}

function showData(){
    taskList.innerHTML = localStorage.getItem("data");
}

showData();