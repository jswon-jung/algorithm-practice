/* 
문제: 유효한 팰린드롬

설명: 앞에서 읽을 때나 뒤에서 읽을 때나 같은 문자열을 팰린드롬이라고 합니다.
     문자열이 입력되면 핻ㅇ 문자열이 팰린드롬이면 "YES", 아니면 "NO"를 출력하는 프로그램을 작성하세요.
     단, 회문을 검사할 때 알파벳만 가지고 회문을 검사하며, 대소문자를 구분하지 않습니다.
     알파벳 이외의 문자들은 무시합니다.

입력: 첫 줄에 정수 길이 100을 넘지 않는 공백이 없는 문자열이 주어집니다.
출력: 첫 번쨰 줄에 팰린드롬인지의 결과를 YES 또는 NO로 출력합니다.

입력예제: found7, time: study; Yduts; emit, 7Dnouf
출력예제: YES
*/

// 풀이 1
function solution(s) {
  // 문자열 소문자로 변환 및 배열로 쪼개기
  let lower = s.toLowerCase().split(" ");
  let str = "",
    arr = [];
  for (let i = 0; i < lower.length; i++) {
    for (let j = 0; j < lower[i].length; j++) {
      // 아스코드로 변환하여 알파벳인지 검증하기
      let ascii = lower[i][j].charCodeAt();
      if (ascii >= 97 && ascii <= 122) {
        str += lower[i][j];
      }
    }
    arr.push(str);
    str = "";
  }
  let join = "",
    answer = "YES";
  for (let x of arr) join += x;
  // 문자열의 앞과 뒤를 비교하여 답 구하기
  for (let i = 0; i < Math.floor(join.length / 2); i++) {
    if (join[i] !== join[join.length - 1 - i]) return "NO";
  }
  return "YES";
}

let str1 = "found7, time: study; Yduts; emit, 7Dnuof";
solution(str1);

// 풀이 2
// replace, 정규식 활용하여 답 구하기
function solution(s) {
  let answer = "YES";
  s = s.toLowerCase().replace(/[^a-z]/g, "");
  if (s.split("").reverse().join("") !== s) return "NO";
  return answer;
}

let str2 = "found7, time: study; Yduts; emit, 7Dnuof";
solution(str2);
