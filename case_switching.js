/* 
문제: 대소문자 변환

설명: 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자는 소문자로 소문자는 대문자로 변환하여 출력하는 프로그램을 작성하세요.

입력: 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
출력: 첫 줄에 대문자는 소문자로, 소문자는 대문자로 변환된 문자열을 출력합니다.

입력예제: StuDY
출력예제: sTUdy
*/

// 풀이 1
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toUpperCase()) answer += x.toLowerCase();
    else answer += x.toUpperCase();
  }
  return answer;
}

solution("StuDY");
