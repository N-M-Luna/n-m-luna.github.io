// js written for my personal site
function xOutOfNavbar() {
    const xBtn = document.getElementById('bars-or-x')
    xBtn.innerHTML = '<span class="fas fa-bars"></span>'
    xBtn.setAttribute('onclick', "openNavbar()")
}

function openNavbar() {
    const xBtn = document.getElementById('bars-or-x')
    xBtn.innerHTML = '<span>X</span>'
    xBtn.setAttribute('onclick', "xOutOfNavbar()")
}