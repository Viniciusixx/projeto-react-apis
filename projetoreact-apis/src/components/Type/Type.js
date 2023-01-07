import Steel from "../../icons/steel.svg";
import Water from "../../icons/water.svg";
import Dragon from "../../icons/dragon.svg";
import Electric from "../../icons/electric.svg";
import Fairy from "../../icons/fairy.svg";
import Ghost from "../../icons/ghost.svg";
import Fire from "../../icons/fire.svg";
import Ice from "../../icons/ice.svg";
import Bug from "../../icons/bug.svg";
import Fighting from "../../icons/fighting.svg";
import Normal from "../../icons/normal.svg";
import Rock from "../../icons/rock.svg";
import Grass from "../../icons/grass.svg";
import Psychic from "../../icons/psychic.svg";
import Dark from "../../icons/dark.svg";
import Ground from "../../icons/ground.svg";
import Poison from "../../icons/poison.svg";
import Flying from "../../icons/flying.svg";

export const getPokemonTipo = (type) => {
  switch (type) {
    case "flying":
      return Flying;
    case 'bug':
      return Bug;
    case "dark":
      return Dark;
    case "dragon":
      return Dragon;
    case "electric":
      return Electric;
    case "fairy":
      return Fairy;
    case "fighting":
      return Fighting;
    case "fire":
      return Fire;
    case "ghost":
      return Ghost;
    case "grass":
      return Grass;
    case "ground":
      return Ground;
    case "ice":
      return Ice;
    case "normal":
      return Normal;
    case "poison":
      return Poison;
    case "psychic":
      return Psychic;
    case "rock":
      return Rock;
    case "steel":
      return Steel;
    case "water":
      return Water;
    default:
      return Water;
  }
};
