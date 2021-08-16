// 2. 유효한 팰린드롬

/**
 * 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
 * 문자열이 입력되면 해당 문자열이 팰린드롬이면 "YES", 아니면 “NO"를 출력하는 프로그램을 작성하세요.
 * 단 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다. 알파벳 이외의 문자들의 무시합니다.
 * 입력 설명 : 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
 * 출력 설명 : 첫 번째 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.
 * 입력 예제 : found7, time: study; Yduts; emit, 7Dnuof >>> "YES"
 */

// reverse 메소드 사용해서 다시 풀어보기
// 정규 표현식 학습
function solution(str) {
    let answer = 'YES';

    // 알파벳이 아닌 것은 제외 >> 정규표현식
    let alphabetsOnly = str.replace(/[^a-zA-Z]/g,""); 

    // 대소문자 통일
    let strToUpperCase = alphabetsOnly.toUpperCase();

    // 대칭되는 문자열 비교
    for(let i = 0; i < strToUpperCase.length / 2; i++) {
        if(strToUpperCase[i] !== strToUpperCase[strToUpperCase.length - i - 1]) answer = 'NO';
    }

    return answer;
}

let str = "found7, time: study; Yduts; emit, 7Dnuof"; // "foundDnuof" 10 , 0-9 
console.log(solution(str));

// 문제 풀이
function solution2(s) {
    let answer = "YES";
    s = s.toLowerCase().replace(/[^a-z]/g, '');
    if(s.split('').reverse().join('') !== s) return "NO";
    return answer;
}