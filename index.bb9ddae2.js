new Splide(".splide",{type:"loop",perPage:1,arrows:!1,drag:!0,speed:250}).mount();(()=>{const e={openMenuBtn:document.querySelector(".nav__mob-btn"),closeMenuBtn:document.querySelector(".mob-menu__close-btn"),openModalBtn:document.querySelector(".buy-now-button"),openModalBtnNMenu:document.querySelector(".buy-now-button-menu"),closeModalBtn:document.querySelector(".backdrop__button-close"),productCardBtnOpen:document.querySelector(".products__btn"),productCardBtnClose:document.querySelector(".products__btn-close"),productCarDescriptEL:document.querySelector(".products-info-modal"),productCarDefaultEL:document.querySelector(".products__item"),menu:document.querySelector(".backdrop-mb-menu"),body:document.querySelector("body"),backdrop:document.querySelector(".backdrop")};function o(){e.menu.classList.toggle("is-hidden"),e.body.classList.toggle("no-scroll-body")}function t(){e.backdrop.classList.add("is-open"),e.body.classList.add("no-scroll")}e.openMenuBtn.addEventListener("click",o),e.closeMenuBtn.addEventListener("click",o),e.openModalBtn.addEventListener("click",t),e.openModalBtnNMenu.addEventListener("click",t),e.closeModalBtn.addEventListener("click",(function(){e.backdrop.classList.remove("is-open"),e.body.classList.remove("no-scroll")})),e.productCardBtnOpen.addEventListener("click",(function(){e.productCarDescriptEL.classList.remove("is-info-hidden"),e.productCarDefaultEL.classList.add("is-info-hidden")})),e.productCardBtnClose.addEventListener("click",(function(){e.productCarDescriptEL.classList.add("is-info-hidden"),e.productCarDefaultEL.classList.remove("is-info-hidden")}))})();
//# sourceMappingURL=index.bb9ddae2.js.map
