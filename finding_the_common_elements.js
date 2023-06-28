/* 
문제: 공통원소 구하기

설명: A, B 두 개의 집합이 주어지면 두 집합의 공통 원소를 추출하여 오름차순으로 출력하는 프로그램을 작성하세요.

입력: 첫 번쨰 줄에 집합 A의 크기 N(1<=N<=30,000)이 주어집니다.
     두 번쨰 줄에 N개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
     세 번쨰 줄에 집합 B의 크기 M(1<=M<=30,000)이 주어집니다.
     네 번쨰 줄에 M개의 원소가 주어집니다. 원소가 중복되어 주어지지 않습니다.
     각 집합의 원소는 1,000,000,000 이하의 자연수입니다.

출력: 두집합의 공통원소를 오름차순 정렬하여 출력합니다.

입력예제: 5
        1 3 9 5 2 
        5
        3 2 5 7 8

출력예제: 2 3 5         
*/

// 풀이 1
function solution(arr1, arr2) {
  let answer = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i])) answer.push(arr1[i]);
  }
  console.log(answer);
  return answer.sort((a, b) => a - b);
}

let a1 = [1, 3, 9, 5, 2];
let b1 = [3, 2, 5, 7, 8];
solution(a1, b1);

// 풀이 2
function solution(arr1, arr2) {
  let answer = [];
  arr1.sort((a, b) => a - b);
  arr2.sort((a, b) => a - b);
  let p1 = (p2 = 0);
  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] == arr2[p2]) {
      answer.push(arr1[p1++]);
      p2++;
    } else if (arr1[p1] < arr2[p2]) p1++;
    else p2++;
  }
  return answer;
}

let a2 = [1, 3, 9, 5, 2];
let b2 = [3, 2, 5, 7, 8];
solution(a2, b2);
