import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View, Image, Text } from 'react-native';
import axios from 'axios';

export default function App() {
    const [pokemons, setPokemons] = useState([])
    
    /*
    useEffect(() => {
        var pokemon = 'pokemon'
        fetch('https://pokeapi.co/api/v2/'+pokemon, {
            method: 'GET',
            headers:{
                'Accept': 'application/json'
            }
        })
        .then(response => response.json())
        .then(data =>{
            setPokemons(data.results)
        }, [])
    })
    */
    /////////////////
    /*
    const instance = axios.create({
        baseURL:'https://pokeapi.co/api/v2/', 
    })

   
    useEffect( ()=> {
        var pokemon = 'pokemon'
        instance.get(pokemon).then((response)=> {
            //console.log(response.data.results); 
            setPokemons(response.data.results);
        })
    },[]);
    */
    ///////////////
    
    var pokemon = 'pokemon';
    const getPokemon = async ()  => {
        
        try {
            const response = await axios.get('https://pokeapi.co/api/v2/'+pokemon);
            console.log('Certo', response);
            setPokemons(response.data.results)

        } catch (error) {
            console.log('Erro', error);
        }
    } 

    useEffect( ()=> {
        getPokemon();
    }, [pokemon]);//toda vez que essa variável for motificada, a function "getPokemon" será acionada.
    


    return (
        <SafeAreaView>
            <FlatList 
                data={pokemons}
                keyExtractor={(pokemon) => pokemon.name}
                contentContainerStyle={{flexGrow: 1 }}
                renderItem={PokemonShow}
            />
        </SafeAreaView>
    );

}

function PokemonShow(item) {
    const { name, url } = item.item

    const pokemonNumber = url.replace('https://pokeapi.co/api/v2/pokemon/', '').replace('/', '')

    const imageUrl = 'https://pokeres.bastionbot.org/images/pokemon/'+pokemonNumber+'.png'

    return (
        <View style={{flexDirection: 'row'}}>
            <Image style={{width:50, height: 50}} 
                source={{ uri: imageUrl }} 
            />
            <Text>{name}</Text>
        </View>
    )
}
