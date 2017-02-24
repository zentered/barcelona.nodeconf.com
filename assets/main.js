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

//show modal


var showbox = document.getElementsByClassName('show-box');

var openBox = function(e) {
    var attribute = e.target.id;
    document.getElementById(attribute + 'X').classList.add("is-shown");
    document.documentElement.style.overflow = "hidden";

};
var closebox = document.getElementsByClassName('close-box');

function closeBox(e) {
  var modal = event.target.parentNode;
  var modalId = modal.id;
  document.getElementById(modalId).classList.remove("is-shown");
  document.documentElement.style.overflow = "auto";
  
}

//open and close mobile menu
function openMenu() {
  document.getElementById('menu').classList.add("is-open");
  document.documentElement.style.overflow = "hidden";
}
function closeMenu() {
  document.getElementById('menu').classList.remove("is-open");
  document.documentElement.style.overflow = "auto";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function closeCookies() {
  document.getElementById('cookies').classList.remove("is-open");
  setCookie('cookieOk', true, 365)
}

function getCookie(target){
  var cookies = {}
  var cookiesArr = document.cookie.split('; ')

  for(i=cookiesArr.length-1; i>=0; i--){
     var C = cookiesArr[i].split('=');
     cookies[C[0]] = C[1];
  }

  return cookies[target]
}

window.onload = function() {

    document.getElementById('open-menu').addEventListener( 'click' , openMenu );
    document.getElementById('close-menu').addEventListener( 'click', closeMenu );

    for (var i = 0; i < showbox.length; i++) {
        showbox[i].addEventListener('click', openBox, false);
    }
    for (var i = 0; i < closebox.length; i++) {
        closebox[i].addEventListener('click', closeBox, false);
    }
    document.getElementById('close-box').addEventListener( 'click' , closeBox );

    document.getElementById('closeCookies').addEventListener( 'click' , closeCookies );

    if (!getCookie('cookieOk')) {
      document.getElementById('cookies').classList.add( 'is-open');
    }
}
