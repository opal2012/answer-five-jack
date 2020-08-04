function solution(relation) {
  var answer = 0;
  let tmpHash = {sN: {}, nm: {}, nmMjr: {}}

  relation.forEach((currentValue, currentIndex) => {
    let sN = currentValue[0]
    let nm = currentValue[1]
    let nmMjr = currentValue[1] + currentValue[2]

    answer += (!tmpHash.sN[sN] && currentIndex === relation.length - 1) ? 1 : 0
    tmpHash.sN[sN] = sN
    answer += (!tmpHash.nm[nm] && currentIndex === relation.length - 1) ? 1 : 0
    tmpHash.nm[nm] = nm
    answer += (!tmpHash.nmMjr[nmMjr] && currentIndex === relation.length - 1) ? 1 : 0
    tmpHash.nmMjr[nmMjr] = nmMjr
  })

  return answer;
}

let relation = [
  [ 100, "ryan", "music", 2 ],
  [ 200, "apeach", "math", 2 ],
  [ 300, "tube", "computer", 3 ],
  [ 400, "con", "computer", 4 ],
  [ 500, "muzi", "music", 3 ],
  [ 600, "ryan", "computer", 2 ],
  [ 700, "apeach", "music", 2 ]

]

console.log(solution(relation))
