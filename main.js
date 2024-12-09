const inputTask = document.getElementById('input-box');
const AddButton = document.querySelector("button");
const listTask = document.getElementById('list-tasks');

inputTask.focus();
function addTask() {
    if(inputTask.value === '') {
        alert("You Must Write Something")
    }else {
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        listTask.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7"
        li.appendChild(span);
    }

    inputTask.value = '';
    inputTask.focus();
    saveData();
}

listTask.addEventListener("click" ,function(e){
    if(e.target.tagName === 'LI') {
        e.target.classList.toggle("checked");
        saveData();
    }
    else if (e.target.tagName === 'SPAN') {
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData() {
    localStorage.setItem('data' , listTask.innerHTML)
}

function showTask() {
    listTask.innerHTML = localStorage.getItem('data')
}

showTask();