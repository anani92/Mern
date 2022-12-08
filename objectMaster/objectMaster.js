const pokémon = Object.freeze([
  { id: 1, name: 'Bulbasaur', types: ['poison', 'grass'] },
  { id: 5, name: 'Charmeleon', types: ['fire'] },
  { id: 9, name: 'Blastoise', types: ['water'] },
  { id: 12, name: 'Butterfree', types: ['bug', 'flying'] },
  { id: 16, name: 'Pidgey', types: ['normal', 'flying'] },
  { id: 23, name: 'Ekans', types: ['poison'] },
  { id: 24, name: 'Arbok', types: ['poison'] },
  { id: 25, name: 'Pikachu', types: ['electric'] },
  { id: 37, name: 'Vulpix', types: ['fire'] },
  { id: 52, name: 'Meowth', types: ['normal'] },
  { id: 63, name: 'Abra', types: ['psychic'] },
  { id: 67, name: 'Machamp', types: ['fighting'] },
  { id: 72, name: 'Tentacool', types: ['water', 'poison'] },
  { id: 74, name: 'Geodude', types: ['rock', 'ground'] },
  { id: 87, name: 'Dewgong', types: ['water', 'ice'] },
  { id: 98, name: 'Krabby', types: ['water'] },
  { id: 115, name: 'Kangaskhan', types: ['normal'] },
  { id: 122, name: 'Mr. Mime', types: ['psychic'] },
  { id: 133, name: 'Eevee', types: ['normal'] },
  { id: 144, name: 'Articuno', types: ['ice', 'flying'] },
  { id: 145, name: 'Zapdos', types: ['electric', 'flying'] },
  { id: 146, name: 'Moltres', types: ['fire', 'flying'] },
  { id: 148, name: 'Dragonair', types: ['dragon'] },
])

console.log(pokémon[0].types)

const devisibleByThree = [...pokémon].filter((poke) => poke.id % 3 === 0)

console.log(devisibleByThree)
const fireTypes = [...pokémon].filter((poke) => poke.types.includes('fire'))

console.log(fireTypes)

const moreThanType = [...pokémon].filter((poke) => poke.types.length > 1)

const pokemonNames = [...pokémon].map((poke) => poke.name)
console.log(pokemonNames)

const idGreaterTan99 = [...pokémon].filter((poke) => {
  if (poke.id > 99) {
    return poke.name
  }
})

console.log(idGreaterTan99)

const poisonType = [...pokémon].filter(
  (poke) => poke.types.length === 1 && poke.types.includes('poison')
)
console.log(poisonType)

const flyingPokemons = [...pokémon].filter((poke) => poke.types[1] === 'flying')
console.log(flyingPokemons)
const normalCount = [...pokémon].filter((poke) =>
  poke.types.includes('normal')
).length

console.log(normalCount)
