let playAgainButton = document.getElementsByClassName("playagain")[0]
let guessedWord = document.querySelector(".guessed").innerText
const guessInputField = document.getElementsByClassName("guessed")[0]
const guessButtonElement = document.getElementsByClassName("guess")[0]
const scoreDisplayElement = document.querySelector(".count")
const wordListElement = document.querySelector("ul")
const hintElement = document.querySelector(".hint")
const hangmanImageElement = document.querySelector(".hangman-image")
const hangmanImage1Element = document.querySelector(".hangman1-image")

let wrongGuessCount = 0
let maximumAttempts = 6
let level = 1
let levelSolved = false

let theWord = "today"
let theHint = "Not tomorrow, not yesterday"
hintElement.innerText = theHint

let wordArray = theWord.split("")
let blankWordArray = ["___", "___", "___", "___", "___"]

const gameOver = () => {
  alert("Game over, see you next time!")
}

const finishedGame = () => {
  alert("Game over, you guessed the correct word!")
  level++
  // hangmanImageElement.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215173028/0.png`;
}

function startGame(guessedWord) {
  let updatedWord = ""
  for (let i = 0; i < wordArray.length; i++) {
    if (wordArray[i] === guessedWord) {
      blankWordArray[i] = guessedWord
      updatedWord += guessedWord
    } else {
      updatedWord += blankWordArray[i]
      // wrongGuessCount++;
    }
  }
  return updatedWord
}

let result = startGame("")
wordListElement.innerText = result
// scoreDisplayElement.innerText = "wrongGuessCount";

guessButtonElement.addEventListener("click", (e) => {
  let letter = guessInputField.value
  let result = startGame(letter)
  console.log(result)
  let finished = result // no need to call join()
  wordListElement.innerText = finished
  guessInputField.value = ""
  if (!wordArray.includes(letter)) {
    wrongGuessCount++
    scoreDisplayElement.innerText = wrongGuessCount
    console.log(`The remaining wrong attempts: #${wrongGuessCount}`)
  }
  // wrongGuessCount++;
  if (wrongGuessCount === 0) {
    hangmanImageElement.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215173028/0.png`
  }
  if (wrongGuessCount === 1) {
    hangmanImageElement.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215173033/1.png`
  }
  if (wrongGuessCount === 2) {
    hangmanImageElement.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215173038/2.png`
  }
  if (wrongGuessCount === 3) {
    hangmanImageElement.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215172733/3.png`
  }
  if (wrongGuessCount === 4) {
    hangmanImageElement.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215173815/4.png`
  }
  if (wrongGuessCount === 5) {
    hangmanImageElement.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215173859/5.png`
  }
  if (wrongGuessCount === 6) {
    hangmanImageElement.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215173931/6.png`
  }

  if (wrongGuessCount === maximumAttempts) {
    gameOver()
    location.reload() // chatGpt
  }
  if (finished === theWord) {
    levelSolved = true
    finishedGame()
  }
})

const startGameButton = () => {
  alert("See you next time !")
  location.reload()
}
playAgainButton.addEventListener("click", startGameButton)
// document.getElementById("nextlevel").addEventListener("click", finishedGame);
