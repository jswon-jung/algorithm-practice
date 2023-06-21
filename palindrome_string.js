/* 
문제: 회문 문자열

설명: 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 회문 문자열이라고 합니다.
     문자열이 입력되면 해당 문자열이 회문 문자열이면, "YES", 회문 문자열이 아니면 "NO"를 출력하는 프로그램을 작성하세요.
     단, 회문을 검사할 때 대소문자를 구분하지 않습니다.

입력: 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
출력: 첫 번쨰 줄에 회문 문자열인지의 결과를 YES 또는 NO로 출력합니다.

입력예제: gooG
출력예제: YES
*/

// 풀이 1
// 문자열을 역전시켜 원본 문자열과 비교하여 답 구하기
function solution(s) {
  let lower = s.toLowerCase();
  let reverse = "";
  for (let i = s.length - 1; i >= 0; i--) {
    reverse += lower[i];
  }
  if (lower === reverse) return "YES";
  else return "NO";
}

let str1 = "gooG";
solution(str1);

// 풀이 2
// 문자열을 반으로 나누어 앞뒤로 비교하여 답 구하기
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  let len = s.length;
  for (let i = 0; i < Math.floor(len / 2); i++) {
    if (s[i] != s[len - i - 1]) return "NO";
  }
  return answer;
}

let str2 = "gooG";
solution(str2);

// 풀이 3
// split, reverse, join 메서드를 활용하여 답 구하기
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase();
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

let str3 = "gooG";
solution(str3);
