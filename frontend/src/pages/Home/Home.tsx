import styles from "./Home.module.css"
import React from "react"

import { Pokemon } from "components/Pokemon/"
import { Loader } from "components/Loader/"

interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}
enum HomeState {
  Loading,
  Success,
  Error,
}
function filterPokemonsByName(pokemons: PokemonInfo[], pokemonName: string) {
  return pokemons.filter(({ name }) => name.startsWith(pokemonName))
}

async function fetchPokemons() {
  const response = await fetch("http://localhost:8000/pokemons", { headers: { accept: "application/json" } })
  // throw new Error("lol")
  return response.json()
}
export const Home = () => {
  // functions

  // state
  const [filterValue, setFilterValue] = React.useState("")

  const [pokemonList, setPokemonList] = React.useState<PokemonInfo[]>([])

  const [homeState, setHomeState] = React.useState<HomeState>(HomeState.Loading)

  React.useEffect(() => {
    async function asyncFetch() {
      try {
        const result = await fetchPokemons()
        setPokemonList(result)
        setHomeState(HomeState.Success)
      } catch (error) {
        console.log(error)
        setHomeState(HomeState.Error)
      }
    }

    asyncFetch()
  }, [])

  const onInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.value)
    setFilterValue(event.target.value)
  }

  return (
    <div className={styles.intro}>
      <h1>Pokedex</h1>

      <label>
        Search Pokemon by name :
        <input className={styles.input} onChange={onInputChange} value={filterValue} />
      </label>

      {homeState === HomeState.Loading && <Loader />}
      {homeState === HomeState.Error && <p>An error occured... Couldn't retrieve Pokedex from server</p>}
      {homeState === HomeState.Success && (
        <div className={styles.pokemonList}>
          {filterPokemonsByName(pokemonList, filterValue).map(({ name, id, height, weight }) => {
            return <Pokemon name={name} id={id} key={id} height={height} weight={weight} />
          })}
        </div>
      )}
    </div>
  )
}
