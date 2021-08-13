// 4. 점수계산

/**
 * OX 문제는 맞거나 틀린 두 경우의 답을 가지는 문제
 * 1번 문제가 맞는 경우에는 1점으로 계산
 * 앞의 문제에 대해서는 답을 틀리다가 답이 맞는 처음 문제는 1점으로 계산
 * 연속으로 문제의 답이 맞는 경우에서 두 번째 문제는 2점, 세 번째 문제는 3점, ..., K번째 문제는 K점으로 계산
 * 틀린 문제는 0점
 * 시험문제의 채점 결과가 주어졌을 때, 총 점수를 계산하는 프로그램을 작성하시오.
 * 입력 설명
 * - 첫째 줄에 문제의 개수 N (1 ≤ N ≤ 100)이 주어진다.
 * - 둘째 줄에는 N개 문제의 채점 결과를 나 타내는 0 혹은 1이 빈 칸을 사이에 두고 주어진다. 
 * - 0은 문제의 답이 틀린 경우이고, 1은 문제의 답이 맞는 경우
 * 출력 설명 : 첫째 줄에 입력에서 주어진 채점 결과에 대하여 가산점을 고려한 총 점수를 출력한다.
 * 입력 예제 : 10, [1, 0, 1, 1, 1, 0, 0, 1, 1, 0] >>> 10
 */

// 1차 >> 보완 필요
function solution(results) {
    let total = 0;
    let inArow = 0;

    for (let i in results) {
        if (results[i] === 1) {
            if (results[i - 1] === 1) {
                inArow++;
                total += inArow + 1;
            } else {
                inArow = 0;
                total += 1;
            }
        }
    }

    return total;
}

// 2차
function solution2(results) {
    let totalScore = 0;
    let inArow = 0;

    for (let x of results) {
        if (x === 1) { // 정답인 경우
            inArow++;
            totalScore += inArow;
        } else { // 정답이 아닌 경우
            inArow = 0;
        }
    }

    return totalScore;
}

console.log(solution2([1, 0, 1, 1, 1, 0, 0, 1, 1, 0]));

// 문제 풀이
function solution3(arr) {         
    let answer = 0, cnt = 0;
    for (let x of arr) {
        if(x === 1) {
            cnt++;
            answer += cnt;
        }

        else cnt = 0;
    }
       
    return answer;
}