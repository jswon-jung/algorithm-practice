/* 
문제: 중복문자제거

설명: 소문자로 된 한개의 문자열이 입력되면 중복된 문자를 제거하고 출력하는 프로그램을 작성하세요.
     제거된 문자열의 각 문자는 원래 문자열의 순서를 유지합니다.

입력: 첫 줄에 문자열이 입력됩니다.
출력: 첫 줄에 중복문자가 제거된 문자열을 출력합니다.

입력예제: ksekkset
출력예제: kset
*/

/* 
< indexOf >
: 해당하는 index가 없다면 -1을 반환한다.
: 가장 빠른 인덱스 값을 반환한다. (중복될 때도)
*/

// 풀이 1
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (!answer.includes(x)) answer += x;
  }
  return answer;
}
solution("ksekkset");

// 풀이 2
function solution(s) {
  let answer = "";
  for (let i = 0; i < s.length; i++) {
    if (s.indexOf(s[i]) === i) answer += s[i];
  }
  return answer;
}
solution("ksekkset");
