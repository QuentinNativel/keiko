import styles from "./Home.module.css"
import React from "react"

import { Pokemon } from "components/Pokemon/"
interface Pokemon {
  name: string
  id: number
}

function filterPokemonsByName(pokemons: Pokemon[], pokemonName: string) {
  return pokemons.filter(({ name }) => name.startsWith(pokemonName))
}

export const Home = () => {
  const [filterValue, setFilterValue] = React.useState("")

  const pokemonList: Pokemon[] = [
    {
      name: "Carapuce",
      id: 7,
    },
    {
      name: "Carabaffe",
      id: 8,
    },
    {
      name: "Tortank",
      id: 9,
    },
  ]

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setFilterValue(event.target.value)
  }
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <p>Test 1..2</p>
      <label>
        Search Pokemon by name :
        <input className={styles.input} onChange={onInputChange} value={filterValue} />
      </label>
      {filterPokemonsByName(pokemonList, filterValue).map(({ name, id }) => {
        return <Pokemon name={name} number={id} key={id} />
      })}
    </div>
  )
}
