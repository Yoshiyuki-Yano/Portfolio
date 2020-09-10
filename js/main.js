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
  
  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });
  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  about.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  works.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  contact.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  twitter.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
  instagram.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });
}