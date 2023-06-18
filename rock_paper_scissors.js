/* 
문제: 가위 바위 보

설명: A, B 두 사람이 가위바위보 게임을 합니다. 총 N번의 게임을 하여 A가 이기면 A를 출력하고,
     B가 이기면 B를 출력합니다. 비길 경우에는 D를 출력합니다.
     가위, 바위, 보의 정보는 1:가위, 2:바위, 3:보로 정하겠습니다.
     예를 들어 N=5이면
     회수: 1 / 2 / 3 / 4 / 5
     A의 정보: 2 / 3 / 3 / 1 / 3
     B의 정보: 1 / 1 / 2 / 2 / 3  
     승자: A / B / A / B / D
     두 사람의 각 회의 가위, 바위, 보 정보가 주어지면 각 회를 누가 이겼는지 출력하는 프로그램을 작성하세요.

입력: 첫 번째 줄에 게임 횟수인 자연수 N(1<=N<=100)이 주어집니다.
     두 번째 줄에는 A가 낸 가위, 바위, 보 정보가 N개 주어집니다.
     세 번째 줄에는 B가 낸 가위, 바위, 보 정보가 N개 주어집니다.
출력: 각 줄에 각 회의 승자를 출력합니다. 비겼을 경우는 D를 출력합니다.

입력예제: 5 / 2 3 3 1 3 / 1 1 2 2 3
출력예제: A B A B D
*/

// 풀이 1
function solution(a, b) {
  let answer = [];
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) {
      // 비기는 경우
      answer.push("D");
    } else if (a[i] === 1 && b[i] === 3) {
      // 가위가 이기는 경우 (A)
      answer.push("A");
    } else if (a[i] === 3 && b[i] === 1) {
      // 가위가 이기는 경우 (B)
      answer.push("B");
    } else if (a[i] < b[i]) {
      // 바위와 보가 이기는 경우 (B)
      answer.push("B");
    } else {
      // 바위와 보가 이기는 경우 (A)
      answer.push("A");
    }
  }
  return answer;
}

let a1 = [2, 3, 3, 1, 3];
let b1 = [1, 1, 2, 2, 3];
solution(a1, b1);

// 풀이 2
function solution(a, b) {
  let answer = "";
  for (let i = 0; i < a.length; i++) {
    if (a[i] === b[i]) answer += "D "; // 비기는 경우
    else if (a[i] === 1 && b[i] === 3) answer += "A "; // A가 가위로 이기는 경우
    else if (a[i] === 2 && b[i] === 1) answer += "A "; // A가 바위로 이기는 경우
    else if (a[i] === 3 && b[i] === 2) answer += "A "; // A가 보로 이기는 경우
    else answer += "B "; // B가 이기는 경우
  }

  return answer;
}

let a2 = [2, 3, 3, 1, 3];
let b2 = [1, 1, 2, 2, 3];
solution(a2, b2);
