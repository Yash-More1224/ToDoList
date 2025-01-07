// // adding "x" symbol at the end of each li
// var lilist = document.getElementsByTagName("LI");
//     // gets all li's
// var i;
// for (i = 0;i<lilist.length; i++){
//     var inlineButton = document.createElement("SPAN");
//     var x = document.createTextNode("x");
//     inlineButton.appendChild(x);
//     inlineButton.className = "close";
//     lilist[i].appendChild(inlineButton);
// }

// func for "x" button:
// var close = document.getElementsByClassName("close");
// var i;
// for (i = 0;i<close.length;i++){
//     close[i].onclick = function(){
//         // var li = this.parentElement;
//         // li.style.display = "none";
//         alert("clicked");
//     }
// }

function deleteTask(){
    alert("x clicked");
}

// const buttons = document.querySelectorAll('.close');
// buttons.forEach(button => {
//     button.addEventListener('click',deleteTask);
// });

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
        mylist.appendChild(newtask);
        inputbox.value = "";
        var xbutton = document.createElement("button");
        xbutton.className = "close";
        var x = document.createTextNode("x");
        xbutton.appendChild(x);
        mylist.appendChild(xbutton);
        xbutton.addEventListener("click",deleteTask);
    }
     
}
