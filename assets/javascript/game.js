// Declaring varialbes 
var computerChoices = ["a" , "b" , "c" , "d" , "e" , "f" , "g" , "h" , "i" , "j" , "k" ,"l" , "m", "n", "o" , "p" , "q" , "r" , "s" , "t" , "u" , "v" , "w" , "x" , "y" , "z"]
var wins = 0;
var losses = 0;
var guessesLeft = 10;
var guessedLetters = []
var compGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

//Creating the reset function to begin the game
function reset() {
document.getElementById("wins").innerHTML= "wins: " + wins;
document.getElementById("losses").innerHTML= "losses: " + losses;
document.getElementById("guessesLeft").innerHTML= "Guesses Left: " + guessesLeft;
document.getElementById("guessedLetters").innerHTML= "Guessed letters: " + guessedLetters;
}

// Calling reset function
reset();

console.log(compGuess);

// Creating the User guess with onKeyUp function 
document.onkeyup = function(event){

    var userGuess = event.key;

    console.log(userGuess);

    console.log(compGuess);

    // Creating if statement to only accepet alpha keys

       

        // If the user guesses the correct letter, they win, and game restarts 
        if (userGuess === compGuess){
        alert("You win! I mean that was what the computer was guessing. You, sir, are a savant.");
        guessesLeft = 10;
        wins++;
        document.getElementById("guessesLeft").innerHTML= "Guesses Left: " + guessesLeft;
        guessedLetters= [];
        document.getElementById("wins").innerHTML= "Wins:" + wins;
        compGuess= computerChoices[Math.floor(Math.random() * computerChoices.length)];
        } 
        
        // If user does not guess the correct letter
        else{

            if(guessedLetters.indexOf(userGuess) >= 0){
                alert("Breh, you already pressed that one");
            } 
            else {
            //take userGuess and add to array of guessedLetters and udpate guessesLeft to one less
            guessesLeft--;
            guessedLetters.push(userGuess);
            document.getElementById("guessesLeft").innerHTML= "Guesses Left: " + guessesLeft;
            document.getElementById("guessedLetters").innnerHTML= "Guessed letters: " + guessedLetters + " , ";
            }}

    
        

    // Setting condition if player runs out of guesses
    if (guessesLeft == 0){
        guessesLeft = 10;
        losses++;
        guessedLetters= [];
        compGuess= computerChoices[Math.floor(Math.random() * computerChoices.length)];
        document.getElementById("losses").innerHTML= "losses: " + losses;
        document.getElementById("guessesLeft").innerHTML= "Guesses Left: " + guessesLeft;
        alert("You should try to get gud *shrugs* I'm saying you lost, man.");
    } 

    lettersGuessed();

}




function lettersGuessed(){
    document.getElementById("guessedLetters").innerHTML= "Guessed letters: " + guessedLetters
}

