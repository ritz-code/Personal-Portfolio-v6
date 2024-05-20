

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


//Email JS integration
/* document.getElementById('contactSubmit').addEventListener('submit', function(e) {
    e.preventDefault();
	  emailjs.sendForm(service_320r477, template_5fmmusv, e.target, Vu_F4zdaki0EEjCXu)
	  .then((result) => {
		console.log(result.text);
		alert('Message Sent Successfully')
	  }, (error) => {
		console.log(error.text);
		alert('Something went wrong!')
	  });
	e.target.reset();

}); */


// navigation
/* var OnePageNav = function() {
	$(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on('click', function(e) {
		e.preventDefault();

		var hash = this.hash,
				navToggler = $('.navbar-toggler');
		$('html, body').animate({
		scrollTop: $(hash).offset().top
		}, 700, 'easeInOutExpo', function(){
		window.location.hash = hash;
		});


		if ( navToggler.is(':visible') ) {
		navToggler.click();
		}
	});
	$('body').on('activate.bs.scrollspy', function () {
		console.log('nice');
	})
};
OnePageNav();
 */


});

const handleOnSubmit = (e) => {
	console.log("ritu e.target.business: "+e.target.business);
	//e.preventDefault();
	//console.clear();

	/* emailjs.sendForm(service_320r477, template_5fmmusv, e.target, Vu_F4zdaki0EEjCXu)
	  .then((result) => {
		console.log(result.text);
		alert('Message Sent Successfully')
	  }, (error) => {
		console.log(error.text);
		alert('Something went wrong!')
	  });
	e.target.reset() */
};

