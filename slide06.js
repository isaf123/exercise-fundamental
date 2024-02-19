


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
  new Student("Andi","andi@mail.com","03-11-1999", 100),
  new Student("Joko","joko@mail.com","05-12-1997", 75),
  new Student("Bowo","bowo@mail.com","09-10-2002", 55),
] 

function sortValue(stud){
  let high = stud[0].score;
  let low = stud[0].score;
  let lowValue = []
  let highValue =[]
 

  let avg = 0;
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
  let highAgeValue = []
  let lowAgeValue =[]
  
  for (let i= 0; i< stud.length; i++) {
    if(lowAges > stud[i].getAge()){
      lowAges = stud[i].getAge()
      lowAgeValue = stud[i]
    } else if (highAges < stud[i].getAge()){
      highAges = stud[i].getAge()
      highAgeValue = stud[i]
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







