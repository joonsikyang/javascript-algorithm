// 7. 아나그램(해쉬)

/**
 * Anagram이란 두 문자열이 알파벳의 나열 순서를 다르지만 그 구성이 일치하면 두 단어는 아 나그램이라고 합니다.
 * 길이가 같은 두 개의 단어가 주어지면 두 단어가 아나그램인지 판별하는 프로그램을 작성하세요.
 * 아나그램 판별시 대소문자가 구분됩니다.

 * 출력 설명 : 두 단어가 아나그램이면 “YES"를 출력하고, 아니면 ”NO"를 출력합니다.
 * 입력 예제 1 : "AbaAeCe", "baeeACA" >>> "YES"
 * 입력 예제 2 : "abaCC", "Caaab" >>> "NO"
 */

// Time Complexity - O(n)
function solution(str1, str2) {
    let answer = "YES"
    let obj1 = {};
    let obj2 = {};
    for(let x of str1) obj1[x] = (obj1[x] || 0) + 1;
    for(let x of str2) obj2[x] = (obj2[x] || 0) + 1;
    for (let key in obj1) {
        if(!(key in obj2) || obj1[key] !== obj2[key]) answer = "NO"; // nested loop 아닌가? (key in obj2)
    }
    return answer;
}

console.log(solution("AbaAeCe", "baeeACA"));
console.log(solution("abaCC", "Caaab"));

// solution
function solution(str1, str2){
    let answer = "YES"; 
    let sH = new Map();
    for(let x of str1){
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
    }
    for(let x of str2){
        if(!sH.has(x) || sH.get(x)==0) return "NO";
        sH.set(x, sH.get(x)-1);
    }
    return answer;
}