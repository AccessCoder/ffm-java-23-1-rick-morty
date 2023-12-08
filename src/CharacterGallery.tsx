import {Character} from "./characters.ts";
import CharacterCard from "./CharacterCard.tsx";

type CharacterGalleryProps = {
    characters: Character[]
    incr:()=>void
    decr:()=>void
}

export default function CharacterGallery(props: CharacterGalleryProps) {

    return (
        <div>
            <p>
                Gallery
            </p>
            <h3>Change Site</h3>
            <button onClick={() => props.decr}> Prev </button> <br/> <button onClick={() => props.incr}> Next </button>
            {props.characters.map(character => <CharacterCard
                                                                key={character.id}
                                                                character={character}/>)}
        </div>
    )
}
