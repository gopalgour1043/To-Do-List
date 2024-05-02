const inputbox=document.getElementById("input-box");
const listcontiner=document.getElementById("list-container");
function addtask(){
    if(inputbox.value===''){
        alert("you must write something!");
    }
    else{
        let li=document.createElement("li");
        li.innerHTML=inputbox.value;
        listcontiner.appendChild(li);
        let span=document.createElement("span");
        span.innerHTML="\u00d7";
        li.appendChild(span);
    }
    inputbox.value="";
    savedata();
}

listcontiner.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else{
        e.target.parentElement.remove();
        savedata();
    }
},false)


function savedata(){
    localStorage.setItem("data",listcontiner.innerHTML);
}
function showtask(){
    listcontiner.innerHTML=localStorage.getItem("data")
}
showtask();