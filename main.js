// setting up some variables to use for our examples. no need to mess with this:
var numbers = [1,12,4,18,9,7,11,3,101,5,6];
var strings = ['this','is','a','collection','of','words'];
var instructors = [
    { firstname : 'JD', teaches : 'JavaScript'},
    { firstname : 'Tim', teaches : 'JavaScript'},
    { firstname : 'Brit', teaches : 'Ruby'},
    { firstname : 'Rhonda', teaches : 'iOS'},
    { firstname : 'Gil', teaches : 'Java'},
    { firstname : 'Ben', teaches : 'UI'},
    { firstname : 'Jess', teaches : 'JavaScript'},
    { firstname : 'Will', teaches : 'JavaScript'},
    { firstname : 'Calvin', teaches : 'JavaScript'},
    { firstname : 'James', teaches : 'Ruby'}
];

///////////////////////////////////////////////////////////////////////////////
//                                                      Explorer Mode                                                                    //
///////////////////////////////////////////////////////////////////////////////

// Write a function called `sum` that takes two parameters and returns the sum
// of those 2 numbers.
// write your code here:

// write your console.log/asserts here:
// i've already written some console.logs and console.asserts for you.
// follow this pattern as you work on the rest of these problems.
console.log('sum of 2 and 3 is ', sum(2,3));
console.assert(sum(2,4) === 6, 'expected sum of 2 and 4 to be 6');
// console.assert(sum(1,0), 1);
// console.assert(sum(-48,5), 43);

function sum (val1, val2) {
  return val1 + val2;
}

// -------------------
// Write a function named `avg` that takes 3 parameters and returns the average
// of those 3 numbers.
// write your code here:
function avg(val1, val2, val3) {
  return (val1 + val2 + val3) / 3;
}

// write your console.log/asserts here:
console.log(avg(8,8,8));
console.assert(avg(8,8,8) === 8, ' should be 8');
console.assert(avg(3,4,5) === 4, ' should be 4');

// -------------------
// Write a function called `getLength` that takes one parameter (a string) and
// returns the number of characters in that string
// write your code here:
function getLength(stringToTest) {
  return stringToTest.length;
}

// write your console.log/asserts here:
console.log(getLength('pie'));
console.assert(getLength('pie')===3, 'should be 3');


// -------------------
// Write a function called `greaterThan` that takes two parameters and
// returns true if the second parameter is greater than the first. Otherwise
// the function should return false.
// write your code here:
function greaterThan(val1, val2) {
  if (val1 > val2) {
    return true;
  } else {
    return false;
  }
}

// write your console.log/asserts here:
console.log(greaterThan(8,9));
console.assert(greaterThan(8,9) === false, 'should be false');

// -------------------
// Write a function called `greet` that takes a single parameter and returns a
// string that is formatted like "Hello, Name!" where *Name* is the parameter
// that was passed in.
// write your code here:
function greet(name) {
  return 'Hello, ' + name + '!';
}

// write your console.log/asserts here:
console.log(greet('cutie'));
console.assert(greet('cutie') === 'Hello, cutie!', 'should be "Hello, cutie!"');


// -------------------
// Write a function called `madlib` that takes 4 or more parameters (words).
// The function should insert the words into a pre-defined sentence. Finally the
// function should return that sentence.
// write your code here:
function madlib (word1, word2, word3, word4) {
  var sentence = 'I went to the ' + word1 + ' to get a ' + word2 + ' and saw a ' + word3 + ' and it was ' + word4 + '.';
  return sentence;
}

// write your console.log/asserts here:
console.log(madlib('bouy', 'tumbleweed', 'turbulence', 'understated'));
console.assert(madlib('bouy', 'tumbleweed', 'turbulence', 'understated') === 'I went to the bouy to get a tumbleweed and saw a turbulence and it was understated.', 'error in madlib');

// -------------------
// Write a function called `max` that returns the larger of two numbers
// write your code here:
function max(val1, val2) {
  if(val1>val2){
    return val1;
  } else {
    return val2;
  }
}

// write your console.log/asserts here:
console.log('max: of 2 & 3 :', max(2,3));
console.assert(max(2,3) === 3, 'error in max');

// -------------------
// Write a function called `maxOfThree` that returns the largest of three
// numbers
// write your code here:
function maxOfThree(val1, val2, val3) {
  return Math.max(val1, val2, val3);
}

// write your console.log/asserts here:
console.log('max of three : ' + maxOfThree(8,6,27));
console.assert(maxOfThree(8,6,27) === 27, ' error in maxOfThree');

// ---------------------
// Write a function called `isVowel` that receives a single character as a
// parameter and returns true if it is a vowel, false otherwise.
// write your code here:
function isVowel(letter) {
  if(typeof letter !== 'string'){
    return 'not a string';
  } else {
    if(letter === 'a' ||
       letter === 'e' ||
       letter === 'i' ||
       letter === 'o' ||
       letter === 'u') {
         //return letter + ' is a vowel';
         return true;
     }
     else
     {
       //return letter + ' is not a vowel';
       return false;
     }
  }
}

// write your console.log/asserts here:
console.log(isVowel(8));
console.log(isVowel('a'));
console.log(isVowel('v'));
console.assert(isVowel('v') === false, ' error in isVowel');

// ---------------------
// Write a function called `translate` that will translate a text into
// "Rovarspraket". That is, double every consonant and place an occurrence of
// "o" in between. For example, translate("this is fun") should return the
// string "tothohisos isos fofunon".
// write your code here:
function isConsonant(letter)
{
  if(letter === 'b' ||
    letter === 'c' ||
    letter === 'd' ||
    letter === 'e' ||
    letter === 'f' ||
    letter === 'g' ||
    letter === 'h' ||
    letter === 'j' ||
    letter === 'k' ||
    letter === 'l' ||
    letter === 'm' ||
    letter === 'n' ||
    letter === 'p' ||
    letter === 'q' ||
    letter === 'r' ||
    letter === 's' ||
    letter === 't' ||
    letter === 'v' ||
    letter === 'w' ||
    letter === 'x' ||
    letter === 'y' ||
    letter === 'z') {
     return true;
   }
   else {
     return false;
   }
}
function translation(originalSentence) {
  var newSentence = '';

  for(var i = 0; i < originalSentence.length; i++)
  {
    var currentLetter = originalSentence.charAt(i);
    if(isConsonant(currentLetter))
    {
      newSentence += currentLetter + 'o' + currentLetter;
    }
    else {
      newSentence += currentLetter;
    }
  }
  return newSentence;
}

// write your console.log/asserts here:
console.log(translation('test this'));
console.assert(translation('test this') === 'toteoesostot tothohisos', ' error in translation' );



console.log("\n:::::::: translation w/ reduce() :::::::::::::::");

var wordToTest = 'unicorn';
// split word to array of characters
// then run reduce to loop through and return a new thing
var answer2 = wordToTest.split('').reduce(function(building, letter, i, arr) {
    if(isConsonant(letter)){
      return building + letter + 'o' + letter;
    } else {
      return building + letter;
    }
}, '');
console.log(answer2 + '\n\n\n');





// ---------------------
// Write a function called `reverse` that computes the reversal of a string.
// For example, reverse("jag testar") should return the string "ratset gaj".
// write your code here:
function reverse(originalString) {
  var newString = '';
  for(var i = originalString.length - 1; i >= 0; i--)
  {
    newString += originalString[i];
  }
  return newString;
}

// write your console.log/asserts here:
console.log(reverse(('reverse this')));
console.log(reverse('hannah mom nun boob'));
console.assert(reverse('reverse this') === 'siht esrever', ' error in reverse' );

// ---------------------
// Write a function called `largest` that takes an array of numbers and returns
// the largest number in the array.
// write your code here:
function largest(numberArray) {
  return Math.max(...numberArray);
}
var testArray = [1,20,10,30,40,20];

// write your console.log/asserts here:
// console.log('the largest number in the `numbers` array is ', largest(numbers));
// console.assert(largest(numbers), 101);
console.log(...testArray);
console.log(largest(testArray) + ' is the largest');
console.assert(largest(testArray) === 40, ' error largest');

// ---------------------
// Write a function called `longest` that takes an array of strings and returns
// the longest string in the array.
// write your code here:

function longest(wordset)
{
  var longestOne = '';

  for(var i = 0; i < wordset.length; i++)
  {
    if (wordset[i].length > longestOne.length)
    {
      longestOne = wordset[i];
    }
  }
  return longestOne;
}

// write your console.log/asserts here:
var testing = ['heck', 'curse', 'durn', 'welp', 'whooooaaaaa'];
console.log(longest(testing) + ' is the longest one');
console.assert(longest(testing) === 'whooooaaaaa', ' error in longest()');

// ---------------------
// Write a function called `getEvens` that takes an array of numbers and returns
// a new array with only the even numbers from the original array
// write your code here:

function getEvens(numbers) {
  var evenNumbers = [];
  for(var i = 0; i < numbers.length; i++)
  {
    if (numbers[i]%2 === 0)
    {
      evenNumbers.push(numbers[i])
    }
  }
  return evenNumbers;
}

// write your console.log/asserts here:
console.log(getEvens([8,4,6,7,8,97,6,5,43]));

// ---------------------
// Write a function called `getOdds` that takes an array of numbers and returns
// a new array with only the odd numbers from the original array
// write your code here:
function getOdds(numbers) {
  var oddNumbers = [];
  for(var i = 0; i < numbers.length; i++)
  {
    if (numbers[i]%2 !== 0)
    {
      oddNumbers.push(numbers[i])
    }
  }
  return oddNumbers;
}

// write your console.log/asserts here:
console.log(getOdds([8,4,6,7,8,97,6,5,43]));


// ---------------------
// Write a function called `containsIs` that takes an array of strings and
// returns a new array with only the strings which contain the substring `is`
// write your code here:
function containsIs(testIs)
{
  var newArray = [];
  for(var i = 0; i < testIs.length; i++)
  {
    if(testIs[i].includes('is'))
    {
      newArray.push(testIs[i]);
    }
  }
  return newArray;
}

// write your console.log/asserts here:
console.log(containsIs(['testing', 'this test string', 'tests', 'testing is cool', 'did you see', 'hi is that pi']));

///////////////////////////////////////////////////////////////////////////////
//                                                      Adventurer Mode                                                              //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `contains` that takes an string AND an array of
// strings and returns a new array with only the strings which contain the
// substring specified string
// write your code here:
function contains(single, strings) {
  var filteredStrings = strings.filter(function(thisString, i, array){
    return ( thisString.includes(single) );
  });
  return filteredStrings;
}

// write your console.log/asserts here:
console.log(contains('is', ['this', 'is', 'a', 'test', 'so', 'wish']));


// ---------------------
// Write a function called `teachersOf` that takes a subject returns only the
// teachers who teach the specified subject.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `objectMatches` that takes 2 strings and an array of
// objects as parameters. The first string is the value to find inside an
// object. The second string string is the key where you want to look for the
// value inside the objects. The array is the array of objects through which to
// search. The function should return a new array of objects that have the
// specified value in the specified key.
// write your code here:

// write your console.log/asserts here:
// console.log('the objects that match javascript teachers are', objectMatches('JavaScript', 'teaches', instructors))

///////////////////////////////////////////////////////////////////////////////
//                                                      Epic Mode                                                                            //
///////////////////////////////////////////////////////////////////////////////

// ---------------------
// Write a function called `getAge` that takes a string in one of these formats:
// '12-25-2016' OR '12/25/2016'. If the input is a valid format, it should
// return the years since the date (aka tell how old someone with that birthday
// would be). If the input is invalid OR if the date is after today's date,
// throw an error in the console that describes what the user did wrong when
// calling the function.
// write your code here:

// write your console.log/asserts here:


// ---------------------
// Write a function called `isValidPassword` that takes a string password. If
// the password meets the following criteria return true. otherwise return
// false.
    // at least 8 characters
    // contains at least one number
    // contains at least one of the following: . , ! $ &
    // contains at least one capital letter and one lowercase letter
// write your code here:

// write your console.log/asserts here:
