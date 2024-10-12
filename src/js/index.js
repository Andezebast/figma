import "../scss/style.scss";
import "../scss/mobile-style.scss";
import Swiper from "swiper";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
/*----------------------VARIABLES----------------------*/
const sidebarIcons = document.querySelectorAll(".sidebar-icon");
const sidebarItems = document.querySelectorAll(".sidebar-content-item");

const form = document.querySelector(".banner-form form");
const formInputsBody = document.querySelectorAll(".banner-form-input");
const formButtonError = document.querySelector(".banner-form-button > p");

const formMobileForm = document.querySelector(".form-mobile form");
const formMobileInputsBody = document.querySelectorAll(".form-mobile-input");
const formMobileButtonError = document.querySelector(".form-mobile-button > p");

const header = document.querySelector(".header");
const headerMobile = document.querySelector(".header-mobile");

const bannerMobile = document.querySelector(".banner-mobile");
const formMobile = document.querySelector(".form-mobile");

const burger = document.querySelector(".header-mobile-burger");
const sidebar = document.querySelector(".sidebar");
const body = document.querySelector("body");

const siderbarMobileLogo = document.querySelector(".siderbar-mobile-logo");
const sidebarMobileClose = document.querySelector(".sidebar-mobile-close");
const sidebarMobileSelect = document.querySelector(".sidebar-mobile-select");
const siderbarMobileButtonVerify = document.querySelector(".siderbar-mobile-button-verify");
const sidebarMobileSocial = document.querySelector(".sidebar-mobile-social");
/*----------------------SLIDERS----------------------*/
const swiper = new Swiper(".swiper", {
  modules: [Navigation, Pagination, Autoplay],
  slidesPerView: 1,
  spaceBetween: 0,
  loop: true,
  simulateTouch: false,
  navigation: {
    nextEl: ".banner-swiper-button-next",
    prevEl: ".banner-swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    0: {
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
    },
    992: {
      autoplay: false,
    },
  },
  on: {
    init: function () {
      if (window.innerWidth < 992) {
        this.autoplay.start();
      }
    },
  },
});
const swiperVerticale = new Swiper(".swiper-verticale", {
  modules: [Navigation],
  spaceBetween: 20,
  centeredSlides: true,
  direction: "vertical",
  loop: true,
  simulateTouch: false,
  navigation: {
    nextEl: ".swiper-verticale-next",
    prevEl: ".swiper-verticale-prev",
  },
  breakpoints: {
    0: {
      slidesPerView: 3,
    },
    575: {
      slidesPerView: 5,
    },
    992: {
      slidesPerView: 6,
    },
  },
});
/*----------------------SIDEBAR----------------------*/
function sidebarFuncEvent(firstValues, secondValues) {
  firstValues.forEach((firstValue) => {
    firstValue.addEventListener("mouseenter", () => {
      secondValues.forEach((secondValue) => {
        if (firstValue.id === secondValue.id) {
          firstValue.classList.add("focus");
          secondValue.classList.add("focus");
        }
      });
    });
  });
  firstValues.forEach((firstValue) => {
    firstValue.addEventListener("mouseleave", () => {
      secondValues.forEach((secondValue) => {
        if (firstValue.id === secondValue.id) {
          firstValue.classList.remove("focus");
          secondValue.classList.remove("focus");
        }
      });
    });
  });
}
sidebarFuncEvent(sidebarIcons, sidebarItems);
sidebarFuncEvent(sidebarItems, sidebarIcons);
/*----------------------FORM----------------------*/
function formSubmit(formValue, formInputsBodyValue, formButtonErrorValue) {
  formValue.addEventListener("submit", (event) => {
    event.preventDefault();
    let errorBool = true;
    formInputsBodyValue.forEach((inputBody) => {
      const input = inputBody.querySelector("input");
      const inputError = inputBody.querySelector("p");
      if (input.value.trim() === "") {
        inputError.classList.add("show");
        errorBool = false;
      } else {
        inputError.classList.remove("show");
      }
    });
    if (errorBool) {
      formButtonErrorValue.classList.remove("show");
      setTimeout(() => {
        window.location.reload();
      }, 500);
    } else {
      formButtonErrorValue.classList.add("show");
    }
  });
}
formSubmit(form, formInputsBody, formButtonError);
formSubmit(formMobileForm, formMobileInputsBody, formMobileButtonError);
/*----------------------HEADER----------------------*/
window.addEventListener("resize", () => {
  if (window.innerWidth >= 992) {
    headerMobile.classList.add("hidden");
    header.classList.remove("hidden");
  } else {
    headerMobile.classList.remove("hidden");
    header.classList.add("hidden");
  }
});
/*------------------HIDDEN-MOBILE-----------------*/
function hiddenMobileFunc(element) {
  if (window.innerWidth >= 992) {
    element.classList.add("hidden");
  } else {
    element.classList.remove("hidden");
  }
}
window.addEventListener("resize", () => {
  hiddenMobileFunc(bannerMobile);
  hiddenMobileFunc(formMobile);
  hiddenMobileFunc(siderbarMobileLogo);
  hiddenMobileFunc(sidebarMobileClose);
  hiddenMobileFunc(sidebarMobileSelect);
  hiddenMobileFunc(siderbarMobileButtonVerify);
  hiddenMobileFunc(sidebarMobileSocial);
});
/*----------------------BURGER----------------------*/
burger.addEventListener("click", () => {
  sidebar.classList.toggle("show");
  body.classList.toggle("overflow");
});
sidebarMobileClose.addEventListener("click", () => {
  if (sidebar.classList.contains("show")) {
    sidebar.classList.remove("show");
    body.classList.remove("overflow");
  }
});
/*-----------------SIDEBAR-MOBILE-----------------*/
if (window.innerWidth <= 991) {
  sidebarIcons.forEach((icon) => {
    icon.addEventListener("click", () => {
      sidebarIcons.forEach((icon) => {
        icon.style.marginBottom = "0px";
      });
      sidebarItems.forEach((item) => {
        if (icon.id === item.id) {
          const itemUl = item.querySelector(".sidebar-content-item-ul");
          if (itemUl) {
            icon.style.marginBottom = `${
              item.querySelector(".sidebar-content-item-ul").offsetHeight + 10
            }px`;
          }
        }
      });
    });
  });
  sidebarItems.forEach((item) => {
    item.addEventListener("click", () => {
      sidebarIcons.forEach((icon) => {
        icon.style.marginBottom = "0px";
        if (icon.id === item.id) {
          const itemUl = item.querySelector(".sidebar-content-item-ul");
          if (itemUl) {
            icon.style.marginBottom = `${
              item.querySelector(".sidebar-content-item-ul").offsetHeight + 10
            }px`;
          }
        }
      });
    });
  });
}
