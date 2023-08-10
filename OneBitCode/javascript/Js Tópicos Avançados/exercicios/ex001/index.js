function sum(a, b) {
   const firstNumber = Number(a)
   const secondNumber = Number(b)

   if(isNaN(firstNumber) || isNaN(secondNumber)) {
      throw new Error('arguments must be two numbers')
   }

   return firstNumber + secondNumber
}

try { // Evitar mostrar o erro no terminal
   console.log(sum(2, 9));
   console.log(sum(true, 14));
   console.log(sum(undefined, 22));
   console.log(sum(18, '0'));
   console.log(sum(39, null));
   console.log(sum(13, 'zero'));
} catch (error) { // mensagem se algo der errado
   console.log(error.message);
} finally { // Sempre será executado
   console.log('Calculations finished!');
}