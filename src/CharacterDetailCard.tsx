import {Character} from "./characters.ts";
import {useParams} from "react-router-dom";
import CharacterCard from "./CharacterCard.tsx";

type CharacterDetailCardProps={
    allChars:Character[]
}
export default function CharacterDetailCard(props:CharacterDetailCardProps){

    //ID des gesuchten Char´s aus der URL lesen und abspeichern.
    //Hier als number umgewandelt, damit wir gleich den Vergleichsoperator === benutzen können
    const id = Number(useParams().id)

    //Filtern aller Chars nach dem Char mit der ID aus der URL
    const foundCharacter:Character|undefined = props.allChars.find((char) => char.id === id);
    return(
        <>
            <h3>{foundCharacter?.id}</h3>
            <h3>{foundCharacter?.name}</h3>
            <h3>{foundCharacter?.status}</h3>
            <h3>{foundCharacter?.species}</h3>
            <h3>{foundCharacter?.type}</h3>
            {foundCharacter?.comments?.map((comment)=> <h4>{comment}</h4>)}
        </>
    )
}