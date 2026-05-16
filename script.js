var navToggle = document.getElementById('navToggle');
var navLinks = document.getElementById('navLinks');
var lightbox = document.getElementById('lightbox');
var lightboxImg = document.getElementById('lightboxImg');
var lightboxClose = document.getElementById('lightboxClose');

navToggle.addEventListener('click', function() {
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(function(link) {
  link.addEventListener('click', function() {
    navLinks.classList.remove('open');
  });
});

document.querySelectorAll('.card-img-wrap').forEach(function(wrap) {
  wrap.addEventListener('click', function() {
    var img = wrap.querySelector('img');
    lightboxImg.src = img.src;
    lightboxImg.alt = img.alt;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  });
});

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', function(e) {
  if (e.target === lightbox) {
    closeLightbox();
  }
});

document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    closeLightbox();
  }
});

function closeLightbox() {
  lightbox.classList.remove('active');
  document.body.style.overflow = '';
}

var navbar = document.querySelector('.navbar');
window.addEventListener('scroll', function() {
  if (window.scrollY > 10) {
    navbar.style.background = 'rgba(13,17,23,0.98)';
  } else {
    navbar.style.background = 'rgba(13,17,23,0.92)';
  }
});
