import styles from "./Pokemon.module.css"
import { Link } from "react-router-dom"
import { Animate } from "components/Animate"
interface Props {
  name: string
  id: number
  weight: number
  height: number
}
const PokemonComponent = ({ name, id, height, weight }: Props) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <Link to={`/pokemon/${id}`} className={styles.card}>
      <p>{capitalizedString(name)}</p>
      <img src={imgUrl} alt="" />

      <p>
        Id: <span>{id}</span>
      </p>
      <p>Weight: {weight / 10} kg</p>
      <p>Height: {height * 10} cm</p>
    </Link>
  )
}
// export const Pokemon = PokemonComponent
export const Pokemon = Animate<Props>(PokemonComponent)
const capitalizedString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
