import React from 'react';
import styled from "styled-components";


export default function Character({character}){



    return ( 
    <StyledCharacter>
      <h2> {character.name} </h2>
      <button>Details</button>
        </StyledCharacter>);
}
const StyledCharacter = styled.div`
    color: ${(pr) => pr.theme.primaryColor};
    background-color: lightgrey;
    border: 2px solid black;
    border-radius:0%;
    font-weight:bold;
    width: 50%;
    display:flex;
    justify-content:space-between;
    margin: 5px;
    align-items: center;
    button{
    color:${(pr) => pr.theme.secondaryColor};
    background-color:${(pr) => pr.theme.backgroundColor};
    border-radius:5%;
    height:50%;
    margin-right:5px;
    }
    h2{
        margin-left: 3px;
    }

    `