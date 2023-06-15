/*
문졔: 가운데 문자 출력

설명: 소문자로 된 단어(문자열)가 입력되면 그 단어의 가운데 문자를 출력하는 프로그램을 작성하세요.
     단 단어의 길이가 짝수일 경우 가운데 2개의 문자를 출력합니다.

입력: 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
출력: 첫 줄에 가운데 문자를 출력합니다.

입력에제1: study
출력예제1: u

입력예제2: good
출력예제2: oo
*/

/* 
< substring >
: 문자열에서 원하는 character 뽑을 때 사용
: 첫번째 인자 = 시작 인덱스부터
: 두번째 인자 = 끝 인덱스 앞까지

s = "study"
s.substring(2, 3)
=> u


< substr >
: 문자열에서 원하는 character 뽑을 때 사용
: 첫번째 인자 = 시작 인덱스부터
: 두번째 인자 = 인자 값만큼 뽑기 (개수)

s = "length"
s.substr(2, 4)
=> ngth

*/

// 풀이 1
function solution(s) {
  let answer = "";
  if (s.length % 2 === 1) {
    return (answer += s[Math.floor(s.length / 2)]);
  } else {
    answer += s[s.length / 2 - 1];
    answer += s[s.length / 2];
    return answer;
  }
}
solution("study");

// 풀이 2
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substring(mid, mid + 1);
  else answer = s.substring(mid - 1, mid + 1);
  return answer;
}
solution("study");

// 풀이 3
function solution(s) {
  let answer;
  let mid = Math.floor(s.length / 2);
  if (s.length % 2 === 1) answer = s.substr(mid, 1);
  else answer = s.substr(mid - 1, 2);
  return answer;
}
solution("study");
