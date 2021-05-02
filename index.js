test = ["3","25", "209"]
result = []
nums_list = ["Zero","One", "Two", "Three", "Four", "Five", "Six", "Seven","Eight", "Nine"]

let j = 0
for (num of test) {
  result[j] = ""
  for(i of num){
    result[j] = result[j].concat(nums_list[parseInt(i)])
  }
  j++
}

console.log(result.join(", "))