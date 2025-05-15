import "./WildTrainer.css";
import chatBoxImg from "../assets/images/chat_box.svg";
import trainer20imgfull from "../../assets/images/portraitImage/trainer20imgfull.svg";
import trainer2imgfull from "../../assets/images/portraitImage/trainer2imgfull.svg";

type TrainerImageKeys = "trainer20imgfull.svg" | "trainer2imgfull.svg";

interface Props {
	trainer: {
		id: number;
		declaredName: string;
		cardName: string;
		declaredRegion: string;
		cardRegion: string;
		portraitImage: TrainerImageKeys;
		cardPortrait: string;
		isTrainerCorrupted: boolean;
	};
}

function WildTrainer({ trainer }: Props) {
	const trainerImages = {
		"trainer20imgfull.svg": trainer20imgfull,
		"trainer2imgfull.svg": trainer2imgfull,
	};
	return (
		<div className="wildTrainer">
			<img src={trainerImages[trainer.portraitImage]} alt="Trainer" />
			<div className="chatBox">
				<img className="trainerImg" src={chatBoxImg} alt="chatBox" />
				<p className="textOnImage">
					{trainer.declaredName}: <br />
					Salut je viens de {trainer.declaredRegion} !
				</p>
			</div>
		</div>
	);
}

export default WildTrainer;
