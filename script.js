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

  function showGreeting() {
    const hour = new Date().getHours();
    let message = "";

    if (hour < 12) {
      message = "Good Morning!";
    } else if (hour < 18) {
      message = "Good Afternoon!";
    } else {
      message = "Good Evening!";
    }

    document.getElementById("greeting").textContent = message;
  }

  showGreeting();
});
