import React from 'react';

// Method - test() , match() , search(),replace(), exec()  
// test() - return true and false
// match() - return array of pattern , index , string , groups.
// Pattern - syntax - /pattern/modifier(s)
// modifier - i (case-sensitive), g(seach whole global data , not stopped if once get ),  m(search in multiple line use (^ and $))
// Bracket- [abc] [^abc] [0-9] (x|y)
// MetaCharacter - /d "find a digit"  , /w "word Character" , /s "white space character"
// Qualifier  - n+ " one n and more " , n*  "zero occurance or more occurance of n "
// {} - length of digit
const LearnRegex = () => {
  // let text = `The rain in 
  //          SPAIN stays mainly 
  //          in the plain ain ain `;
  // let pattern = /^ain$/gm;
  // let result = text.match(pattern);

  // let result = pattern.test(text);
  // -----------2-----------
  //  let text = `Is this
  // all there
  // is`

  // let pattern = /^is/m;
  // let result = text.match(pattern);


  // ------------3-----------
  // let regex = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
  // let text = "ss@gmail.com"
  // let result = regex.test(text)
  //   ^ - It is the start of the string.


  
  // [a-z0-9]+ - Any character between a to z and 0 to 9 at the start of the string.

  // @ - The string should contains ‘@’ character after some alphanumeric characters.

  // [a-z]+ - At least one character between a to z after the ‘@’ character in the string.

  // \. – Email should contain the dot followed by some characters followed by the ‘@’ character

  // [a-z]{2,3}$ - It should contain two or three alphabetical characters at the end of the string. The ‘$’ represents the end of the string.

  // ------------4-----------
  // let regex = new RegExp(/\S+@\S+\.\S+/); 
  // \S+ - It represents any alphanumeric word.
  // \. – It represents the dot character.

  // ------------5-----------
  let regex = new RegExp(/\S+@\S+\.\S+/);
  let text = "ss77*@gmail.com"
  let result = regex.test(text)
  console.log(result, "result");

  // find number of duplicate number

  let str = "7645876906666"
  let patteren = /6/g
  let resu = str.match(patteren).length
  console.log(resu);

  return (
    <div>

    </div>
  );
}

export default LearnRegex;
