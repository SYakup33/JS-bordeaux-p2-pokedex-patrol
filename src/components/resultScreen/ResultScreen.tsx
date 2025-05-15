import { useEffect } from "react";
import "./ResultScreen.css";
import pikaRedGif from "../../assets/images/hud/pikawalk.gif";
import pokemonWinSound from "../../assets/music/pokemonwin.mp3";

interface ResultScreenProps {
	score: number;
	nbrCorruptedTrainer: number;
	nbrLegitimateTrainer: number;
	nbrLegitimateTrainerDenied: number;
}

function ResultScreen({
	score,
	nbrCorruptedTrainer,
	nbrLegitimateTrainer,
	nbrLegitimateTrainerDenied,
}: ResultScreenProps) {
	useEffect(() => {
		const winSound = new Audio(pokemonWinSound);
		winSound.play();
	}, []);

	return (
		<div className="modal_overlay">
			<section id="resultScreen">
				<img
					className="pika_red"
					src={pikaRedGif}
					alt="ceci est un pikachu et red"
				/>
				<div>
					<h2>FIN DU NIVEAU</h2>
					<br />
					<br />

					<p>
						Nombres de dresseurs en règles autorisés : ...............{" "}
						{nbrLegitimateTrainer} /
						{nbrLegitimateTrainer + nbrLegitimateTrainerDenied}
					</p>

					<p>
						Nombres de dresseurs fraudleux autorisés : ..............{" "}
						{nbrCorruptedTrainer} /
						{10 - (nbrLegitimateTrainer + nbrLegitimateTrainerDenied)}
					</p>
					<br />
					<br />

					<hr />
					<h3>
						<br />
						Score total :
						.................................................................................{" "}
						{score} pts
					</h3>
				</div>
			</section>
		</div>
	);
}

export default ResultScreen;
