

document.addEventListener("DOMContentLoaded", function() {
    // Show logo page initially
    document.getElementById("logo-page").style.display = "block";

    // Hide about us content initially
    document.getElementById("about-us").style.display = "none";

    // Hide the "Next" button initially
    document.getElementById("next").style.display = "none";

    // Show about us content after 3 seconds
    setTimeout(function() {
        document.getElementById("logo-page").style.display = "none";
        document.getElementById("about-us").style.display = "block";
        document.getElementById("next").style.display = "block";
    }, 3000);
});

