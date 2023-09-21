// Select the button and iframe container
const toggleIframeButton = document.getElementById('toggleIframeButton');
const iframeContainer = document.getElementById('iframeContainer');

// Add a click event listener to the button
toggleIframeButton.addEventListener('click', () => {
    // Toggle the display style of the iframe container
    iframeContainer.style.display = (iframeContainer.style.display === 'none') ? 'block' : 'none';
});

// Add a click event listener to the "Scan Now" button
document.getElementById("scanButton").addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default link behavior
    // Trigger a click event on the file input to open the camera
    document.querySelector('input[type="file"]').click();
});
