// 6. 격자판 최대합

/**
 * N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가 장 큰 합을 출력
 * 입력 설명 : N줄에 걸쳐 각 줄에 N개의 자연수, 각 자연수는 100을 넘지 않는 다.
 * 출력 설명 : 최대합을 출력합니다.
 * 입력 예제 : [[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15], [19, 27, 29, 37, 27], [19, 13, 30, 13, 19]] >>> 155
 */

function solution(arr) {
    let sums = [];
    
    // 각 행의 합
    for (let x of arr) {
        let sum = 0;
        for(let i in x) {
            sum += x[i];
        }
        sums.push(sum);
    }

    // 각 열의 합
    for (let i in arr) {
        let sum = 0;
        for (let x of arr) {
            sum += x[i]
        }
        sums.push(sum);
    }

    // 두 대각선의 합
    let firstDiagnolSum = 0, SecondDiagnolSum = 0;
    for (let i = 0; i < arr.length; i++){
        firstDiagnolSum += arr[i][i];
        SecondDiagnolSum += arr[i][arr.length -1 - i];
    }
    sums.push(firstDiagnolSum, SecondDiagnolSum);

    // sums 요소 중 최대값
    let biggest = sums[0];
    for(let i = 1; i < sums.length; i++) {
        if(sums[i] > biggest) biggest = sums[i];
    }

    return biggest;
}

const input = [[10, 13, 10, 12, 15], [12, 39, 30, 23, 11], [11, 25, 50, 53, 15], [19, 27, 29, 37, 27], [19, 13, 30, 13, 19]];
console.log(solution(input)); // 155

// 문제 풀이
function solution2(arr){  
    let answer = Number.MIN_SAFE_INTEGER;
    let n = arr.length;
    let sum1 = sum2 = 0;
    for(let i = 0; i < n; i++) {
        sum1 = sum2 = 0;
        for(let j = 0; j < n; j++) {
            sum1 += arr[i][j];
            sum2 += arr[j][i];
        }
        answer = Math.max(answer, sum1, sum2);
    }
    sum1 = sum2 = 0;
    for(let i = 0; i < n; i++){
        sum1 += arr[i][i];
        sum2 += arr[i][n-i-1];
    }
    answer = Math.max(answer, sum1, sum2); 
    return answer;
}