document.querySelector('.menu').addEventListener('click', OpenOffCanvas)
document.querySelector('.close-menu').addEventListener('click', CloseOffCanvas)

var OpenMenu = document.querySelector('.menu')
var CloseMenu = document.querySelector('.close-menu')

function OpenOffCanvas(){
    document.querySelector('.off-canva').style.left = '0'
    OpenMenu.style.display = 'none'
    CloseMenu.style.display = 'block'
}
function CloseOffCanvas(){
    document.querySelector('.off-canva').style.left = '-30%'
    CloseMenu.style.display = 'none'
    OpenMenu.style.display = 'block'
}