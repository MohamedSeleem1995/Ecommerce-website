// wow js 
new WOW().init();

// scroll to top button 
const scrollToTopBtn = document.getElementById("scroll-to-top-btn");

window.addEventListener("scroll", () => {
    if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
    scrollToTopBtn.style.display = "block";
} else {
    scrollToTopBtn.style.display = "none";
}
});
// Fire Event On click
scrollToTopBtn.addEventListener('click', () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});