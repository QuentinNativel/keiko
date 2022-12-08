import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

import { Loader } from "components/Loader/"
import styles from "./Pokemon.module.css"

enum CompState {
  Loading,
  Success,
  Error,
}
interface PokemonInfo {
  id: number
  name: string
  height: number
  weight: number
}

const fetchPokemon = async (id: string) => {
  const response = await fetch(`http://localhost:8000/pokemon/${id}`, { headers: { accept: "application/json" } })
  return response.json()
}

export const Pokemon = () => {
  const { id } = useParams()

  const [compState, setCompState] = useState<CompState>(CompState.Loading)
  const [pokemonInfo, setPokemonInfo] = useState<PokemonInfo>()

  useEffect(() => {
    async function asyncFetch() {
      try {
        if (id == undefined) {
          return
        }
        const result = await fetchPokemon(id)
        setPokemonInfo(result)
        setCompState(CompState.Success)
      } catch (error) {
        console.log(error)
        setCompState(CompState.Error)
      }
    }

    asyncFetch()
  }, [])

  const im1 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`
  const im2 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${id}.png`
  const im3 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/${id}.png`
  const im4 = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/shiny/${id}.png`
  return (
    <div className={styles.card}>
      {compState === CompState.Loading && <Loader />}
      {compState === CompState.Error && <p>An error occured... Couldn't retrieve Pokemon from server</p>}
      {compState === CompState.Success && pokemonInfo !== undefined && (
        <div>
          <h1>{capitalizedString(pokemonInfo.name)}</h1>
          <div className={styles.grid}>
            <img src={im1} alt="" />
            <img src={im2} alt="" />
            <img src={im3} alt="" />
            <img src={im4} alt="" />
          </div>
          <div className={styles.description}>
            <p>
              Id: <span>{id}</span>
            </p>
            <p>Weight: {pokemonInfo.weight / 10} kg</p>
            <p>Height: {pokemonInfo.height * 10} cm</p>
          </div>
        </div>
      )}
    </div>
  )
}

const capitalizedString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
