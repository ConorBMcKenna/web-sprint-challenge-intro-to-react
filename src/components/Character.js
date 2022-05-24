// Write your Character component here
import react from 'react'

const Character = (props) => {
    console.log(props)

    const {character} = props
    
    return (
        <article >
            <p>{character.name} is {character.height} tall</p>

        </article>
    )
}

export default Character