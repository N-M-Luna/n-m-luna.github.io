// JS for the developer blog

//SECTION: Toggle the table of contents

// HTML Elements
const tocButton = document.querySelector(".toc-btn");
const tableOfContents = document.querySelector(".toc");
const tocLinks = document.querySelectorAll(".toc-link");

// A click on THE HAMBURGER BUTTON (.toc-btn) will toggle the visibility of the table of contents.
tocButton.addEventListener("click", toggleTOC);

// A click on A TOC LINK will also toggle the table of contents.
for (let i=0; i < tocLinks.length; i++) {
  tocLinks[i].addEventListener("click", toggleTOC);
}

// This is all that goes into TOGGLING THE TOC.
function toggleTOC() {

  // Toggle visibility of TOC.
  tableOfContents.classList.toggle("hidden");

  // Swap the toc button icon from an X to Bars.
  if (tocButton.firstChild.classList.contains("fa-bars")) {
    tocButton.firstChild.classList.replace("fa-bars","fa-x");
  }
  else {
    tocButton.firstChild.classList.replace("fa-x", "fa-bars");
  }
}

// SECTION: Back to top button

// HTML element
const backToTopButton = document.querySelector(".back-to-top-btn");

// A click on THE BACK-TO-TOP BUTTON will scroll the page all the way up.
backToTopButton.addEventListener("click", function() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
});
