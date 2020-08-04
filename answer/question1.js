 solution = (record=[])=> {
  let KEY_ACTION = { 'ENTER': 'Enter', 'LEAVE': 'Leave', 'CHANGE': 'Change' }
  let answer = []
  let { user, action } = record.reduce((data, item) => {
    let itemSplit = item.split(' ')
    let action = itemSplit[0]
    let uid = itemSplit[1]
    let name = itemSplit[2]

    switch(action) {
      case KEY_ACTION.ENTER:
        data.user[uid] = name
        data.action.push({ uid: uid, action: KEY_ACTION.ENTER })
        break;
      case KEY_ACTION.LEAVE:
        data.action.push({ uid: uid, action: KEY_ACTION.LEAVE })
        break;
      case KEY_ACTION.CHANGE:
        data.user[uid] = name
        break;
    }

    return data
  }, { user: {}, action: [] })

  answer = action.map((a) => {
    if(a.action === KEY_ACTION.ENTER) {
      return user[a.uid]+' came in'
    } else if (a.action === KEY_ACTION.LEAVE) {
      return user[a.uid]+' has left'
    }
  })

  return answer
}

let record = ["Enter uid1234 Muzi", "Enter uid4567 Prodo", "Leave uid1234", "Change uid1234 Prodo", "Enter uid1234 Prodo", "Change uid4567 Ryan"]
console.log(solution(record))
