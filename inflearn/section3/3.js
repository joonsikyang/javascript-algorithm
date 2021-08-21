// 3. 숫자만 추출

/**
 * 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만 듭니다.
 * 입력 설명 : 첫 줄에 숫자가 썩인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.
 * 출력 설명 : 자연수 출력
 * 입력 예제 : g0en2T0s8eSoft >>> 208
 */

// string to number / number to string
function solution(str) {
    return +str.replace(/[a-zA-Z]/g, "");
}

let str = "g0en2T0s8eSoft";
console.log(typeof solution(str));
console.log(solution(str));

// 문제 풀이 1) parseInt 활용
function solution2(str) {
    let answer = "";
    for(let x of str){
        if(!isNaN(x)) answer += x;
    }
    return parseInt(answer);
}

// 문제 풀이 2) 
function solution3(str) {
    let answer = 0;
    for(let x of str){
        if(!isNaN(x)) answer = answer * 10 + Number(x)
    }
    return answer;
}