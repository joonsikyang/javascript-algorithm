// 13. 대소문자변환
// StuDY >>> sTUdy

function solution(str) {
    let answer = "";
    
    for(let x of str) {
        x === x.toUpperCase() 
            ? answer += x.toLowerCase() 
            : answer += x.toUpperCase()
    }

    return answer;
}

console.log(solution("StuDY"));

// 문제 풀이
function solution(s) {   
    let answer = "";
    for(let x of s){
        if( x === x.toUpperCase()) answer += x.toLowerCase();
        else answer += x.toUpperCase();
    }
    return answer;
}