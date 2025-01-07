function deleteTask(event){
    // alert("x clicked");
    const litem = event.target.parentElement;
    litem.remove();
}

function addfunc(){
    const inputbox = document.getElementById("myinput");
    const mylist = document.getElementById("mylist");
    const newtask = document.createElement("li");
    var mytask = inputbox.value;
    var t = document.createTextNode(mytask);
    // later: use of createTextNode()    
    newtask.appendChild(t);
    if (mytask === ""){
        alert("Please Enter a Task for Adding it.");    
    } else {
        // create the x-button
        var xbutton = document.createElement("button");
        xbutton.className = "close";
        var x = document.createTextNode("x");
        xbutton.appendChild(x);
        
        // func for deleting the task
        xbutton.addEventListener("click",deleteTask);

        // append the x-button the the task
        newtask.appendChild(xbutton);
        
        // append the task as a list-item
        mylist.appendChild(newtask);
        inputbox.value = "";
    }
}
