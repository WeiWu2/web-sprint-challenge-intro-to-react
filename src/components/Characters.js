// Write your Character component here
import React from 'react';
import Character from './Character'


export default function Characters({characters}){
   
 return (
        characters.map((character) => {
           return <Character character={character}/>
        })
 )    

}