// 1부터 N까지의 합

/**
 * 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요.
 * 입력 설명 : 첫 번째 줄에 20이하의 자연수 N이 입력된다.
 * 출력 설명 : 첫 번째 줄에 1부터 N까지의 합을 출력한다.
 * 입력 예제 : 6 >>> 21 / 10 >>> 55
 */

function solution(num) {
    let sum;

    if(num === 1) sum = 1;
    if(num % 2 === 0) sum = (num + 1) * (num / 2);
    if(num % 2 === 1) sum = (num + 1) * (num / 2) + ((num +1) / 2);

    return sum;
}

// 문제 풀이
function solution2(n) {
    let answer = 0;

    for(let i = 1; i <= n; i++) {
        answer = answer + i;
    }
    
    return answer;
}

console.log(solution(6)); // 21
console.log(solution(10)); // 55