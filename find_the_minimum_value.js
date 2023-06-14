/* 
문제: 최솟값 구하기

설명: 7개의 수가 주어지면 그 숫자 중 가장 작은 수를 출력하는 프로그램을 작성하세요

입력: 첫 번째 줄에 7개의 수가 주어진다
출력: 첫 번째 줄에 가장 작은 값을 출력한다

입력에제1: 5 3 7 11 2 15 17
출력예제2: 2
*/

/*
Number.MAX_SAFE_INTEGER
: 안전하게 저장할 수 있는 최대 정수값

Number.MIN_SAFE_INTEGER
: 안전하게 저장할 수 있는 최소 정수값
*/

// 풀이 1
function solution(arr) {
  return Math.min(...arr);
}

let arr1 = [5, 7, 1, 3, 2, 9, 11];
solution(arr1);

// 풀이 2
function solution(arr) {
  let answer,
    min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}
let arr2 = [5, 7, 1, 3, 2, 9, 11];
solution(arr2);

// 풀이 3
function solution(arr) {
  let answer,
    min = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) min = arr[i];
  }
  answer = min;
  return answer;
}

let arr3 = [5, 7, 1, 3, 2, 9, 11];
solution(arr3);
