

// Initialize AOS (scroll animations)
AOS.init();

// Dark Mode Toggle 12
const toggleDarkModeButton = document.querySelector('.toggle-dark-mode');
const body = document.body;

toggleDarkModeButton.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  toggleDarkModeButton.textContent = body.classList.contains('dark-mode') ? '☀' : '🌙';
});



// Skills Progress Bars 
const progressBars = document.querySelectorAll('.progress');
window.addEventListener('scroll', () => {
  progressBars.forEach(bar => {
    const value = bar.getAttribute('data-skill');
    bar.style.width = `${value}%`;
  });
});

// Modal Pop-up
const modal = document.querySelector('.modal');
const modalContent = document.querySelector('.modal-body');
const viewDetailsButtons = document.querySelectorAll('.view-details-btn');
const closeModal = document.querySelector('.close');

viewDetailsButtons.forEach(button => {
  button.addEventListener('click', () => {
    modal.style.display = 'block';
    modalContent.innerHTML = ` <h3>Project ${button.parentElement.dataset.id} Details</h3><p>Description of the project goes here.</p>
`;
  });
});

closeModal.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Carousel (Testimonials)
let currentIndex = 0;
const testimonials = document.querySelectorAll('.testimonial');
setInterval(() => {
  testimonials[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % testimonials.length;
  testimonials[currentIndex].style.display = 'block';
}, 3000);

// Contact Form Submission with EmailJS
document.querySelector('#contact-form').addEventListener('submit', async e => {
  e.preventDefault();
  // Replace with your EmailJS service
  alert('Message sent successfully!');
});