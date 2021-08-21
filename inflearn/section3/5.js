// 5. 문자열 압축

/**
 * 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우
 * 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을 압축하는 프로그램을 작성하시오. 
 * 단 반복횟수가 1인 경우 생략합니다.
 * 입력 설명 : 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
 * 출력 설명 : 첫 줄에 압축된 문자열을 출력한다.
 * 입력 예제 : KKHSSSSSSSE >>> K2HS7E
 */

// 첫 번째, (지저분)
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

// 두 번째,
function solution2(str) {
    let answer = '';
    let count = 1;
    str = str + " ";

    for(let i = 0; i < str.length -1; i++){
        if(str[i] === str[i + 1]) { // for in 문 사용하면 i + 1 못 읽나..?
            count++;
        } else {
            answer += str[i];
            if(count > 1) answer += count; // 자동 타입 변환
            count = 1;
        }
    }

    return answer;
}

console.log(solution2("KKHSSSSSSSEE"));

// 문제 풀이
function solution3(s) {
    let answer = "";
    let cnt = 1;
    s = s + " "; // 띄어쓰기 문자 두는 이유는..? 마지막 문자까지 확인하기 위해
    for(let i = 0; i < s.length - 1; i++) { // 마지막 띄어쓰기 문자가 있기 때문에 len - 1 까지
        if(s[i] === s[i+1]) cnt++;
        else {
            answer += s[i];
            if (cnt > 1) answer += String(cnt);
            cnt = 1;
        }
    }
    return answer;
}