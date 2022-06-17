// Write your Character component here
const Character = (props) => {
  const { data } = props

  return (
    <div className='data'>
      <h2>{data.name}</h2>
      <h3>Gender: {data.gender}</h3>
      <h3>Birth Year: {data.birth_year}</h3>
      <p>Height: {data.height}</p>
      <p>Mass: {data.mass}</p>
      <p>Skin Color: {data.skin_color}</p>
      <p>Hair Color: {data.hair_color}</p>
      <p>Eye Color: {data.eye_color}</p>
      <p>Created: {data.created}</p>
      <p>Edited: {data.edited}</p>
    </div>
  )
}

export default Character
