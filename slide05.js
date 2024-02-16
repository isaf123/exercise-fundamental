///1. sort number

//menggunakan sorting
let number = [12, 5, 23, 18, 4, 45, 32]


console.log(number.sort())

const sortNumber = (numArray)=>{
  let avg = 0;
  let numberAsc = numArray.sort(function (a,b){
    return a-b
  });

  console.log(numberAsc[0]);
  for (let index = 0; index < numberAsc.length; index++) {
    avg =  avg +numberAsc[index]
    avg1 = avg/(index+1)
    console.log(avg);
    console.log(avg1);
    highNumb = numberAsc[index]
  }
  

  let result = `lowest : ${numberAsc[0]}\n highest : ${highNumb}\n average : ${avg1}`
  console.log(result);
  return result
}

console.log(sortNumber(number));

//tanpa sorting

let number2 = [12, 5, 23, 18, 4, 45, 32]

const sortNumber2 = (numAr)=>{
  let low = numAr[0]//5// 4
  let high = numAr[0]
  let avg = 0
  for (let i = 0; i < numAr.length; i++) {

    if(low > numAr[i]){
      low = numAr[i];
    } else if(high < numAr[i]){
      high = numAr[i]
    } 
    console.log(low);
    console.log(high);

    avg = avg + numAr[i]
    avg2 = avg/(i+1)

    console.log(avg2);

  }
    console.log(low);
    console.log(high);
  result = `lowest : ${low}\nhighest : ${high}\naverage : ${avg2} `


  return result
}

console.log(sortNumber2(number2));

//2. Fruits Array

let fruit = ["apple", "banana", "cherry", "date"]

const stringFruits = (af)=>{
  let stringf = ""
  let jumlahIndex = af.length
  for (let index = 0; index < af.length; index++) {

    if(index === jumlahIndex-1){
      stringf+= `and ${af[index]}`
    }else{
      stringf = stringf + `${af[index]}, `
      console.log(stringf);}
    
    
  }
  console.log(stringf);
  return stringf
}

console.log(stringFruits(fruit));

///3. SPLIT STRING

const splitString = (txt)=>{
  const splt =  txt.split(" ")
  return splt
}

const text = "Hello World"
console.log(splitString(text))

///4. combine 2 array

let arrNum1 = [1, 2, 5,9,10,23]
let arrNum2 = [3, 2, 1]

const combineArray = (arr1,arr2)=>{
  let newArr = []
  if(arr1.length === arr2.length){
    for (let index = 0; index < arr1.length; index++) {
      plusArr = arr1[index] + arr2[index]
      console.log(plusArr);
      newArr.push(plusArr)
      console.log(newArr);
    }
  } else if (arr1.length < arr2.length){
    
    for (let index = 0; index < arr2.length; index++) {
      arr1.push(0)
      plusArr = arr1[index] + arr2[index]
      console.log(plusArr);
      newArr.push(plusArr)
      console.log(newArr);
    }
  
  }  else if (arr1.length > arr2.length){
   
    for (let index = 0; index < arr1.length; index++) {
      arr2.push(0)
      plusArr = arr1[index] + arr2[index]
      console.log(plusArr);
      newArr.push(plusArr)
      console.log(newArr);
    }

    
  } 
  return newArr
}
console.log(combineArray(arrNum1,arrNum2))

///5. add number into array

let arr =[1,2,3,4]
let newNumm = 8
let newElement = (array,newNumb)=>{

  if(!array.includes(newNumb)){
    array.push(newNumb)
  }
  return array
}

console.log(newElement(arr, newNumm))