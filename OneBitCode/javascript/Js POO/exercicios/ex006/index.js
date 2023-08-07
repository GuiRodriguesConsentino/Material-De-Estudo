class Veihcle {
   move() {
      console.log('O veículo está se movendo.');
   }
}

class Car extends Veihcle {
   move() {
      console.log('O carro está se movendo.');
   }
}

class Ship extends Veihcle {
  move() {
    console.log("O navio está navegando.");
  }
}

class Aircraft extends Veihcle {
   move(speed) {
      console.log(`A aeronave está voando a ${speed} km/h`);
   }
}

const delorean = new Car()
const blackPearl = new Ship()
const epoch = new Aircraft()

delorean.move()
blackPearl.move()
epoch.move(80)


// Outro jeito de usar
function start(veihcle) {
   console.log('Iniciando um veíuculo...');
   veihcle.move()
}

start(delorean)
start(blackPearl)
start(epoch)