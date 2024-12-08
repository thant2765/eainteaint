document.getElementById("noButton").addEventListener("click", function() {
    // Hide the "No" button
    this.style.display = "none";
  
    // Make the "Yes" button bigger
    document.getElementById("yesButton").classList.add("bigger");
  });
  document.getElementById("yesButton").addEventListener("click", function() {
    // Redirect to the next page
    window.location.href = "sure.html";
  });  