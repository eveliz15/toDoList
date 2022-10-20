// window.localStorage.setItem('user', JSON.stringify(user));

// const session = localStorage.getItem('currentSession');
// var user = JSON.parse(localStorage.getItem('user'));
window.addEventListener('load', () => {     //wait for page to load
    const form = document.querySelector("#new-task-form");
    const input = document.querySelector("#new-task-input");
    const list_el = document.querySelector("#tasks");   //list-element

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //prevents refreshing page when add task is clicked

        const task = input.value;

        if(!task){
            alert("Please add a task");
            console.log("Empty task");
            return;
        }else{
            console.log("Success!")
        }

        const task_el = document.createElement("div");
        task_el.classList.add("task");

        const task_content_el = document.createElement("div");
        task_content_el.classList.add("content");

        task_el.appendChild(task_content_el);

        const task_input_el = document.createElement("input");
        task_input_el.classList.add("text");
        task_input_el.type = "text";
        task_input_el.value = task;
        task_input_el.setAttribute("readonly", "readonly");

        task_content_el.appendChild(task_input_el);

        const task_actions_el = document.createElement("div");
        task_actions_el.classList.add("actions");

        const task_edit_el = document.createElement("button");
        task_edit_el.classList.add("edit");
        task_edit_el.innerHTML = "Edit";

        const task_delete_el = document.createElement("button");
        task_delete_el.classList.add("delete");
        task_delete_el.innerHTML = "Delete";

        task_actions_el.appendChild(task_edit_el);
        task_actions_el.appendChild(task_delete_el);

        task_el.appendChild(task_actions_el);

        list_el.appendChild(task_el);
        input.value = "";

        task_edit_el.addEventListener('click', () => {
            if(task_edit_el.innerText.toLowerCase() == "edit"){
                task_input_el.removeAttribute("readonly");
                task_input_el.focus();  //Assists cursor location
                task_edit_el.innerText = "Save";
            }else{
                console.log("Save");
                task_input_el.setAttribute("readonly", "readonly");
                task_edit_el.innerHTML = "Edit";
            }
        })
        task_delete_el.addEventListener('click', () => {
            list_el.removeChild(task_el);
            console.log("Successfully deleted");
        });
    });
});