
window.addEventListener('DOMContentLoaded', function () {

    document.querySelector('#button_item').addEventListener('click', function () {
        document.querySelector('#list').classList.toggle('none')
        document.querySelector('#pag').classList.toggle('none')
        document.querySelector('#trynow').classList.remove('none')
        document.querySelector('#button_item1').classList.remove('button_is-active')
        document.querySelector('#button_item').classList.toggle('button_is-active')
    })

    document.querySelector('#button_item1').addEventListener('click', function () {
        document.querySelector('#trynow').classList.toggle('none')
        document.querySelector('#list').classList.remove('none')
        document.querySelector('#pag').classList.remove('none')
        document.querySelector('#button_item').classList.remove('button_is-active')
        document.querySelector('#button_item1').classList.toggle('button_is-active')
    })
})
