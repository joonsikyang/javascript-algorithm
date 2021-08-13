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

function solution(grades) {
    let answer = [];

    // 큰 순서대로 정렬
    let gradesOrdered = [grades[0]];
    
    for (let i = 1; i < grades.length; i++) {
        for (let j = 0; j < gradesOrdered.length; j++) {
            if(grades[i] < gradesOrdered[gradesOrdered.length - 1]) {
                gradesOrdered.push(grades[i])
            } else if (grades[i] > gradesOrdered[j]) {
                gradesOrdered.splice(j, 0, grades[i]);
                break; // why necessary?
            }
        }
    }

    console.log("gradesOrdered >>> ", gradesOrdered);

    // 기존 배열과 비교하여 index로 요소를 지정 >>> 동일 점수...
    for(let x of grades) {
        for(let i in gradesOrdered) {
            if (x === gradesOrdered[i]) {
                answer.push(+i + 1);
            }
        }
    }

    return answer;
}

console.log(solution([87, 89, 92, 100, 76]));