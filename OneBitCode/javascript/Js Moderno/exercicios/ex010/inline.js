// Nome para importar deve ser igual ao nome de função, se for mudar o nome coloque "as" na frente do nome na hora de importar
export function inline() {
   console.log(`Export nomeado inline`);
}


// Nome de função não importa na hora de importar
export default function defaultInline() { 
   console.log(`Export default inline`);
}