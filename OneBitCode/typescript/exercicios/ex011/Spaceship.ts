class Spaceship {
   private _name: String // Private só pode ser acessado na própria classe.
   protected captain: String
   protected speed: Number // Protected só pode ser acessado através da própria classe ou subclasse.

   get name() {
      // ...
      return this._name
   }

   set name(name) {
      this._name = name
   }

   constructor(name: String, captain: String) {
      this.name = name
      this.captain = captain
      this.speed = 0
   }

   public accelerate(rate: Number, time: Number) { // Public pode ser acessado de qualquer lugar. (Default)
      this.speed = Number(rate) * Number(time)
   }
}

class Fighter extends Spaceship {
   weapons: Number

   constructor(name: String, captain: String, weapons: Number) {
      super(name, captain)
      this.weapons = weapons
   }

   shoot() {
      for (let i = 0; i < this.weapons; i++) {
         console.log('Pew!');
      }
   }
   
   erase() {
      this.captain = ''
   }
}

let ship = new Fighter('USS Enterprise', 'James T. Kirk', 10)

ship.accelerate(50, 10)

ship.weapons = 20

ship.name = 'X-Wing' 