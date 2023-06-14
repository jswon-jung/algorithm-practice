/* 
문제: 1부터 N까지 합 출력하기

설명: 자연수 N이 입력되면 1부터 N까지의 합을 출력하는 프로그램을 작성하세요

입력: 첫 번째 줄에 20 이하의 자연수 N이 입력된다
출력: 첫 번째 줄에 1부터 N까지의 합을 출력한다

입력예제1: 6
출력예제1: 21

입력예제2: 10
출력예제2: 55
*/

//풀이 1
function solution(n) {
  let answer = 0;
  for (let i = 1; i <= n; i++) {
    answer += i;
  }
  return answer;
}
solution(10);
