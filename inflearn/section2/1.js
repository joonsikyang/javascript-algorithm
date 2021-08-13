// 1. 큰 수 출력하기

/**
 * N(1<=N<=100)개의 정수를 입력받아, 자신의 바로 앞 수보다 큰 수만 출력하는 프로그램을 작 성하세요.(첫 번째 수는 무조건 출력한다)
 * 입력 설명 : 첫 줄에 자연수 N이 주어지고, 그 다음 줄에 N개의 정수가 입력된다.
 * 출력 설명 : 자신의 바로 앞 수보다 큰 수만 한 줄로 출력한다.
 * 입력 예제 : 6, [7 3 9 5 6 12] >>> [7, 9, 6, 12]
 */

// 1차
// 첫 줄에 자연수 N 주어지는 이유..? >>> 필요 없다고 함..(C, Java 같은 경우는 필요함)
function solution(num, numbers) {
    let answer = [];
    let previousNum = numbers[numbers.indexOf(num) - 1];

    for(let x of numbers) {
        if (x > previousNum) answer.push(x);
    }

    return answer;
}

// 2차
function solution2(numbers) {
    let answer = []; // return 하는 데이터 타입에 따라 초기값 할당
    answer.push(numbers[0]); // 첫 번째 요소는 무조건 포함
    
    for (let i = 1; i < numbers.length; i++) {
        if(numbers[i] > numbers[i -1]) answer.push(numbers[i]);
    }

    return answer;
}

console.log(solution2([7, 3, 9, 5, 6, 12]));