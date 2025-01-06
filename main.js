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
var close = document.getElementsByClassName("close");
var i;
for (i = 0;i<close.length;i++){
    close[i].onclick = function(){
        var li = this.parentElement;
        li.style.display = "none";
    }
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
        mylist.appendChild(newtask);
        inputbox.value = "";
        var xbutton = document.createElement("span");
        xbutton.className = "close";
        var x = document.createTextNode("x");
        xbutton.appendChild(x);
        mylist.appendChild(xbutton)
    }
     
}
