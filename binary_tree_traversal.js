/*
문제: 이진트리 순회(깊이우선탐색)

설명: 아래 그림과 같은 이진트리를 전위순회와 후위순회를 연습해보세요.
     전위순회 출력 : 1 2 4 5 3 6 7 
     중위순회 출력 : 4 2 5 1 6 3 7 
     후위순회 출력 : 4 5 2 6 7 3 1
*/

// 풀이 1
function solution(n) {
  let answer = "";
  function DFS(v) {
    if (v > 7) return;
    else {
      answer += v + " ";
      DFS(v * 2);
      DFS(v * 2 + 1);
    }
  }
  DFS(n);
  return answer;
}
solution(1);
