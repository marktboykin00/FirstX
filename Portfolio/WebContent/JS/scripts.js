window.onload = function() {

	document.getElementsByClassName("mobilemenutrigger")[0].addEventListener("click", mobileMenuFunc);

	document.getElementsByClassName("exit")[0].addEventListener("click", closeFunc);

	document.getElementById("mobilemenu").addEventListener("click", closeFunc);

}



function mobileMenuFunc() {

	var mobile = document.getElementById("mobilemenucontainer");

	mobile.style.display = "flex";

	mobile.className = "fadeinClass";

	document.body.style.overflow = "hidden";

}



function closeFunc() {

	var mobile = document.getElementById("mobilemenucontainer");

	mobile.style.display = "none";

	document.body.style.overflow = "visible";

}

window.onload = function(){
	var education = document.getElementById("education");
	console.log("hey");
	education.className = "fadeRightClass"
};

window.onscroll = function(){
	var proficiencies = document.getElementByID("profenciencies");
	var work = document.getElementByID("workhistory");
	var projects = document.getElementByID("projects");
	
	if(window.pageYOffset >= profenciencies.offsetTop - window.innerHeight + 250){
		proficiencies.className = "fadeLeftClass";
		proficiencies.style.animation = ""
		if(window.pageYOffset >= work.offsetTop-window.innerHeight + 300)

			workhistory.className = "fadeRightClass";

		if(window.pageYOffset >= projects.offsetTop-window.innerHeight + 350)

			projects.className = "fadeLeftClass";
	}
};
