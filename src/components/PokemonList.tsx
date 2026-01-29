import { type Pokemon } from "../types/interfaces";
import PokemonItem from "./PokemonItem";

export default function PokemonList({
  pokemonsList,
}: {
  pokemonsList: Pokemon[];
}) {
  return (
    <div>
      Lista de Pokemons
      <h1>listado de pokemons</h1>
      <ul>
        {pokemonsList?.map((pokemon) => (
          //    <li key={pokemon.name}>
          //      <Link to={`/pokemons/${pokemon.name}`}>{pokemon.name} </Link>
          //    </li>
          <PokemonItem key={pokemon.name} pokemon={pokemon} />
        ))}
      </ul>
    </div>
  );
}
