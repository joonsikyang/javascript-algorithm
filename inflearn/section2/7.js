// 7. 봉우리

/**
 * 지도 정보가 N*N 격자판에 주어집니다.
 * 각 격자에는 그 지역의 높이가 쓰여있습니다. 각 격자 판의 숫자 중 자신의 상하좌우 숫자보다 큰 숫자는 봉우리 지역입니다.
 * 봉우리 지역이 몇 개 있는 지 알아내는 프로그램을 작성하세요.
 * 격자의 가장자리는 0으로 초기화 되었다고 가정한다.
 * 만약 N=5 이고, 격자판의 숫자가 다음과 같다면 봉우리의 개수는 10개입니다.
 * 입력 설명 : 첫 줄에 자연수 N이 주어진다.(1<=N<=50) 두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다.
 * 출력 설명 : 봉우리의 개수
 * 입력 예제 : [[5, 3, 7, 2, 3], [3, 7, 1, 6, 1], [7, 2, 5, 3, 4], [4, 3, 6, 4, 1], [8, 7, 3, 5, 2]] >>> 10
 */

function solution(arr){
    let answer = 0;
    let newArr = [[0, 0, 0, 0, 0], ...arr, [0, 0, 0, 0, 0]];
    
    for(let x of newArr) {
        x.push(0);
        x.unshift(0);
    }

    for(let i = 1; i < newArr.length - 1; i++) { // 행
        for(let j = 1; j < newArr.length - 1; j++) { // 열
            if (newArr[i][j] > newArr[i - 1][j] && // 상
                newArr[i][j] > newArr[i + 1][j] && // 하
                newArr[i][j] > newArr[i][j - 1] && // 좌
                newArr[i][j] > newArr[i][j + 1] // 우
            ) {
                answer++;
            }
        }
    }

    return answer;
}

const arr = [[5, 3, 7, 2, 3], [3, 7, 1, 6, 1], [7, 2, 5, 3, 4], [4, 3, 6, 4, 1], [8, 7, 3, 5, 2]];
console.log(solution(arr));

// 문제 풀이 >> 확인 필요
function solution2(arr) {  
    let answer = 0;
    let n = arr.length;
    let dx = [-1, 0, 1, 0];
    let dy = [0, 1, 0, -1];
    
    for(let i = 0; i < n; i++) { // 2차원 배열 >>> 이중 for문 활용
        for(let j = 0; j < n; j++){
            let flag = 1;
            for(let k = 0; k < 4; k++){
                let nx = i + dx[k]; // 가고자 하는 행 좌표
                let ny = j + dy[k]; // 가고자 하는 열 좌표
                if(nx >= 0 && nx < n && ny >= 0 && ny < n && arr[nx][ny] >= arr[i][j]){ // 예외 케이스 처리 확인하기..
                    flag = 0;
                    break; // 봉우리가 아닌 것이 판별 되면 for문 중단
                }
            }
            if(flag) answer++;
        }
    }  
      
    return answer;
}