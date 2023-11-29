/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */


function openPage(pageName, elmnt, color) {
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].style.backgroundColor = "";
    }
    document.getElementById(pageName).style.display = "block";
    elmnt.style.backgroundColor = color;
}

            var countDownDate, spele;
            function sakt () {
                countDownDate = new Date().getTime() + 30000;
                spele = setInterval(skaita, 1000);
                
            }
        // Update the count down every 1 second
            function skaita() {
                let now = new Date().getTime();
                // Find the distance between now and the count down date
                let distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                let seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Output the result in an element with id="demo"
                document.getElementById("demo").innerHTML = minutes + "m " + seconds + "s ";

                // If the count down is over, write some text 
                if (distance < 0) {
                    clearInterval(spele);
                    document.getElementById("demo").innerHTML = "Spēle Beigusies!";
                }
            }
            

    // Define a list of word-antonym pairs
    let wordList = [
  { word: "happy", antonym: "sad" },
  { word: "hot", antonym: "cold" },
  { word: "big", antonym: "small" },
  { word: "fast", antonym: "slow" },
  { word: "light", antonym: "heavy" },
  { word: "high", antonym: "low" },
  { word: "rich", antonym: "poor" },
  { word: "thick", antonym: "thin" },
  { word: "empty", antonym: "full" },
  { word: "clean", antonym: "dirty" },
  { word: "deep", antonym: "shallow" },
  { word: "wide", antonym: "narrow" },
  { word: "old", antonym: "young" },
  { word: "strong", antonym: "weak" },
  { word: "noisy", antonym: "quiet" },
  { word: "bright", antonym: "dim" },
  { word: "brave", antonym: "fearful" },
  { word: "calm", antonym: "agitated" },
  { word: "happy", antonym: "sad" },
  { word: "cruel", antonym: "kind" },
  { word: "simple", antonym: "complicated" },
  { word: "beautiful", antonym: "ugly" },
  { word: "victory", antonym: "defeat" },
      // Add more word-antonym pairs as needed
    ];

    let score = 0;
    let currentWordIndex = 0;

    // Function to shuffle the array randomly
    function shuffleArray(array) {
      for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    }

    // Function to initialize a new round
    function newRound() {
      shuffleArray(wordList);
      currentWordIndex = 0;

      document.getElementById("word").textContent = "Word: " + wordList[currentWordIndex].word;
      document.getElementById("input").value = "";
    }

    // Function to check the antonym
    function checkAntonym() {
      const userAnswer = document.getElementById("input").value.toLowerCase();
      const correctAnswer = wordList[currentWordIndex].antonym.toLowerCase();

      if (userAnswer === correctAnswer) {
        score++;
        document.getElementById("scoreValue").textContent = score;
        alert("Correct!");
      } else {
        alert("Incorrect. The correct antonym is: " + correctAnswer);
      }

      // Move to the next word or end the game
      currentWordIndex++;
      if (currentWordIndex < wordList.length) {
        document.getElementById("word").textContent = "Word: " + wordList[currentWordIndex].word;
      } else {
        alert("Game Over. Your final score is: " + score);
        // You can add more logic here, such as displaying a high score.
        newRound();
      }
    }

    // Function to reset the game
    function resetGame() {
      score = 0;
      document.getElementById("scoreValue").textContent = score;
      newRound();
    }

    // Start the game
    newRound();