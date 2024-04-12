const Poke = [
  {
    id: 1,
    pokedexId: 1,
    name: "Bulbizarre",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    slug: "Bulbizarre",
    stats: {
      HP: 45,
      attack: 49,
      defense: 49,
      special_attack: 65,
      special_defense: 65,
      speed: 45,
    },
    apiTypes: [
      {
        name: "Poison",
        image:
          "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png",
      },
      {
        name: "Plante",
        image:
          "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png",
      },
    ],
    apiGeneration: 1,
    apiResistances: [
      { name: "Normal", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Combat", damage_multiplier: 0.5, damage_relation: "resistant" },
      { name: "Vol", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Poison", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Sol", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Roche", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Insecte", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Spectre", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Acier", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Feu", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Eau", damage_multiplier: 0.5, damage_relation: "resistant" },
      {
        name: "Plante",
        damage_multiplier: 0.25,
        damage_relation: "twice_resistant",
      },
      {
        name: "\u00c9lectrik",
        damage_multiplier: 0.5,
        damage_relation: "resistant",
      },
      { name: "Psy", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Glace", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Dragon", damage_multiplier: 1, damage_relation: "neutral" },
      {
        name: "T\u00e9n\u00e8bres",
        damage_multiplier: 1,
        damage_relation: "neutral",
      },
      {
        name: "F\u00e9e",
        damage_multiplier: 0.5,
        damage_relation: "resistant",
      },
    ],
    resistanceModifyingAbilitiesForApi: [],
    apiEvolutions: [{ name: "Herbizarre", pokedexId: 2 }],
    apiPreEvolution: "none",
    apiResistancesWithAbilities: [],
  },
  {
    id: 2,
    pokedexId: 2,
    name: "Herbizarre",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/2.png",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    slug: "Herbizarre",
    stats: {
      HP: 60,
      attack: 62,
      defense: 63,
      special_attack: 80,
      special_defense: 80,
      speed: 60,
    },
    apiTypes: [
      {
        name: "Poison",
        image:
          "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png",
      },
      {
        name: "Plante",
        image:
          "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png",
      },
    ],
    apiGeneration: 1,
    apiResistances: [
      { name: "Normal", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Combat", damage_multiplier: 0.5, damage_relation: "resistant" },
      { name: "Vol", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Poison", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Sol", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Roche", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Insecte", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Spectre", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Acier", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Feu", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Eau", damage_multiplier: 0.5, damage_relation: "resistant" },
      {
        name: "Plante",
        damage_multiplier: 0.25,
        damage_relation: "twice_resistant",
      },
      {
        name: "\u00c9lectrik",
        damage_multiplier: 0.5,
        damage_relation: "resistant",
      },
      { name: "Psy", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Glace", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Dragon", damage_multiplier: 1, damage_relation: "neutral" },
      {
        name: "T\u00e9n\u00e8bres",
        damage_multiplier: 1,
        damage_relation: "neutral",
      },
      {
        name: "F\u00e9e",
        damage_multiplier: 0.5,
        damage_relation: "resistant",
      },
    ],
    resistanceModifyingAbilitiesForApi: [],
    apiEvolutions: [{ name: "Florizarre", pokedexId: 3 }],
    apiPreEvolution: { name: "Bulbizarre", pokedexIdd: 1 },
    apiResistancesWithAbilities: [],
  },
  {
    id: 3,
    pokedexId: 3,
    name: "Florizarre",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/3.png",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    slug: "Florizarre",
    stats: {
      HP: 80,
      attack: 82,
      defense: 83,
      special_attack: 100,
      special_defense: 100,
      speed: 80,
    },
    apiTypes: [
      {
        name: "Poison",
        image:
          "https://static.wikia.nocookie.net/pokemongo/images/0/05/Poison.png",
      },
      {
        name: "Plante",
        image:
          "https://static.wikia.nocookie.net/pokemongo/images/c/c5/Grass.png",
      },
    ],
    apiGeneration: 1,
    apiResistances: [
      { name: "Normal", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Combat", damage_multiplier: 0.5, damage_relation: "resistant" },
      { name: "Vol", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Poison", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Sol", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Roche", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Insecte", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Spectre", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Acier", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Feu", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Eau", damage_multiplier: 0.5, damage_relation: "resistant" },
      {
        name: "Plante",
        damage_multiplier: 0.25,
        damage_relation: "twice_resistant",
      },
      {
        name: "\u00c9lectrik",
        damage_multiplier: 0.5,
        damage_relation: "resistant",
      },
      { name: "Psy", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Glace", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Dragon", damage_multiplier: 1, damage_relation: "neutral" },
      {
        name: "T\u00e9n\u00e8bres",
        damage_multiplier: 1,
        damage_relation: "neutral",
      },
      {
        name: "F\u00e9e",
        damage_multiplier: 0.5,
        damage_relation: "resistant",
      },
    ],
    resistanceModifyingAbilitiesForApi: [],
    apiEvolutions: [],
    apiPreEvolution: { name: "Herbizarre", pokedexIdd: 2 },
    apiResistancesWithAbilities: [],
  },
  {
    id: 4,
    pokedexId: 4,
    name: "Salam\u00e8che",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    slug: "Salameche",
    stats: {
      HP: 39,
      attack: 52,
      defense: 43,
      special_attack: 60,
      special_defense: 50,
      speed: 65,
    },
    apiTypes: [
      {
        name: "Feu",
        image:
          "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png",
      },
    ],
    apiGeneration: 1,
    apiResistances: [
      { name: "Normal", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Combat", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Vol", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Poison", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Sol", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Roche", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Insecte", damage_multiplier: 0.5, damage_relation: "resistant" },
      { name: "Spectre", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Acier", damage_multiplier: 0.5, damage_relation: "resistant" },
      { name: "Feu", damage_multiplier: 0.5, damage_relation: "resistant" },
      { name: "Eau", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Plante", damage_multiplier: 0.5, damage_relation: "resistant" },
      {
        name: "\u00c9lectrik",
        damage_multiplier: 1,
        damage_relation: "neutral",
      },
      { name: "Psy", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Glace", damage_multiplier: 0.5, damage_relation: "resistant" },
      { name: "Dragon", damage_multiplier: 1, damage_relation: "neutral" },
      {
        name: "T\u00e9n\u00e8bres",
        damage_multiplier: 1,
        damage_relation: "neutral",
      },
      {
        name: "F\u00e9e",
        damage_multiplier: 0.5,
        damage_relation: "resistant",
      },
    ],
    resistanceModifyingAbilitiesForApi: [],
    apiEvolutions: [{ name: "Reptincel", pokedexId: 5 }],
    apiPreEvolution: "none",
    apiResistancesWithAbilities: [],
  },
  {
    id: 5,
    pokedexId: 5,
    name: "Reptincel",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/5.png",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    slug: "Reptincel",
    stats: {
      HP: 58,
      attack: 64,
      defense: 58,
      special_attack: 80,
      special_defense: 65,
      speed: 80,
    },
    apiTypes: [
      {
        name: "Feu",
        image:
          "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png",
      },
    ],
    apiGeneration: 1,
    apiResistances: [
      { name: "Normal", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Combat", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Vol", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Poison", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Sol", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Roche", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Insecte", damage_multiplier: 0.5, damage_relation: "resistant" },
      { name: "Spectre", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Acier", damage_multiplier: 0.5, damage_relation: "resistant" },
      { name: "Feu", damage_multiplier: 0.5, damage_relation: "resistant" },
      { name: "Eau", damage_multiplier: 2, damage_relation: "vulnerable" },
      { name: "Plante", damage_multiplier: 0.5, damage_relation: "resistant" },
      {
        name: "\u00c9lectrik",
        damage_multiplier: 1,
        damage_relation: "neutral",
      },
      { name: "Psy", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Glace", damage_multiplier: 0.5, damage_relation: "resistant" },
      { name: "Dragon", damage_multiplier: 1, damage_relation: "neutral" },
      {
        name: "T\u00e9n\u00e8bres",
        damage_multiplier: 1,
        damage_relation: "neutral",
      },
      {
        name: "F\u00e9e",
        damage_multiplier: 0.5,
        damage_relation: "resistant",
      },
    ],
    resistanceModifyingAbilitiesForApi: [],
    apiEvolutions: [{ name: "Dracaufeu", pokedexId: 6 }],
    apiPreEvolution: { name: "Salam\u00e8che", pokedexIdd: 4 },
    apiResistancesWithAbilities: [],
  },
  {
    id: 6,
    pokedexId: 6,
    name: "Dracaufeu",
    image:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/6.png",
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    slug: "Dracaufeu",
    stats: {
      HP: 78,
      attack: 84,
      defense: 78,
      special_attack: 109,
      special_defense: 85,
      speed: 100,
    },
    apiTypes: [
      {
        name: "Vol",
        image:
          "https://static.wikia.nocookie.net/pokemongo/images/7/7f/Flying.png",
      },
      {
        name: "Feu",
        image:
          "https://static.wikia.nocookie.net/pokemongo/images/3/30/Fire.png",
      },
    ],
    apiGeneration: 1,
    apiResistances: [
      { name: "Normal", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Combat", damage_multiplier: 0.5, damage_relation: "resistant" },
      { name: "Vol", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Poison", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Sol", damage_multiplier: 0, damage_relation: "immune" },
      {
        name: "Roche",
        damage_multiplier: 4,
        damage_relation: "twice_vulnerable",
      },
      {
        name: "Insecte",
        damage_multiplier: 0.25,
        damage_relation: "twice_resistant",
      },
      { name: "Spectre", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Acier", damage_multiplier: 0.5, damage_relation: "resistant" },
      { name: "Feu", damage_multiplier: 0.5, damage_relation: "resistant" },
      { name: "Eau", damage_multiplier: 2, damage_relation: "vulnerable" },
      {
        name: "Plante",
        damage_multiplier: 0.25,
        damage_relation: "twice_resistant",
      },
      {
        name: "\u00c9lectrik",
        damage_multiplier: 2,
        damage_relation: "vulnerable",
      },
      { name: "Psy", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Glace", damage_multiplier: 1, damage_relation: "neutral" },
      { name: "Dragon", damage_multiplier: 1, damage_relation: "neutral" },
      {
        name: "T\u00e9n\u00e8bres",
        damage_multiplier: 1,
        damage_relation: "neutral",
      },
      {
        name: "F\u00e9e",
        damage_multiplier: 0.5,
        damage_relation: "resistant",
      },
    ],
    resistanceModifyingAbilitiesForApi: [],
    apiEvolutions: [],
    apiPreEvolution: { name: "Reptincel", pokedexIdd: 5 },
    apiResistancesWithAbilities: [],
  },
];

export default Poke;
