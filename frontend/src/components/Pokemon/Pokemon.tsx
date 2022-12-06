interface Props {
  name: string
  number: number
}
export const Pokemon = ({ name, number }: Props) => {
  const imgUrl = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${number}.png`

  return (
    <div>
      <img src={imgUrl} alt="" />
      <p>
        Name: <span>{name}</span>
      </p>
      <p>
        Number: <span>{number}</span>
      </p>
    </div>
  )
}
