// declare the image path for each icon so it can easily be called again
const upIcon = 'css/images/upArrow.png'
const dwnIcon = 'css/images/downArrow.png'
const leftIcon = 'css/images/leftArrow.png'
const rightIcon = 'css/images/rightArrow.png'
let currentRd = 0
timer.innerText = ""


arrP1 = ['W', 'A', 'S', 'D']
arrP2 = ['W', 'A', 'S', 'D']


let currentArray = arrP1


// const resetArray = () => {
//     arrP1 = []
//     arrP2 = []
//     console.log('arrays reset')
// }

// let compareArrays = function (arrP1, arrP2) {
//     let i = arrP1.length
   
//     if (i !== arrP2.length) 
//         return false
    
//     while (i--) {
//         if (arrP1[i] !== arrP2[i])
//             return false
//     }
//     return true

//         }



const checkForWin = () => {
    let compareArrays = function () {
        if(arrP1.sort().join(',') === arrP2.sort().join(',')){
            arraysEqual = true
        } else {
            arraysEqual = false
        } 
    }
    let arraysEqual = ""
    compareArrays()
    if( currentRd == 1 && arraysEqual !== true){
        timer.innerText = "Sorry... you lose"
    } else {
        timer.innerText = "Ok, lets make this a little harder" 
    }console.log(arraysEqual)}


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
        if(currentArray.length < 4){
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
    }}else {
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


const startGame = () => {
    currentRd = 1
    if (currentRd != 0) { document.addEventListener('keydown', recordSequence)
    }
    startButton.style.display = "none"
    // setTimeout(resetArray, 3000)
    const countdown = setInterval(function(){
        if(timeleft <= 0 || currentArray.length == 4){
            clearInterval(countdown);
            timer.innerText = "Calculating...";
            setTimeout(checkForWin, 2000)
            console.log("array 2 " + arrP2)
            console.log("array 1 " + arrP1)
            } else {
                timer.innerText = timeleft 
                timeleft -= 1;}
    }, 1040)

   
}


startButton.addEventListener('click', startGame)
