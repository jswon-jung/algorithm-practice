/* 
문제: 세 수 중 최솟값
설명: 100 이하의 자연수 A, B, C를 입력받아 세 수 중 가장 작은 값을 출력하는 프로그램을 작성하세요. (정렬을 사용하면 안됩니다)
입력: 첫 번째 줄에 100 이하의 세 자연수가 입력된다.
출력: 첫 번째 줄에 가장 작은 수를 출력한다.
입력 예제: 6 5 11
츌력 예제: 5 
*/

// 풀이 1
function solution(a, b, c) {
  const num = [a, b, c];
  return Math.min(...num);
}
solution(6, 5, 11);

// 풀이 2
function solution(a, b, c) {
  let answer;
  if (a < b) answer = a;
  else answer = b;
  if (c < answer) answer = c;

  return answer;
}
solution(6, 5, 11);

