// 2. 보이는 학생

/**
 * 선생님이 N(1<=N<=1000)명의 학생을 일렬로 세웠습니다.
 * 일렬로 서 있는 학생의 키가 앞에 서부터 순서대로 주어질 때, 
 * 맨 앞에 서 있는 선생님이 볼 수 있는 학생의 수를 구하는 프로그 램을 작성하세요.
 * (앞에 서 있는 사람들보다 크면 보이고, 작거나 같으면 보이지 않습니다.)
 * 입력 설명 : 첫 줄에 정수 N이 입력된다. 그 다음줄에 N명의 학생의 키가 앞에서부터 순서대로 주어진다.
 * 출력 설명 : 선생님이 볼 수 있는 최대학생수를 출력한다.
 * 입력 예제 : 130 135 148 140 145 150 150 153 >>> 5
 */

// 첫 번째 >>> 문제 잘못 이해..
function solution(heightsOfStudents) {
    let answer = 0;

    for(let i = 1; i < heightsOfStudents.length; i++){
        if(heightsOfStudents[i -1] < heightsOfStudents[i]) answer++;
    }

    return answer;
}

console.log(solution([130, 135, 148, 140, 145, 150, 150, 153]));

// 두 번째
function solution2(heightsOfStudents) {
    let answer = 1; // 첫 번째 학생은 무조건 보임
    let tallest = heightsOfStudents[0];  

    for(let i = 1; i < heightsOfStudents.length; i++) {
        if (heightsOfStudents[i] > tallest) {
            answer++;
            tallest = heightsOfStudents[i];
        }
    }

    return answer;
}

console.log(solution2([130, 135, 148, 140, 145, 150, 150, 153]));
