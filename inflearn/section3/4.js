// 4. 가장 짧은 문자거리

/**
 * 한 개의 문자열 s와 문자 t가 주어지면 문자열 s의 각 문자가 문자 t와 떨어진 최소거리를 출력하는 프로그램을 작성하세요.
 * 입력 설명 : 첫 번째 줄에 문자열 s와 문자 t가 주어진다. 문자열과 문자는 소문자로만 주어집니다.
 * 출력 설명 : 첫 번째 줄에 각 문자열 s의 각 문자가 문자 t와 떨어진 거리를 순서대로 출력한다.
 * 입력 예제 : "teachermode", "e" >>> 10121012210
 */

function solution(str, char) {
    let answer = [];
    let strArr = str.split("");
    for (let i in strArr) {
        // 문자열과 동일한 경우 >>> 0
        if(strArr[i] === char) answer.push(0);

        // 문자열과 동일하지 않은 경우 >>> index 값의 차이 (최소값)
    }

    return answer.join('')
}

// 주어진 문자의 index를 구해서 a / b / c
// 특정 문자 index 와의 차이값 중 최소값


console.log(solution("teachermode", "e")); 