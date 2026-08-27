// Set password here
const ACCESS_CODE = "space123";

const gateScreen = document.getElementById("gate-screen");
const homeScreen = document.getElementById("home-screen");
const passwordInput = document.getElementById("password-input");
const togglePwBtn = document.getElementById("toggle-pw-btn");
const errorMessage = document.getElementById("error-message");
const loginBtn = document.getElementById("login-btn");
const chessBtn = document.getElementById("chess-btn");
const checkersBtn = document.getElementById("checkers-btn");

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
  alert("Launching Chess...");
});

checkersBtn.addEventListener("click", function() {
  alert("Launching Checkers...");
});
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Space Checkers Hub</title>
  <style>
    * {
      box-sizing: border-box;
      margin: 0;
      padding: 0;
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }

    body {
      background: #050510;
      color: #ffffff;
      min-height: 100vh;
      display: flex;
      justify-content: center;
      align-items: center;
      overflow-x: hidden;
      position: relative;
    }

    .nebula {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: radial-gradient(circle at 50% 50%, rgba(76, 29, 149, 0.25), rgba(15, 23, 42, 0.8));
      z-index: 1;
    }

    .stars {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      z-index: 0;
      background: 
        radial-gradient(1px 1px at 20px 30px, #fff, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 40px 70px, #fff, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 90px 40px, #00f0ff, rgba(0,0,0,0)),
        radial-gradient(1px 1px at 160px 120px, #fff, rgba(0,0,0,0)),
        radial-gradient(2px 2px at 230px 190px, #7000ff, rgba(0,0,0,0));
      background-repeat: repeat;
      background-size: 300px 300px;
      opacity: 0.6;
    }

    .container {
      position: relative;
      z-index: 2;
      background: rgba(15, 23, 42, 0.85);
      border: 1px solid rgba(112, 0, 255, 0.4);
      box-shadow: 0 0 30px rgba(112, 0, 255, 0.25);
      backdrop-filter: blur(10px);
      padding: 2rem;
      border-radius: 12px;
      text-align: center;
      max-width: 520px;
      width: 95%;
      margin: 20px 0;
    }

    .hidden {
      display: none !important;
    }

    h1 {
      font-size: 1.6rem;
      margin-bottom: 1rem;
      text-transform: uppercase;
      letter-spacing: 2px;
      color: #00f0ff;
      text-shadow: 0 0 10px rgba(0, 240, 255, 0.5);
    }

    /* Input & Buttons */
    .password-wrapper {
      position: relative;
      width: 100%;
      margin-bottom: 1rem;
    }

    input[type="password"], input[type="text"] {
      width: 100%;
      padding: 12px 45px 12px 16px;
      border-radius: 6px;
      border: 1px solid #7000ff;
      background: rgba(5, 5, 16, 0.8);
      color: #fff;
      font-size: 1rem;
      outline: none;
    }

    .toggle-pw {
      position: absolute;
      right: 12px;
      top: 50%;
      transform: translateY(-50%);
      background: none;
      border: none;
      cursor: pointer;
      font-size: 1.1rem;
    }

    .btn {
      width: 100%;
      padding: 12px 20px;
      border: none;
      border-radius: 6px;
      font-size: 0.95rem;
      font-weight: bold;
      text-transform: uppercase;
      letter-spacing: 1px;
      cursor: pointer;
      transition: all 0.3s ease;
      margin-bottom: 0.75rem;
    }

    .btn-primary { background: linear-gradient(135deg, #7000ff, #00f0ff); color: #fff; }
    .btn-primary:hover { box-shadow: 0 0 15px rgba(0, 240, 255, 0.6); }

    .btn-secondary { background: rgba(255, 255, 255, 0.1); color: #fff; border: 1px solid rgba(255, 255, 255, 0.2); }
    .btn-secondary:hover { background: rgba(255, 255, 255, 0.2); }

    .error-msg { color: #ff4a4a; font-size: 0.85rem; margin-bottom: 1rem; }

    /* Checkers Board Styles */
    .status-bar {
      margin-bottom: 1rem;
      font-size: 1.1rem;
      color: #00f0ff;
      font-weight: bold;
    }

    #checkers-board {
      display: grid;
      grid-template-columns: repeat(8, 1fr);
      grid-template-rows: repeat(8, 1fr);
      width: 100%;
      aspect-ratio: 1 / 1;
      border: 3px solid #7000ff;
      border-radius: 8px;
      overflow: hidden;
      box-shadow: 0 0 20px rgba(0, 240, 255, 0.2);
    }

    .square {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .square.light { background-color: #1e1b4b; }
    .square.dark { background-color: #0f172a; }
    .square.highlight { background-color: rgba(0, 240, 255, 0.3); cursor: pointer; }

    .piece {
      width: 80%;
      height: 80%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
      font-weight: bold;
      user-select: none;
      transition: transform 0.15s ease;
    }

    .piece:hover { transform: scale(1.08); }

    /* Player 1 (Neon Red/Pink) */
    .piece.red {
      background: radial-gradient(circle at 30% 30%, #ff2a70, #990033);
      box-shadow: 0 0 8px rgba(255, 42, 112, 0.6);
      border: 2px solid #ff80a6;
    }

    /* Player 2 (Cyan/Blue) */
    .piece.black {
      background: radial-gradient(circle at 30% 30%, #00f0ff, #006699);
      box-shadow: 0 0 8px rgba(0, 240, 255, 0.6);
      border: 2px solid #80f8ff;
    }

    .piece.selected {
      outline: 3px solid #ffffff;
      box-shadow: 0 0 15px #ffffff;
    }

    .piece.king::after {
      content: '👑';
      font-size: 1.1rem;
    }

    .controls {
      margin-top: 1rem;
      display: flex;
      gap: 10px;
    }
  </style>
</head>
<body>

  <div class="stars"></div>
  <div class="nebula"></div>

  <!-- Password Screen -->
  <div id="gate-screen" class="container">
    <h1>Access Portal</h1>
    <div class="password-wrapper">
      <input type="password" id="password-input" placeholder="Enter Access Code">
      <button type="button" id="toggle-pw-btn" class="toggle-pw">👁️</button>
    </div>
    <div id="error-message" class="error-msg hidden">Incorrect Code. Try again.</div>
    <button class="btn btn-primary" id="login-btn">Enter System</button>
  </div>

  <!-- Home Hub Screen -->
  <div id="home-screen" class="container hidden">
    <h1>Welcome to players of all ELO's</h1>
    <button class="btn btn-primary" id="chess-btn">Chess (Coming Soon)</button>
    <button class="btn btn-secondary" id="checkers-menu-btn">Checkers</button>
  </div>

  <!-- Checkers Mode Selection -->
  <div id="checkers-menu" class="container hidden">
    <h1>Select Checkers Mode</h1>
    <button class="btn btn-primary" id="local-2p-btn">Local 2-Player (Same Screen)</button>
    <button class="btn btn-secondary" id="vs-ai-btn">Play vs Space Bot (AI)</button>
    <button class="btn btn-secondary" id="back-home-btn">Back to Hub</button>
  </div>

  <!-- Checkers Game Board -->
  <div id="game-screen" class="container hidden">
    <div id="status-display" class="status-bar">Red's Turn</div>
    <div id="checkers-board"></div>
    <div class="controls">
      <button class="btn btn-secondary" id="reset-game-btn">Restart Game</button>
      <button class="btn btn-secondary" id="quit-game-btn">Menu</button>
    </div>
  </div>

  <script>
    const ACCESS_CODE = "space123";

    // Screens
    const gateScreen = document.getElementById("gate-screen");
    const homeScreen = document.getElementById("home-screen");
    const checkersMenu = document.getElementById("checkers-menu");
    const gameScreen = document.getElementById("game-screen");

    // Inputs & Auth
    const passwordInput = document.getElementById("password-input");
    const togglePwBtn = document.getElementById("toggle-pw-btn");
    const errorMessage = document.getElementById("error-message");
    const loginBtn = document.getElementById("login-btn");

    // Navigation Buttons
    const checkersMenuBtn = document.getElementById("checkers-menu-btn");
    const chessBtn = document.getElementById("chess-btn");
    const local2pBtn = document.getElementById("local-2p-btn");
    const vsAiBtn = document.getElementById("vs-ai-btn");
    const backHomeBtn = document.getElementById("back-home-btn");
    const quitGameBtn = document.getElementById("quit-game-btn");
    const resetGameBtn = document.getElementById("reset-game-btn");

    // Board state variables
    const boardElement = document.getElementById("checkers-board");
    const statusDisplay = document.getElementById("status-display");

    let board = [];
    let turn = 'red'; // 'red' (player 1) or 'black' (player 2 / AI)
    let selectedPiece = null; // {r, c}
    let validMoves = [];
    let vsAI = false;

    // --- Authentication Logic ---
    function unlockSite() {
      if (passwordInput.value === ACCESS_CODE) {
        gateScreen.classList.add("hidden");
        homeScreen.classList.remove("hidden");
      } else {
        errorMessage.classList.remove("hidden");
      }
    }

    togglePwBtn.addEventListener("click", () => {
      const isPw = passwordInput.getAttribute("type") === "password";
      passwordInput.setAttribute("type", isPw ? "text" : "password");
      togglePwBtn.textContent = isPw ? "🙈" : "👁️";
    });

    loginBtn.addEventListener("click", unlockSite);
    passwordInput.addEventListener("keypress", (e) => { if (e.key === "Enter") unlockSite(); });

    // Menu Nav
    chessBtn.addEventListener("click", () => alert("Chess mode is currently under construction. Select Checkers to play!"));
    checkersMenuBtn.addEventListener("click", () => {
      homeScreen.classList.add("hidden");
      checkersMenu.classList.remove("hidden");
    });
    backHomeBtn.addEventListener("click", () => {
      checkersMenu.classList.add("hidden");
      homeScreen.classList.remove("hidden");
    });

    local2pBtn.addEventListener("click", () => startCheckersGame(false));
    vsAiBtn.addEventListener("click", () => startCheckersGame(true));
    quitGameBtn.addEventListener("click", () => {
      gameScreen.classList.add("hidden");
      checkersMenu.classList.remove("hidden");
    });
    resetGameBtn.addEventListener("click", () => startCheckersGame(vsAI));

    // --- Checkers Core Engine ---
    function startCheckersGame(isVsAI) {
      vsAI = isVsAI;
      checkersMenu.classList.add("hidden");
      gameScreen.classList.remove("hidden");
      initBoard();
    }

    function initBoard() {
      // 8x8 Board setup
      // Null: empty space, Object: { player: 'red'|'black', isKing: boolean }
      board = Array(8).fill(null).map(() => Array(8).fill(null));

      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if ((r + c) % 2 === 1) {
            if (r < 3) board[r][c] = { player: 'black', isKing: false };
            else if (r > 4) board[r][c] = { player: 'red', isKing: false };
          }
        }
      }

      turn = 'red';
      selectedPiece = null;
      validMoves = [];
      updateStatus();
      renderBoard();
    }

    function renderBoard() {
      boardElement.innerHTML = '';
      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          const square = document.createElement('div');
          square.classList.add('square', (r + c) % 2 === 0 ? 'light' : 'dark');
          square.dataset.row = r;
          square.dataset.col = c;

          // Highlight valid moves
          const isHighlight = validMoves.some(m => m.r === r && m.c === c);
          if (isHighlight) {
            square.classList.add('highlight');
            square.addEventListener('click', () => handleMove(r, c));
          }

          // Render Piece
          const p = board[r][c];
          if (p) {
            const pieceEl = document.createElement('div');
            pieceEl.classList.add('piece', p.player);
            if (p.isKing) pieceEl.classList.add('king');
            if (selectedPiece && selectedPiece.r === r && selectedPiece.c === c) {
              pieceEl.classList.add('selected');
            }

            pieceEl.addEventListener('click', (e) => {
              e.stopPropagation();
              handlePieceClick(r, c);
            });
            square.appendChild(pieceEl);
          }

          boardElement.appendChild(square);
        }
      }
    }

    function handlePieceClick(r, c) {
      if (vsAI && turn === 'black') return; // Block human interaction during AI turn

      const piece = board[r][c];
      if (piece && piece.player === turn) {
        selectedPiece = { r, c };
        validMoves = getValidMoves(r, c);
        renderBoard();
      }
    }

    function getValidMoves(r, c) {
      const p = board[r][c];
      if (!p) return [];

      const moves = [];
      const dirs = [];

      if (p.player === 'red' || p.isKing) dirs.push([-1, -1], [-1, 1]); // Moving up
      if (p.player === 'black' || p.isKing) dirs.push([1, -1], [1, 1]);   // Moving down

      dirs.forEach(([dr, dc]) => {
        const nr = r + dr;
        const nc = c + dc;

        // Regular Moves
        if (inBounds(nr, nc) && board[nr][nc] === null) {
          moves.push({ r: nr, c: nc, jump: null });
        }
        // Jump Captures
        else if (inBounds(nr, nc) && board[nr][nc] && board[nr][nc].player !== p.player) {
          const jrow = nr + dr;
          const jcol = nc + dc;
          if (inBounds(jrow, jcol) && board[jrow][jcol] === null) {
            moves.push({ r: jrow, c: jcol, jump: { r: nr, c: nc } });
          }
        }
      });

      return moves;
    }

    function handleMove(targetR, targetC) {
      const move = validMoves.find(m => m.r === targetR && m.c === targetC);
      if (!move || !selectedPiece) return;

      const { r: fromR, c: fromC } = selectedPiece;
      const piece = board[fromR][fromC];

      // Execute Move
      board[targetR][targetC] = piece;
      board[fromR][fromC] = null;

      // Handle Capture
      if (move.jump) {
        board[move.jump.r][move.jump.c] = null;
      }

      // Handle King Promotion
      if ((piece.player === 'red' && targetR === 0) || (piece.player === 'black' && targetR === 7)) {
        piece.isKing = true;
      }

      selectedPiece = null;
      validMoves = [];

      // Check for win or switch turns
      if (!checkWinCondition()) {
        turn = turn === 'red' ? 'black' : 'red';
        updateStatus();
        renderBoard();

        if (vsAI && turn === 'black') {
          setTimeout(makeAIMove, 600);
        }
      } else {
        renderBoard();
      }
    }

    function makeAIMove() {
      let allMoves = [];

      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if (board[r][c] && board[r][c].player === 'black') {
            const moves = getValidMoves(r, c);
            moves.forEach(m => allMoves.push({ from: { r, c }, to: m }));
          }
        }
      }

      if (allMoves.length === 0) {
        statusDisplay.textContent = "Red Wins! (Bot has no moves)";
        return;
      }

      // Prioritize capture jumps, otherwise pick a random move
      const jumps = allMoves.filter(m => m.to.jump !== null);
      const chosen = jumps.length > 0 
        ? jumps[Math.floor(Math.random() * jumps.length)]
        : allMoves[Math.floor(Math.random() * allMoves.length)];

      selectedPiece = chosen.from;
      validMoves = [chosen.to];
      handleMove(chosen.to.r, chosen.to.c);
    }

    function checkWinCondition() {
      let redCount = 0, blackCount = 0;

      for (let r = 0; r < 8; r++) {
        for (let c = 0; c < 8; c++) {
          if (board[r][c]?.player === 'red') redCount++;
          if (board[r][c]?.player === 'black') blackCount++;
        }
      }

      if (redCount === 0) {
        statusDisplay.textContent = "Cyan/Black Wins!";
        return true;
      }
      if (blackCount === 0) {
        statusDisplay.textContent = "Red Wins!";
        return true;
      }
      return false;
    }

    function updateStatus() {
      statusDisplay.textContent = turn === 'red' ? "Red's Turn" : (vsAI ? "Bot's Turn..." : "Cyan's Turn");
    }

    function inBounds(r, c) { return r >= 0 && r < 8 && c >= 0 && c < 8; }
  </script>

</body>
</html>
