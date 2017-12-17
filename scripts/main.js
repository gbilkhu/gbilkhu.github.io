//mobile navbar action
document.addEventListener('DOMContentLoaded',function(){

    var $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'),0);

    if ($navbarBurgers.length > 0) {

        $navbarBurgers.forEach(function ($el){
            $el.addEventListener('click', function() {


                var target = $el.dataset.target;
                var $target = document.getElementById(target);

                $el.classList.toggle('is-active');
                $target.classList.toggle('is-active');
            });
        });
    }

});

//hide / show top button in menu bar
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.getElementById("scrollTopBtn").style.display = "block";
    } else {
        document.getElementById("scrollTopBtn").style.display = "none";
    }
}
