/* 
문제: A를 #으로

설명: 대문자로 이루어진 영어단어가 입력되면 단어에 포함된 'A'를 모두 '#'으로 바꾸어 출력하는 프로그램을 작성하세요.

입력: 첫 번째 줄에 문자열이 입력된다.
출력: 첫 번째 줄에 바뀐 단어를 출력한다.

입력예제: BANANA
출력예제: B#N#N#
*/

// 풀이 1
function solution(s) {
  let splitStr = s.split("");
  for (let i = 0; i < splitStr.length; i++) {
    if (splitStr[i] === "A") splitStr[i] = "#";
  }
  return splitStr.join("");
}

let str1 = "BANANA";
solution(str1);

// 풀이 2
function solution(s) {
  let answer = "";
  for (let x of s) {
    if (x == "A") answer += "#";
    else answer += x;
  }
  return answer;
}

let str2 = "BANANA";
solution(str2);

// 풀이 3
function solution(s) {
  let answer = s;
  // 정규식을 통해 'A'를 '#'으로 변환하기
  // 정규식 뒤에 g를 붙이면 전역으로 적용된다
  answer = answer.replace(/A/g, "#");
  return answer;
}

let str3 = "BANANA";
solution(str3);
