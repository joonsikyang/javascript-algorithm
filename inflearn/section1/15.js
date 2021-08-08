// 15. 가운데 문자 출력(substring, substr)

/**
 * 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요. 단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.
 * 입력 설명 : 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
 * 출력 설명 : 첫 줄에 가운데 문자를 출력합니다.
 * 입력 예제 : study >>> u / good >>> oo
 */

function solution(word) {
    const lengthOfWord = word.length;

    if (lengthOfWord % 2 === 0) {
        const idx = (lengthOfWord / 2) - 1;
        return word.slice(idx, idx + 2);
    } else {
        const idx = Math.floor(lengthOfWord / 2);
        return word.slice(idx, idx + 1);
    }
}

console.log(solution("study"));
console.log(solution("good"));

// 문제 풀이
function solution(s){  
    let answer;
    let mid = Math.floor(s.length / 2)
    if(s.length % 2 === 1) answer = s.substring(mid, mid + 1);
    else answer = s.substring(mid - 1, mid + 1);
    //if(s.length % 2 === 1) answer = s.substr(mid, 1);
    //else answer = s.substr(mid - 1, 2);
    return answer;
}