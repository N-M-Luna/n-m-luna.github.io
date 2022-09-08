// JS for the developer blog

//Toggle the table of contents

// HTML Elements
const tocButton = document.querySelector(".toc-btn");
const tableOfContents = document.querySelector(".toc");
const tocLinks = document.querySelectorAll(".toc-link");


// A click on the hamburger button (.toc-btn) will toggle the visibility of the table of contents
tocButton.addEventListener("click", toggleTOC);

// A click on a toc link will also toggle the table of contents
for (let i=0; i < tocLinks.length; i++) {
  tocLinks[i].addEventListener("click", toggleTOC);
}

// This is all that goes into toggling the table of contents
function toggleTOC() {
  // Toggle visibility of TOC
  tableOfContents.classList.toggle("hidden");

  // Swap the toc button icon from an X to Bars
  if (tocButton.firstChild.classList.contains("fa-bars")) {
    tocButton.firstChild.classList.replace("fa-bars","fa-x");
  }
  else {
    tocButton.firstChild.classList.replace("fa-x", "fa-bars");
  }
}
