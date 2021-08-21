// 4. 가장 짧은 문자거리

/**
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
 * 입력 설명 : 첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
 * 출력 설명 : 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
 * 입력 예제 : "teachermode", "e" >>> 10121012210
 */

// Math.abs() 활용
function solution(str, char) {
    let answer = [];

    // 해당 문자의 index로 구성된 배열 생성
    let idxArr = [];
    for (let i in str) {
        if(str[i] === char) idxArr.push(+i);
    }

    // 이중 for 문 >>> 시간 복잡도(O(n^2))
    for (let i in str){
        let smallest = Math.abs(i - idxArr[0]);
        for (let j = 1; j < idxArr.length; j++) {
            let val = Math.abs(i - idxArr[j]);
            if(val < smallest) smallest = val;
        }
        answer.push(smallest);
    }

    return answer;

}

console.log(solution("teachermode", "e"));

// 문제 풀이 >>> 시간 복잡도 O(n)
// 이런 방법을 어떻게 생각하지...
function solution2(s, t){
    let answer = [];
    
    // 왼쪽에서 오른쪽으로
    let p = 1000; // 임의의 변수, 큰 값으로 지정 >> 나중에는 결국 최소값을 구하면 됨
    for(let x of s){
        if(x === t){
            p = 0;
            answer.push(p);
        }
        else{
            p++;
            answer.push(p);
        }
    }

    // 오른쪽에서 왼쪽으로
    p = 1000;
    for(let i = s.length - 1; i >= 0; i--){
        if(s[i] === t) p = 0;
        else {
            p++;
            answer[i] = Math.min(answer[i], p); // 배열을 두개 만들어서 비교하는 것이 아니라 최소값으로 값을 바로 교체
        }
    }

    return answer;
}