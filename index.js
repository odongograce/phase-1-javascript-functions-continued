function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`
}
const mondayWork = function (action = "go to the office") {
    return `This Monday, I will ${action}.`
}
function wrapAdjective(wrapper = "*") {
  return function(adjective = "a hard worker") {
    return `You are ${wrapper}${adjective}${wrapper}!`
  }
}




console.log(saturdayFun());
console.log(saturdayFun("bathe my dog"));
console.log(mondayWork());
console.log(mondayWork("work from home"));
console.log(wrapAdjective());
console.log(wrapAdjective(wrapper = "||", adjective ="a dedicated programmer"));