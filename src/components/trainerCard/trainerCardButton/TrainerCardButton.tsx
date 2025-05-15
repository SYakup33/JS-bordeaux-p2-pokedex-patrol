interface ToggleType {
	onToggleTrainerCard: () => void;
}

function TrainerCardButton({ onToggleTrainerCard }: ToggleType) {
	return (
		<img
			src="src/assets/images/trainerCard/trainer_card.svg"
			alt="trainer card"
			onClick={onToggleTrainerCard}
			onKeyDown={(e) => e.key === "Enter" && onToggleTrainerCard()}
		/>
	);
}

export default TrainerCardButton;
