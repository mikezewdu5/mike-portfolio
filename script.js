// Smooth scroll for navigation links
const navLinks = document.querySelectorAll('nav ul li a');
navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  });
});

// Toggle dropdown icons and skill items in About section
const skillHeaders = document.querySelectorAll('.skill-header');
skillHeaders.forEach(header => {
  header.addEventListener('click', function() {
    const category = this.parentElement;
    const items = category.querySelector('.skill-items');
    const icon = this.querySelector('.dropdown-icon i');
    if (items) {
      items.classList.toggle('open');
      if (items.classList.contains('open')) {
        icon.classList.remove('fa-chevron-right');
        icon.classList.add('fa-chevron-down');
        items.style.display = 'flex';
      } else {
        icon.classList.remove('fa-chevron-down');
        icon.classList.add('fa-chevron-right');
        items.style.display = 'none';
      }
    }
  });
});
// Hide skill-items for collapsed categories on load
window.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.skill-category').forEach(cat => {
    const items = cat.querySelector('.skill-items');
    if (items && !items.classList.contains('open')) {
      items.style.display = 'none';
    }
  });
});

// Contact form validation and alert
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = contactForm.querySelector('input[type="text"]').value.trim();
    const email = contactForm.querySelector('input[type="email"]').value.trim();
    const message = contactForm.querySelector('textarea').value.trim();
    if (!name || !email || !message) {
      alert('Please fill in all fields.');
      return;
    }
    alert('Thank you for reaching out, ' + name + '! I will get back to you soon.');
    contactForm.reset();
  });
}

// Project modal functionality
const projectData = [
  {
    title: 'Tonic',
    image: 'pic1.png',
    company: 'CANOPY',
    role: 'Back End Dev',
    year: '2015',
    description: 'A daily selection of privately personalized reads; no accounts or sign-ups required.',
    tags: ['html', 'CSS', 'javaScript']
  },
  {
    title: 'Multi-Post Stories',
    image: 'pic2.png',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    description: 'Experimental content creation feature that allows users to add to an existing story over the course of a day without spamming their friends.',
    tags: ['html', 'Ruby on rails', 'CSS', 'javaScript']
  },
  {
    title: 'Facebook 360',
    image: 'pic3.png',
    company: 'FACEBOOK',
    role: 'Full Stack Dev',
    year: '2015',
    description: 'Exploring the future of media in Facebook\'s first Virtual Reality app; a place to discover and enjoy 360 photos and videos on Gear VR.',
    tags: ['html', 'Ruby on rails', 'CSS', 'javaScript']
  },
  {
    title: 'Uber Navigation',
    image: 'pic4.png',
    company: 'Uber',
    role: 'Lead Developer',
    year: '2018',
    description: 'A smart assistant to make driving more safe, efficient, and fun by unlocking your most expensive computer: your car.',
    tags: ['html', 'Ruby on rails', 'CSS', 'javaScript']
  }
];

const seeProjectButtons = document.querySelectorAll('.see-project');
const modal = document.getElementById('project-modal');
const modalBody = modal ? modal.querySelector('.modal-body') : null;
const closeModalBtn = modal ? modal.querySelector('.close-modal') : null;

seeProjectButtons.forEach((btn, idx) => {
  btn.addEventListener('click', () => {
    alert('See project button clicked!'); // DEBUG
    const project = projectData[idx];
    if (modal && modalBody && project) {
      modalBody.innerHTML = `
        <h2>${project.title}</h2>
        <img src="${project.image}" alt="${project.title}" style="width:100%;border-radius:8px;margin-bottom:1rem;" />
        <div style="margin-bottom:0.5rem;">
          <span class="company">${project.company}</span>
          <span class="dot"></span>
          <span class="role">${project.role}</span>
          <span class="dot"></span>
          <span class="year">${project.year}</span>
        </div>
        <p>${project.description}</p>
        <div class="tags" style="margin-top:1rem;">
          ${project.tags.map(tag => `<span class="tag">${tag}</span>`).join(' ')}
        </div>
      `;
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    }
  });
});

function closeModal() {
  if (modal) {
    modal.style.display = 'none';
    document.body.style.overflow = '';
  }
}
if (closeModalBtn) {
  closeModalBtn.addEventListener('click', closeModal);
}
if (modal) {
  modal.addEventListener('click', function(e) {
    if (e.target === modal) {
      closeModal();
    }
  });
}

// Professional Hamburger Menu Functionality
const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('header nav');
const overlay = document.querySelector('.overlay');
// Debug logs for hamburger menu
console.log('Script loaded');
console.log('hamburger:', document.querySelector('.hamburger'));
console.log('nav:', document.querySelector('header nav'));
console.log('overlay:', document.querySelector('.overlay'));

if (hamburger && nav && overlay) {
  console.log('Hamburger menu JS initialized');
  function openMenu() {
    hamburger.classList.add('active');
    nav.classList.add('open');
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
  }
  function closeMenu() {
    hamburger.classList.remove('active');
    nav.classList.remove('open');
    overlay.classList.remove('active');
    document.body.style.overflow = '';
  }
  hamburger.addEventListener('click', () => {
    console.log('Hamburger clicked');
    if (nav.classList.contains('open')) {
      closeMenu();
    } else {
      openMenu();
    }
  });
  overlay.addEventListener('click', closeMenu);
  nav.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', closeMenu);
  });
} else {
  console.log('Hamburger menu JS not initialized: missing element');
} 