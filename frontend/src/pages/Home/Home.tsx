import styles from "./Home.module.css"

export const Home = () => {
  return (
    <div className={styles.intro}>
      <div>Bienvenue sur ton futur pokédex !</div>
      <div>Tu vas pouvoir apprendre tout ce qu'il faut sur React et attraper des pokemons !</div>
      <p>Test 1..2</p>
      <div>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png" alt="" />
        <p>
          Name: <span>Carapuce</span>
        </p>

        <p>
          Number: <span>7</span>
        </p>
      </div>
    </div>
  )
}
