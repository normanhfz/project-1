const toDoItems = document.getElementsByClassName("toDoItems")[0];
const input = document.getElementById("input");
const trashIcon = document.getElementById("trash");

input.addEventListener("keydown",function(event){
    if(event.key === "Enter")
        addItem();
})

function addItem(){
     let divParent = document.createElement("div");
     let divChild = document.createElement("div");
     let tickIcon = document.createElement("i")
     let trashIcon = document.createElement("i")
    
     divParent.className = "item";
     divParent.innerHTML = '<div>'+ input.value + '</div>';

     tickIcon.className = "fas fa-check-square";
     tickIcon.style.color = "lightgray";
     tickIcon.addEventListener("click", function(){
         tickIcon.style.color = "limegreen";
     })

     divChild.appendChild(tickIcon);

     trashIcon.className = "fas fa-trash";
     trashIcon.style.color = "darkgray";
     trashIcon.addEventListener("click", function(){
         divParent.remove();
     })

     divChild.appendChild(trashIcon);

     divParent.appendChild(divChild);

     toDoItems.appendChild(divParent);

     input.value = '';
    }