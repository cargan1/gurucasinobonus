"use strict";
"function" != typeof Array.prototype.forEach && (Array.prototype.forEach = function(e) {
    for (var t = 0; t < this.length; t++) e.apply(this, [this[t], t, this])
}), window.NodeList && !NodeList.prototype.forEach && (NodeList.prototype.forEach = Array.prototype.forEach);
var footerFoldIcon = document.querySelectorAll(".footer__allLink__col__top i");
footerFoldIcon.forEach(function(e) {
    e.addEventListener("click", function(e) {
        e.target.classList.contains("open") ? e.target.classList.contains("open") && (e.target.parentElement.nextElementSibling.previousElementSibling.style.paddingBottom = "1.5rem", e.target.parentElement.nextElementSibling.classList.add("hidde"), e.target.classList.remove("open"), e.target.classList.add("close"), e.target.innerHTML = "+") : (e.target.parentElement.nextElementSibling.classList.remove("hidde"), e.target.parentElement.nextElementSibling.previousElementSibling.style.paddingBottom = 0, e.target.classList.add("open"), e.target.classList.remove("close"), e.target.innerHTML = "-")
    })
});
var searchModal = document.querySelector(".searchModal"),
    searchIcon = document.querySelector(".searchIcon img"),
    searchBoxCloseBtn = document.querySelector(".searchModal__content__close");
searchIcon.addEventListener("click", function() {
    searchModal.classList.remove("closeModal")
}), searchBoxCloseBtn.addEventListener("click", function() {
    searchModal.classList.add("closeModal")
});
var subscribeModal = document.querySelector(".subscribeModal"),
    subscribeModalBtn = document.querySelector(".header__top__btn"),
    subscribeModalCloseBtn = document.querySelector(".subscribeModalCloseBtn");
subscribeModalBtn.addEventListener("click", function() {
    subscribeModal.classList.remove("closeModal")
}), subscribeModalCloseBtn.addEventListener("click", function() {
    subscribeModal.classList.add("closeModal")
});
var giftModal = document.querySelector(".giftModal"),
    giftModalBtn = document.querySelector(".giftIcon"),
    giftModalCloseBtn = document.querySelector(".giftModalCloseBtn");
giftModalBtn.addEventListener("click", function() {
    giftModal.classList.remove("closeModal")
}), giftModalCloseBtn.addEventListener("click", function() {
    giftModal.classList.add("closeModal")
});
var headerLiClasses = ["headerFirstLi", "headerSecLi", "headerThirdLi"],
    headerBtnLiClasses = ["headerFirstSidebBtn", "headerSecondSidebBtn", "headerThirdSidebBtn"];

function manageMenu(e) {
    var t = document.querySelector("." + e);
    t && (t.isClicked = !1, t.onclick = function(n) {
        t.children[1] && (t.isClicked || t.children[1].classList.contains("hide") ? t.children[1].classList.toggle("hide") : t.children[1].classList.remove("hide"), t.isClicked = !t.children[1].classList.contains("hide"), "thirdBtnOptions" === e && document.querySelector("." + e + " img").classList.toggle("rotateUp"))
    }, t.onmouseover = function(e) {
        t.children[1] && t.children[1].classList.remove("hide")
    }, t.onmouseout = function(e) {
        t.children[1] && (t.isClicked || t.children[1].classList.add("hide"))
    }), t && t.children[1] && window.addEventListener("click", function(e) {
        e.target === t || t.contains(e.target) || (t.isClicked = !1, t.children[1].classList.add("hide"))
    })
}
headerLiClasses.forEach(function(e) {
    manageMenu(e)
}), headerBtnLiClasses.forEach(function(e) {
    var t = document.querySelector("." + e);
    t && (t.onclick = function(t) {
        document.querySelector("." + e + " .header__Content__btns__btnContainer__downIcon__liOptions").classList.toggle("hide"), "headerThirdSidebBtn" === e && document.querySelector("." + e + " .header__Content__btns__btnContainer__downIcon img").classList.toggle("rotateUp")
    }), t && window.addEventListener("click", function(n) {
        n.target === t || t.contains(n.target) || (document.querySelector("." + e + " .header__Content__btns__btnContainer__downIcon__liOptions").classList.add("hide"), t.classList.contains("headerThirdSidebBtn") && document.querySelector("." + e + " .thirdBtnOptions img").classList.contains("rotateUp") && document.querySelector("." + e + " .thirdBtnOptions img").classList.remove("rotateUp"))
    })
});
var nav = document.querySelector(".nav"),
    nav__close = document.querySelector(".nav__close"),
    burgerMenu = document.querySelector(".header__top__all__left__navMenu");
burgerMenu.onclick = function() {
    nav.classList.remove("moveNavAway")
}, nav__close.onclick = function() {
    nav.classList.add("moveNavAway")
}, window.addEventListener("click", function(e) {
    e.target !== nav && e.target !== burgerMenu && e.target !== burgerMenu.children[0] && nav.classList.add("moveNavAway")
});