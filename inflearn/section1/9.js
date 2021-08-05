// 9. A를 #으로

/**
 * 대문자로 이루어진 영어 단어가 입력되면 단어에 포함된 ‘A'를 모두 ’#‘으로 바꾸어 출력하는 프로그램
 * 입력 설명 : 첫 번째 줄에 문자열이 입력된다.
 * 출력 설명 : 첫 번째 줄에 바뀐 단어를 출력한다.
 * 입력 예시 : BANANA >>> B#N#N#
 */

function solution(str) {
    return str.replace(/A/g, "#")
}

console.log(solution("BANANA")); // B#N#N#

// 문제 풀이
function solution2 (s) {
    let answer = "";
    
    for(let x of s){
        if( x == 'A') answer += '#';
        else answer += x;
    }

    return answer;
}