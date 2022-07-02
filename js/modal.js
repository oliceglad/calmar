
window.addEventListener('DOMContentLoaded', function () {

    window.onload = function () {
        var modal = document.getElementById("myModal");
        var btn = document.getElementsByClassName("squid");
        var body = document.getElementById("body");
        var filter = document.getElementById("filter");
        var modal1 = document.getElementById("myModal1");
        var roomlist = document.getElementById("roomlist")


        for (var i = 0; i < btn.length; i++) {
            btn[i].onclick = function () {
                modal.style.overflow = "scroll"
                modal.style.display = "block";
                body.style.overflow = "hidden"
            }
        }

        window.onclick = function (event) {
            if (event.target == modal) {
                modal.style.display = "none";
                body.style.overflow = "scroll"
            }

            if (event.target == modal1) {
                modal1.style.display = "none";
                body.style.overflow = "scroll"
            }
        }

        filter.onclick = function () {
            modal1.style.overflow = "scroll"
            modal1.style.display = "block";
            body.style.overflow = "hidden"
            roomlist.style.display = "block"
        }
    };
})