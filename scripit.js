// let name = document.querySelector(".Name").innerText
let playagainbuttonn = document.getElementsByClassName(".playagain")[0]
let guessword = document.querySelector(".guessed").innerText
const guessInput = document.getElementsByClassName("guessed")[0]
const guessButton = document.getElementsByClassName("guess")[0]
const scoreDisplay = document.querySelector(".count")
const div = document.querySelector("ul")
const hintt = document.querySelector(".hint")
// let contenstantname = prompt("what do you want to be called today?")
// console.log(contenstantname)
let wrongAttempts
let maximumattempt
wrongAttempts = 0
maximumattempt = 6
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
    wrongAttempts++
    scoreDisplay.innerText = wrongAttempts
    console.log(`the remaining Wrong attempt #${wrongAttempts}`)
  }
  if (wrongAttempts === maximumattempt) {
    gameover()
    location.reload() // chatGpt
  }
  if (finished === theword) {
    finishedgame()
    location.reload()
  }
})
const playagainbutton = document.querySelector(".playagain")
const startgameb = () => {
  alert("see you next time !")
  location.reload()
}
playagainbutton.addEventListener("click", startgameb)
// let name = document.querySelector(".Name").innerText
// let gueesword = document.querySelector(".guessed").innerText
// const guessInput = document.getElementsByClassName("guessed")[0]
// const guessButton = document.getElementsByClassName("guess")
// console.log("gueesword", gueesword)
// let div = document.querySelector("ul")

// const guesslist = [
//   {
//     word: "Today",
//     hint: "Not tomorrow.not yesterday",
//   },
// ]

// let thereal = ["___", "___", "___", "___", "___"]
// let theword = "today"
// let word = theword.split("")
// console.log(word)
// console.log(thereal)
// function startgame() {
//   let updatedWord = ""
//   for (let i = 0; i < word.length; i++) {
//     if (word[i] === gueesword) {
//       thereal[i] = gueesword
//       const newrealword = str.replace(/"_"/, `${gueesword}`)
//       updatedWord += gueesword
//       console.log(updatedWord, "letter updated")

//       console.log(newrealword)
//     } else {
//       updatedWord += thereal[i]
//     }
//   }
//   if (letters === startgame()[i]) {
//     console.log("hii")
//   }
//   console.log(updatedWord)
//   return updatedWord
// }
// let input = guessInput.addEventListener("keyup", (e) => {
//   console.log(e)
//   let letters = console.log(e.key)
//   startgame()

//   // const guessInput = document.getElementsByClassName("guessed")[0]
//   // thereal.push(guessInput)
//   // console.log(thereal)
// })

// console.log(thereal)

// div.innerText = thereal

// let result = startgame(thereal, theword, gueesword)
// console.log(result)
