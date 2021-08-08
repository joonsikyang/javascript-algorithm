// 17. 중복단어제거

/**
 * N개의 문자열이 입력되면 중복된 문자열은 제거하고 출력하는 프로그램을 작성하세요.
 * 출력하는 문자열은 원래의 입력순서를 유지합니다.
 */

function solution(words) {
    let filteredWords = [];
    
    for (let word of words){
        if (!filteredWords.includes(word)) filteredWords.push(word);
    }

    return filteredWords;
}

console.log(solution(["good", "time", "good", "time", "student"]));

// 문제 풀이
function solution3(s) {  
    let answer;
    //console.log(s.indexOf("student"));
    answer = s.filter((v, i) => {
        //console.log(v, i);
        if(s.indexOf(v) === i) return v;
    });
} 