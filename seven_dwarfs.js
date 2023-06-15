/*
문제: 일곱 난쟁이
설명: 왕비를 피해 일곱 난쟁이들과 함께 평화롭게 생활하고 있던 백설공주에게 위기가 찾아왔다.
     일과를 마치고 돌아온 난쟁이가 일곱 명이 아닌 아홉 명이었던 것이다.
     아홉 명의 난쟁이는 모두 자신이 "백설 공주와 일곱 난쟁이"의 주인공이라고 주장했다. 뛰어난 수학적 직관력을 가지고 있던 백설공주는,
     다행스럽게도 일곱 난쟁이의 키의 합이 100이 됨을 기억해 냈다.
     아홉 난쟁이의 키가 주어졌을 때, 백설공주를 도와 일곱 난쟁이를 찾는 프로그램을 작성하시오.

입력: 아홉 개의 줄에 걸쳐 난쟁이들의 키가 주어진다. 주어지는 키는 100을 넘지 않는 자연수이며, 아홉 난재이의 키는 모두 다르며, 가능한 정답이 여러 가지인 경우에는 아무거나 출력한다.
출력: 입력된 순서대로 일곱 난쟁이의 키를 출력한다.

입력예제1: 20 7 23 19 10 15 25 8 13
출력예제1: 20 7 23 19 10 8 13
*/

/* 
< forEach() >
: for 반복문 대신 사용할 때 사용
function forEach(predicate, thisArg){
    for(let i=0; i<a.length; i++){
        predicate(a[i], i);
    }
}

a = [10, 11, 12, 13, 14, 15];
a.forEach(function(v, i){}, [1, 2])
=> 10 0 [1, 2]
   11 1 [1, 2]
   12 2 [1, 2]
   13 3 [1, 2]
   14 4 [1, 2]
   15 5 [1, 2] 


< map() >
: 배열의 요소를 활용하여 새로운 배열을 만들 때 사용
: 원본 배열과 map을 통한 배열의 길이는 같다 (따라서 조건에 해당하지 않으면 undefined 출력)
function map(predicate, thisArg){
    let list = [];
    for(let i=0; i<a.length; i++){
        list.push(predicate(a[i], i));
    }
    return list;
}

a = [10, 11, 12, 13, 14, 15];
let answer = a.map(function(v, i){
    return v*v;
}, [1, 2])
=> [ 100, 121, 144, 169, 196, 225 ] [ 1, 2 ]


< filter() >
: 콜백함수가 참을 리턴할 때의 요소만 새로운 배열의 요소로 저장한다
: 원본 배열에 있는 요소들 중에서 특정 값들만 필터링 하는 것이다.
: 원하는 값만 뽑아내는 것.
: map와의 차이점은 길이가 다르다는 것이다.
function filter(predicate, thisArg){
    let list = [];
    for(let i=0; i<a.length; i++){
        if(predicate(a[i], i)) list.push(a[i])
    }
    return list;
}

a = [10, 11, 12, 13, 14, 15];
let answer = a.filter(function(v, i){
    return v%2==0;
}, [1, 2])
=> [10, 12, 14] [1,2]


< reduce() >
: 원본 배열의 합을 구할 때 주로 사용한다.

function reduce(predicate, value){
    let result = value;
    for(let i=0; i<a.length; i++){
        result = predicate(result, a[i]);
    }
    return result;
}

a = [10, 11, 12, 13, 14, 15];
let answer = a.reduce(function(acc, v){
    return acc + v;
}, 0);
=> 75


< splice() >
: 배열의 특정 인덱스 값을 제거할 때 사용
: 첫번째 인자 -> 제거하기 원하는 인덱스의 값
: 두번째 인자 -> 첫번째 인자부터 몇번째까지 제거할 것인지
arr = [20, 7, 23, 19, 10, 15, 25, 8, 13];
arr.splice(2, 1)
=> [23]
arr => [ 20, 7, 19, 10, 15, 25, 8, 13 ]
*/

// 풀이 1
function solution(arr) {
  let answer = [];
  let sum = arr.reduce(function (acc, val) {
    return acc + val;
  }, 0);
  let find = sum - 100;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] + arr[j] === find) {
        for (let k = 0; k < arr.length; k++) {
          if (arr[k] !== arr[i] && arr[k] !== arr[j]) {
            answer.push(arr[k]);
          }
        }
        return answer;
      }
    }
  }
}

let arr1 = [20, 7, 23, 19, 10, 15, 25, 8, 13];
solution(arr1);

// 풀이 2
function solution(arr) {
  let answer = arr;
  let sum = answer.reduce((a, b) => a + b, 0);
  let flag = 0;
  for (let i = 0; i < 8; i++) {
    for (let j = i + 1; j < 9; j++) {
      if (sum - (answer[i] + answer[j]) == 100) {
        // j를 먼저 splice하는 이유는 j부터 지워야 이후에 i를 지울 때,
        // 배열의 길이가 줄어들어도 인덱스값이 일치하기 때문이다.
        answer.splice(j, 1);
        answer.splice(i, 1);
        flag = 1;
        break;
      }
    }
    if (flag === 1) break;
  }
  return answer;
}

let arr2 = [20, 7, 23, 19, 10, 15, 25, 8, 13];
solution(arr2);
