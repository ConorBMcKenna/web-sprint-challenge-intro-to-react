// Write your Character component here
import react from 'react'

const Character = (props) => {
    console.log(props)

    const character = props.character
    
    return (
        <article >
            <p>{character.name} is {character.status}</p>

        </article>
    )
}

export default Character