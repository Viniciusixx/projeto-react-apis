import { PokemonCard } from "../PokemonCard/PokemonCard";
import { Container } from "./styled";
import { BASE_URL } from "../constants/url";
import { useContext } from "react"
import { GlobalContext } from "../Context/context"
import headerimg from "../../icons/headerimg.svg";
import { useNavigate } from "react-router-dom";
import { goToHomePage } from "../../Router/coordinator";

function PokedexPage(props) {
  const context = useContext(GlobalContext)
  const { removeFromPokedex, pokedex } = context

  const navigate = useNavigate();

  return (
    <Container>
      <div className="headercompleto">
        <img src={headerimg} />

      </div>
      <div>
        <h1 className="onclickpokemon" onClick={() => goToHomePage(navigate)}>Todos Pokémons</h1>
      </div>

      <section>
        <h1><b>Meus pokemóns</b></h1>


        <div className="cards">

          {pokedex.map((pokemon) => {

            return <PokemonCard

              key={pokemon.name}
              pokemonurl={`${BASE_URL}/${pokemon.name}`}
              removeFromPokedex={removeFromPokedex}

            />

          })}
        </div>
      </section>
    </Container>
  );
}

export default PokedexPage;