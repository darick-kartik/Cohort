const form = document.querySelector("#task-form");
const taskInput = document.querySelector("#task-input");
const categorySelect = document.querySelector("#category");
const taskList = document.querySelector("#task-list");

// -------------------------
// Create Task Card
// -------------------------
function createTaskCard(task, taskCategory) {

    const card = document.createElement("div");
    card.classList.add("task-card");

    const heading = document.createElement("h3");
    heading.classList.add("task-title");
    heading.textContent = task;

    const para1 = document.createElement("p");
    para1.classList.add("category");
    para1.textContent = `Category: ${taskCategory}`;

    const para2 = document.createElement("p");
    para2.textContent = "Status: Pending";
    para2.classList.add("status");

    // Buttons Container
    const actions = document.createElement("div");
    actions.classList.add("task-actions");

    // Edit Button
    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.classList.add("edit-btn");

    // Complete Button
    const completeBtn = document.createElement("button");
    completeBtn.textContent = "Complete";
    completeBtn.classList.add("complete-btn");

    // Delete Button
    const delBtn = document.createElement("button");
    delBtn.textContent = "Delete";
    delBtn.classList.add("delete-btn");

    actions.append(editBtn, completeBtn, delBtn);

    card.append(
        heading,
        para1,
        para2,
        actions
    );

    return card;
}

// -------------------------
// Add Task
// -------------------------
form.addEventListener("submit", (event) => {

    event.preventDefault();

    const task = taskInput.value.trim();
    const taskCategory = categorySelect.value;

    if (task === "") return;

    const card = createTaskCard(task, taskCategory);

    taskList.append(card);

    form.reset();

});

// -------------------------
// Event Delegation
// -------------------------
taskList.addEventListener("click", (event) => {

    // Delete
  if (event.target.classList.contains("delete-btn")) {

    event.target
        .closest(".task-card")
        .remove();

    return;
}

    // Complete Toggle
    if (event.target.classList.contains("complete-btn")) {

    const card = event.target.closest(".task-card");

    const status = card.querySelector(".status");

    if (status.textContent === "Status: Pending") {

        status.textContent = "Status: Completed";

        event.target.textContent = "Undo";

    }

    else {

        status.textContent = "Status: Pending";

        event.target.textContent = "Complete";

    }

    return;

}
    // Edit
if (event.target.classList.contains("edit-btn")) {

    const card = event.target.closest(".task-card");

    const heading = card.querySelector(".task-title");
    const categoryText = card.querySelector(".category");

    // Fill form
    taskInput.value = heading.textContent;

    // "Category: Study" -> "Study"
    const selectedCategory = categoryText.textContent
        .replace("Category: ", "")
        .trim();

    categorySelect.value = selectedCategory;

    // Remove old card
    card.remove();
}
});


const themeBtn=document.querySelector("#theme-btn");

if(themeBtn){

    themeBtn.addEventListener("click",()=>{

        document.body.classList.toggle("dark");

    });

}



const steps = document.querySelectorAll(".step");

function runPipelineAnimation() {

    // Remove active class from all steps
    steps.forEach((step) => {
        step.classList.remove("active");
    });

    // Add active class one by one
    steps.forEach((step, index) => {

        setTimeout(() => {

            step.classList.add("active");

        }, index * 500);

    });

}
runPipelineAnimation();

const animation = setInterval(runPipelineAnimation,4000);

// -------------------------
// Event Bubbling & Capturing Demo
// -------------------------

const grandparent = document.querySelector("#grandparent");
const parent = document.querySelector("#parent");
const child = document.querySelector("#child");
const button = document.querySelector("#demo-btn");

const elements = [
    button,
    child,
    parent,
    grandparent
];

button.addEventListener("click", () => {

    // Remove old highlight
    elements.forEach((element)=>{
        element.classList.remove("highlight");
    });

    // Bubble Animation
    elements.forEach((element,index)=>{

        setTimeout(()=>{

            element.classList.add("highlight");

            console.log(element.id);

            setTimeout(()=>{

                element.classList.remove("highlight");

            },300);

        },index*500);

    });

});
