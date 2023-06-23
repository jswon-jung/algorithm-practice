/* 
문제: 뒤집은 소수

설명: N개의 자연수가 입력되면 각 자연수를 뒤집은 후 그 뒤집은 수가 소수이면 그 소수를 출력하는 프로그램을 작성하세요. 
     예를 들어 32를 뒤집으면 23이고, 23은 소수이다. 그러면 23을 출력한다. 단 910를 뒤집으면 19로 숫자화 해야 한다. 첫 자리부터의 연속된 0은 무시한다.

입력: 첫 줄에 자연수의 개수 N(3<=N<=100)이 주어지고, 그 다음 줄에 N개의 자연수가 주어진다.
     각 자연수의 크기는 100,000를 넘지 않는다.
출력: 첫 줄에 뒤집은 소수를 출력합니다. 출력순서는 입력된 순서대로 출력합니다.

입력예제: 9
        32 55 62 20 250 370 200 30 100
출력예제: 23 2 73 2 3         
*/

// 풀이 1
function solution(num) {
  let arr = [],
    answer = [];
  let change = "";
  // 숫자 뒤집기
  for (let i = 0; i < num.length; i++) {
    let str = String(num[i]);
    for (let j = str.length - 1; j >= 0; j--) {
      change += str[j];
    }
    let mkNum = Number(change);
    arr.push(mkNum);
    change = "";
  }
  // 소수 만들기
  for (let j = 0; j < arr.length; j++) {
    if (arr[j] === 1) arr[j] = 0;
    for (let i = 2; i < arr[j]; i++) {
      if (arr[j] % i === 0) {
        arr[j] = 0;
      }
    }
  }
  let output = [];
  for (let x of arr) {
    if (x !== 0) output.push(x);
  }
  return output;
}

let arr1 = [32, 55, 62, 20, 250, 370, 200, 30, 100];
solution(arr1);

// 풀이 2
// 소수 판별하기
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// while문을 활용하여 숫자 뒤집기
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = 0;
    while (x) {
      let t = x % 10;
      res = res * 10 + t;
      x = parseInt(x / 10);
    }
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr2 = [32, 55, 62, 20, 250, 370, 200, 30, 100];
solution(arr2);

// 풀이 3
// 소수 판별하기
function isPrime(num) {
  if (num === 1) return false;
  for (let i = 2; i <= parseInt(Math.sqrt(num)); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
// toString(), split(), reverse(), join()을 활용하여 숫자 뒤집기
function solution(arr) {
  let answer = [];
  for (let x of arr) {
    let res = Number(x.toString().split("").reverse().join(""));
    if (isPrime(res)) answer.push(res);
  }
  return answer;
}

let arr3 = [32, 55, 62, 20, 250, 370, 200, 30, 100];
solution(arr3);
