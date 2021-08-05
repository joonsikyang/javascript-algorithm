// 11. 대문자 찾기

/**
 * 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램
 * 입력 설명 : 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
 * 출력 설명 : 첫 줄에 대문자의 개수를 출력한다.
 * 입력 예제 : KoreaTimeGood >>> 3
 */

function solution (str) {
    return str.replace(/[^A-Z]/g, "").length;
}

console.log(solution("KoreaTimeGood")); // 3

// 문제풀이
function solution(s) {         
    let answer = 0;
    for(let x of s) {
        //let num=x.charCodeAt();
        //if(num>=65 && num<=90) answer++;
        if(x === x.toUpperCase()) answer++; // "A" === "a" >>> false
    }

    return answer;
}