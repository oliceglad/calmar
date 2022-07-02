window.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#burger').addEventListener('click', function () {
        document.querySelector('#nav__list-left').classList.toggle('burger-active')
        document.querySelector('#nav__list-right').classList.toggle('burger-active')
        document.querySelector('body').classList.toggle('blockout')
    })

    document.querySelector('#off').addEventListener('click', function () {
        document.querySelector('#nav__list-left').classList.remove('burger-active')
        document.querySelector('#nav__list-right').classList.remove('burger-active')
        document.querySelector('body').classList.remove('blockout');
    })

    var spisok = document.getElementById("input-spisok");
    document.querySelector('#search').addEventListener('click', function () {
        spisok.style.display = "block"
    })
})