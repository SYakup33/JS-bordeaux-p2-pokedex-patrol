import "./Jenny.css";
import jennyFull from "/src/assets/images/hud/Jennyfull.svg";

const JennyModal = ({ onClose }: { onClose: () => void }) => {
	return (
		<div
			className="jenny-overlay"
			onClick={(e) => {
				if (e.target === e.currentTarget) onClose();
			}}
			onKeyDown={(e) => e.key === "b" && onClose()}
		>
			<div className="jenny-content">
				<div className="jenny-card">
					<div className="jenny-image">
						<img src={jennyFull} alt="Officer Jenny" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default JennyModal;
