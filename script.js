// Access Password Configuration
const ACCESS_CODE = "space123";

// DOM Elements
const gateScreen = document.getElementById("gate-screen");
const homeScreen = document.getElementById("home-screen");
const passwordInput = document.getElementById("password-input");
const togglePwBtn = document.getElementById("toggle-pw-btn");
const errorMessage = document.getElementById("error-message");
const loginBtn = document.getElementById("login-btn");

// Game Buttons
const chessBtn = document.getElementById("chess-btn");
const checkersBtn = document.getElementById("checkers-btn");
const ludoBtn = document.getElementById("ludo-btn");
const catanBtn = document.getElementById("catan-btn");
const tcgcpBtn = document.getElementById("tcgcp-btn");

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

// Auth Event Listeners
loginBtn.addEventListener("click", unlockSite);
passwordInput.addEventListener("keypress", function(e) {
  if (e.key === "Enter") unlockSite();
});

// Game Selection Listeners
chessBtn.addEventListener("click", () => {
  window.location.href = "https://www.chess.com"; 
});

checkersBtn.addEventListener("click", () => {
  window.location.href = "https://www.247checkers.com"; 
});

ludoBtn.addEventListener("click", () => {
  window.location.href = "https://ludo-king.com"; 
});

catanBtn.addEventListener("click", () => {
  window.location.href = "https://catanuniverse.com"; 
});

tcgcpBtn.addEventListener("click", () => {
  window.location.href = "https://boardgamearena.com"; 
});
