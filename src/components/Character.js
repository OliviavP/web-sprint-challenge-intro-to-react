import styled from 'styled-components'

const StyledName = styled.h1`
  color: lightblue;
  width: 15%;
  background-color: teal;
  margin: 0 auto;
  margin-top: 10%;
  border-radius: 25px;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: gold;
    color: white;
  }
`

const StyledDes = styled.h2`
  color: limegreen;
  background-color: teal;
  width: 10%;
  border-radius: 25px;
  margin: 0 auto;
  margin-bottom: 2%;
  margin-top: 2%;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: gold;
    color: white;
  }
`

const StyledOther = styled.p`
  color: lightgreen;
  background-color: teal;
  width: 10%;
  border-radius: 25%;
  margin: 0 auto;
  margin-bottom: 1%;
  margin-top: 1%;
  transition: all 0.2s ease-in-out;
  &:hover {
    background-color: gold;
    color: white;
  }
`
const Character = (props) => {
  const { data } = props

  return (
    <div className='data'>
      <StyledName>{data.name}</StyledName>
      <StyledDes>Gender: {data.gender}</StyledDes>
      <StyledDes>Height: {data.height}</StyledDes>
      <StyledDes>Mass: {data.mass}</StyledDes>
      <StyledDes>Skin Color: {data.skin_color}</StyledDes>
      <StyledDes>Hair Color: {data.hair_color}</StyledDes>
      <StyledDes>Eye Color: {data.eye_color}</StyledDes>
      <StyledDes>Birth Year: {data.birth_year}</StyledDes>
      <StyledOther>Created: {data.created}</StyledOther>
      <StyledOther>Edited: {data.edited}</StyledOther>
    </div>
  )
}

export default Character
