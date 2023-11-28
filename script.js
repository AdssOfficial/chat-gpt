// Get the header
var header = document.querySelector('.sticky-header');

// Get the offset position of the header
var sticky = header.offsetTop;

// Function to add the "sticky" class to the header when scrolling down
function stickyHeader() {
    if (window.pageYOffset > sticky) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
}

// Add a scroll event listener to call the stickyHeader function
window.onscroll = function () {
    stickyHeader();
};