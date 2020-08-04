function solution(N, users) {
  var answer = [];
  let failureRate = {}
  let activeUsers = users.map(() => true)
  let i

  for(i=1; i<=N; i++){
    let failureUsers = 0
    let numberOfUsers = 0
    activeUsers.forEach((item, idx) => {
      numberOfUsers += item ? 1 : 0
      if(users[idx] === i) {
        activeUsers[idx] = false
        failureUsers += 1
      }
    });
    failureRate[i] = failureUsers / numberOfUsers
  }

  answer = Object.keys(failureRate).sort((a, b) => failureRate[b] - failureRate[a])
  //console.log(failureRate);

  return answer;
}
let N = 4
let users = [4,4,4,4]
console.log(solution(N, users))
