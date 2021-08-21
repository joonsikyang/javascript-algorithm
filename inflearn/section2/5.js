// 5. 등수구하기

/**
 * N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.
 * 입력 설명 : 
 * - 첫 줄에 N(3<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력 된다.
 * - 같은 점수가 입력될 경우 높은 등수로 동일 처리한다.
 * - 즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등
 * 출력 설명 : 입력된 순서대로 등수를 출력한다.
 * 입력 예제 : [87, 89, 92, 100, 76] >>> [4, 3, 2, 1, 5]
 */

// 첫 번째,
function solution(arr) {
    let answer = []
    for(let i in arr) {
        let bigger = 0;
        for(let j in arr) {
            if (arr[i] < arr[j]) bigger++;
        }
        answer.push(bigger + 1); // 본인보다 점수가 높은 사람이 한 명이면 본인은 2등
    }
    return answer;
}

console.log(solution([89, 89, 92, 100, 76]));

// 문제 풀이
function solution2(arr) {  
    let n = arr.length;
    let answer = Array.from({length: n}, () => 1); // 1차원 배열 1로 초기화. Array.from 학습 필요
    for(let i = 0; i < n; i++){
        for(let j = 0; j < n; j++){
            if(arr[j] > arr[i]) answer[i]++;
        }
    }             
    return answer;
}