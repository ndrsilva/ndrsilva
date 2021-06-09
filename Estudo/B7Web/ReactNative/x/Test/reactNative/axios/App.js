import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, View, Image, Text, StyleSheet } from 'react-native';
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
                numColumns={2}
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
        <View  style = {styles.item}>
            <View>
            <Image 
                style = {styles.image}
                source={{ uri: imageUrl }} 
            />
            </View>
            <View>
            <Text>{name}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width:100,
        height:100
    },
    item:{
        flex:1,
        padding:4,
        justifyContent:'center',
        alignItems:'center',
        marginHorizontal:5,
        
    }
})