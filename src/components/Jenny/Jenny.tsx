import { useState } from "react";
import JennyModal from "./JennyModal";
import jennyPortrait from "/src/assets/images/hud/Jenny.svg";
import wowSound from "/src/assets/music/wow.mp3";

const Jenny = () => {
	const [isJennyOpen, setIsJennyOpen] = useState(false);

	const handleOpenJenny = () => {
		const audio = new Audio(wowSound);
		audio.play().catch((err) => {
			console.error("Erreur de lecture audio :", err);
		});

		setIsJennyOpen(true);
	};

	return (
		<div>
			<img
				src={jennyPortrait}
				alt="Officer Jenny"
				onClick={handleOpenJenny}
				onKeyDown={(e) => e.key === "p" && handleOpenJenny()}
				style={{ cursor: "pointer" }}
			/>

			{isJennyOpen && <JennyModal onClose={() => setIsJennyOpen(false)} />}
		</div>
	);
};

export default Jenny;
