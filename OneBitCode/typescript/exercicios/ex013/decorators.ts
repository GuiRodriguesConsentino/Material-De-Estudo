function Decorator() {
   return function (target, key, descriptor) {
      descriptor.value = function (value: number) {
         console.log(`Calculando ${value} elevado ao quadrado`);
         return value ** 2
      }
   }
}

class Planet {
   name: string

   constructo(name: string) {
      this.name = name
   }

   @Decorator()
   calculate(value: number) {
      // ...
      console.log(`Calculando ${value} vezes 2`);
      return value * 2
   }
}

const planet = new Planet('Terra')

const result = planet.calculate(5)

console.log(`Resultado ${result}`);
