/* 
문제: 가장 긴 문자열

설명: N개의 문자열이 입력되면 그 중 가장 긴 문자열을 출력하는 프로그램을 작성하세요.

입력: 첫 줄에 자연수 N이 주어진다. (3 <= N <= 30)
     두 번째 줄부터 N개의 문자열이 주어진다. 문자열의 길이는 100을 넘지 않습니다.
     각 문자열의 길이는 서로 다릅니다.
출력: 첫 줄에 가장 긴 문자열을 출력한다.

입력예제: 5, teacher time student beautiful good
출력예제: beautiful
*/

// 풀이 1
function solution(s) {
  let answer = s[0];
  for (let x of s) {
    if (x.length > answer.length) answer = x;
  }
  return answer;
}
let str1 = ["teacher", "time", "student", "beautiful", "good"];
solution(str1);

// 풀이 2
function solution(s) {
  let answer = "",
    max = Number.MIN_SAFE_INTEGER;
  for (let x of s) {
    if (x.length > max) {
      max = x.length;
      answer = x;
    }
  }
  return answer;
}
let str2 = ["teacher", "time", "student", "beautiful", "good"];
solution(str2);
