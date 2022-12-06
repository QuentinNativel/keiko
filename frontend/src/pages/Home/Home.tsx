import styles from "./Home.module.css"
import React from "react"

import { Pokemon } from "components/Pokemon/"
interface PokemonType {
  name: string
  id: number
}
interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

function filterPokemonsByName(pokemons: PokemonType[], pokemonName: string) {
  return pokemons.filter(({ name }) => name.startsWith(pokemonName))
}

async function fetchPokemons() {
  const response = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
  return response.json()
}
export const Home = () => {
  // functions

  // state
  const [filterValue, setFilterValue] = React.useState("")

  const [pokemonList, setPokemonList] = React.useState<PokemonInfo[]>([])

  // effects
  React.useEffect(() => {
    console.log("Updated World")
    return () => {
      console.log("Unmounted 1")
    }
  })

  React.useEffect(() => {
    async function asyncFetch() {
      const result = await fetchPokemons()
      setPokemonList(result)
    }

    asyncFetch()
  }, [])

  React.useEffect(() => {
    console.log("Hello World")
  }, [filterValue])

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
