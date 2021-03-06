// 6. 학급 회장(해쉬)

/**
 * 학급 회장을 뽑는데 후보로 기호 A, B, C, D, E 후보가 등록을 했습니다.
 * 투표용지에는 반 학생들이 자기가 선택한 후보의 기호(알파벳)가 쓰여져 있으며 선생님은 그 기호를 발표하고 있습니다.
 * 선생님의 발표가 끝난 후 어떤 기호의 후보가 학급 회장이 되었는지 출력하는 프로그램을 작성하세요.
 * 반드시 한 명의 학급회장이 선출되도록 투표결과가 나왔다고 가정합니다.
 * 
 * 입력 설명 : 
 * - 첫 줄에는 반 학생수 N(5<=N<=50)이 주어집니다. 
 * - 두 번째 줄에 N개의 투표용지에 쓰여져 있던 각 후보의 기호가 선생님이 발표한 순서대로 문자열로 입력됩니다.
 * 출력 설명 : 학급 회장으로 선택된 기호를 출력합니다.
 * 입력 예제 : BACBACCACCBDEDE >>> C
 */

// 객체 활용
function solution(votes){
    let result = {};
    for(let x of votes){
        result[x] = (result[x] || 0) + 1;
    }    
    let theMost = result[votes[0]];
    for(let key in result){
        if(result[key] > theMost) theMost = key;
    }
    return theMost;
}

console.log(solution("BACBACCACCBDEDE"));

// 문제 풀이 >> Hash Map 활용
function solution2(s){  
    let answer;
    let sH = new Map(); // key-value
    for(let x of s) {
        if(sH.has(x)) sH.set(x, sH.get(x)+1);
        else sH.set(x, 1);
        // sH.set(x, sH.has(x) ? sH.get(x)+1 : 1); 가독성 떨어지나..?
    }

    console.log(sH); // Map(5) { 'B' => 3, 'A' => 3, 'C' => 5, 'D' => 2, 'E' => 2 }

    let max = Number.MIN_SAFE_INTEGER; // 작은 숫자로 초기값 설정. (IE 지원 X)
    for(let [key, val] of sH){
        if(val > max){
            max = val;
            answer = key;
        }
    }
    return answer;
}

console.log(solution2("BACBACCACCBDEDE"));

b