const inputBox =  document.getElementById ("input-box");
const listContainer =  document.getElementById ("list-container");
// const searchButton = document.querySelector(".row button");

function addTask(){
    if(inputBox.value ==''){
        alert("you must write something!!!!");
    }
    else{
        let li= document.createElement("li");
        li.innerHTML=inputBox.value;
        listContainer.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML="\u00d7"; 
        li.appendChild(span);
        

    }
    saveData();
    inputBox.value ='';
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// searchButton.addEventListener("click", ()=>{
//     addTask(inputBox.value);
//  } )




function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showData();