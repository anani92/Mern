class Card {
  constructor(name, cost) {
    this.name = name
    this.cost = cost
  }
}

class Unit extends Card {
  constructor(name, cost, resilience, power) {
    super(name, cost)
    this.resilience = resilience
    this.power = power
  }
  attack(target) {
    if (target instanceof Unit) {
    } else {
      throw new Error('Target must be of Unit type!')
    }
  }
}

class Effect extends Card {
  constructor(name, cost, text, magnitude) {
    super(name, cost)
    this.text = text
    this.magnitude = magnitude
  }

  play(target) {
    if (target instanceof Unit) {
      target.cost -= this.cost
      target.power += this.magnitude
      target.resilience += this.magnitude
    } else {
      throw new Error('Target must be a unit!')
    }
  }
}

const redBeltNinja = new Unit('red', 3, 3, 4)
const blackBeltNinja = new Unit('black', 4, 5, 4)

const algorithim = new Effect('hard', 2, "increase target's resilience by 3", 3)
const promiseRejection = new Effect(
  'hard',
  1,
  "reduce target's resilience by 2",
  -2
)
algorithim.play(redBeltNinja)
