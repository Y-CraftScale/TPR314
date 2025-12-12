// Optimisé : suppression des boucles bloquantes
(function(){
  window.addEventListener('load', function(){
    const imgs = document.querySelectorAll('.card img');
    imgs.forEach(img => { 
      if (img.complete) {
        img.classList.add('loaded'); 
      } else {
        img.addEventListener('load', () => img.classList.add('loaded')); 
      }
    });
  });

  // Gestion de la modal pour les images
  const modal = document.getElementById('imageModal');
  const modalImage = document.getElementById('modalImage');
  const modalTitle = document.getElementById('modalTitle');
  const modalClose = document.querySelector('.modal-close');
  const modalOverlay = document.querySelector('.modal-overlay');
  const imageButtons = document.querySelectorAll('.image-btn');

  function openModal(imageSrc, imageTitle) {
    modalImage.src = imageSrc;
    modalImage.alt = imageTitle;
    modalTitle.textContent = imageTitle;
    modal.classList.add('active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Empêche le scroll de la page
  }

  function closeModal() {
    modal.classList.remove('active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Réactive le scroll
  }

  // Ouvrir la modal au clic sur une image
  imageButtons.forEach(btn => {
    btn.addEventListener('click', function() {
      const imageSrc = this.getAttribute('data-image');
      const imageTitle = this.getAttribute('data-title');
      openModal(imageSrc, imageTitle);
    });
  });

  // Fermer la modal
  if (modalClose) {
    modalClose.addEventListener('click', closeModal);
  }

  if (modalOverlay) {
    modalOverlay.addEventListener('click', closeModal);
  }

  // Fermer avec la touche Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
      closeModal();
    }
  });
})();
