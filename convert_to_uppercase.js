/*
문제: 대문자로 통일

설명: 대문자와 소문자가 같이 존재하는 문자열을 입력받아 대문자로 모두 통일하여 문자열을 출력하는 프로그램을 작성하세요.

입력: 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
출력: 첫 줄에 대문자로 통일된 문자열이 출력된다.

입력예제: ItisTimeToStudy
출력예제: ITISTIMETOSTUDY
*/

// 풀이 1
function solution(s) {
  return s.toUpperCase();
}

let str1 = "ItisTimeToStudy";
solution(str1);

// 풀이 2
function solution(s) {
  let answer = "";
  for (let x of s) {
    // 아스키코드로 바꾸기
    let num = x.charCodeAt();
    if (num >= 97 && num <= 122) answer += String.fromCharCode(num - 32);
    else answer += x;
  }

  return answer;
}

let str2 = "ItisTimeToStudy";
solution(str2);

// 풀이 3
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x === x.toLowerCase()) answer += x.toUpperCase();
    else answer += x;
  }

  return answer;
}

let str3 = "ItisTimeToStudy";
solution(str3);
