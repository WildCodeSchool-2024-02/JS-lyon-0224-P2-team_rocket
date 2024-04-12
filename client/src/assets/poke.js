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
      {
        name: "Combat",
        damage_multiplier: 0.5,
        damage_relation: "resistant",
      },
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
];

export default Poke;
