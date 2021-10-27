// declare the image path for each icon so it can easily be called again
const upIcon = 'css/images/upArrow.png'
const dwnIcon = 'css/images/downArrow.png'
const leftIcon = 'css/images/leftArrow.png'
const rightIcon = 'css/images/rightArrow.png'
let currentRd = "1"
timer.innerText = ""


arrP1 = []
arrP2 = []


let currentArray = arrP1


const resetArray = () => {
    arrP1 = []
    arrP2 = []
    console.log('arrays reset')
}


const checkForWin = () => {
    // let compareArrays = function () {
    //     if(arrP1.sort().join(',') === arrP2.sort().join(',')){
    //         arraysEqual = true
    //     } else {
    //         arraysEqual = false
    //     } 
    // }
    let arraysEqual = ""

    // compareArrays()
        switch(true) {
            case(currentRd == "1b"):
                if(arrP1.sort().join(',') === arrP2.sort().join(',')){
                    playerStatus.innerText = "Ok, lets make this a little harder" 
                    currentRd = "2"
                    startButton.value = "Round 2"
                    startButton.style.display = "inherit"
                    resetArray()
                    } else {
                    timer.innerText = "GAME OVER"
                    playerStatus.innerText = "Not your best effort" 
                }
                break
            case (currentRd == "2b"):
                if(arrP1.reverse().sort().join(',') === arrP2.sort().join(',')){
                    timer.innerText = "Not bad, on to the final round!" 
                    } else {
                    timer.innerText = "Sorry, do better" 
                    }
                break
            }
        }


let timeleft = 5;
// const countdown = setInterval(function(){
//   if(timeleft <= 0 || currentArray.lenght == 4){
//     clearInterval(countdown);
//     timer.innerText = "Calculating...";
//   } else {
//     timer.innerText = timeleft 
//   }
//   timeleft -= 1;
// }, 1010);

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
        if(currentArray.length < 4 && currentRd !== "3b"){
    switch(e.key){
        //if the w key is pressed, append to 
        case ('w'):
            currentArray.push('W')
            break
        case ('a'):
            currentArray.push('A')
            break
        case ('s'):
            currentArray.push('S')
            break
        case ('d'):
            currentArray.push('D')
            break
    }} else if(currentArray.length < 4 && currentRd !== "3b"){
        switch(e.key){
            //for the final rd, we'll have p2's keypresses correspond to the opposite key (i.e. pressing W = S) 
            case ('w'):
                currentArray.push('S')
                break
            case ('a'):
                currentArray.push('D')
                break
            case ('s'):
                currentArray.push('W')
                break
            case ('d'):
                currentArray.push('A')
                break
        }

    } else {
        return false
    }
    checkArr.addEventListener('click', console.log(currentArray))  
    
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
        
        
        const startGame = () => {
            if (currentRd != 0) { document.addEventListener('keydown', recordSequence)
        }
        startButton.style.display = "none"
        switch (true){
            case (currentRd == "1"):
                timer.innerText = "Player 1 get ready"
                const countdown = setInterval(function(){
                    if(timeleft <= 0 ){
                        timer.innerText = "Player 1 ran out of time..."
                        } else if(arrP1.length == 4){
                            clearInterval(countdown)
                            timer.innerText = ""
                            currentRd = "1b"
                            currentArray = arrP2
                            console.log(currentRd)
                            console.log(currentArray)
                            playerStatus.innerText = "Player 2, follow their lead!"
                            startButton.value = "Proceed"
                            startButton.style.display = "inherit"
                        } else {
                            timer.innerText = timeleft 
                            timeleft -= 1;
                }}, 1040)
                    break
                case (currentRd == "1b"):
                    const countdown2 = setInterval(function(){
                        if(timeleft <= 0 ){
                            timer.innerText = "You cant win if you dont even try..."
                            } else if(arrP2.length == 4){
                                timer.innerText = ""
                                checkForWin()
                                currentArray = arrP2
                                console.log(currentRd)
                                console.log(arrP2)
                                console.log(arrP1)
                                clearInterval(countdown2)
                                // currentRd = "2"
                                // // startButton.value = "Proceed"
                                // // startButton.style.display = "inherit"
                            } else {
                                timer.innerText = timeleft 
                                timeleft -= 1;
                    }}, 1040)
                
                
            }}
            
            
            
            startButton.addEventListener('click', startGame)
            
            
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