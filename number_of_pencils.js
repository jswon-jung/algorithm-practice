/* 
문제: 연필 개수

설명: 연필 1 다스는 12자루입니다. 학생 1인당 연필을 1자루씩 나누어 준다고 할 때 N명이 학생수를 입력하면 필요한 연필의 다스 수를 계산하는 프로그램을 작성하세요.

입력: 첫 번째 줄에 1000 이하의 자연수 N이 입력된다.
출력: 첫 번째 줄에 필요한 다스 수를 출력합니다.

입력예제1: 25
출력예제1: 3

입력예제2: 178
출력예제2: 15
*/

/*
Math.ceil(숫자)
: 소수값이 존재할 때 값을 올리는 역할

Math.floor(숫자)
: 소수값이 존재할 때, 소수값을 버리는 역할

Math.round(숫자)
: 소수값에 따라 올리거나 버리는 역할 (반올림 함수)
*/

// 풀이 1
function solution(n) {
  let answer;
  if (n % 12 !== 0) {
    answer = Math.floor(n / 12 + 1);
  } else {
    answer = n / 12;
  }
  return answer;
}
solution(178);

// 풀이 2
function solution(n) {
  let answer;
  answer = Math.ceil(n / 12);
  return answer;
}
solution(178);
