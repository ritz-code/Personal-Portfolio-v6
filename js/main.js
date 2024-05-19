require("dotenv").config();

$(document).ready(function($) {

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
document.getElementById('contact').addEventListener('submit', function(event) {
    event.preventDefault();
   /* emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', this)
      .then(function(response) {
        console.log('Email sent!', response.status, response.text);
        alert('Email sent successfully!');
      }, function(error) {
        console.error('Error sending email:', error);
        alert('Oops! Something went wrong.');
      }); */
	  emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, e.target, PUBLIC_KEY)
	  .then((result) => {
		console.log(result.text);
		alert('Message Sent Successfully')
	  }, (error) => {
		console.log(error.text);
		alert('Something went wrong!')
	  });
	e.target.reset();

});


// navigation
var OnePageNav = function() {
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



});
