/* =========================
   TODO LIST WITH LOCAL STORAGE
========================= */

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

function displayTasks(){
    let list = document.getElementById("taskList");
    list.innerHTML="";

    tasks.forEach((task,index)=>{
        let li=document.createElement("li");
        li.innerHTML =
        `${task}
        <button onclick="deleteTask(${index})">X</button>`;
        list.appendChild(li);
    });
}

function addTask(){
    let input=document.getElementById("taskInput");
    if(input.value==="") return;

    tasks.push(input.value);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    input.value="";
    displayTasks();
}

function deleteTask(index){
    tasks.splice(index,1);
    localStorage.setItem("tasks",JSON.stringify(tasks));
    displayTasks();
}

displayTasks();


/* =========================
   PRODUCT LIST + FILTER + SORT
========================= */

let products=[
    {name:"Laptop",category:"tech",price:60000},
    {name:"Headphones",category:"tech",price:2000},
    {name:"JavaScript Book",category:"book",price:500},
    {name:"Python Book",category:"book",price:700}
];

function showProducts(list){
    let container=document.getElementById("productContainer");
    container.innerHTML="";

    list.forEach(p=>{
        container.innerHTML += `
        <div class="card">
            <h3>${p.name}</h3>
            <p>₹${p.price}</p>
        </div>`;
    });
}

function filterProducts(){
    let value=document.getElementById("filter").value;

    if(value==="all"){
        showProducts(products);
    }else{
        let filtered=products.filter(p=>p.category===value);
        showProducts(filtered);
    }
}

function sortProducts(type){
    let sorted=[...products];

    if(type==="low")
        sorted.sort((a,b)=>a.price-b.price);
    else if(type==="high")
        sorted.sort((a,b)=>b.price-a.price);

    showProducts(sorted);
}

showProducts(products);