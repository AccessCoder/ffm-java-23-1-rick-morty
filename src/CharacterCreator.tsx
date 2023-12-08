import {ChangeEvent, FormEvent, useState} from "react";
import {Character} from "./characters.ts";

type CharacterCreatorProps = {
    addCharacter:(newChar:Character) => void
}
export default function CharacterCreator(props:CharacterCreatorProps){

    const [inputId, setInputId] = useState<number>(0)
    const [inputName, setInputName] = useState<string>("")
    const [inputStatus, setInputStatus] = useState<string>("")
    const [inputSpecies, setInputSpecies] = useState<string>("")
    const [inputType, setInputType] = useState<string>("")


    function updateInputId(event:ChangeEvent<HTMLInputElement>){
        setInputId(Number(event.target.value))
    }

    function updateInputName(event:ChangeEvent<HTMLInputElement>){
        setInputName(event.target.value)
    }
    function updateInputStatus(event:ChangeEvent<HTMLInputElement>){
        setInputStatus(event.target.value)
    }
    function updateInputSpecies(event:ChangeEvent<HTMLInputElement>){
        setInputSpecies(event.target.value)
    }
    function updateInputType(event:ChangeEvent<HTMLInputElement>){
        setInputType(event.target.value)
    }

    function createNewChar(event:FormEvent<HTMLFormElement>){
        event.preventDefault()
        const newChar:Character =
            {
                id:inputId,
                name:inputName,
                status:inputStatus,
                species:inputSpecies,
                type:inputType
            }
        props.addCharacter(newChar)

        setInputSpecies("")
        setInputStatus("")
        setInputType("")
        setInputName("")
        setInputId(0)

    }

    return(
        <>
        <h3>Create your own Character!</h3>
            <form onSubmit={createNewChar}>
                <p>Please enter an ID</p>
                <input
                    type={"number"}
                    value={inputId}
                    onChange={updateInputId}/>
                <p>Please enter a Name</p>
                <input
                    type={"text"}
                    value={inputName}
                    onChange={updateInputName}/>
                <p>Please enter a Status</p>
                <input
                    type={"text"}
                    value={inputStatus}
                    onChange={updateInputStatus}/>
                <p>Please enter the Species</p>
                <input
                    type={"text"}
                    value={inputSpecies}
                    onChange={updateInputSpecies}/>
                <p>Please enter the Type</p>
                <input
                    type={"text"}
                    value={inputType}
                    onChange={updateInputType}/>
                <button>Create your Character!</button>
            </form>
        </>
    )
}