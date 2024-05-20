

document.addEventListener("DOMContentLoaded", () => {

// When the user scrolls the page, execute myFunction
window.onscroll = function() {myFunction()};

// Get the navbar
var navbar = document.getElementById("ftco-navbar");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;



// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
});


//EmailJS Integration
document.getElementById('contactSubmit').onclick = function(e) {
	console.log("ritu ritu rotu: ");

	console.log("ritu e.target.business: "+e.target.business);
	e.preventDefault();
	//console.clear();

	emailjs.sendForm(process.env.SERVICE_ID, process.env.TEMPLATE_ID, e.target, process.env.PUBLIC_KEY)
	  .then((result) => {
		console.log(result.text);
		alert('Message Sent Successfully')
	  }, (error) => {
		console.log(error.text);
		alert('Something went wrong!')
	  });
	e.target.reset();
};



