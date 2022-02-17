function translate(string){
    const word = string.toLowerCase();
    const wordLetters = word.split('');

    //if string starts with vowel 
    let vowelIndex = word.search(/[a,e,i,o,u]/)
    for(let i = 0; i < wordLetters.length; i++){
        if(vowelIndex === 0){
            return word+"way";
    //if string starts with x amount of consonants
        }else if(vowelIndex > 0){
            let removedLetters = wordLetters.slice(0,vowelIndex).join('');
            //".splice" to remove letters before vowel
            wordLetters.splice(0,vowelIndex);    
            //".push" to add value to the end of array
            wordLetters.push(removedLetters);
            //converts the array to a string with no commas
            let newWord = wordLetters.join('');
            return newWord+"ay";
        }
    };

};

//console.log(translate("throw"));

module.exports = translate;