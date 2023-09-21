/* 
문제: Special Sort(구글 인터뷰)

설명: N개의 정수가 입력되면 당신은 입력된 값을 정렬해야 한다.
     음의 정수는 앞쪽에 양의정수는 뒷쪽에 있어야 한다. 
     또한 양의정수와 음의정수의 순서에는 변함이 없어야 한다.

입력: 첫 번째 줄에 정수 N(5<=N<=100)이 주어지고, 그 다음 줄부터 음수를 포함한 정수가 주어진다. 
     숫자 0은 입력되지 않는다. 

출력: 정렬된 결과를 출력한다.

입력예제: 8
        1 2 3 -3 -2 5 6 -6

출력예제: -3 -2 -6 1 2 3 5 6
*/

// 풀이 1
function solution(arr) {
  let answer = arr;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > 0 && arr[j + 1] < 0) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return answer;
}

let arr1 = [1, 2, 3, -3, -2, 5, 6, -6];
solution(arr1);

// 풀이 2
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    if (x < 0) answer.push(x);
  }
  for (let x of arr) {
    if (x > 0) answer.push(x);
  }
  return answer;
}

let arr2 = [1, 2, 3, -3, -2, 5, 6, -6];
solution(arr2);
