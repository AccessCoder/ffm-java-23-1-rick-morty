import {Character} from "./characters.ts";
import {Link} from "react-router-dom";
import {FormEvent, useState} from "react";

type CharacterCardProps = {
    character: Character
}

export default function CharacterCard(props: CharacterCardProps) {

    const [comment, setComment] = useState<string>("")

    //Sind Comments vorhanden? Wenn ja, dann werden diese geladen, sonst verwenden wir eine leere Liste.
    const comments = props.character.comments ? props.character.comments : []
    function submitComment(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        props.character.comments = [...comments, comment]
    }

    return (
        <div>
            <p>
                {props.character.name}
            </p>
            <p>
                {props.character.species}
            </p>
            {/*Form zum hinzufügen eines Kommentares für den Character*/}
            <form onSubmit={submitComment}>
            <input
            type={"text"}
            value={comment}
            onChange={(event) => setComment(event.target.value)}/>
                <button>Send Comment</button>
            </form>
            {/*Link zur DetailsPage, mit variabler Angabe des Pfades, indem wir die ID des jeweiligen Chars eintragen*/}
            <button><Link to={"/characters/"+props.character.id}>Details</Link></button>
        </div>
    )
}
