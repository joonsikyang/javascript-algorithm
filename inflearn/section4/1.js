// 1. 자릿수의 합

/**
 * N개의 자연수가 입력되면 각 자연수의 자릿수의 합을 구하고, 그 합이 최대인 자연수를 출력 하는 프로그램을 작성하세요.
 * 자릿수의 합이 같은 경우 원래 숫자가 큰 숫자를 답으로 합니다.
 * 입력 설명 : 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
 * 출력 설명 : 자릿수의 합이 최대인 자연수를 출력한다.
 * 입력 예제 : [128, 460, 603, 40, 521, 137, 123] >>> 137
 */

function solution(nums) {
    let max = nums[0];

    for(let i = 1; i < nums.length; i++) {
        let strNum = nums[0].toString();
        let sum = 0;
        for(let i in strNum) {
            sum += +strNum[i];
        }      
    }
}
