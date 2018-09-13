var wordList = ["Harry", "voldermort", "Hermione", "Draco", "Rubeus", "Dobby", "Albus", "Severus", "Weasley", "Luna", "Ginny","Bellatrix"];
var hintImg = ["https://imgix.bustle.com/rehost/2016/9/13/c4e178d0-3a13-4e16-b25f-5356bc679747.jpg?w=970&h=582&fit=crop&crop=faces&auto=format&q=70",
                "https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/screen-shot-2017-03-20-at-12-43-34-1490014393.jpg?crop=0.855xw:1.00xh;0.145xw,0&resize=980:*",
                "https://www.hbook.com/wp-content/uploads/2014/11/book-stack.jpg",
                "http://www.keepcalmstudio.com/_gallery/300/kcs_c17fa62e.png",
                "https://images-na.ssl-images-amazon.com/images/I/81mCwnf%2BTRL._UL1500_.jpg?fifu",
                "http://gabrielutasi.com/comic/copyright/gabrielutasi/2007/08/082907love_socks.gif",
                "https://i.imgflip.com/nf1ku.jpg",
                "https://cdn.shopify.com/s/files/1/0153/9461/products/The-Bravest-Man_grande.png?v=1358887996",
                "https://i.imgflip.com/ps48v.jpg",
                "https://orig00.deviantart.net/e4da/f/2009/233/f/e/fe102e85cef50a35be36247c9bb917e1.jpg",
                "https://i.pinimg.com/564x/9c/54/13/9c5413a5e49c373fa1aabc7f661adca6.jpg",
                "https://i.imgflip.com/27b54b.jpg"]
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
            // show hint image
            $("#hint-img").attr("src",hintImg[i]);
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
                            console.log(uniFoundLetters);
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
                    $("<audio></audio>").attr({
                        'src':'assets/audio/Sad_Male-Mike_Koenig-58602415.mp3',
                        'volume':0.4,
                        'autoplay':'autoplay'
                    });
                    $("#word-guess").empty();
                };
            };
        });
            
    
});