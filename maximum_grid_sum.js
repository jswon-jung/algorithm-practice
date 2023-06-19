/* 
문제: 격자판 최대합

설명: 5*5 격자판에 아래와 같이 숫자가 적혀있습니다.

     10 18 10 12 15
     12 30 30 25 11
     11 25 50 53 15
     19 27 29 37 27
     19 13 30 13 19

     N*N의 격자판이 주어지면 각 행의 합, 각 열의 합, 두 대각선의 합 중 가장 큰 합을 출력합니다.

입력: 첫 줄에 자연수 N이 주어진다. (1<=N<=50)
     두 번째 줄부터 N줄에 걸쳐 각 줄에 N개의 자연수가 주어진다. 각 자연수는 100을 넘지 않는다.
출력: 최대합을 출력합니다.

입력예제: 5
        10 13 10 12 15
        12 39 30 23 11
        11 25 50 53 15
        19 27 29 37 27
        19 13 30 13 19
출력예제: 155        
*/

// 풀이 1
function solution(arr) {
  let answer = 0,
    row = 0,
    column = 0,
    diagonal = 0,
    reverseDiagonal = 0;
  for (let i = 0; i < arr.length; i++) {
    diagonal += arr[i][i];
    reverseDiagonal += arr[i][arr.length - 1 - i];
    for (let j = 0; j < arr[i].length; j++) {
      row += arr[i][j];
      column += arr[j][i];
    }
    if (answer < row) answer = row;
    else if (answer < column) answer = column;
    row = 0;
    column = 0;
  }
  if (answer < diagonal) answer = diagonal;
  else if (answer < reverseDiagonal) answer = reverseDiagonal;
  return answer;
}

let arr1 = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
solution(arr1);

// 풀이 2
function solution(arr) {
  let answer = Number.MIN_SAFE_INTEGER;
  let n = arr.length;
  let sum1 = (sum2 = 0);
  for (let i = 0; i < n; i++) {
    sum1 = sum2 = 0;
    for (let j = 0; j < n; j++) {
      sum1 += arr[i][j];
      sum2 += arr[j][i];
    }
    answer = Math.max(answer, sum1, sum2);
  }
  sum1 = sum2 = 0;
  for (let i = 0; i < n; i++) {
    sum1 += arr[i][i];
    sum2 += arr[i][n - i - 1];
  }
  answer = Math.max(answer, sum1, sum2);
  return answer;
}

let arr2 = [
  [10, 13, 10, 12, 15],
  [12, 39, 30, 23, 11],
  [11, 25, 50, 53, 15],
  [19, 27, 29, 37, 27],
  [19, 13, 30, 13, 19],
];
solution(arr2);
