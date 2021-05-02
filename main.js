nums_list = ["Zero","One", "Two", "Three", "Four", "Five", "Six", "Seven","Eight", "Nine"]
result = []
let j = 0

//Main Function
function NumToLetter (Numbers) {
  for (num of Numbers) {
    result[j] = ""
    for(i of num){
      result[j] = result[j].concat(nums_list[parseInt(i)])
    }
    j++
  }
  console.log(result.join(", "))
}

//Get the arguments
let Args_list = process.argv.slice(2);
NumToLetter(Args_list)
