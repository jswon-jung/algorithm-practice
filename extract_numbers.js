/* 
문제: 숫자만 추출

설명: 문자와 숫자가 섞여있는 문자열이 주어지면 그 중 숫자만 추출하여 그 순서대로 자연수를 만듭니다.
     만약 "tge0a1h205er"에서 숫자만 추출하면 0, 1, 2, 0, 5이고 이것을 자연수를 만들면 1205이 됩니다.
     추출하여 만들어지는 자연수는 100,000,000을 넘지 않습니다.

입력: 첫 줄에 숫자가 섞인 문자열이 주어집니다. 문자열의 길이는 50을 넘지 않습니다.
출력: 첫 줄에 자연수를 출력합니다.

입력예제: g0en2T0s8eSoft
출력예제: 208
*/

// 풀이 1
// includes 활용하여 답 구하기
function solution(str) {
  let num = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let answer = "";
  for (let x of str) {
    if (num.includes(x)) {
      answer += x;
    }
  }
  return Number(answer);
}

let str1 = "g0en2T0s8eSoft";
solution(str1);

// 풀이 2
// isNaN, parseInt를 활용하여 답 구하기
function solution(str) {
  let answer = "";
  for (let x of str) {
    if (!isNaN(x)) answer += x;
  }
  return parseInt(answer);
}

let str2 = "g0en2T0s8eSoft";
solution(str2);

// 풀이 3
// parseInt를 활용하지 않고 답 구하기
function solution(str) {
  let answer = 0;
  for (let x of str) {
    if (!isNaN(x)) answer = answer * 10 + Number(x);
  }
  return answer;
}

let str3 = "g0en2T0s8eSoft";
solution(str3);
