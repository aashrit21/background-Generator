var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var h3 = document.querySelector("h3");
var body = document.getElementById("backgroundGradient");
var invertBtn = document.getElementById("invertBtn");
var randomBtn = document.getElementById("randomBtn");


function randomBackground(){

	var hexacode = "#";
	while (hexacode.length< 7){
		hexacode += (Math.round(Math.random() *15).toString(16))
	}
	return hexacode;
	
}

function applyBackground(){

	 color1.value= randomBackground();
	 color2.value= randomBackground();
	 changeBackground();
	
}

function invertBackground(){
	var col1= color1.value;
	color1.value=color2.value;
	 color2.value=col1;
	changeBackground();

}

function changeBackground(){
	body.style.background= "linear-gradient(to right," + color1.value + "," + color2.value +")"

	h3.textContent = body.style.background + ";";
}
changeBackground();
color1.addEventListener("input", changeBackground)
color2.addEventListener("input", changeBackground)
invertBtn.addEventListener("click", invertBackground);
randomBtn.addEventListener("click", applyBackground)


