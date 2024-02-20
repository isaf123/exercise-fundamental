


class Student{
  constructor(_name,_email,_birth,_score){
    this.name = _name;
    this.email = _email;
    this.birth =_birth;
    this.score =_score;
  }

  getAge(){
    const dat1 = new Date().getFullYear()
    const dat2 = this.birth.slice(6)
    return dat1-dat2
  }


}

student1 =[
  new Student("Ana","ana@mail.com","03-10-2000", 95),
  new Student("Andi","andi@mail.com","03-11-1995", 100),
  new Student("Joko","joko@mail.com","05-12-1997", 95),
  new Student("Bowo","bowo@mail.com","09-10-2001", 55),
] 

function sortValue(stud){
  let high = stud[0].score;
  let low = stud[0].score;
  let lowValue = stud[0]
  let highValue =stud[0]
 

  for(i=0; i < stud.length; i++){
    if(low > stud[i].score){
      low = stud[i].score
      lowValue = stud[i]
    } else if(high < stud[i].score){
      high = stud[i].score
      highValue = stud[i]
    }

    console.log(lowValue);
    console.log(high);
    console.log(low);

  }

  let lowAges = stud[0].getAge()
  let highAges = stud[0].getAge()
  let highAgeValue = stud[0]
  let lowAgeValue =stud[0]
  
  for (let i= 0; i< stud.length; i++) {
    if(lowAges > stud[i].getAge()){
      lowAges = stud[i].getAge()
      lowAgeValue = stud[i]
      lowAgeValue.umur = stud[i].getAge()
    } else if (highAges < stud[i].getAge()){
      highAges = stud[i].getAge()
      highAgeValue = stud[i]
      highAgeValue.umur = stud[i].getAge()
    }
    
  }

  console.log(highAgeValue);

  let result = {
    Score :{
      highest : highValue,
      lowest : lowValue,
    },
    Age : {
      highest : highAgeValue,
      lowest : lowAgeValue,
    },
  }
  
  return result
}

console.log(sortValue(student1))








