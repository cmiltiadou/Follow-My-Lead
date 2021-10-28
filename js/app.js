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

arrP1 = []
arrP2 = []
let currentArray = arrP1

let playerUp = ""

let changePlayer = () => {
    if(currentArray == arrP1){
        playerUp = "Player 1"
    } else {
        playerUp = "Player 2"
    }
}

let timeleft = 0;

const resetArray = () => {
    arrP1 = []
    arrP2 = []
    console.log('arrays reset')
}
let restartGame = () =>{
    resetArray()
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
        timer.innerText = ""
        currentRd = "1b"
        currentArray = arrP2
        // console.log(currentRd)
        // console.log(currentArray)
        // playerStatus.innerText = "Player 2, follow their lead!"
        startButton.value = "Proceed"
        startButton.style.display = "inherit"
        timeleft = 0
        break
        case(currentRd == "1b"):
        if(arrP1.sort().join(',') === arrP2.sort().join(',')){
            // playerStatus.innerText = "Ok Player 2, this time you take the lead" 
            currentRd = "2"
            startButton.value = "Round 2"
            startButton.style.display = "inherit"
            resetArray()
            currentArray = arrP2
            // console.log(currentRd)
            // console.log(arrP2)
            // console.log(arrP1)
            timeleft = 0
        } else {
            timer.innerText = "GAME OVER"
            // playerStatus.innerText = "Not your best effort" 
            restartGame()
        }
        break
        case (currentRd == "2"):
            timer.innerText = "REVERSE"
            currentRd = "2b"
            currentArray = arrP1
            // console.log(currentRd)
            // console.log(currentArray)
            // playerStatus.innerText = "P1 match that sequence, but in reverse order!"
            startButton.value = "Proceed"
            startButton.style.display = "inherit"
            timeleft = 0
            break
            case (currentRd == "2b"):
                if(arrP1.reverse().sort().join(',') === arrP2.sort().join(',')){
                    // playerStatus.innerText = "Great Job! on to the final round. P1 sets the tone" 
                    timer.innerText = ""
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
                    timer.innerText = "So close, yet so far" 
                    restartGame()
                }
                break
                case (currentRd == "3"):
                    timer.innerText = "OPPOSITES"
                    currentRd = "3b"
                    currentArray = arrP1
                    // console.log(currentRd)
                    // console.log(currentArray)
                    // playerStatus.innerText = "P2, match that sequence using opposite directions."
                    startButton.value = "Proceed"
                    startButton.style.display = "inherit"
                    timeleft = 0
                    break
                    case (currentRd == "3b"):
                        if(arrP1.sort().join(',') === arrP2.sort().join(',')){
                            // playerStatus.innerText = "Congrats! Player 2 wins!" 
                            timer.innerText = "Victory"
                            restartGame()
                        } else {
                            timer.innerText = "GAME OVER"
                            timer.innerText = "You nearly had it!" 
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
                    },2000)
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
    
    // document.addEventListener('DOMContentLoaded', () =>{
        
        // })
        
        // Once entered the keypresses should be stored in array
        //use appendChild
        
    
    const recordSequence = (e) => {
        if(timeleft > 0 && currentArray.length < 4 && currentRd !== "3b"){
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
    }} else if(timeleft > 0 && currentArray.length < 4 && currentRd == "3b"){
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
    changePlayer()
    playerStatus.innerText = playerUp
    icon1.src = ""
    icon2.src = ""
    icon3.src = ""
    icon4.src = ""
    dropupDiv.className = "dropdown is-hidden"
    modIcon.className = "image size-is-30x30"
    sfx.confirm.play()
    timeleft=5
    if(currentRd == "1") {
        music.main.play()}
        // if (timeleft == 5 && currentRd == "1"){playerStatus.innerText = "P1 you're up"}
    title.innerText = ""
    startButton.style.display = "none"
        const countdown = setInterval(function(){
            if(timeleft <= 0 ){
                timer.innerText = "GAME OVER"
                // playerStatus.innerText = "You ran out of time"
                clearInterval(countdown)
                restartGame()
                } else if(currentArray.length == 4){
                    endRound()
                    clearInterval(countdown)
                    startRecording = false
                } else if(timeleft > 0) {
                    timer.innerText = timeleft 
                    timeleft -= 1;
            }
        }, 1040)
}
// Player 1 has 7 seconds to enter their sequence
// add timer to canvas
// Once entered the keypresses should be stored in array
// render key sequence as arrows after complete
// Display Player 1's key sequence on screen for 3 seconds
// Player 2 now has to match Player 1's sequence exactly as entered // try to compare on the fly OR
// store player 2's array and compare to player 1 and check for win or lose conditions using if else statement
//
// const countdown = function(){
//     if(timeleft <= 0 || currentArray.length == 4){
//         clearInterval(countdown);
//         timer.innerText = ""
//         setTimeout((currentArray = arrP2), 10000)
//     } else {
//         timer.innerText = timeleft 
//         timeleft -= 1;} }
        
        
            
            
            
startButton.addEventListener('click', startGame)
document.addEventListener('keydown', recordSequence)

// currentRd = "1b"
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