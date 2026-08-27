// Set password here
const ACCESS_CODE = "space123";

const gateScreen = document.getElementById("gate-screen");
const homeScreen = document.getElementById("home-screen");
const passwordInput = document.getElementById("password-input");
const errorMessage = document.getElementById("error-message");
const loginBtn = document.getElementById("login-btn");
const casualBtn = document.getElementById("casual-btn");
const rankedBtn = document.getElementById("ranked-btn");

function unlockSite() {
  if (passwordInput.value === ACCESS_CODE) {
    gateScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
  } else {
    errorMessage.classList.remove("hidden");
  }
}

// Event Listeners
loginBtn.addEventListener("click", unlockSite);

passwordInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    unlockSite();
  }
});

casualBtn.addEventListener("click", function() {
  alert("Launching Casual Mode...");
});

rankedBtn.addEventListener("click", function() {
  alert("Launching Ranked Mode...");
});
