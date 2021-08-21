// 3. 가위 바위 보

/**
 * 1:가위, 2:바위, 3:보
 * 두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램 을 작성하세요.
 * 입력 설명 :
 * - 첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다. 
 * - 두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
 * - 세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.
 * 출력 설명 : 각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.
 * 입력 예제 : [5, [2, 3, 3, 1, 3], [1, 1, 2, 2, 3]] >>> A B A B D
 */

function solution(data) {
    const playerA = data[0];
    const playerB = data[1];
    const result = []; // 강의 자료와는 다르게 출력 데이터 타입을 배열로 설정함

    for(let i in playerA) { // A, B 비교해야 하는 index는 동일. 기준을 잡으면 됨.
        if(playerA[i] === playerB[i]) {
            result.push("D");
        } else if(
            playerA[i] === 1 && playerB[i] === 3 ||
            playerA[i] === 2 && playerB[i] === 1 ||
            playerA[i] === 3 && playerB[i] === 2
        ) {
            result.push("A");
        } else {
            result.push("B");
        }
    }

    return result;
}

console.log(solution([[2, 3, 3, 1, 3], [1, 1, 2, 2, 3]]));

// 문제 풀이 >> 조금 이상하지 않나..?
function solution2(a, b) {         
    let answer = "";
    
    for(let i = 0; i < a.length; i++){
        if(a[i] === b[i]) answer += "D ";
        else if(a[i] === 1 && b[i] === 3) answer += "A ";
        else if(a[i] === 2 && b[i] === 1) answer += "A ";
        else if(a[i] === 3 && b[i] === 2) answer += "A ";
        else answer += "B ";
    }
    
    return answer;
}