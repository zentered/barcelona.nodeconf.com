//sticky header on scroll
window.addEventListener('scroll', function(){
  var nav = document.getElementById('header');
  var vh = document.documentElement.clientHeight;

      if (window.pageYOffset > vh) {
          nav.classList.add("is-fixed");
      } else {
          nav.classList.remove("is-fixed");
      }
});

//open and close mobile menu
function openMenu() {

  document.getElementById('menu').classList.add("is-open");
  document.documentElement.style.overflow = "hidden";
}
function closeMenu() {

  document.getElementById('menu').classList.remove("is-open");
  document.documentElement.style.overflow = "auto";
}

window.onload = function() {
    document.getElementById('open-menu').addEventListener( 'click' , openMenu );
    document.getElementById('close-menu').addEventListener( 'click' , closeMenu );

}
