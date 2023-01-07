import axios from "axios";
import { useEffect, useState } from "react";
import { CardColorPoke, Cards } from "./styled";
import { getPokemonTipo } from "../Type/Type";
import { useLocation, useNavigate } from "react-router-dom";
import { goToDetailsPage } from "../../Router/coordinator";
import { PokeColorCards } from "../Type/Pokecolor";

export const PokemonCard = (props) => {

  const navigate = useNavigate();

  const { pokemonurl, pokemon, addToPokedex, removeFromPokedex } = props;

  const [info, setInfo] = useState({});

  const location = useLocation();

  useEffect(() => {
    axios
      .get(pokemonurl)
      .then((response) => {
        setInfo(response.data);
      })
      .catch((ERROR) => {
        console.log(ERROR);
      });
  }, []);
  console.log(info)
  const PokemonColorCards = () => {
    for (const color in info.types) {
      return info.types[color].type.name

    }
  }


  return (

    <Cards className="cardscomp" >

      <CardColorPoke color={PokeColorCards(PokemonColorCards())} >
        <p className="infosp">#0{info.id} </p>
        <p className="nomesp">{info.name} </p>
        <div className="ptypes">

          {info.types?.map((type) => {
            return <img src={getPokemonTipo(type.type.name)} />;

          })}
        </div>


        <img src={info.sprites?.other.dream_world.front_default} alt={info.name} className="pokeimg" />

        <div className="Button">
          {location.pathname === "/" ? (
            <button className="buttoncard" onClick={() => addToPokedex(info)}>Capturar!</button>

          ) : (
            <button className="buttondel" onClick={() => removeFromPokedex(info)}>
              Excluir
            </button>
          )}

          <p className="pokedetalhes" onClick={() => goToDetailsPage(navigate, info.name)}>Detalhes</p>

        </div>
      </CardColorPoke>


    </Cards>
  );
};