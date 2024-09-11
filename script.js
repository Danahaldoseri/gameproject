let playagainbuttonn = document.getElementsByClassName(".playagain")[0]
let guessword = document.querySelector(".guessed").innerText
const guessInput = document.getElementsByClassName("guessed")[0]
const guessButton = document.getElementsByClassName("guess")[0]
const scoreDisplay = document.querySelector(".count")
const div = document.querySelector("ul")
const hintt = document.querySelector(".hint")
const hangmanImage = document.querySelector(".hangman-image")
const hangmanImage1 = document.querySelector(".hangman1-image")
let wrongGuessCount
let maximumattempt
let level
let levelsolved = false
wrongGuessCount = 0
maximumattempt = 6
level = 1
let theword = "today"
let thehint = "Not tomorrow.not yesterday"
hintt.innerText = thehint
let word = theword.split("")
let thereal = ["___", "___", "___", "___", "___"]
const gameover = () => {
  alert("game over, see you next time")
}
const finishedgame = () => {
  alert("game over, you guess the correct word")
  level++
  // hangmanImage.src = `https://media.geeksforgeeks.org
  // /wp-content/uploads/20240215173028/0.png`
}

function startgame(gueesword) {
  let updatedWord = ""
  for (let i = 0; i < word.length; i++) {
    if (word[i] === gueesword) {
      thereal[i] = gueesword
      updatedWord += gueesword
    } else {
      updatedWord += thereal[i]
      // wrongcount++
    }
  }
  return updatedWord
}

let result = startgame("")
div.innerText = result
// scoreDisplay.innerText = "wrongcount"

guessButton.addEventListener("click", (e) => {
  let letter = guessInput.value
  let result = startgame(letter)
  console.log(result)
  let finished = result // no need to call join()
  div.innerText = finished
  guessInput.value = ""
  if (!word.includes(letter)) {
    // chatGpt
    wrongGuessCount++
    scoreDisplay.innerText = wrongGuessCount
    console.log(`the remaining Wrong attempt #${wrongGuessCount}`)
  }
  // wrongGuessCount++
  if (wrongGuessCount === 0) {
    hangmanImage.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215173028/0.png`
  }
  if (wrongGuessCount === 1) {
    hangmanImage.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215173033/1.png`
  }
  if (wrongGuessCount === 2) {
    hangmanImage.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215173038/2.png`
  }
  if (wrongGuessCount === 3) {
    hangmanImage.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215172733/3.png`
  }
  if (wrongGuessCount == 4) {
    hangmanImage.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215173815/4.png`
  }
  if (wrongGuessCount === 5) {
    hangmanImage.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215173859/5.png`
  }
  if (wrongGuessCount === 6) {
    hangmanImage.src = `https://media.geeksforgeeks.org/wp-content/uploads/20240215173931/6.png`
  }
  // .geeksforgeeks.org

  if (wrongGuessCount === maximumattempt) {
    gameover()
    location.reload() // chatGpt
  }
  if (finished === theword) {
    levelsolved = true
    finishedgame()
  }
})
const playagainbutton = document.querySelector(".playagain")
const startgameb = () => {
  alert("see you next time !")
  location.reload()
}
playagainbutton.addEventListener("click", startgameb)
// document.getElementById("nextlevel").addEventListener("click", finishedgame)
