function closeTabs() {

    //Hide all tab divs
    const tabDivs = document.getElementsByClassName('tab-div');
    for(let i = 0; i < tabDivs.length; i++){
        tabDivs[i].classList.add('hidden');
    }

    //De-activate all buttons of main menu
    const tabBtns = document.querySelectorAll('#main-menu-div button');
    for(let i = 0; i < tabBtns.length; i++) {
        tabBtns[i].classList.remove('active-tab-btn');
    }
}

function openTab(tabname) {

    //Close all tabs (in case any of them are open)
    closeTabs();

    //Open tab
    const tabToOpen = document.getElementById(tabname + '-tab');
    tabToOpen.classList.remove('hidden');

    //Activate button of main menu
    const btnToActivate = document.getElementById(tabname + '-btn');
    btnToActivate.classList.add('active-tab-btn');
}
