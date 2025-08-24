// You can add interactive features here later
console.log("Portfolio loaded successfully!");
document.addEventListener("DOMContentLoaded", function() {
  const btn = document.getElementById("toggle-btn");
  const aboutText = document.getElementById("about-text");

  btn.addEventListener("click", function() {
    if (aboutText.style.display === "none") {
      aboutText.style.display = "block";
      btn.textContent = "Hide About Me";
    } else {
      aboutText.style.display = "none";
      btn.textContent = "Show About Me";
    }
  });
});
