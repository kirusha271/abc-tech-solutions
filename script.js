// Website Loaded

window.onload = function(){

console.log("ABC Tech Solutions Website Loaded");

}

// Contact Form Validation

function validateForm(){

let name =
document.getElementById("name").value;

let email =
document.getElementById("email").value;

if(name==""){

alert("Please enter your name");

return false;

}

if(email==""){

alert("Please enter your email");

return false;

}

alert("Message Sent Successfully");

return true;

}