// slider ⬇⬇⬇
const splide = new Splide('.splide', {
  type: 'loop',
  perPage: 1,
  arrows: false,
  drag: true,
  speed: 250,
}).mount();
// slider ⬆⬆⬆

(() => {
  const refs = {
    openMenuBtn: document.querySelector('.nav__mob-btn'),
    closeMenuBtn: document.querySelector('.mob-menu__close-btn'),
    openModalBtn: document.querySelector('.buy-now-button'),
    openModalBtnNMenu: document.querySelector('.buy-now-button-menu'),
    closeModalBtn: document.querySelector('.backdrop__button-close'),
    menu: document.querySelector('.backdrop-mb-menu'),
    body: document.querySelector('body'),
    backdrop: document.querySelector('.backdrop'),
    cardBtn1: document.querySelector('.products__btn-common1'),
    frontEl1: document.querySelector('.front1'),
    backEl1: document.querySelector('.back1'),
    cardBtn2: document.querySelector('.products__btn-common2'),
    frontEl2: document.querySelector('.front2'),
    backEl2: document.querySelector('.back2'),
    cardBtn3: document.querySelector('.products__btn-common3'),
    frontEl3: document.querySelector('.front3'),
    backEl3: document.querySelector('.back3'),
  };

  refs.openMenuBtn.addEventListener('click', toggleMenu);
  refs.closeMenuBtn.addEventListener('click', toggleMenu);
  refs.openModalBtn.addEventListener('click', addClassModal);
  refs.openModalBtnNMenu.addEventListener('click', addClassModal);
  refs.closeModalBtn.addEventListener('click', removeClassModal);
  refs.cardBtn1.addEventListener('click', toggleCardClass1);
  refs.cardBtn2.addEventListener('click', toggleCardClass2);
  refs.cardBtn3.addEventListener('click', toggleCardClass3);

  function toggleMenu() {
    refs.menu.classList.toggle('is-hidden');
    refs.body.classList.toggle('no-scroll-body');
  }

  function addClassModal() {
    refs.backdrop.classList.add('is-open');
    refs.body.classList.add('no-scroll');
  }

  function removeClassModal() {
    refs.backdrop.classList.remove('is-open');
    refs.body.classList.remove('no-scroll');
  }

  function toggleCardClass1() {
    refs.frontEl1.classList.toggle('is-passive');
    refs.backEl1.classList.toggle('is-active');
  }
  function toggleCardClass2() {
    refs.frontEl2.classList.toggle('is-passive');
    refs.backEl2.classList.toggle('is-active');
  }
  function toggleCardClass3() {
    refs.frontEl3.classList.toggle('is-passive');
    refs.backEl3.classList.toggle('is-active');
  }
})();
