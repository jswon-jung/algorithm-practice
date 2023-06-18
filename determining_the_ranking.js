/* 
문제: 등수 구하기

설명: N(1<=N<=100)명의 학생의 국어점수가 입력되면 각 학생의 등수를 입력된 순서대로 출력하는 프로그램을 작성하세요.

입력: 첫 줄에 N(1<=N<=1000)이 입력되고, 두 번째 줄에 국어점수를 의미하는 N개의 정수가 입력된다. 같은 점수가 입력될 경우 높은 등수로 동일 처리한다.
     즉 가장 높은 점수가 92점인데 92점이 3명 존재하면 1등이 3명이고 그 다음 학생은 4등이 된다.
출력: 입력된 순서대로 등수를 출력한다.

입력예제: 5 / 87 89 92 100 76
출력예제: 4 3 2 1 5
*/

// 풀이 1
function solution(arr) {
  let answer = [],
    check = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] < arr[j]) check++;
    }
    if (arr[i] === Math.min(...arr)) {
      answer.push(arr.length);
      break;
    }
    answer.push(check + 1);
    check = 0;
  }
  return answer;
}

let arr1 = [87, 89, 92, 100, 76];
solution(arr1);

// 풀이 2
function solution(arr) {
  let n = arr.length;
  let answer = Array.from({ length: n }, () => 1);
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      if (arr[j] > arr[i]) answer[i]++;
    }
  }
  return answer;
}

let arr2 = [87, 89, 92, 100, 76];
solution(arr2);
