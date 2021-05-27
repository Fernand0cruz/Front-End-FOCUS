document.querySelector('.menu').addEventListener('click', OpenOffCanvas)
document.querySelector('.close-menu').addEventListener('click', CloseOffCanvas)

var OpenMenu = document.querySelector('.menu')
var CloseMenu = document.querySelector('.close-menu')

function OpenOffCanvas() {
    document.querySelector('.off-canva').style.left = '0'
    OpenMenu.style.display = 'none'
    CloseMenu.style.display = 'block'
}

function CloseOffCanvas() {

    if (window.matchMedia("(max-width:600px)").matches) {
        document.querySelector('.off-canva').style.left = '-70%'
        CloseMenu.style.display = 'none'
        OpenMenu.style.display = 'block'
        // console.log('a viewport tem menos de 600 pixels de largura')
    } else {
        document.querySelector('.off-canva').style.left = '-30%'
        CloseMenu.style.display = 'none'
        OpenMenu.style.display = 'block'
        // console.log('a viewport tem mais que 600 pixels de largura')
    }
}