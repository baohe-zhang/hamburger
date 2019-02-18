console.log("Hello World!");


// Slide 
// Refer to: https://www.w3schools.com/howto/howto_js_slideshow.asp
var slideIndex = 0;
showSlide(slideIndex);

window.plusSlide = function plusSlide(n) {
	showSlide(slideIndex += n);
};

window.currentSlide = function currentSlide(n) {
	showSlide(slideIndex = n);
};

function showSlide(n) {
	var slides = document.getElementsByClassName("slide");
	if (n > slides.length - 1) {
		slideIndex = 0;
	}
	if (n < 0) {
		slideIndex = slides.length - 1;
	}
	for (var i = 0; i < slides.length; i++) {
		slides[i].style.display = "none";
	}
	slides[slideIndex].style.display = "block";
}


// Modal
// Refer to: https://www.w3schools.com/howto/howto_css_modals.asp
var modal1 = document.getElementById("modal1");
var btn1 = document.getElementById("button1");
var close1 = document.getElementById("close1");
btn1.onclick = function() {
	modal1.style.display = "block"
};
close1.onclick = function() {
	modal1.style.display = "none";
};

var modal2 = document.getElementById("modal2");
var btn2 = document.getElementById("button2");
var close2 = document.getElementById("close2");
btn2.onclick = function() {
	modal2.style.display = "block"
};
close2.onclick = function() {
	modal2.style.display = "none";
};

var modal3 = document.getElementById("modal3");
var btn3 = document.getElementById("button3");
var close3 = document.getElementById("close3");
btn3.onclick = function() {
	modal3.style.display = "block"
};
close3.onclick = function() {
	modal3.style.display = "none";
};

window.onclick = function(event) {
	if (event.target == modal1) {
		modal1.style.display = "none";
	}
	if (event.target == modal2) {
		modal2.style.display = "none";
	}
	if (event.target == modal3) {
		modal3.style.display = "none";
	}
}


// Navbar
// refer to: https://www.w3schools.com/howto/howto_js_navbar_shrink_scroll.asp
var navbar = document.getElementById("navbar");
var logo = document.getElementById("logo");
var section1 = document.getElementById("section1");
var section2 = document.getElementById("section2");
var section3 = document.getElementById("section3");
var home = document.getElementById("home");
var sec1 = document.getElementById("sec1");
var sec2 = document.getElementById("sec2");
var sec3 = document.getElementById("sec3");

window.onscroll = function() {
	resizeNavbar();
	indicatePosition();
};

function resizeNavbar() {
	if (document.body.scrollTop > 120 || document.documentElement.scrollTop > 120) {
		navbar.style.padding = "15px 10px";
		logo.style.width = "60px";
	} else {
		navbar.style.padding = "40px 10px";
		logo.style.width = "90px";
	}
}

function indicatePosition() {
	var cur_top = document.documentElement.scrollTop - 60;
	if (cur_top < 0) {
		home.style.fontWeight = "bold";
		home.style.backgroundColor = "#ff6600";
		sec1.style.fontWeight = "normal";
		sec1.style.backgroundColor = "transparent";
		sec2.style.fontWeight = "normal";
		sec2.style.backgroundColor = "transparent";
		sec3.style.fontWeight = "normal";
		sec3.style.backgroundColor = "transparent";
	} else if (cur_top >= 0 && cur_top < section1.offsetTop) {
		home.style.fontWeight = "normal";
		home.style.backgroundColor = "transparent";
		sec1.style.fontWeight = "bold";
		sec1.style.backgroundColor = "#ff6600";
		sec2.style.fontWeight = "normal";
		sec2.style.backgroundColor = "transparent";
		sec3.style.fontWeight = "normal";
		sec3.style.backgroundColor = "transparent";
	} else if (cur_top >= section1.offsetTop && cur_top < section2.offsetTop) {
		home.style.fontWeight = "normal";
		home.style.backgroundColor = "transparent";
		sec1.style.fontWeight = "normal";
		sec1.style.backgroundColor = "transparent";
		sec2.style.fontWeight = "bold";
		sec2.style.backgroundColor = "#ff6600";
		sec3.style.fontWeight = "normal";
		sec3.style.backgroundColor = "transparent";
	} else if (cur_top >= section2.offsetTop && cur_top < section3.offsetTop) {
		home.style.fontWeight = "normal";
		home.style.backgroundColor = "transparent";
		sec1.style.fontWeight = "normal";
		sec1.style.backgroundColor = "transparent";
		sec2.style.fontWeight = "normal";
		sec2.style.backgroundColor = "transparent";
		sec3.style.fontWeight = "bold";
		sec3.style.backgroundColor = "#ff6600";
	}
}