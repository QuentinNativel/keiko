import styles from "./Pokemon.module.css"

interface Props {
  name: string
  id: number
  weight: number
  height: number
}
export const Pokemon = ({ name, id, height, weight }: Props) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id}.png`

  return (
    <div className={styles.card}>
      <p>{capitalizedString(name)}</p>
      <img src={imgUrl} alt="" />

      <p>
        Id: <span>{id}</span>
      </p>
      <p>Weight: {weight / 10} kg</p>
      <p>Height: {height * 10} cm</p>
    </div>
  )
}

const capitalizedString = (str: string) => {
  return str.charAt(0).toUpperCase() + str.slice(1)
}
