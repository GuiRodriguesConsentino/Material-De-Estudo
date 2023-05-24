const arr = [
  ["1- Nível", "2- Nível", "3- Nível"],
  ["4- Nível", "5- Nível", "6- Nível"],
  ["7- Nível", "8- Nível", "9- Nível"]
];

console.log(arr);

const arr2 = [
   "1- Nível",
   ["2- Nível", 42, true],
   [
      ["3- Nível, 1- item", "Olá mundo!"],
      ["3- Nível, 1- item", "Oi mundo!"],
   ],
   []
]

console.log(arr2);
console.log(arr2[1][0]);
console.log(arr2[2][1][1]);