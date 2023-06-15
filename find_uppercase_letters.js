/* 
문제: 대문자 찾기

설명: 한 개의 문자열을 입력받아 해당 문자열에 알파벳 대문자가 몇 개 있는지 알아내는 프로그램을 작성하세요.

입력: 첫 줄에 문자열이 입력된다. 문자열의 길이는 100을 넘지 않습니다.
출력: 첫 줄에 대문자의 개수를 출력한다.

입력예제: KoreaTimeGood
출력예제: 3
*/

/* 
< 아스키코드 >
대문자 : 65 ~ 90
소문자 : 97 ~ 122
*/

// 풀이 1
function solution(s) {
  let small = s.toLowerCase();
  let answer = 0;
  for (let i = 0; i < s.length; i++) {
    if (small[i] !== s[i]) answer++;
  }
  return answer;
}

let str1 = "KoreaTimeGood";
solution(str1);

// 풀이 2
function solution(s) {
  let answer = 0;
  for (let x of s) {
    if (x === x.toUpperCase()) answer++;
  }

  return answer;
}

let str2 = "KoreaTimeGood";
solution(str2);

// 풀이 3
function solution(s) {
  let answer = 0;
  for (let x of s) {
    let num = x.charCodeAt();
    if (num >= 65 && num <= 90) answer++;
  }

  return answer;
}

let str3 = "KoreaTimeGood";
solution(str3);
