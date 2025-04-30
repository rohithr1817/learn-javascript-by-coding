let username;
document.querySelector("#mybutton").onclick=function() {
username=document.querySelector("#val").value;
document.querySelector("#head1").textContent=`Hello ${username}`
}



// let username;
// document.querySelector("#myButton").addEventListener("click", function() {
//     username = document.querySelector("#val").value;
//     document.querySelector("#head1").textContent = "Hello " + username + "!";
// });