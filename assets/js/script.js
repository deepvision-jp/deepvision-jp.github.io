$(function () {
    $(".showmenu-pc").click(function () {
        $(".menu-pc").addClass(" show");

    });
    $(".showmenu-mobile").click(function () {
        $(".menu-pc").addClass("show")

    });
    $(".closemenu-pc").click(function () {
        $(".menu-pc").removeClass("show")
    });

    $(".close-showmenu-mobile").click(function () {
        setTimeout(() => {
            $(".menu-pc").removeClass(" show")
        }, 500)
    });
    $(".openbtn").click(function () {
        $(".openbtn").toggleClass('active');
    });


});

(function () {
    function id(v) {
        return document.getElementById(v);
    }

    function loadbar() {
        var ovrl = id("overlay"),
            prog = id("progress"),
            stat = id("progstat"),
            number = id("progNumber");
        let step = 0;
        const intervalLoading = setInterval(() => {
            step += 10;
            var perc = step + "%";
            prog.style.width = perc;
            stat.innerHTML = "Loading...";
            number.innerHTML = step;
            if (step == 100) return doneLoading();
        }, 200)


        function doneLoading() {
            clearInterval(intervalLoading)
            ovrl.style.opacity = 0;
            setTimeout(function () {
                ovrl.style.display = "none";

                setTimeout(() => {
                    $("#banner .sub-title").addClass("animate__animated animate__bounceInUp")
                    $("#banner .sub-title").removeClass("d-none");

                }, 1500)
            }, 1200);
        }

    }
    document.addEventListener('DOMContentLoaded', loadbar, false);
}());
