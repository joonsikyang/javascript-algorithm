// 1. 회문 문자열

/**
 * 회문 문자열 : 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열
 * 문자열이 입력되면 해당 문자열이 회문 문자열이면 "YES", 회문 문자열이 아니면 “NO"를 출력 하는 프로그램을 작성하세요.
 * 단 회문을 검사할 때 대소문자를 구분하지 않습니다.
 */

// 방법 1)
function solution(str){
    let answer = 'YES';
    let upperCaseStr = str.toUpperCase(); // 변수명... 
    for(let i = 0; i < (str.length / 2); i++) {
        if(upperCaseStr[i] !== upperCaseStr[str.length - i - 1]) answer = 'NO';
    }
    return answer;
}

console.log(solution("baaB")); // YES

// 방법 2) reverse method 사용
// if(s.split('').reverse() !== s.split('')) answer = "NO"
// if(s.split('').reverse().join('') !== s) answer = "NO"

// 문제 풀이
function solution(s) {
    let answer = "YES";
    s = s.toLowerCase();
    let len = s.length;
    for(let i = 0; i < Math.floor(len / 2); i++) { // 꼭 내림을 할 필요가 있나? 어짜피 작은데.
        if(s[i]!= s[len - i - 1]) return "NO";
    }
   return answer;
}