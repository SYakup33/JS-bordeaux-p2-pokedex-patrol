import trainerCardImg from "../../assets/images/trainerCard/trainer_card.svg";

interface ToggleType {
	onToggleTrainerCard: () => void;
}

function TrainerCardButton({ onToggleTrainerCard }: ToggleType) {
	return (
		<img
			src={trainerCardImg}
			alt="trainer card"
			onClick={onToggleTrainerCard}
			onKeyDown={(e) => e.key === "Enter" && onToggleTrainerCard()}
			style={{ cursor: "pointer" }}
		/>
	);
}

export default TrainerCardButton;
