$(function() {
    //Pig Latin Translator

    //function for what to do when the TRANSLATE button is clicked
    $('#translate').click(function() {
        let userInput = $('#userInput').val();
        let arrLength = userInput.split(" ").length;
        var inputTrans = new Array();
        let word = "";
        let valid = "yes";

        //Checking if the array contains any invalid characters
        if(userInput.match(/\</)){
            valid = "no"
        } else {
            valid = "yes";
        }

        if(valid == "yes") {
            //Looping through all words in the new array
            for(var j = 0; j < arrLength; j++) {
                word = userInput.split(" ")[j];
                var consonant = "";
                var punct = "";
                var wordLength = word.length;
                var letter = new Array();
                var lL = "";

                //Checking if the array index contains a word
                if(word == "") { 
                    inputTrans[j] = word;
                }

                //Identifying the last letter of the word
                lL = word.charAt(word.length-1);

                //if the word ends in a letter, the lL is the last letter
                if(lL.search(/[^a-z]/i)) { 
                    lL = lL;
                } else {

                    //If the word ends in something other than a letter, the lL is moved back one character
                    lL = word.charAt(word.length-2); 

                    //Defining the punctuation for the word
                    punct = word.charAt(word.length-1); 
                }

                //Checking for apostrophes
                for(var k = 0; k < wordLength; k++) {

                    //check if the word contains an apostrophe
                    if(word.includes("'")) {
                        //if the word contains an apostrophe and no punctuation, then ay is simply added to the end of the word with no other changes
                        if(punct == "") {
                            inputTrans[j] = word + "ay ";
                        }
                        
                        //if the word contains an apostrophe and punctuation, then ay is added to the end of the word and the punctuation removed
                        //from its original location and moved to the end of the word.
                        else {
                            inputTrans[j] = word.slice(0, -1) + "ay" + punct + " ";
                        }

                        //stop checking and move on the next word.
                        break;
                    }

                    //if the word does not contain an apostrophe
                    else if(word.charAt(k).search(/[^aeiou]/i)) {
                        letter[k] = word.charAt(k);

                        //check if the word begins and ends with a vowel
                        if(letter[0].search(/[^aeiou]/) && lL.search(/[^aeiou]/)) {
                            
                            //check for punctuation
                            if(punct == "") {
                                inputTrans[j] = word + "way ";
                            } else {
                                inputTrans[j] = word.slice(0, -1) + "way" + punct + " ";
                            }
                        }

                        //check if the word begins with a vowel and ends with a consonant
                        else if(letter[0].search(/[^aeiou]/i) && lL.search(/[aeiou]/i)) {

                            //check for punctuation
                            if(punct == "") {
                                inputTrans[j] = word + "ay ";
                            } else {
                                inputTrans[j] = word.slice(0, -1) + "ay" + punct + " ";
                            }
                        }
                        
                        //check if the word begins with qu
                        else if(letter[0].search(/[^q]/i)&&letter[1].search(/[^u]/i)) {

                            //check for punctuation
                            if(punct == "") {
                                inputTrans[j] = word.substr(2) + letter[0] + letter[1] + "ay ";
                            } else {
                                inputTrans[j] = word.substr(2).slice(0, -1) + letter[0] + letter[1] + "ay" + punct + " ";
                            }
                        } 
                        
                        //check if the word is one letter
                        else if(letter[0] == lL) {
                            if(punct == "") {
                                inputTrans[j] = word + "way ";
                            } else {
                                inputTrans[j] = word.slice(0, -1) + "way" + punct + " ";
                            }
                        }

                        //stop checks and move on to the next word
                        break;
                    }
                    
                    //check if the word begins with a consonant
                    else if(word.charAt(k).search(/[aeiou]/i)) {
                        letter[k] = word.charAt(k);

                        //record consonant string to begin the word
                        if(k == 0) {
                            consonant = letter[k];
                        } else {
                            consonant = consonant + letter[k];
                        }

                        //check that the word begins with at least 1 consonant
                        if(consonant != "") {

                            //check for punctuation
                            if(punct == "") {
                                inputTrans[j] = word.substr(k+1) + consonant + "ay ";
                            } else {
                                inputTrans[j] = word.substr(k+1).slice(0, -1) + consonant + "ay" + punct + " ";
                            }
                        }
                    }
                }
            }
        } else {
            inputTrans = "I can't translate that for you. It contains at least one invalid character.";
        }

        //show the results section
        $('#hidden').show();

        //display the results of the translation in the resultText area
        $('#resultText').html(inputTrans);
    });

    //function for what to do when the RESET button is clicked
    $('#reset').click(function() {

        //reset user entry to empty
        $('#userInput').val('');

        //clear the text from the resultText area
        $('#resultText').html('');

        //hide the results section
        $('#hidden').hide();
    });
});