let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick=()=>{
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};


let sections = document.querySelectorAll('section');
let navlinks = document.querySelectorAll('header nav a');
window.onscroll = () => {  


  let header = document.querySelector('.header');
        header.classList.toggle('sticky',window.scrollY > 100);
};
    
      

var swiper = new Swiper(".mySwiper", {
    slidesPerView: 1,
    spaceBetween: 50,
    loop: true,
    grabCursor:true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  let darkModeIcon=document.querySelector('#darkMode-icon')
  darkModeIcon.onclick = () =>{
    darkModeIcon.classList.toggle('bx-sun');
    document.body.classList.toggle('dark-mode');
  }
  ScrollReveal({
    
    distance:'80px',
    duration:2000,
    delay:200
  });
  ScrollReveal().reveal('.home-content,.heading',{origin:'top'});
  ScrollReveal().reveal('.home-img img,.work-container,.skill-box,.education-wrapper,.contact form',{origin:'bottom'});
  ScrollReveal().reveal('.home-content h1,.about-img img',{origin:'left'});
  ScrollReveal().reveal('.home-content h3, .home-content p,.about-content',{origin:'right'});
  const navLink = document.querySelectorAll('.nav_link')

  
navLink.forEach(n => n.classList.remove('active'))

function linkAction(){
      navLink.forEach(n => n.classList.remove('active'))
      this.classList.add('active')

      const navMenu = document.getElementById('nav_menu')
      navMenu.classList.remove('show')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
$('a[href*="#"]').on('click', function (e) {
  e.preventDefault();
  $('html, body').animate({
      scrollTop: $($(this).attr('href')).offset().top,
  }, 500, 'linear')
});

 ;const srtop = ScrollReveal({
    origin: 'top',
    distance: '80px',
    duration: 1000,
    reset: true
});

/* SCROLL HOME */
srtop.reveal('.home .content h3', { delay: 200 });
srtop.reveal('.home .content p', { delay: 200 });
srtop.reveal('.home .content .btn', { delay: 200 });

srtop.reveal('.home .image', { delay: 400 });
srtop.reveal('.home .linkedin', { interval: 600 });
srtop.reveal('.home .github', { interval: 800 });
srtop.reveal('.home .twitter', { interval: 1000 });
srtop.reveal('.home .telegram', { interval: 600 });
srtop.reveal('.home .instagram', { interval: 600 });
srtop.reveal('.home .dev', { interval: 600 });

/* SCROLL ABOUT */
srtop.reveal('.about .content h3', { delay: 200 });
srtop.reveal('.about .content .tag', { delay: 200 });
srtop.reveal('.about .content p', { delay: 200 });
srtop.reveal('.about .content .box-container', { delay: 200 });
srtop.reveal('.about .content .resumebtn', { delay: 200 });


/* SCROLL SKILLS */
srtop.reveal('.skills .container', { interval: 200 });
srtop.reveal('.skills .container .bar', { delay: 400 });

/* SCROLL EDUCATION */
srtop.reveal('.education .box', { interval: 200 });

/* SCROLL PROJECTS */
srtop.reveal('.work .box', { interval: 200 });

/* SCROLL EXPERIENCE */
srtop.reveal('.experience .timeline', { delay: 400 });
srtop.reveal('.experience .timeline .container', { interval: 400 });

/* SCROLL CONTACT */
srtop.reveal('.contact .container', { delay: 400 });
srtop.reveal('.contact .container .form-group', { delay: 400 });


