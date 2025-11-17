//Top navigational bar
function toggleMobileMenu() {

  //Show or hide mobile menu
  let navBar = document.getElementById('myTopnav');
  if (navBar.className === "topnav") {
    navBar.className += " responsive";
  } else {
    navBar.className = "topnav";
  }

  //Change menu icon from bars to x, or vice versa
  const menuControl = document.getElementById('menu-icon').firstElementChild
  if (menuControl.classList[1] === 'fa-x') {
    menuControl.classList.remove('fa-x')
    menuControl.classList.add('fa-bars')
  } else {
    menuControl.classList.remove('fa-bars')
    menuControl.classList.add('fa-x')
  }
}

//Change sections
function goHome(fromFooter = false) {

  //Activate home
  const homeLink = document.getElementById('home-link')
  homeLink.classList.add('active')

  //De-activate other sections
  const sections = document.getElementsByClassName('nav-anchor')
  for(let i = 0; i < sections.length; i++) {
    sections[i].classList.remove('active')
  }

  //Show home
  const content = document.getElementsByTagName('section')
  for(let i = 0; i < content.length; i++) {
    if (content[i].id === 'home-content') {
      content[i].classList.remove('hidden')
    } else {
      content[i].classList.add('hidden')
    }
  }

  //Update tab name
  const currentTb = document.getElementById('current-tab')
  currentTb.innerHTML = ' / Home '

  //Close mobile menu if it's open
  const menuControl = document.getElementById('menu-icon').firstElementChild
  if (menuControl.classList[1] === 'fa-x' && !fromFooter) {
    toggleMobileMenu()
  }
}
function activate(sectionID, fromFooter = false) {

  //De-activate everything
  const homeLink = document.getElementById('home-link')
  homeLink.classList.remove('active')
  const sections = document.getElementsByClassName('nav-anchor')
  for(let i = 0; i < sections.length; i++) {
    sections[i].classList.remove('active')
  }

  //Activate the clicked-on section link
  const activeSection = document.getElementById(sectionID)
  activeSection.classList.add('active')

  //Show correct content
  const content = document.getElementsByTagName('section')
  for(let i = 0; i < content.length; i++) {
    if (content[i].id.slice(0, -8) + '-link' === sectionID) {
      content[i].classList.remove('hidden')
    } else {
      content[i].classList.add('hidden')
    }
  }

  //Update current tab
  const currentTb = document.getElementById('current-tab')
  const tabName = sectionID.slice(0,1).toUpperCase() + sectionID.slice(1, -5).replace('-', ' ')
  currentTb.innerHTML = ` / ${tabName} `

  //Close mobine menu
  if(!fromFooter) {
  toggleMobileMenu()
  }
}

// Back to top button
function takeMeToTheTop() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}