// Fragen-Array
const questions = [
    "Do U get tired of turning the swag on?",
    "Do U find it exhausting to think about what you want to eat every day?",
    "Do U cry when you watch 'Ladybird'?",
    "Do U miss playing outside with friends?",
    "Do U feel old when someone says '2000s' was 24 years ago?",
    "Do U still laugh at silly jokes like a kid?",
    "Do U still love glitter and stickers?"
  ];
  
  let currentHeart = null;
  
  // Spielfigur bewegen
  document.addEventListener("keydown", function(e) {
    const player = document.getElementById("player");
    const step = 20;
  
    let top = parseInt(player.style.top || "20");
    let left = parseInt(player.style.left || "20");
  
    switch (e.key) {
      case "ArrowUp": top -= step; break;
      case "ArrowDown": top += step; break;
      case "ArrowLeft": left -= step; break;
      case "ArrowRight": left += step; break;
    }
  
    player.style.top = `${top}px`;
    player.style.left = `${left}px`;
  
    checkCollision();
  });
  
  // Kollisionserkennung
  function checkCollision() {
    document.querySelectorAll(".heart").forEach((heart, index) => {
      const player = document.getElementById("player");
      const rect1 = player.getBoundingClientRect();
      const rect2 = heart.getBoundingClientRect();
  
      if (
        rect1.left < rect2.right &&
        rect1.right > rect2.left &&
        rect1.top < rect2.bottom &&
        rect1.bottom > rect2.top
      ) {
        showPopup(index);
      }
    });
  }
  
  // Pop-up anzeigen
  function showPopup(index) {
    if (currentHeart !== index) {
      currentHeart = index;
      const popup = document.getElementById("popup");
      const questionText = document.getElementById("question");
      questionText.textContent = questions[index % questions.length];
      popup.style.display = "block";
    }
  }
  
  // Pop-up schließen
  document.getElementById("yes").onclick = closePopup;
  document.getElementById("no").onclick = closePopup;
  
  function closePopup() {
    document.getElementById("popup").style.display = "none";
  }
  
  
  
