// Access Password Configuration
const ACCESS_CODE = "space123";

// DOM Elements
const gateScreen = document.getElementById("gate-screen");
const homeScreen = document.getElementById("home-screen");
const passwordInput = document.getElementById("password-input");
const togglePwBtn = document.getElementById("toggle-pw-btn");
const errorMessage = document.getElementById("error-message");
const loginBtn = document.getElementById("login-btn");
const chessBtn = document.getElementById("chess-btn");
const checkersBtn = document.getElementById("checkers-btn");

// Password Screen Unlock Handler
function unlockSite() {
  if (passwordInput.value === ACCESS_CODE) {
    gateScreen.classList.add("hidden");
    homeScreen.classList.remove("hidden");
  } else {
    errorMessage.classList.remove("hidden");
  }
}

// Toggle Password Visibility
togglePwBtn.addEventListener("click", function() {
  const isPassword = passwordInput.getAttribute("type") === "password";
  passwordInput.setAttribute("type", isPassword ? "text" : "password");
  togglePwBtn.textContent = isPassword ? "🙈" : "👁️";
});

// Event Listeners
loginBtn.addEventListener("click", unlockSite);

passwordInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") {
    unlockSite();
  }
});

chessBtn.addEventListener("click", function() {
  alert("Chess selected!");
});

checkersBtn.addEventListener("click", function() {
  alert("Checkers selected!");
});
