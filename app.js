/* const texts = [
  "Modern English School, Nipani",
    "Welcome to Our Website"
    ];
    
const speed = 200;
const eraseSpeed = 100;
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
    
function typeWriter() {
 const rawText = texts[textIndex];
 const visibleText = rawText.substring(0, charIndex);
 const formattedText = visibleText.replace(/\n/g, "<br>");
		      
 document.getElementById("typewritter").innerHTML = formattedText;
		        
 if (!isDeleting && charIndex <= rawText.length) {
	 charIndex++;
	 setTimeout(typeWriter, speed);
 } else if (isDeleting && charIndex >= 0) {
	 charIndex--;
     setTimeout(typeWriter, eraseSpeed);
 } else {
     isDeleting = !isDeleting;
  if (!isDeleting) {
     textIndex = (textIndex + 1) % texts.length;
 }
 setTimeout(typeWriter, 500);
  }
 }
														  
typeWriter(); */

const texts = [
  "Modern English School, Nipani",
  "Welcome to Our Website"
];

const speed = 200;
const eraseSpeed = 100;
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
  const typeElement = document.getElementById("typewritter");
  if (!typeElement) return; // Exit if the element doesn't exist

  const rawText = texts[textIndex];
  const visibleText = rawText.substring(0, charIndex);
  const formattedText = visibleText.replace(/\n/g, "<br>");

  typeElement.innerHTML = formattedText;

  if (!isDeleting && charIndex <= rawText.length) {
    charIndex++;
    setTimeout(typeWriter, speed);
  } else if (isDeleting && charIndex >= 0) {
    charIndex--;
    setTimeout(typeWriter, eraseSpeed);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) {
      textIndex = (textIndex + 1) % texts.length;
    }
    setTimeout(typeWriter, 500);
  }
}

typeWriter();


//~ window.addEventListener('scroll', () => {
	  //~ const scrollY = window.scrollY; // or window.pageYOffset
	  //~ console.log('Scroll position:', scrollY);
//~ });

const navHeight = document.getElementById('navbar');
const navMargin = document.querySelectorAll('.nav_list');
const hr_bar = document.querySelectorAll('.fa-solid');
const mes = document.getElementById('mes');

window.addEventListener('scroll', () => {
	if (window.scrollY > 30){
		navHeight.id = "scrolled";
    mes.id = "mes2";
		hr_bar.forEach(el => el.classList.add('hrlines')); 
		navMargin.forEach(el => el.classList.replace('nav_list', 'nav-ftm'));
		} else{
			navHeight.id = "navbar";
      mes.id = "mes";
			hr_bar.forEach(el => el.classList.remove('hrlines'));
			navMargin.forEach(el => el.classList.replace('nav-ftm', 'nav_list'));
		}
	});

  
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight,
      sectionTop = current.offsetTop - 50,
      sectionId = current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link');
      document.querySelector('.nav-m a[href*=' + sectionId + ']').classList.add('active-link2');
    } else {
      document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link');
      document.querySelector('.nav-m a[href*=' + sectionId + ']').classList.remove('active-link2');
    }
  });
}
window.addEventListener('scroll', scrollActive);
	

const sr = ScrollReveal({
  origin: 'top',
  distance: '80px',
  duration: 2000,
  reset: true
});
		
// Apply reveal effect to your element
sr.reveal('.wo', { delay: 200 });
sr.reveal('#typewritter', { delay: 200 });
sr.reveal('.top', { delay: 200 });

const srLeft = ScrollReveal({
  origin: 'left',
  distance: '30px',
  duration: 2000,
  reset: true
});
		
// Apply reveal effect to your element
srLeft.reveal('#history', { delay: 200 });
srLeft.reveal('#history2', { delay: 200 });
srLeft.reveal('#c-f', { delay: 200 });
srLeft.reveal('#map', { delay: 200 });
srLeft.reveal('.cardf',{delay: 200});
srLeft.reveal('.left',{delay: 200});

const srRight = ScrollReveal({
origin: 'right',
distance: '20px',
duration: 2000,
reset: true
})

srRight.reveal('#c-p',{delay: 200});
/* srRight.reveal('#allbox',{delay: 200}); */
srRight.reveal('#contact-info',{delay: 200});
srRight.reveal('.right',{delay: 200});

const srTop = ScrollReveal({
origin: 'top',
distance: '80px',
duration: 2000,
reset: true
})

srTop.reveal('.top',{delay: 200});

const srBottom = ScrollReveal({
origin: 'bottom',
distance: '30px',
duration: 2000,
reset: true
})

srBottom.reveal('.bottom',{delay: 200});

const srRightt = ScrollReveal({
origin: 'right',
distance: '10px',
duration: 2000,
reset: true
})

srRightt.reveal('#allbox',{delay: 200});

function openMobileMenu(){
const btn = document.querySelector('.sidebar');
btn.style.display = 'flex';	
}

function closeMobileMenu(){
const btn = document.querySelector('.sidebar');
btn.style.display = 'none';	  
}

(function ($) {
  "use strict";

  var carousels = function () {
      $(".owl-carousel").owlCarousel({
          loop: true,
          center: true,
          margin: 0,
          responsiveClass: true,
          nav: false,
          dots: true,
          dotsEach: 1,
          autoplay: true,
          autoplayHoverPause:true,
          autoplayTimeout: 3000, // Set autoplay delay in milliseconds (e.g., 5000ms = 5 seconds)
          responsive: {
              0: {
                  items: 1,
                  nav: false
              },
              680: {
                  items: 1,
                  nav: false,
                  loop: true
              },
              1000: {
                  items: 3,
                  nav: false
              }
          },
            onInitialized: function (event) {
            var totalItems = event.item.count;
            var dotsPerPage = 5;
    
            //Check if total items are greater than dotsPerPage
          if (totalItems > dotsPerPage) {
              // Hide excess dots using CSS
            $(".owl-carousel1 .owl-dots .owl-dot:gt(" + (dotsPerPage - 1) + ")").hide();
           }
          }
          
      });
  };

  carousels();
})(jQuery);


setInterval(() => {
  // Find the center item
  const centerItem = document.querySelector('.owl-item.center');

  if (centerItem) {
    // Get the child div (assumes it's the first child element)
    const childDiv = centerItem.querySelector('div');

    if (childDiv) {
      // Add a unique ID
      childDiv.id = 'id';

      // Optional: remove the ID from all other children
      document.querySelectorAll('.owl-item:not(.center) div').forEach(div => {
        if (div.id === 'id') {
          div.removeAttribute('id');
        }
      });
    }
  }
}, 100); // checks every 100ms

setTimeout(() => {
  // Move the .owl-dots into custom container
  const dots = document.querySelector('.owl-carousel .owl-dots');
  const target = document.querySelector('#custom-dots-container');
  if (dots && target) {
    target.appendChild(dots);
  }
}, 500); // Delay to make sure Owl has initialized