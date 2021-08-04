// 2. 삼각형 판별하기

/**
 * 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있 으면 “YES"를 출력하고, 만들 수 없으면 ”NO"를 출력한다.
 * 입력 설명 : 첫 번째 줄에 100이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
 * 출력 설명 : 첫 번째 줄에 “YES", "NO"를 출력한다.
 * 입력 예제 : 6 7 11 >>> YES / 13 33 17 >>> NO
 */

// 가장 긴 변의 길이가 나머지 두 변의 길이의 합보다 크거나 같으면 NO

function solution(a, b, c) {
    let answer = 'YES';
    let sum = a + b + c;
    let max;

    if(a < b) max = b;
    else max = a;
    if(max < c) max = c;

    if(sum - max <= max) answer = 'NO';

    return answer;
}

// 문제 풀이
function solution2(a, b, c) {
    let answer = "YES", max;
    let tot = a + b + c;
    if(a > b) max = a;
    else max = b;
    if(c > max) max = c;
    if(tot - max <= max) answer = "NO"; 
    return answer;
}

console.log(solution(6, 7, 11)); // YES
console.log(solution(13, 33, 17)); // NO