// 2. Frequency Counter Pattern

// Anagrams

/**
 * An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed form iceman.
 * Given two strings, write a function to determine if the second string is an anagram of the first.
 * validAnagram('', '') // true
 * validAnagram('aaz', 'zza') // false
 * validAnagram('anagram', 'nagaram') // true
 * validAnagram("rat","car") // false) // false
 * validAnagram('awesome', 'awesom') // false
 * validAnagram('qwerty', 'qeywrt') // true
 * validAnagram('texttwisttime', 'timetwisttext') // true
 */

// my solution
function validAnagram(str, str2){
    let answer = true;
    if (str.length !== str2.length) answer = false;
    let strObj = {};
    let str2Obj = {};
    for (let x of str) strObj[x] = (strObj[x] || 0) + 1;
    for (let x of str2) str2Obj[x] = (str2Obj[x] || 0) + 1;
    for (let key in strObj) {
        if(!(key in str2Obj)) answer = false;
        if(strObj[key] !== str2Obj[key]) answer = false;
    }
    return answer;
}

console.log(validAnagram('anagrams', 'nagaramm'));

// solution
function validAnagram(first, second) {
    if (first.length !== second.length) return false;
    let lookup = {};
    for (let i = 0; i < first.length; i++) {
      let letter = first[i];
      // if letter exists, increment, otherwise set to 1
      lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1;
    }  
    for (let i = 0; i < second.length; i++) {
      let letter = second[i];
      // can't find letter or letter is zero then it's not an anagram
      if (!lookup[letter]) return false;
      else lookup[letter] -= 1; // 의미 없는 행위 아닌가...
    }
    return true;
}