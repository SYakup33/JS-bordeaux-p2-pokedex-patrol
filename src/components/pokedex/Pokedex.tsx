import { useState } from "react";
import { usePokemonContext } from "../../context/PokemonContext";
import PokedexModal from "./PokedexModal.tsx";
import pokedexHud from "/src/assets/images/hud/pokedexhud.svg";

const Pokedex = () => {
	const { pokemonData } = usePokemonContext();
	const [isPokedexOpen, setIsPokedexOpen] = useState(false);
	const [filter, setFilter] = useState("");

	const filteredPokemon = pokemonData.filter((pokemon) =>
		pokemon.name.toLowerCase().includes(filter.toLowerCase()),
	);

	return (
		<div>
			<img
				src={pokedexHud}
				alt="Pokedex fermé"
				onClick={() => setIsPokedexOpen(true)}
				onKeyDown={(e) => e.key === "p"}
			/>

			{isPokedexOpen && (
				<PokedexModal
					pokemonData={filteredPokemon}
					filter={filter}
					setFilter={setFilter}
					onClose={() => setIsPokedexOpen(false)}
				/>
			)}
		</div>
	);
};

export default Pokedex;
