/* 
문제: 문자열 압축

설명: 알파벳 대문자로 이루어진 문자열을 입력받아 같은 문자가 연속으로 반복되는 경우 반복되는 문자 바로 오른쪽에 반복 횟수를 표기하는 방법으로 문자열을
     압축하는 프로그램을 작성하시오. 단, 반복횟수가 1인 경우 생략합니다.

입력: 첫 줄에 문자열이 주어진다. 문자열의 길이는 100을 넘지 않는다.
출력: 첫 줄에 압축된 문자열을 출력한다.

입력예제: KKHSSSSSSSE
출력예제: K2HS7E
*/

// 풀이 1
function solution(s) {
  let answer = "",
    num = 1;
  answer += s[0];
  for (let i = 1; i < s.length; i++) {
    if (answer[answer.length - 1] === s[i]) {
      num++;
      if (s[i] !== s[i + 1] || (i === s.length - 1 && num !== 1)) {
        answer += num;
      }
    } else {
      num = 0;
      answer += s[i];
      num++;
    }
  }
  return answer;
}

let str1 = "KKHSSSSSSSE";
solution(str1);

// 풀이 2
function solution(s) {
  let answer = "";
  let cnt = 1;
  // 다음 인덱스 값과 비교하기 위해 추가 공백을 문자열에 붙이기
  s = s + " ";
  for (let i = 0; i < s.length - 1; i++) {
    if (s[i] === s[i + 1]) cnt++;
    else {
      answer += s[i];
      if (cnt > 1) answer += String(cnt);
      cnt = 1;
    }
  }
  return answer;
}

let str2 = "KKHSSSSSSSE";
solution(str2);
