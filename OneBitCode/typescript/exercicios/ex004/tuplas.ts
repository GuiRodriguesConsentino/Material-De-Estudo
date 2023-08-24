let crew: [string, string, string] // Dessa forma limita o tipo e quantidade do Array
crew = ['Gui', 'Fe', 'Bia']


let point: [number, number] // Mesmo se tiver um terceiro elemento sendo Number dará error
point = [2, 5]

let [x, y] = point // TypeScript já identifica o tipo do Array