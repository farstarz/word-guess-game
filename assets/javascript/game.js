var wordList = ["madonna", "harry", "lewis"];
var foundLetters=[];
var uniFoundLetters = [];
// var noOfTry = 10;
var noOfWin = 0;
var currentLetter;


    $(document).ready(function(){
//randomly choose a word
        $("#start").on("click", function(){
            var i;
            i = Math.floor(Math.random()*wordList.length);
            foundLetters.length = 0;
            var noOfTry= 10;
//print _ word.lenght no of times
            console.log("printing _ ");
            for(var j=0;j<wordList[i].length;j++){
                $("#word-guess").append("_ ");
            };
//if noOfTry >0 get input from user, store it in var currentLetter, decrease noOfTry by 1
            document.onkeyup = function(event){
                console.log("foundLetters.length: "+foundLetters.length+", wordList["+i+"].length: "+ wordList[i].length);
                if(noOfTry>0){
                    if(foundLetters.length != wordList[i].length){
                        console.log("run key press event");
                        currentLetter = event.key.toLowerCase();
                        noOfTry--;
                        $("#currentStatus").text("No of tries left: "+noOfTry);
                        $("#word-guess").empty();
//loop through e    ach letter of the word, if currentLetter matches with the letter print the letter and apped it to foundLetters var, if no match print _ instead
                        for(var k=0;k<wordList[i].length;k++){
                            var added=false;
                            console.log("go thorough each letter of the word");
                            if(wordList[i][k]===currentLetter){
                               console.log("append each found letter");
                                foundLetters.push(currentLetter);
                                console.log(foundLetters);
                            };
                            
                            function onlyUnique(value, index,self){
                                return self.indexOf(value) === index;
                            }
                            uniFoundLetters = foundLetters.filter(onlyUnique);
                            for(z=0; z<uniFoundLetters.length;z++){
                                if(uniFoundLetters[z]===wordList[i][k]){
                                    console.log("found letter")
                                    $("#word-guess").append(uniFoundLetters[z]+" ");
                                    added = true;
                                };
                            };
                            if(added === false){
                                $("#word-guess").append("_ ");
                            };
                        };
//if foundLetter    s.length === currentLetter increment noOfWin by 1
                    }else{
                        $("#currentStatus").text("You Win");
                        $("#word-guess").empty();
                    };
                }else{
                    $("#currentStatus").text("You lost");
                    $("#word-guess").empty();
                };
            };
        });
            
    
});