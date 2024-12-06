upButton = document.querySelector(".scroll-to-top");
window.onscroll = function() {
    if (scrollY > 400) {
        upButton.style.display = "block";
    } else{
        upButton.style.display = "none";
    }
    
}
function scrollTo2() {
    window.scrollTo(0 , 0)
    console.log("cicked")
}
upButton.onclick = scrollTo2