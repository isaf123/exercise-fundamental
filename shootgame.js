
class Player{
  constructor(name,health,power){
    this.name = name
    this.health = health
    this.power = power
  }

  hit(power){
    this.health -= power

  }

  useItem1(item){
    this.health+=item.hp
    this.power+=item.pwr
  }


  showStatus(){
    let stats =  ` (Health=>${this.health}, Power=>${this.power})`
    return  stats
  }
}

class ShootingGame{
  constructor(player1,player2){
    this.player1 = player1;
    this.player2 = player2;
  }
  
  getRandomItem(){
    let item = {}
    let random= Math.random()
    if(random>=0 && random<0.5 ){
      item = {hp : 0, pwr : 10}
    }else if(random>=0.5 && random<1){
      item = {hp : 10, pwr : 0}
    } 
    return item
  }

  start(){
    let numbROund = 1
    while(this.player1.health>0 && this.player2.health>0){
      console.log(`=============Ronde ${numbROund}=================`);
      console.log(`=status`);
      console.log(`${this.player1.name} : ${this.player1.showStatus()}`)
      console.log(`${this.player2.name} :${this.player2.showStatus()}`)
    

      console.log(`=get item`)
      console.log(`${this.player1.name} mendapatkan item : `)
      this.player1.useItem1(this.getRandomItem());
      console.log(this.player1.showStatus());//after

      console.log(`${this.player2.name} mendapatkan item : `)
      this.player2.useItem1(this.getRandomItem());
      console.log(this.player2.showStatus());//after
      
      console.log(`=kedua pemain menyerang`);
      this.player1.hit(this.player2.power)
      console.log(`${this.player1.name} menjadi: ${this.player1.showStatus()}`)
      
      this.player2.hit(this.player1.power)
      console.log(`${this.player2.name} menjadi: ${this.player2.showStatus()}\n\n`)
      numbROund+=1
      }
    }
  }




const playerA= new Player("andi",100,10)
const playerB= new Player("dika",100,10)
const play = new ShootingGame(playerA,playerB)








play.start()



// 1. memainkan dengan enter
// 2. menunjukkan status tiap player  





  
