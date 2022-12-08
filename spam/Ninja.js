class Ninja {
  constructor(name, health = 100, speed = 3, strength = 3) {
    this.name = name
    this.health = health
    this.speed = speed
    this.strength = strength
  }

  sayName() {
    console.log(this.name)
  }
  showStats() {
    console.log(
      `my name is ${this.name}, health: ${this.health}, strength ${this.strength}, speed: ${this.speed} `
    )
  }

  drinkSake() {
    this.health += 10
  }
}
const ninja1 = new Ninja('Hyabusa')
ninja1.sayName()
ninja1.showStats()

class Sensei extends Ninja {
  constructor(name, wisdom = 10) {
    super(name)
    this.wisdom = wisdom
  }

  speakWisdom() {
    console.log(
      'What one programmer can do in one month, two programmers can do in two months.'
    )
  }
}
const superSensei = new Sensei('Master Splinter')
superSensei.speakWisdom()
superSensei.showStats()
