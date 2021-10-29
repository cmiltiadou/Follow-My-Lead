// Player 1 has 7 seconds to enter their sequence
// add timer to canvas
// Once entered the keypresses should be stored in array
// render key sequence as arrows after complete
// Display Player 1's key sequence on screen for 3 seconds
// Player 2 now has to match Player 1's sequence exactly as entered // try to compare on the fly OR
// store player 2's array and compare to player 1 and check for win or lose conditions using if else statement



// adding audiofiles using howl.js
let sfx = {
    up: new Howl({
        src: ["sounds/beep.wav"],
        html5: true,
    }),
    
    complete: new Howl({
        src: ["sounds/fullSequnce.wav"],
        html5: true,
    }),
    confirm: new Howl({
        src: ["sounds/wall.wav"],
        html5: true,
    })

}

let music = {
    main: new Howl({
        src: ["sounds/High-Fashion.mp3"],
        loop:true,
        html5:true,
        buffer:true,
    })

}

// declare the image path for each icon so it can easily be called again
const upIcon = 'css/images/upArrow.png'
const dwnIcon = 'css/images/downArrow.png'
const leftIcon = 'css/images/leftArrow.png'
const rightIcon = 'css/images/rightArrow.png'

let iconToSet = 1
let currentRd = "1"
timer.innerText = ""

let player1Score = 0
let player2Score = 0


arrP1 = []
arrP2 = []
let currentArray = arrP1

let playerUp = ""

let displayMod = () => {
    if(currentRd == "3b"){
        modIcon.src = "css/images/OppositeIcon.png"
    } else if (currentRd == "1b") {
        modIcon.src = "css/images/StandardIcon.png"
    }  else if (currentRd == "2b") {
        modIcon.src = "css/images/ReverseIcon.png"
    } else {
        modIcon.src = "css/images/leaderIcon.png"
    }
}

let changePlayer = () => {
    if(currentArray == arrP1){
        playerUp = "Player 1"
    } else {
        playerUp = "Player 2"
    }
    
}

let updateScore = () =>{
if(playerUp == "Player 1"){
    player2Score += 1
}else {
    player1Score += 1
}
    p1Score.innerText = player1Score
    p2Score.innerText = player2Score  
}

let timeleft = 0;

const resetArray = () => {
    arrP1 = []
    arrP2 = []
    console.log('arrays reset')
}


let restartGame = () =>{
    resetArray()
    updateScore()
    currentRd = "1"
    currentArray = arrP1
    timeleft = 0
    startButton.value = "Play Again"
    startButton.style.display = "inherit"
    playerStatus.value = ""
    music.main.stop()
}



const endRound = () => {
    switch(true) {
        case(currentRd == "1"):           
        currentRd = "1b"
        currentArray = arrP2
        startButton.value = "Proceed"
        startButton.style.display = "inherit"
        timer.innerText = "STANDARD"
        timeleft = 0
        break
        case(currentRd == "1b"):
        if(arrP1.sort().join(',') === arrP2.sort().join(',')){
            currentRd = "2"
            startButton.value = "Round 2"
            startButton.style.display = "inherit"
            timer.innerText = "Perfect!"
            resetArray()
            currentArray = arrP2
            // console.log(currentRd)
            // console.log(arrP2)
            // console.log(arrP1)
            timeleft = 0
        } else {
            timer.innerText = "GAME OVER"
            restartGame()
        }
        break
        case (currentRd == "2"):
            timer.innerText = "REVERSE"
            currentRd = "2b"
            currentArray = arrP1
            // console.log(currentRd)
            // console.log(currentArray)
            startButton.value = "Proceed"
            startButton.style.display = "inherit"
            timeleft = 0
            break
            case (currentRd == "2b"):
                if(arrP1.reverse().sort().join(',') === arrP2.sort().join(',')){
                    timer.innerText = "Well done!"
                    currentRd = "3"
                    startButton.style.display = "inherit"
                    resetArray()
                    currentArray = arrP2
                    // console.log(currentRd)
                    // console.log(arrP2)
                    // console.log(arrP1)
                    timeleft = 0
                } else {
                    timer.innerText = "GAME OVER"
                    restartGame()
                }
                break
                case (currentRd == "3"):
                    timer.innerText = "OPPOSITES"
                    currentRd = "3b"
                    currentArray = arrP1
                    // console.log(currentRd)
                    // console.log(currentArray)
                    startButton.value = "Proceed"
                    startButton.style.display = "inherit"
                    timeleft = 0
                    break
                    case (currentRd == "3b"):
                        if(arrP1.sort().join(',') === arrP2.sort().join(',')){
                            timer.innerText = ""
                            currentRd = "1"
                            startButton.style.display = "inherit"
                            resetArray()
                            currentArray = arrP1
                            timer.innerText = "Nice!"
                            timeleft = 0
                        } else {
                            timer.innerText = "GAME OVER"
                            restartGame()
                        }
                        break
                    }
}
                
                
const displayArrow = (icon) => {
    if (iconToSet == 1){
        icon1.src = icon
        iconToSet = 2
        sfx.up.play()
        }else if(iconToSet ==2){
            icon2.src = icon
            iconToSet = 3
            sfx.up.play()
            } else if (iconToSet == 3){
                icon3.src = icon
                iconToSet = 4
                sfx.up.play()
                }else if(iconToSet == 4){
                    icon4.src = icon
                    iconToSet = 1
                    sfx.complete.play()
                    const countdown = setTimeout(function(){
                        icon1.src = ""
                        icon2.src = ""
                        icon3.src = ""
                        icon4.src = ""
                    },2200)
    }      
}
//test that icons are updated by running the following function
// const displaySeq = () => {
    //     icon1.src = upIcon
    //     icon2.src = leftIcon
    //     icon3.src = dwnIcon
    //     icon4.src = upIcon
    // }
    // displaySeq()
    
// Once entered the keypresses should be stored in array
//use appendChild
        
    
const recordSequence = (e) => {
    if(timeleft > 0 && currentArray.length < 4 && currentRd !== "3b" && timer.innerText != ""  && timer.innerText != "GO!"){
switch(e.key){
    //if the w key is pressed, append to 
    case ('w'):
        currentArray.push('W')
        displayArrow(upIcon)
        break
    case ('a'):
        currentArray.push('A')
        displayArrow(leftIcon)
        break
    case ('s'):
        currentArray.push('S')
        displayArrow(dwnIcon)
        break
    case ('d'):
        currentArray.push('D')
        displayArrow(rightIcon)
        break
}} else if(timeleft > 0 && currentArray.length < 4 && currentRd == "3b" && timer.innerText != "" && timer.innerText != "GO!"){
    switch(e.key){
        //for the final rd, we'll have p2's keypresses correspond to the opposite key (i.e. pressing W = S) 
        case ('w'):
            currentArray.push('S')
            displayArrow(upIcon)
            break
        case ('a'):
            currentArray.push('D')
            displayArrow(leftIcon)
            break
        case ('s'):
            currentArray.push('W')
            displayArrow(dwnIcon)
            break
        case ('d'):
            currentArray.push('A')
            displayArrow(rightIcon)
            break
    }
} else {
    return false
}
    // checkArr.addEventListener('click', console.log(currentArray))  
    
}
const startGame = () => {
    
    if(currentRd == "1") {
        music.main.play()}
    
    sfx.confirm.play()

    timer.innerText = "GO!"
    changePlayer()
    displayMod()
    playerStatus.innerText = playerUp
    icon1.src = ""
    icon2.src = ""
    icon3.src = ""
    icon4.src = ""
    dropupDiv.className = "dropdown is-hidden"
    modIcon.className = "image size-is-30x30"
    timeleft=5
    title.innerText = ""
    startButton.style.display = "none"

    const countdown = setInterval(function(){
        if(timeleft <= 0 ){
            timer.innerText = "GAME OVER"
            // playerStatus.innerText = "You ran out of time"
            clearInterval(countdown)
            restartGame()
            } else if(currentArray.length == 4){
                timer.innerText = ""
                endRound()
                clearInterval(countdown)
            } else if(timeleft > 0) {
                timer.innerText = timeleft 
                timeleft -= 1;
        }
    }, 1040)
}


startButton.addEventListener('click', startGame)
document.addEventListener('keydown', recordSequence)

// setTimeout(checkForWin, 2000)
// console.log("array 2 " + arrP2)
// console.log("array 1 " + arrP1)  
// add button so Player 2 can enter a matching sequence
// if(arrP2.length == 4 && arrP1.length == 4 ){
//     checkForWin()
// setTimeout(resetArray, 1000)
// timer.innerText = "Player 1 get ready"
// startButton.value = "Proceed"
// startButton.style.display = "inherit"
// console.log("this is array 2 " +arrP2)
// console.log("this is array 1 " +arrP1)