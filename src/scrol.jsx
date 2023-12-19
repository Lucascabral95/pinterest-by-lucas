import React, { useState, useEffect } from 'react';
import axios from 'axios';
import InfiniteScroll from 'react-infinite-scroll-component';

export default function Scroll() {
    const [pokemonList, setPokemonList] = useState([]);
    const [nextUrl, setNextUrl] = useState('https://pokeapi.co/api/v2/pokemon/');
    const [hasMore, setHasMore] = useState(true);

    const fetchMoreData = async () => {
        try {
            const response = await axios.get(nextUrl);
            const data = response.data;

            setPokemonList(prevList => [...prevList, ...data.results]);
            setNextUrl(data.next);
            setHasMore(!!data.next);
        } catch (error) {
            console.error('Error fetching Pokemon data:', error);
        }
    };

    useEffect(() => {
        fetchMoreData();
    }, []);

    return (
        <InfiniteScroll
            dataLength={pokemonList.length}
            next={fetchMoreData}
            hasMore={hasMore}
            loader={<h4>Loading...</h4>}
        >
            <div>
                {pokemonList.map((pokemon, index) => (
                    <div key={index}>
                        <p>{pokemon.name}</p>
                    </div>
                ))}
            </div>
        </InfiniteScroll>
    );
};
