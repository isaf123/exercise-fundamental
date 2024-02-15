///EXERCISE FUNCTION
/** 
 * 1. 1
 * 2. 2 3
 * 3. 4 5 6
 * 4. 7 8 9
 * 
 * 
 * count = 2
 * 
*/

// 1, 2 3, 4 5 6, 7 8 9 10

/////triangle

let numb1 = 1
let result =''





/////2. FIZZ BUZZ

function loopFizzBuzz(n){
  let result = ""
  for (let index = 1; index <= n ; index++) {
    if(index%3 === 0 && index%5 === 0){
      result = result + " Fizzbuzz"
    } else if(index%3 === 0){
      result = result + " Fizz "
    } else if(index%5 === 0){
      result = result + " Buzz"
    }else( result = result + ` ${index}`)
  }
  console.log(result)
  return result
}

let fizz = loopFizzBuzz(15)
console.log(fizz);


////// 3. BODY MASS INDEX

function massIndex(weight,height){
  let BMI = weight/(height)/height
  let result =""
  if(BMI <= 18.5){
    result = "less height"
  }else if(BMI > 18.5 && BMI <= 24.9){
    result = "ideal"
  }else if (BMI > 25 && BMI <= 29.9){
    result = "overweight"
  }else if (BMI > 30 && BMI <= 39.9){
    result = "very overweight"
  }else if ( BMI > 39.9){
    result = "Obesity"
  }
  
  return result

}

console.log(massIndex(200,1.7))


//////4. even separator

let number = [1,2,3,4,5,6,7,8,9]

function evenOdd(number){
  num = []
  for (let index = 0; index < number.length; index++) {
    if((number[index])%2 === 0){
      num.push(number[index])
    }
    
  }
  console.log(num)
  return num
}

console.log(evenOdd(number))

////5. HELLO WORLD
