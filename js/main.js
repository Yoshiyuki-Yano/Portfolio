'use strict';

{
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');
  const about = document.getElementById('overlay-about');
  const works = document.getElementById('overlay-works');
  const contact = document.getElementById('overlay-contact');
  const twitter = document.getElementById('overlay-twitter');
  const instagram = document.getElementById('overlay-instagram');

  function overlayClose(link) {
    link.addEventListener('click', () => {
      overlay.classList.remove('show');
      open.classList.remove('hide');
    }); 
  };
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  overlayClose(close);
  overlayClose(about);
  overlayClose(works);
  overlayClose(contact);
  overlayClose(twitter);
  overlayClose(instagram);
}
