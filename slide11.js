
///excel column
/**
 * A=1
 * B=2
 * C=3
 * D=4
 * E=5
 * F=6
 */

  let check = "AB"
  function checkAlphabetIndex(a){
    let alfabet = "abcdefghijklmnopqrstuvwxyz"
    txt = a.toLowerCase()
    if(txt.length != 1){
      potong =txt.slice(1,2)
      return alfabet.indexOf(potong)+27
    } else { 
      return alfabet.indexOf(txt)+1
    }
  }
  console .log(checkAlphabetIndex(check))
  

////find single number
input = [4,3,3,4,7,]
result = input[1]
let p = 0

console.log(input.sort())

for (let i= 1; i < input.length; i++) {

  if(input[0]-input[1]!=0){
    result = input[0]
  }else if (input[0]-input[1]==0){
    if(result-input[i+1] !=0 && result-input[i-1] != 0){
      result = input[i]
      break
    } else {
      result = input[i+1]
    }
  }
  console.log(result)
}

console.log(result)



////anagram

let s = "nagaram"
let t = "nagaram"

function anagram(s,t){
  let arr1 = []
  let arr2 = []
  for(i=0; i<s.length; i++){
    arr1.push(s.slice(i,i+1))

  }

  for(i=0; i<t.length; i++){
    arr2.push(t.slice(i,i+1))
  }
  
  sort1 = arr1.sort()
  sort2 = arr2.sort()
  
  console.log(sort1)
  console.log(sort2)

  for(i=0; i<sort1.length; i++){
    if(sort1.length === sort2.length){
      if(sort1[i] === sort2[i]){
        p = true
      } else if (sort1[i] != sort2[i]){
        p = false
        break
      }
    } else { p = false} 
  }
  return p
}

console.log(anagram(s,t))


///stair case

/**
 * 1 1
 * 2 11 2
 * 3 21 111 12
 * 4 22 211 112 1111 121
 * 5 11111 1112 1121 1211 2111 221 212 122
 * 6 222
 */

// 1 2 3 5 8 ---> deret fibonacci

let counter = 5
let firstNUmb = 0;
let secNumb = 1;
let res = 0

for(i = 1; i<= counter; i++){
  res = firstNUmb + secNumb
  console.log(i-1,".", res);
  firstNUmb = secNumb;
  secNumb = res
}

console.log(res)







