import { PokemonsResponse, SimplePokemon } from "@/app/pokemons";
import Image from "next/image";

const getPokemons = async (
  limit = 20,
  offset = 0
): Promise<SimplePokemon[]> => {
  const data: PokemonsResponse = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
  ).then((res) => res.json());

  /* This code snippet is mapping over the `results` array in the `data` object obtained from the API
  response. For each `pokemon` object in the `results` array, it is creating a new object with two
  properties: `id` and `name`. */
  const pokemons = data.results.map((pokemon) => ({
    /* The code `id: pokemon.url.split('/').at(-2)!,` is extracting the ID of each Pokemon from the URL
    provided in the API response. Here's a breakdown of what each part of this code snippet does: */
    id: pokemon.url.split("/").at(-2)!,
    name: pokemon.name,
  }));

  return pokemons;
};

export default async function PokemonsPage() {
  const pokemons = await getPokemons(151);

  return (
    <div>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {pokemons.map((pokemon) => (
          <Image
            src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${pokemon.id}.svg`}
            width={100}
            height={100}
            alt={pokemon.name}
            key={pokemon.id}
          />
        ))}
      </div>
    </div>
  );
}
