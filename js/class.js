const POWERS = {
    MAGGIE: {
        type:'MAGGIE',
        powerUp: 10
    },
    COKE: {
        type: 'COKE',
        powerUp: 20
    }
}

class Player {
    constructor() {
        // initize the object
        this.health = 100
        this.speed = 2
        this.punchPower = 30
        this.x = 100
        this.y = 200 // getRandomNUMBER()
    }

    move(newX, newY) {
        this.x = newX
        this.y = newY
    }

    damage(otherPlayer) {
        otherPlayer.health = otherPlayer.health - this.punchPower
    }

    powerUp(powerUpType) {
        if(powerUpType.type == 'MAGGIE') {
            this.punchPower = this.punchPower + powerUpType.powerUp
        }
    }
}

const p1 = new Player()
const p2 = new Player()
const pas = new Player()
const pa = new Player()
const ps = new Player()
const as = new Player()
const ss = new Player()
const pas = new Player()
const pssas = new Player()
const pass = new Player()
const passss = new Player()
const paasds = new Player()


p1.move(102, 200)
p2.move(100, 202)

p1.damage(p2)

// console.log(p1)
// console.log(p2)

p2.powerUp(POWERS.MAGGIE)
p2.damage(p1)

console.log(p2)
console.log(p1)