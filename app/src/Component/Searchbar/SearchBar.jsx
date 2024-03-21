 import React from 'react';
import { useState, useEffect } from 'react';
 
 function SearchBar({ data}) {
    // add search functionality

    const [searchTerm, setSearchTerm] = useState("");
    const [searchResults, setSearchResults] = useState([]);

    const jSONData =[ {
        "count": 1302,
        "next": "https://pokeapi.co/api/v2/pokemon?offset=49&limit=30",
        "previous": "https://pokeapi.co/api/v2/pokemon?offset=0&limit=19",
        "results": [
            {
                "name": "raticate",
                "url": "https://pokeapi.co/api/v2/pokemon/20/"
            },
            {
                "name": "spearow",
                "url": "https://pokeapi.co/api/v2/pokemon/21/"
            },
            {
                "name": "fearow",
                "url": "https://pokeapi.co/api/v2/pokemon/22/"
            },
            {
                "name": "ekans",
                "url": "https://pokeapi.co/api/v2/pokemon/23/"
            },
            {
                "name": "arbok",
                "url": "https://pokeapi.co/api/v2/pokemon/24/"
            },
            {
                "name": "pikachu",
                "url": "https://pokeapi.co/api/v2/pokemon/25/"
            },
            {
                "name": "raichu",
                "url": "https://pokeapi.co/api/v2/pokemon/26/"
            },
            {
                "name": "sandshrew",
                "url": "https://pokeapi.co/api/v2/pokemon/27/"
            },
            {
                "name": "sandslash",
                "url": "https://pokeapi.co/api/v2/pokemon/28/"
            },
            {
                "name": "nidoran-f",
                "url": "https://pokeapi.co/api/v2/pokemon/29/"
            },
            {
                "name": "nidorina",
                "url": "https://pokeapi.co/api/v2/pokemon/30/"
            },
            {
                "name": "nidoqueen",
                "url": "https://pokeapi.co/api/v2/pokemon/31/"
            },
            {
                "name": "nidoran-m",
                "url": "https://pokeapi.co/api/v2/pokemon/32/"
            },
            {
                "name": "nidorino",
                "url": "https://pokeapi.co/api/v2/pokemon/33/"
            },
            {
                "name": "nidoking",
                "url": "https://pokeapi.co/api/v2/pokemon/34/"
            },
            {
                "name": "clefairy",
                "url": "https://pokeapi.co/api/v2/pokemon/35/"
            },
            {
                "name": "clefable",
                "url": "https://pokeapi.co/api/v2/pokemon/36/"
            },
            {
                "name": "vulpix",
                "url": "https://pokeapi.co/api/v2/pokemon/37/"
            },
            {
                "name": "ninetales",
                "url": "https://pokeapi.co/api/v2/pokemon/38/"
            },
            {
                "name": "jigglypuff",
                "url": "https://pokeapi.co/api/v2/pokemon/39/"
            },
            {
                "name": "wigglytuff",
                "url": "https://pokeapi.co/api/v2/pokemon/40/"
            },
            {
                "name": "zubat",
                "url": "https://pokeapi.co/api/v2/pokemon/41/"
            },
            {
                "name": "golbat",
                "url": "https://pokeapi.co/api/v2/pokemon/42/"
            },
            {
                "name": "oddish",
                "url": "https://pokeapi.co/api/v2/pokemon/43/"
            },
            {
                "name": "gloom",
                "url": "https://pokeapi.co/api/v2/pokemon/44/"
            },
            {
                "name": "vileplume",
                "url": "https://pokeapi.co/api/v2/pokemon/45/"
            },
            {
                "name": "paras",
                "url": "https://pokeapi.co/api/v2/pokemon/46/"
            },
            {
                "name": "parasect",
                "url": "https://pokeapi.co/api/v2/pokemon/47/"
            },
            {
                "name": "venonat",
                "url": "https://pokeapi.co/api/v2/pokemon/48/"
            },
            {
                "name": "venomoth",
                "url": "https://pokeapi.co/api/v2/pokemon/49/"
            }
        ]
    }
]
useEffect(() => {
    if(data && data.results) {
        // const results = jSONData[0].results.filter(pokemon =>
            const results = data.results.filter(pokemon =>
        pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResults(results);
    console.log("results", searchResults);}
}, [searchTerm]);

return (
    <div>
        <input
            value={searchTerm}
            onChange={e => setSearchTerm(e.target.value)}
            type="text" placeholder="Search..."
        />
    </div>
);
}
// test commit

export default SearchBar;
