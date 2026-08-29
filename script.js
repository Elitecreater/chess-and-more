// Access Password Configuration
const ACCESS_CODE = "space123";

// DOM Elements
const gateScreen = document.getElementById("gate-screen");
const homeScreen = document.getElementById("home-screen");
const gameScreen = document.getElementById("game-screen");
const gameCodeArea = document.getElementById("game-code-area");

const passwordInput = document.getElementById("password-input");
const togglePwBtn = document.getElementById("toggle-pw-btn");
const errorMessage = document.getElementById("error-message");
const loginBtn = document.getElementById("login-btn");
const backBtn = document.getElementById("back-btn");

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

// Back Button Handler
backBtn.addEventListener("click", () => {
  gameScreen.classList.add("hidden");
  homeScreen.classList.remove("hidden");
  gameCodeArea.innerHTML = ""; // Clears game code when exiting
});

// --- PUT YOUR GAME CODE HERE ---

// Helper function to launch game code
function loadGameCode(htmlCode) {
  homeScreen.classList.add("hidden");
  gameScreen.classList.remove("hidden");
  gameCodeArea.innerHTML = htmlCode;
}

// 1. Chess Button (Put your Chess HTML/JS inside the template string)
chessBtn.addEventListener("click", () => {
  loadGameCode(`
    <h2>Chess Game</h2>
    <p>Put your custom Chess HTML/JS canvas or board code here!</p>
  `);
});

// 2. Checkers Button
checkersBtn.addEventListener("click", () => {
  loadGameCode(`
    <h2>Checkers Game</h2>
    <p>Put your custom Checkers HTML/JS board code here!</p>
  `);
});

// 3. Ludo Button
ludoBtn.addEventListener("click", () => {
  loadGameCode(`
    <h2>Ludo Game</h2>
    <p>Put your custom Ludo HTML/JS board code here!</p>
  `);
});

// 4. Catan Button
catanBtn.addEventListener("click", () => {
  loadGameCode(`
    <h2>Catan Game</h2>
    <p>Put your custom Catan HTML/JS code here!</p>
  `);
});

// 5. Taco Cat Goat Cheese Pizza Button
tcgcpBtn.addEventListener("click", () => {
  loadGameCode(`
    <h2>Taco Cat Goat Cheese Pizza</h2>
    <p>Put your custom card game code here!</p>
  `);
});

// 6. chess 3d
tcgcpBtn.addEventListener("click", () => {
  loadGameCode(`
    <h2>chess 3d</h2>
    <p>Put your custom card game code here!</p>
  `);
});

