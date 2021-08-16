// 5. 문자열 압축

/**
 * 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
 * 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오. 
 * 단 반복횟수가 1인 경우 생략합니다.
 * 입력 설명 : 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
 * 출력 설명 : 첫 줄에 압축된 문자열을 출력한다.
 * 입력 예제 : KKHSSSSSSSE >>> K2HS7E
 */

function solution(str) {
    let answer = str[0];
    let count = 1;

    for(let i = 1; i < str.length; i++) {
        if (str[i - 1] === str[i]) {
            count++;
            answer = count > 2 ? answer.slice(0, -1) + count : answer + count;
        } else {
            answer += str[i];
            count = 1;
        }
    }

    return answer;
}

console.log(solution("KKHSSSSSSSE"));

// 문제 풀이
function solution2(s) {
    let answer = "";
    let cnt = 1;
    s = s + " ";
    for(let i = 0; i < s.length - 1; i++) {
        if(s[i] === s[i+1]) cnt++;
        else {
            answer += s[i];
            if (cnt > 1) answer += String(cnt);
            cnt = 1;
        }
    }
    return answer;
}