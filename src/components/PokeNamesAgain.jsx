import React, {useEffect, useState} from 'react';
import axios from 'axios';

const PokeNamesAgain = () => {
    const [moniker, setMoniker] = useState("")

    useEffect (() => {
        console.log("Names componenent loaded.")
        axios.get("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0")
            .then(response => {setMoniker(response.data.results)})
            
    }, []);
    return (
        <>
            <>
            {moniker ? moniker.map((item, index) =>{
                return(<div key={index}>{item.name}</div>)
            }):null}
        </>
        </>
    )
}

export default PokeNamesAgain;