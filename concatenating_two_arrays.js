/* 
문제: 두 배열 합치기

설명: 오름차순으로 정렬된 두 배열이 주어지면 두 배열을 오름차순으로 합쳐 출력하는 프로그램을 작성하세요.

입력: 첫 번째 줄에 첫 번째 배열의 크기 N(1<=N<=100)이 주어집니다.
     두 번째 줄에 N개의 배열 원소가 오름차순으로 주어집니다.
     세 번째 줄에 두 번쨰 배열의 크기 M(1<=M<=100)이 주어집니다.
     네 번째 줄에 M개의 배열 원소가 오름차순으로 주어집니다.
     각 리스트의 원소는 int형 변수의 크기를 넘지 않습니다.

출력: 오름차순으로 정렬된 배열을 출력합니다.

입력예제: 3
        1 3 5
        5
        2 3 6 7 9

출력예제: 1 2 3 3 5 6 7 9        
*/

// 풀이 1
function solution(arr1, arr2) {
  let answer = [];
  let str = arr1.join("") + arr2.join("");
  answer = str.split("").sort((a, b) => a - b);
  return answer;
}

let a1 = [1, 3, 5];
let b1 = [2, 3, 6, 7, 9];
solution(a1, b1);

// 풀이 2
function solution(arr1, arr2) {
  let answer = [];
  let n = arr1.length;
  let m = arr2.length;
  let p1 = (p2 = 0);
  while (p1 < n && p2 < m) {
    if (arr1[p1] <= arr2[p2]) answer.push(arr1[p1++]);
    else answer.push(arr2[p2++]);
  }
  while (p1 < n) answer.push(arr1[p1++]);
  while (p2 < m) answer.push(arr2[p2++]);
  return answer;
}

let a2 = [1, 3, 5];
let b2 = [2, 3, 6, 7, 9];
solution(a2, b2);
