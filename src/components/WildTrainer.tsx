import "./WildTrainer.css";
import chatBoxImg from "src/assets/images/chat_box.svg";

interface Props {
	trainer: {
		id: number;
		declaredName: string;
		cardName: string;
		declaredRegion: string;
		cardRegion: string;
		portraitImage: string;
		cardPortrait: string;
		isTrainerCorrupted: boolean;
	};
}

function WildTrainer({ trainer }: Props) {
	return (
		<div className="wildTrainer">
			<img className="Trainer" src={trainer.portraitImage} alt="Trainer" />
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
