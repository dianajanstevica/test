document.getElementById("btn").addEventListener("click", myFunction);

function myFunction() {
  document.getElementById("test").innerHTML = "Hello World";
}

document.getElementById("btn").onclick = function(){
	document.getElementById("test").style.color = 'green';
}
