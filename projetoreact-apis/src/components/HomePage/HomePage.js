import { PokemonCard } from "../../components/PokemonCard/PokemonCard"
import { Div, CardPokemon } from "./styled"
import headerimg from "../../icons/headerimg.svg"
import { GlobalContext } from "../Context/context"
import { useContext } from "react"
import { goToPokedexPage } from "../../Router/coordinator"
import { useLocation, useNavigate } from "react-router-dom";

export const HomePagespoke = () => {
    const context = useContext(GlobalContext)
    const { pokelist, addToPokedex, pokedex } = context

    const location = useLocation();

    const navigate = useNavigate();

    const filteredPokelist = () =>
        pokelist.filter(
            (pokemonInList) =>
                !pokedex.find(
                    (pokemonInPokedex) => pokemonInList.name === pokemonInPokedex.name
                )
        );


    return (
        <CardPokemon  >
            <div className="header12">
                <img src={headerimg} />
                <button className="button" onClick={() => goToPokedexPage(navigate)}><h2>Pokédex</h2></button>
            </div>

            <Div >

                <h1 className='h1'>  Todos Pokémons</h1>
                {filteredPokelist().map((pokemon) => (
                    <PokemonCard key={pokemon.url}
                        pokemonurl={pokemon.url} addToPokedex={addToPokedex} />
                ))}
            </Div>
        </CardPokemon>

    )

}