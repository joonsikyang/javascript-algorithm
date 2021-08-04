// 6. 홀수

/**
 * 7개의 자연수가 주어질 때, 이들 중 홀수인 자연수들을 모두 골라 그 합을 구하고, 고른 홀수들 중 최소값을 찾는 프로그램을 작성하세요.
 * 입력 설명 : 첫 번째 줄에 자연수 7개가 주어진다. 주어지는 자연수는 100보다 작다. 홀수가 한 개 이상 반드시 존재한다.
 * 출력 설명 : 첫째 줄에 홀수들의 합을 출력하고, 둘째 줄에 홀수들 중 최소값을 출력한다.
 * 입력 예제 : [12, 77, 38, 41, 53, 92, 85] >>> 256 41
 */

function solution(arr) {
    let answer = [];
    let oddArr = [];

    for(let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 1) oddArr.push(arr[i]);
    }

    let sum = oddArr[0];
    let min = oddArr[0];

    for(let i = 1; i < oddArr.length; i++) {
        sum += oddArr[i];
        if (oddArr[i] < min) min = oddArr[i];
    }

    answer.push(sum);
    answer.push(min);

    return answer;
}

let arr = [12, 77, 38, 41, 53, 92, 85];
console.log(solution(arr)); // [256, 41]

// 문제 풀이
function solution2(arr) {
    let answer=[];
    let sum = 0, min = 1000;

    for(let x of arr){
        if (x % 2 === 1) {
            sum += x;
            if(x < min) min = x;
        }
    }

    answer.push(sum);
    answer.push(min);     
    
    return answer;
}
