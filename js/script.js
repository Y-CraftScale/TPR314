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
})();
