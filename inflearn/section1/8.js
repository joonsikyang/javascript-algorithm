// 8. 일곱난쟁이

/**
 * 일곱난쟁이의 키의 합이 100
 * 아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.
 * 입력 설명 : 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난쟁이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.
 * 출력 설명 : 입력된 순서대로 일곱 난쟁이의 키를 출력한다.
 * 입력 예제1 : 20 7 23 19 10 15 25 8 13 >>> 20 7 23 19 10 8 13
 */

function solution(arr) {
    let newArr = [];
    let arrSum = 0;

    // reduce 적용하기
    for(let x of arr) {
        arrSum += x;
    }
    
    // splice 적용 >>> index 변동 확인하기
    for(let i = 0; i < arr.length; i++) {
        for(let j = 1; j < arr.length; j++) {
            if(arr[i] + arr[j] === arrSum - 100) {
                num1 = arr[i];
                num2 = arr[j];
            }
        }
    }

    for (let x of arr) {
        if(x !== num1 && x !== num2) {
            newArr.push(x);
        }
    }

    return newArr;
};

let arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
console.log(solution(arr)); // 20 7 23 19 10 8 13

// 문제 풀이
function solution2(arr) {
    let answer = arr;
    let sum = answer.reduce((a, b) => a + b, 0);
    
    for(let i = 0; i < 8; i++) {
        for(let j = i+1; j < 9; j++){
            if((sum - (answer[i] + answer[j]))==100){
                answer.splice(j, 1);
                answer.splice(i, 1);
            }
        }
    }

    return answer;
}