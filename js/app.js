// declare the image path for each icon so it can easily be called again
const upIcon = 'css/images/upArrow.png'
const dwnIcon = 'css/images/downArrow.png'
const leftIcon = 'css/images/leftArrow.png'
const rightIcon = 'css/images/rightArrow.png'
const resetP1 = () =>{
    arrP1 = []
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
    let arrP1 = [] 
    
    const recordSequence = (e) => {
        if(arrP1.length < 4){
    switch(e.key){
        //if the w key is pressed, append to 
        case ('w'):
            arrP1.push('W')
            break
        case ('a'):
            arrP1.push('A')
            break
        case ('s'):
            arrP1.push('S')
            break
        case ('d'):
            arrP1.push('D')
            break
    }}else {
        return false
    }
    checkArr.addEventListener('click', console.log(arrP1))  
}


// the game is simple, allow player 1 to enter a four button sequence using the the WASD keys in any order they want

// Player 1 has 7 seconds to enter their sequence
// add timer to canvas
// Once entered the keypresses should be stored in array
// render key sequence as arrows after complete
// Display Player 1's key sequence on screen for 3 seconds
// Player 2 now has to match Player 1's sequence exactly as entered // try to compare on the fly OR
// store player 2's array and compare to player 1 and check for win or lose conditions using if else statement
//


const startGame = () => {
    startButton.style.display = "none"
    setTimeout(resetP1, 3000)
}



document.addEventListener('keydown', recordSequence)
startButton.addEventListener('click', startGame)

