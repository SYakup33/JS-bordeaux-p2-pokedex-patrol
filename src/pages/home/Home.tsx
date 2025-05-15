import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router";
import "./Home.css";
import speakerImg from "../../assets/images/home/speaker.svg";
import pokedexImg from "../../assets/images/home/pokedex.svg";
import patrolImg from "../../assets/images/home/patrol.svg";
import trainer1Img from "../../assets/images/home/trainer1.svg";
import trainer2Img from "../../assets/images/home/trainer2.svg";
import pikaGif from "../../assets/images/home/pika.gif";
import audioMp3 from "../../assets/music/home.mp3";

function Home() {
	const [isTransitioning, setIsTransitioning] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {
		if (!window.homeMusic) {
			const audio = new Audio(audioMp3);
			audio.loop = true;
			window.homeMusic = audio;
		}

		window.homeMusic?.play();

		return () => {};
	}, []);

	const startTransition = () => {
		setIsTransitioning(true);

		if (window.homeMusic) {
			const fadeOut = setInterval(() => {
				if (window.homeMusic && window.homeMusic.volume > 0.05) {
					window.homeMusic.volume -= 0.05;
				} else {
					clearInterval(fadeOut);
					if (window.homeMusic) {
						window.homeMusic.pause();
						window.homeMusic.volume = 1;
						window.homeMusic.currentTime = 0;
					}
				}
			}, 100);
		}

		setTimeout(() => {
			navigate("/game");
		}, 3000);
	};

	const handleTutoClick = () => {
		navigate("/tutorial");
	};

	return (
		<>
			<header>
				<img
					src={speakerImg}
					alt="speaker"
					className="speaker_img"
					onKeyDown={(e) => e.key === "b"}
					onClick={() => {
						if (window.homeMusic) {
							if (window.homeMusic.paused) {
								window.homeMusic.play();
							} else {
								window.homeMusic.pause();
								window.homeMusic.currentTime = 0;
							}
						}
					}}
				/>
			</header>
			<div className="home">
				<img className="img_pokedex" src={pokedexImg} alt="pokedex" />
				<img className="img_patrol" src={patrolImg} alt="patrol" />
				<img className="img_trainer1" src={trainer1Img} alt="trainer" />
				<img className="img_trainer2" src={trainer2Img} alt="trainer" />
				{isTransitioning && (
					<div className="transition_overlay">
						<img src={pikaGif} alt="Transition" className="transition_img" />
					</div>
				)}
				<Link to="#" onClick={startTransition} className="btn_home play">
					Jouer
				</Link>
				<button
					onClick={handleTutoClick}
					className="btn_home tuto"
					type="button"
				>
					Tutoriel
				</button>
			</div>
			<footer />
		</>
	);
}

export default Home;
