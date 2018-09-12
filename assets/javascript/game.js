var wordList = ["madonna", "harry", "lewis"];
var foundLetters=[];
var noOfTry = 10;
var noOfWin = 0;
var currentLetter;

    $(document).ready(function(){
//randomly choose a word
        $("#start").on("click", function(){
            var i;
            i = Math.floor(Math.random()*wordList.length);

//print _ word.lenght no of times
            console.log("printing _ ");
            for(var j=0;j<wordList[i].length;j++){
                $("#word-guess").append("_ ");
            };
//if noOfTry >0 get input from user, store it in var currentLetter, decrease noOfTry by 1
            if(noOfTry>0){
                document.onkeyup = function(event){
                    console.log("run key press event");
                    currentLetter = event.key.toLowerCase();
                    noOfTry--;
                    $("#word-guess").empty();
//loop through each letter of the word, if currentLetter matches with the letter print the letter and apped it to foundLetters var, if no match print _ instead
                    for(j=0;j<wordList[i].length;j++){
                        var added=false;
                        console.log("go thorough each letter of the word");
                        if(wordList[i][j]===currentLetter){
                           console.log("append each found letter");
                            $(foundLetters).append(currentLetter);
                        };
                        for(z=0; z<foundLetters.length;z++){
                            if(foundLetters[z]===wordList[i][j]){
                                console.log("found letter")
                                $("#word-guess").append(foundLetters[z]+" ");
                                added = true;
                            };
                        };
                        if(added === false){
                            $("#word-guess").append("_ ");
                        };
                    };
//if foundLetters.length === currentLetter increment noOfWin by 1

                };
            };
        });
            
    
});