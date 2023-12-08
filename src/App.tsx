import './App.css'
import {useEffect, useState} from "react";
import {Character} from "./characters.ts";
import CharacterGallery from "./CharacterGallery.tsx";
import {Route, Routes} from "react-router-dom";
import Welcome from "./Welcome.tsx";
import AppHeader from "./AppHeader.tsx";
import CharacterCreator from "./CharacterCreator.tsx";
import CharacterDetailCard from "./CharacterDetailCard.tsx";
import axios from "axios";


/** *
 *
 *
 */
function App() {

    const [characters, setCharacters] = useState<Character[]>([])
    const [page, setPage] = useState<number>(1)

    useEffect(
        () => fetchAllChars
        ,[page]
    )

    function incrPage(){
        if (page<42){
            setPage(page+1)
        }
    }

    function decrPage(){
        page > 1 ? setPage(page-1) : alert("You reached the min num of pages")
    }

    function fetchAllChars(){
        axios.get("https://rickandmortyapi.com/api/character/?page=${page}")
            .then((response) => setCharacters(response.data.results))
            .catch((error) => alert(error.message))
    }

    function addCharacter(newChar:Character){
        setCharacters([...characters,newChar])
    }

    return (
        <>
            <AppHeader/>
            <Routes>
                <Route path={"/"} element={<Welcome/>}/>
                <Route path={"/characters"} element={<CharacterGallery  characters={characters} decr={decrPage} incr={incrPage}/>}/>
                <Route path={"/addchar"} element={<CharacterCreator addCharacter={addCharacter} />}/>
                <Route path={"/characters/:id"} element={<CharacterDetailCard allChars={characters}/>}/>
            </Routes>
        </>
    )
}

export default App
