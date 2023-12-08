import {Link} from "react-router-dom";

export default function Navbar(){
    return(
        <>
            <Link to={"/"}> Home </Link>
            <Link to={"/characters"}> Gallery </Link>
            <Link to={"/addchar"}> AddChar </Link>
        </>
    )
}