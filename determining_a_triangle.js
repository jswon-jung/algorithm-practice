/* 
문제: 삼각형 판별하기

설명: 길이가 서로 다른 A, B, C 세 개의 막대 길이가 주어지면 이 세 막대로 삼각형을 만들 수 있으면 "YES"를 출력하고, 만들 수 없으면 "NO"를 출력한다.

입력: 첫 번째 줄에 100 이하의 서로 다른 A, B, C 막대의 길이가 주어진다.
출력: 첫 번쨰 줄에 "YES", "NO"를 출력한다.

입력예제1: 6 7 11
출력예제1: YES

입력예제2: 13 33 17
출력예제2: NO
*/

// 풀이 1
function solution(a, b, c) {
  const triangle = [a, b, c];
  // 최대값 찾기
  let max = Math.max(...triangle);
  let rest = 0;
  // 최대값을 제외한 나머지 합한 값 구하기
  if (a === max) {
    rest = b + c;
  } else if (b === max) {
    rest = a + c;
  } else {
    rest = a + b;
  }
  // 삼각형 만들기 가능한지 확인하기
  if (max < rest) return "YES";
  else return "NO";
}

solution(6, 7, 11);

// 풀이 2
function solution(a, b, c) {
  let answer = "YES",
    max;
  let tot = a + b + c;
  // 최대값 찾기
  if (a > b) max = a;
  else max = b;
  if (c > max) max = c;
  // 삼각형 만들기 가능한지 확인하기
  if (tot - max <= max) answer = "NO";
  return answer;
}
solution(6, 7, 11);
